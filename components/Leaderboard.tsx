import React, { useState, useEffect, useRef } from 'react';
import { LeaderboardEntry, GameMode } from '../types';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';
import Confetti from './Confetti';

interface LeaderboardProps {
  onBack: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<GameMode>('fact');
  const [scores, setScores] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('https://upload.wikimedia.org/wikipedia/commons/6/65/Star_Spangled_Banner_instrumental.ogg');
    audio.loop = true;
    audio.volume = 0.2; // Play softly
    audio.muted = isMuted;
    audioRef.current = audio;
    
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Audio playback failed:', err);
        }
      });
    }

    return () => {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const fetchScores = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('leaderboard')
          .select('name, score, total_time_left, created_at')
          .eq('game_mode', activeTab)
          .order('score', { ascending: false })
          .order('total_time_left', { ascending: false })
          .limit(10);

        if (error) throw error;
        
        const formattedData: LeaderboardEntry[] = (data || []).map(row => ({
          name: row.name,
          score: row.score,
          totalTimeLeft: row.total_time_left,
          date: new Date(row.created_at).toLocaleDateString()
        }));

        setScores(formattedData);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [activeTab]);

  const getTabTitle = (mode: GameMode) => {
    if (mode === 'fact') return t('start.guessPresident');
    if (mode === 'year') return t('start.guessYear');
    return t('start.guessSuccessor');
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <Confetti />
      <div className="w-full max-w-4xl bg-slate-800/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-slate-700 p-8 flex flex-col animate-scale-in">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 text-center sm:text-left">
            {t('leaderboard.title')} 🥇
          </h1>
          <div className="flex gap-2 sm:gap-4">
            <button 
              onClick={toggleMute} 
              className="w-10 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-xl transition-all text-xl"
              title={isMuted ? "Unmute music" : "Mute music"}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
            <button onClick={onBack} className="px-4 sm:px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold transition-all text-sm sm:text-base">
              {t('leaderboard.back')}
            </button>
          </div>
        </header>

        <nav className="flex flex-col sm:flex-row gap-2 mb-8 bg-slate-900/50 p-2 rounded-2xl border border-slate-700">
          {(['fact', 'year', 'president'] as GameMode[]).map(mode => (
            <button
              key={mode}
              onClick={() => setActiveTab(mode)}
              className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wide sm:tracking-widest transition-all ${
                activeTab === mode 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {getTabTitle(mode)}
            </button>
          ))}
        </nav>

        <div className="flex-grow overflow-x-auto bg-slate-900/40 rounded-3xl border border-slate-700/50">
          <table className="w-full text-left border-collapse min-w-[400px] sm:min-w-full">
            <thead>
              <tr className="bg-slate-800/50 text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] font-black">
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">{t('leaderboard.rank')}</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">{t('leaderboard.name')}</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">{t('scoreboard.score').split(':')[0]}</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">{t('leaderboard.time')}</th>
                <th className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">{t('leaderboard.date')}</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm md:text-base">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-2 sm:px-4 md:px-6 py-12 text-center text-slate-500 animate-pulse">
                    {t('leaderboard.loading')}
                  </td>
                </tr>
              ) : scores.length > 0 ? (
                scores.map((entry, idx) => (
                  <tr key={idx} className={`border-b border-slate-700/50 transition-colors hover:bg-slate-700/20 ${idx < 3 ? 'text-white font-bold' : 'text-slate-300'}`}>
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">
                      {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}
                    </td>
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4">{entry.name}</td>
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-green-400">{entry.score} / 10</td>
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-cyan-400">{entry.totalTimeLeft}s</td>
                    <td className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-slate-500 text-[10px] sm:text-xs">{entry.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-2 sm:px-4 md:px-6 py-12 text-center text-slate-500 font-medium italic">
                    {t('leaderboard.noScores')}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;