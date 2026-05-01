import React, { useState, useEffect } from 'react';
import { GameMode } from '../types';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

interface EndScreenProps {
  score: number;
  totalTimeLeft: number;
  gameMode: GameMode;
  onRestart: () => void;
  onSaveScore: (name: string) => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, totalTimeLeft, gameMode, onRestart, onSaveScore }) => {
  const { t } = useLanguage();
  const [displayScore, setDisplayScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [isHighScore, setIsHighScore] = useState(false);
  const [checkingScore, setCheckingScore] = useState(true);

  useEffect(() => {
    const checkHighScore = async () => {
      try {
        const { data, error } = await supabase
          .from('leaderboard')
          .select('score, total_time_left')
          .eq('game_mode', gameMode)
          .order('score', { ascending: false })
          .order('total_time_left', { ascending: false })
          .limit(10);

        if (error) throw error;

        if (data.length < 10) {
          setIsHighScore(true);
        } else {
          const threshold = data[9];
          if (score > threshold.score || (score === threshold.score && totalTimeLeft > threshold.total_time_left)) {
            setIsHighScore(true);
          }
        }
      } catch (err) {
        console.error('Error checking high score:', err);
        // Default to showing save if check fails
        setIsHighScore(true);
      } finally {
        setCheckingScore(false);
      }
    };

    checkHighScore();
  }, [score, totalTimeLeft, gameMode]);

  useEffect(() => {
    if (score === 0) return;
    let currentScore = 0;
    const timer = setInterval(() => {
      currentScore += 1;
      if (currentScore > score) {
        clearInterval(timer);
        setDisplayScore(score);
      } else {
        setDisplayScore(currentScore);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [score]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) onSaveScore(playerName.trim());
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      <div className="relative text-center p-8 bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-700 max-w-lg mx-auto z-10 animate-fade-in-up">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-2">
          {t('end.gameOver')}
        </h2>
        
        <div className="w-full bg-slate-900/50 rounded-lg p-4 my-6 flex justify-around text-center">
          <div className="px-4">
              <p className="text-5xl font-bold text-green-400">{displayScore}</p>
              <p className="text-slate-400 mt-1 text-sm uppercase tracking-wider">{t('scoreboard.score').split(':')[0]}</p>
          </div>
          <div className="border-l border-slate-700"></div>
          <div className="px-4">
              <p className="text-5xl font-bold text-cyan-400">{totalTimeLeft}s</p>
              <p className="text-slate-400 mt-1 text-sm uppercase tracking-wider">{t('leaderboard.time')}</p>
          </div>
        </div>

        {checkingScore ? (
          <p className="text-slate-400 italic mb-6">{t('leaderboard.loading')}</p>
        ) : isHighScore ? (
          <form onSubmit={handleSubmit} className="mb-6 animate-fade-in">
            <p className="text-amber-400 font-black text-xl mb-4 uppercase tracking-widest">{t('end.globalTop10')}</p>
            <div className="flex gap-2">
              <input
                autoFocus
                type="text"
                placeholder={t('end.enterName')}
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="flex-grow bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 outline-none"
                maxLength={20}
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-white font-black px-6 py-3 rounded-xl transition-all"
              >
                {t('game.submit')}
              </button>
            </div>
          </form>
        ) : (
          <div className="mb-6">
            <p className="text-slate-400 mb-4">{t('end.greatEffort')}</p>
            <button
              onClick={onRestart}
              className="w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg"
            >
              {t('end.playAgain')}
            </button>
          </div>
        )}
        
        <button onClick={onRestart} className="text-slate-500 hover:text-slate-300 text-sm font-bold uppercase tracking-widest transition-colors">
          {t('leaderboard.back')}
        </button>
      </div>
    </div>
  );
};

export default EndScreen;