import React, { useState, useEffect, useRef } from 'react';
import { LeaderboardEntry, GameMode } from '../types';
import { db } from '../lib/firebase';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { useLanguage } from '../contexts/LanguageContext';
import Confetti from './Confetti';

interface LeaderboardProps {
  onBack: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<GameMode>('fact');
  const [timeFilter, setTimeFilter] = useState<'last_week' | 'last_month' | 'all_time'>('all_time');
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
        if (!db) { setLoading(false); return; }
        
        let data: any[] = [];
        
        if (timeFilter === 'all_time') {
          const q = query(
            collection(db, 'leaderboard'),
            where('game_mode', '==', activeTab),
            orderBy('score', 'desc'),
            orderBy('total_time_left', 'desc'),
            limit(10)
          );
          const snapshot = await getDocs(q);
          data = snapshot.docs.map(doc => doc.data());
        } else {
          // Fetch all for the active tab to filter client-side by date to avoid index requirements
          const q = query(
            collection(db, 'leaderboard'),
            where('game_mode', '==', activeTab)
          );
          const snapshot = await getDocs(q);
          let allData = snapshot.docs.map(doc => doc.data());
          
          const now = new Date();
          let cutoffDate = new Date();
          if (timeFilter === 'last_week') {
            cutoffDate.setDate(now.getDate() - 7);
          } else if (timeFilter === 'last_month') {
            cutoffDate.setMonth(now.getMonth() - 1);
          }
          
          data = allData.filter(row => {
            if (!row.created_at) return false;
            const dateObj = row.created_at.toDate ? row.created_at.toDate() : new Date(row.created_at);
            return dateObj >= cutoffDate;
          });
          
          // Client-side sort: score DESC, total_time_left DESC
          data.sort((a, b) => {
            if (b.score !== a.score) {
              return (b.score || 0) - (a.score || 0);
            }
            return (b.total_time_left || 0) - (a.total_time_left || 0);
          });
          
          // Limit to 10
          data = data.slice(0, 10);
        }
        
        const formattedData: LeaderboardEntry[] = data.map(row => {
          let dateObj = new Date();
          if (row.created_at) {
             dateObj = row.created_at.toDate ? row.created_at.toDate() : new Date(row.created_at);
          }
          return {
            name: row.name,
            score: row.score,
            totalTimeLeft: row.total_time_left,
            date: dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
          };
        });

        setScores(formattedData);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [activeTab, timeFilter]);

  const getTabTitle = (mode: GameMode) => {
    if (mode === 'fact') return t('start.guessPresident');
    if (mode === 'year') return t('start.guessYear');
    return t('start.guessSuccessor');
  };

  const getTimeTabTitle = (filter: 'last_week' | 'last_month' | 'all_time') => {
    if (filter === 'last_week') return t('leaderboard.lastWeek') || 'Last Week';
    if (filter === 'last_month') return t('leaderboard.lastMonth') || 'Last Month';
    return t('leaderboard.allTime') || 'All-Time Greats';
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <Confetti />
      <div className="w-full max-w-4xl bg-slate-800/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-slate-700 p-8 flex flex-col animate-scale-in">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 text-center md:text-left md:flex-1 whitespace-nowrap">
            🏆 {t('leaderboard.title')}
          </h1>

          <nav className="flex flex-wrap justify-center gap-1 bg-slate-900/40 p-1 rounded-xl border border-slate-700/50 flex-shrink-0">
            {(['last_week', 'last_month', 'all_time'] as const).map(filter => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`py-1 px-2 sm:px-3 rounded-lg font-bold text-[9px] sm:text-[10px] uppercase tracking-wider transition-all ${
                  timeFilter === filter 
                    ? 'bg-slate-700 text-amber-400 shadow-sm' 
                    : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-300'
                }`}
              >
                {getTimeTabTitle(filter)}
              </button>
            ))}
          </nav>

          <div className="flex gap-2 sm:gap-4 md:flex-1 justify-center md:justify-end">
            <button 
              onClick={toggleMute} 
              className="w-10 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-xl transition-all text-xl shrink-0"
              title={isMuted ? "Unmute music" : "Mute music"}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
            <button onClick={onBack} className="px-4 sm:px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold transition-all text-sm sm:text-base whitespace-nowrap">
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