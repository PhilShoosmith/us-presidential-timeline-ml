// Audio service using Web Audio API for synthesized game sounds
// Eliminates external asset loading delays, network failures, or broken URLs.

class SoundService {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = false;

  // Tension drone nodes for the 30-second countdown
  private tensionOsc1: OscillatorNode | null = null;
  private tensionOsc2: OscillatorNode | null = null;
  private tensionFilter: BiquadFilterNode | null = null;
  private tensionGain: GainNode | null = null;
  private isTimerSoundRunning: boolean = false;

  // Opening screen background music ("Land of Hope and Glory")
  private openingAudio: HTMLAudioElement | null = null;
  private isOpeningMusicActive: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('game_sound_muted');
      if (saved !== null) {
        this.isMuted = saved === 'true';
      }

      // Auto-unlock audio context & trigger opening music if active on first user interaction
      const unlock = () => {
        this.resume();
        if (this.isOpeningMusicActive && this.openingAudio && this.openingAudio.paused && !this.isMuted) {
          this.openingAudio.play().catch(() => {});
        }
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('keydown', unlock);
      };
      window.addEventListener('pointerdown', unlock, { passive: true });
      window.addEventListener('keydown', unlock, { passive: true });
    }
  }

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return null;
      this.ctx = new AudioCtxClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public resume() {
    const ctx = this.initContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    try {
      localStorage.setItem('game_sound_muted', String(muted));
    } catch {}
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 1, this.ctx.currentTime);
    }
    if (this.openingAudio) {
      this.openingAudio.muted = muted;
      this.openingAudio.volume = muted ? 0 : 0.35;
      if (!muted && this.isOpeningMusicActive && this.openingAudio.paused) {
        this.openingAudio.play().catch(() => {});
      }
    }
    if (muted) {
      this.stopTimerSound();
    }
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  /**
   * Plays the background music automatically on the opening screen.
   * If browser autoplay restriction prevents immediate playback,
   * listeners on user gestures ensure playback starts instantly upon first click/touch.
   */
  public playOpeningMusic() {
    this.isOpeningMusicActive = true;
    if (typeof window === 'undefined') return;

    if (!this.openingAudio) {
      this.openingAudio = new Audio('/audio/land-of-hope-and-glory.mp3');
      this.openingAudio.loop = true;
      this.openingAudio.preload = 'auto';
    }

    this.openingAudio.muted = this.isMuted;
    this.openingAudio.volume = this.isMuted ? 0 : 0.35;

    const playPromise = this.openingAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback without interaction; attach gesture handlers
        const startOnGesture = () => {
          if (this.isOpeningMusicActive && this.openingAudio) {
            this.openingAudio.play().catch(() => {});
          }
          window.removeEventListener('pointerdown', startOnGesture);
          window.removeEventListener('keydown', startOnGesture);
          window.removeEventListener('click', startOnGesture);
          window.removeEventListener('touchstart', startOnGesture);
        };
        window.addEventListener('pointerdown', startOnGesture, { once: true, passive: true });
        window.addEventListener('keydown', startOnGesture, { once: true, passive: true });
        window.addEventListener('click', startOnGesture, { once: true, passive: true });
        window.addEventListener('touchstart', startOnGesture, { once: true, passive: true });
      });
    }
  }

  /**
   * Stops and resets opening music playback (when game begins or leaving start screen).
   */
  public stopOpeningMusic() {
    this.isOpeningMusicActive = false;
    if (this.openingAudio) {
      this.openingAudio.pause();
      this.openingAudio.currentTime = 0;
    }
  }

  /**
   * Pauses opening music playback without resetting position (e.g. while tutorial modal is open).
   */
  public pauseOpeningMusic() {
    this.isOpeningMusicActive = false;
    if (this.openingAudio) {
      this.openingAudio.pause();
    }
  }

  /**
   * Starts or updates the tension soundbed that eventuates the timer progressing to zero.
   * As secondsLeft goes from 30 down to 0, pitch, filter cutoff, and rhythm intensify.
   */
  public updateTimerSound(secondsLeft: number) {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    // Start background tension drone if not already active
    if (!this.isTimerSoundRunning) {
      this.startTensionDrone(secondsLeft);
    } else {
      this.modulateTensionDrone(secondsLeft);
    }

    // Play per-second rhythmic pulse / tick / urgent ping
    this.playTimerTick(secondsLeft);
  }

  private startTensionDrone(secondsLeft: number) {
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;

    try {
      this.stopTensionDrone();

      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'triangle';

      // Base tension frequencies (low subtle drone: ~55Hz A1, ~110Hz A2)
      osc1.frequency.setValueAtTime(55, now);
      osc2.frequency.setValueAtTime(110.5, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(160, now);
      filter.Q.setValueAtTime(3, now);

      // Low volume suspense bed
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.08, now + 0.3);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc1.start(now);
      osc2.start(now);

      this.tensionOsc1 = osc1;
      this.tensionOsc2 = osc2;
      this.tensionFilter = filter;
      this.tensionGain = gain;
      this.isTimerSoundRunning = true;

      this.modulateTensionDrone(secondsLeft);
    } catch (e) {
      console.warn('Failed to start tension drone:', e);
    }
  }

  private modulateTensionDrone(secondsLeft: number) {
    const ctx = this.ctx;
    if (!ctx || !this.tensionFilter || !this.tensionOsc1 || !this.tensionOsc2 || !this.tensionGain) return;

    const now = ctx.currentTime;
    // Progress factor: 0 at 30s remaining, 1 at 0s remaining
    const progress = Math.max(0, Math.min(1, (30 - secondsLeft) / 30));

    // Pitch rises smoothly as time runs out (from 55Hz up to 90Hz)
    const baseFreq = 55 + progress * 35;
    this.tensionOsc1.frequency.setTargetAtTime(baseFreq, now, 0.4);
    this.tensionOsc2.frequency.setTargetAtTime(baseFreq * 2 + 0.5, now, 0.4);

    // Lowpass filter opens up as time runs out (from 160Hz up to 480Hz) to create building tension
    const cutoff = 160 + progress * 320;
    this.tensionFilter.frequency.setTargetAtTime(cutoff, now, 0.4);

    // Drone volume slightly swells as time gets critical
    const targetVolume = secondsLeft <= 7 ? 0.12 : (secondsLeft <= 15 ? 0.09 : 0.06);
    this.tensionGain.gain.setTargetAtTime(targetVolume, now, 0.3);
  }

  private playTimerTick(secondsLeft: number) {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;

    if (secondsLeft <= 0) {
      // Time up dramatic buzz / thud
      this.playTimeUpSound();
      return;
    }

    if (secondsLeft <= 5) {
      // Critical warning: high-urgency countdown beeps rising in pitch
      const noteFreqs = [1046.5, 987.77, 880, 783.99, 659.25, 587.33]; // C6 down to D5
      const freq = noteFreqs[secondsLeft] || 880;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.2);

      // Add a subtle accent click
      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      clickOsc.type = 'triangle';
      clickOsc.frequency.setValueAtTime(freq * 1.5, now);
      clickGain.gain.setValueAtTime(0.08, now);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      clickOsc.connect(clickGain);
      clickGain.connect(this.masterGain);
      clickOsc.start(now);
      clickOsc.stop(now + 0.06);

    } else if (secondsLeft <= 10) {
      // Moderate urgency: double-tick rhythm with subtle harmonic ping
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.13);

      // Second syncopated micro-tick 0.35s later
      setTimeout(() => {
        if (!this.isTimerSoundRunning || this.isMuted) return;
        const c = this.ctx;
        if (!c || !this.masterGain) return;
        const t = c.currentTime;
        const osc2 = c.createOscillator();
        const gain2 = c.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(650, t);
        gain2.gain.setValueAtTime(0.06, t);
        gain2.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
        osc2.connect(gain2);
        gain2.connect(this.masterGain);
        osc2.start(t);
        osc2.stop(t + 0.09);
      }, 350);

    } else {
      // Normal clock tick & subtle heartbeat thump (seconds 30 down to 11)
      // High crisp mechanical tick
      const oscTick = ctx.createOscillator();
      const gainTick = ctx.createGain();
      oscTick.type = 'triangle';
      oscTick.frequency.setValueAtTime(1200, now);
      oscTick.frequency.exponentialRampToValueAtTime(200, now + 0.04);

      gainTick.gain.setValueAtTime(0.08, now);
      gainTick.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      oscTick.connect(gainTick);
      gainTick.connect(this.masterGain);
      oscTick.start(now);
      oscTick.stop(now + 0.05);

      // Low soft heartbeat bass thump
      const oscBass = ctx.createOscillator();
      const gainBass = ctx.createGain();
      oscBass.type = 'sine';
      oscBass.frequency.setValueAtTime(80, now);
      oscBass.frequency.exponentialRampToValueAtTime(45, now + 0.12);

      gainBass.gain.setValueAtTime(0.14, now);
      gainBass.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      oscBass.connect(gainBass);
      gainBass.connect(this.masterGain);
      oscBass.start(now);
      oscBass.stop(now + 0.13);
    }
  }

  private playTimeUpSound() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.4);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.46);
  }

  private stopTensionDrone() {
    if (this.tensionGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.tensionGain.gain.setValueAtTime(this.tensionGain.gain.value, now);
        this.tensionGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
        setTimeout(() => {
          try {
            this.tensionOsc1?.stop();
            this.tensionOsc2?.stop();
            this.tensionOsc1?.disconnect();
            this.tensionOsc2?.disconnect();
            this.tensionFilter?.disconnect();
            this.tensionGain?.disconnect();
          } catch {}
          this.tensionOsc1 = null;
          this.tensionOsc2 = null;
          this.tensionFilter = null;
          this.tensionGain = null;
        }, 80);
      } catch {}
    }
    this.isTimerSoundRunning = false;
  }

  /**
   * Immediately stops the timer sound (called when round ends, user guesses, or leaves play mode).
   */
  public stopTimerSound() {
    this.stopTensionDrone();
  }

  /**
   * Positive sound when answer is correct:
   * A bright, celebratory harmonic arpeggio (C5 - E5 - G5 - C6) with cheerful chime bell decay.
   */
  public playCorrectSound() {
    this.stopTimerSound();
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;
    const notes = [
      { freq: 523.25, time: 0.00, dur: 0.35, gain: 0.16 }, // C5
      { freq: 659.25, time: 0.08, dur: 0.35, gain: 0.18 }, // E5
      { freq: 783.99, time: 0.16, dur: 0.40, gain: 0.20 }, // G5
      { freq: 1046.50, time: 0.24, dur: 0.55, gain: 0.25 }  // C6
    ];

    notes.forEach(({ freq, time, dur, gain: noteGain }) => {
      const startTime = now + time;
      // Fundamental sine
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.linearRampToValueAtTime(noteGain, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + dur);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(startTime);
      osc.stop(startTime + dur + 0.05);

      // Overtone sparkle (triangle 2x freq)
      const sparkleOsc = ctx.createOscillator();
      const sparkleGain = ctx.createGain();
      sparkleOsc.type = 'triangle';
      sparkleOsc.frequency.setValueAtTime(freq * 2, startTime);

      sparkleGain.gain.setValueAtTime(0.0001, startTime);
      sparkleGain.gain.linearRampToValueAtTime(noteGain * 0.4, startTime + 0.015);
      sparkleGain.gain.exponentialRampToValueAtTime(0.0001, startTime + dur * 0.6);

      sparkleOsc.connect(sparkleGain);
      sparkleGain.connect(this.masterGain!);

      sparkleOsc.start(startTime);
      sparkleOsc.stop(startTime + dur * 0.6 + 0.02);
    });
  }

  /**
   * Negative sound when answer is incorrect:
   * A game-show downward buzz / thud (Eb3 to Bb2) indicating wrong answer.
   */
  public playIncorrectSound() {
    this.stopTimerSound();
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;

    // Tone 1: Eb3 (~155.56 Hz) slightly buzzy
    const osc1 = ctx.createOscillator();
    const filter1 = ctx.createBiquadFilter();
    const gain1 = ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(155.56, now);

    filter1.type = 'lowpass';
    filter1.frequency.setValueAtTime(450, now);

    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.linearRampToValueAtTime(0.18, now + 0.02);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(this.masterGain);

    osc1.start(now);
    osc1.stop(now + 0.18);

    // Tone 2: Lower descending tone Bb2 (~116.54 Hz)
    const t2 = now + 0.14;
    const osc2 = ctx.createOscillator();
    const filter2 = ctx.createBiquadFilter();
    const gain2 = ctx.createGain();

    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(116.54, t2);
    osc2.frequency.exponentialRampToValueAtTime(90, t2 + 0.35);

    filter2.type = 'lowpass';
    filter2.frequency.setValueAtTime(350, t2);

    gain2.gain.setValueAtTime(0.001, t2);
    gain2.gain.linearRampToValueAtTime(0.22, t2 + 0.02);
    gain2.gain.exponentialRampToValueAtTime(0.0001, t2 + 0.38);

    osc2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(this.masterGain);

    osc2.start(t2);
    osc2.stop(t2 + 0.4);
  }
}

export const soundService = new SoundService();
