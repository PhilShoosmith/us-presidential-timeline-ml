import React from 'react';
import { ROUND_DURATION_SECONDS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Volume2, VolumeX } from 'lucide-react';

interface ScoreboardProps {
  score: number;
  incorrect: number;
  round: number;
  totalRounds: number;
  timeLeft: number;
  isAdmin: boolean;
  isMuted?: boolean;
  onToggleMute?: () => void;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, incorrect, round, totalRounds, timeLeft, isAdmin, isMuted, onToggleMute }) => {
  const { t } = useLanguage();
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  // Calculate strokeDashoffset:
  // When timeLeft == ROUND_DURATION_SECONDS, offset = 0 (full circle)
  // When timeLeft == 0, offset = circumference (empty circle)
  const strokeDashoffset = circumference - ((timeLeft / ROUND_DURATION_SECONDS) * circumference);

  let strokeColor = 'stroke-cyan-400';
  let textColor = 'text-white';
  
  if (timeLeft <= 10) {
    strokeColor = 'stroke-yellow-400';
  }
  if (timeLeft <= 5) {
    strokeColor = 'stroke-red-500';
  }
  if (timeLeft <= 5) {
    textColor = 'text-red-500 animate-pulse';
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md px-4 py-2 z-50 border-b border-slate-700 shadow-md h-16 sm:h-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center h-full">
        
        {/* Left: Score */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
             <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">{t('scoreboard.score').split(':')[0]}</span>
             <span className="text-green-400 font-bold text-xl sm:text-2xl leading-none">{score}</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">{t('scoreboard.incorrect').split(':')[0]}</span>
             <span className="text-red-400 font-bold text-xl sm:text-2xl leading-none">{incorrect}</span>
          </div>
        </div>

        {/* Center: Timer */}
        <div className="flex justify-center">
            {isAdmin ? (
               <span className="text-3xl font-bold text-cyan-400">∞</span>
            ) : (
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                     <svg className="w-full h-full transform -rotate-90 drop-shadow-lg" viewBox="0 0 60 60">
                        {/* Track */}
                        <circle
                            className="text-slate-700/50 stroke-current"
                            strokeWidth="4"
                            fill="transparent"
                            r={radius}
                            cx="30"
                            cy="30"
                        />
                        {/* Progress */}
                        <circle
                            className={`${strokeColor} transition-all duration-1000 ease-linear stroke-current`}
                            strokeWidth="4"
                            strokeLinecap="round"
                            fill="transparent"
                            r={radius}
                            cx="30"
                            cy="30"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                        />
                    </svg>
                    <span className={`absolute text-lg sm:text-xl font-bold ${textColor}`}>
                        {timeLeft}
                    </span>
                </div>
            )}
        </div>

        {/* Right: Round & Audio Toggle */}
        <div className="flex justify-end items-center gap-3 sm:gap-4">
             <div className="flex flex-col items-end">
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">{t('scoreboard.round').split(' ')[0]}</span>
                <div className="text-white font-bold text-xl sm:text-2xl leading-none">
                    {round} <span className="text-slate-500 text-base sm:text-lg">/ {totalRounds}</span>
                </div>
            </div>
            {onToggleMute && (
              <button
                onClick={onToggleMute}
                className="p-1.5 sm:p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
                aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />}
              </button>
            )}
        </div>

      </div>
    </div>
  );
};

export default Scoreboard;