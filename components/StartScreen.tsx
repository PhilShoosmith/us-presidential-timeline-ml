import React, { useState, useEffect } from 'react';
import { President, GameMode } from '../types';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { Lightbulb, RefreshCw, Volume2, VolumeX, Music } from 'lucide-react';

interface StartScreenProps {
  onStart: (mode: GameMode) => void;
  presidents: President[];
  onShowInstructions: () => void;
  onReview: () => void;
  onShowPrivacy: () => void;
  onShowTerms: () => void;
  onShowLeaderboard: () => void;
  isMuted?: boolean;
  onToggleMute?: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ 
  onStart, 
  presidents, 
  onShowInstructions, 
  onReview, 
  onShowPrivacy, 
  onShowTerms, 
  onShowLeaderboard,
  isMuted = false,
  onToggleMute
}) => {
  const { t, getPresidentTranslation } = useLanguage();
  const [dailyFact, setDailyFact] = useState<President | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (presidents.length > 0) {
      const today = new Date();
      const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
      let hash = 0;
      for (let i = 0; i < dateString.length; i++) {
          hash = ((hash << 5) - hash) + dateString.charCodeAt(i);
          hash |= 0;
      }
      const index = Math.abs(hash) % presidents.length;
      setDailyFact(presidents[index]);
    }
  }, [presidents]);

  const handleRefreshFact = () => {
    if (presidents.length <= 1) return;
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);

    let nextPresident: President;
    do {
      const randomIndex = Math.floor(Math.random() * presidents.length);
      nextPresident = presidents[randomIndex];
    } while (nextPresident.id === dailyFact?.id);
    setDailyFact(nextPresident);
  };
  const allPortraits = presidents
    .map(president => ({ id: president.id, name: president.name, url: president.imageUrl }))
    .filter(p => p.url)
    .slice(0, 12);

  const animationDuration = Math.max(20, allPortraits.length * 4);

  return (
    <div className="w-full h-full min-h-[100dvh] max-h-[100dvh] flex flex-col items-center justify-between relative overflow-hidden py-2 sm:py-3 md:py-4 px-3 sm:px-4 select-none">
      <div className="absolute inset-0 flex items-center opacity-15 sm:opacity-20 scale-105 blur-sm pointer-events-none z-0 overflow-hidden">
        <div 
          className="flex-shrink-0 flex items-center animate-scroll-continuous"
          style={{ animationDuration: `${animationDuration}s`, willChange: 'transform' }}
        >
          {[...allPortraits, ...allPortraits].map((portrait, index) => (
            <div key={`${portrait.id}-${index}`} className="w-36 h-48 sm:w-48 sm:h-64 md:w-64 md:h-80 flex-shrink-0 mx-2">
              <img 
                src={portrait.url} 
                alt={portrait.name} 
                className="w-full h-full object-cover rounded-lg shadow-lg" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Top Controls Bar */}
      <div className="w-full max-w-2xl flex items-center justify-between z-30 shrink-0 mb-1 sm:mb-2">
        <div>
          {onToggleMute && (
            <button
              onClick={onToggleMute}
              className="flex items-center gap-1.5 bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700/80 rounded-lg px-2 sm:px-2.5 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 hover:bg-slate-700 transition-all shadow-md active:scale-95"
              title={isMuted ? "Unmute Music & Sound" : "Mute Music & Sound"}
              aria-label={isMuted ? "Unmute Music & Sound" : "Mute Music & Sound"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-[11px] font-medium text-slate-400">Music Off</span>
                </>
              ) : (
                <>
                  <Music className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span className="text-[11px] font-medium text-amber-300 hidden sm:inline">Land of Hope &amp; Glory</span>
                  <Volume2 className="w-3 h-3 text-amber-400/80" />
                </>
              )}
            </button>
          )}
        </div>
        <div className="relative">
          <LanguageSelector />
        </div>
      </div>
      
      {/* Center Main Content Area */}
      <div className="w-full flex-grow flex flex-col items-center justify-center z-10 my-auto max-w-xl">
        <div className="relative text-center p-3.5 sm:p-5 md:p-6 bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700 w-full animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 leading-tight mb-1">
            {t('start.title')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-4 font-light leading-snug">
            {t('start.subtitle')}
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full items-stretch">
            <div className="flex flex-col gap-1.5 sm:gap-2 h-full">
              <h2 className="text-xs sm:text-sm md:text-base font-bold text-yellow-400 uppercase tracking-wider shrink-0">{t('start.learn')}</h2>
              <div className="flex flex-col flex-grow justify-between gap-1.5 sm:gap-2">
                <button 
                  onClick={onShowInstructions} 
                  className="w-full flex-1 flex items-center justify-center py-2.5 sm:py-3 px-2 bg-yellow-400 text-black font-bold text-xs sm:text-sm rounded-lg hover:bg-yellow-500 transition-all active:scale-[0.98] shadow"
                >
                  {t('start.howToPlay')}
                </button>
                <button 
                  onClick={onReview} 
                  className="w-full flex-1 flex items-center justify-center py-2.5 sm:py-3 px-2 bg-yellow-400 text-black font-bold text-xs sm:text-sm rounded-lg hover:bg-yellow-500 transition-all active:scale-[0.98] shadow"
                >
                  {t('start.reviewMode')}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2 h-full">
              <h2 className="text-xs sm:text-sm md:text-base font-bold text-blue-400 uppercase tracking-wider shrink-0">{t('start.play')}</h2>
              <button onClick={() => onStart('fact')} className="w-full flex-1 flex items-center justify-center py-1.5 sm:py-2.5 px-2 bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-all active:scale-[0.98] shadow">{t('start.guessPresident')}</button>
              <button onClick={() => onStart('year')} className="w-full flex-1 flex items-center justify-center py-1.5 sm:py-2.5 px-2 bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-all active:scale-[0.98] shadow">{t('start.guessYear')}</button>
              <button onClick={() => onStart('president')} className="w-full flex-1 flex items-center justify-center py-1.5 sm:py-2.5 px-2 bg-blue-600 text-white font-bold text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-all active:scale-[0.98] shadow">{t('start.guessSuccessor')}</button>
            </div>
          </div>
          
          <div className="mt-3 sm:mt-4 pt-2.5 border-t border-slate-700/60 flex justify-center items-center text-slate-300 font-bold text-xs sm:text-sm">
            <span className="mr-2">{t('start.hallOfFame')} -&gt;</span>
            <button 
              onClick={onShowLeaderboard}
              className="text-2xl sm:text-3xl hover:scale-110 transition-transform p-1 bg-slate-900/60 rounded-full shadow-lg border border-slate-700/60 active:scale-95"
              title={t('start.hallOfFame')}
            >
              🥇
            </button>
          </div>
        </div>

        {dailyFact && (
          <div className="mt-2 sm:mt-3 w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-slate-800/90 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-slate-700/80 shadow-xl flex items-center gap-2 sm:gap-3">
              <div className="bg-amber-500/20 p-1.5 sm:p-2 rounded-full shrink-0">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              </div>
              <div className="text-left flex-grow min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <h3 className="text-[11px] sm:text-xs font-bold text-amber-400 tracking-wide uppercase truncate">
                    {t('start.dailyHistoricalFact')}: {dailyFact.name}
                  </h3>
                  <button
                    onClick={handleRefreshFact}
                    className="shrink-0 flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-amber-300 text-[10px] sm:text-xs font-medium border border-slate-600/60 transition-all active:scale-95"
                    title={t('start.refreshFact')}
                    aria-label={t('start.refreshFact')}
                  >
                    <RefreshCw className={`w-3 h-3 transition-transform duration-500 ${isRefreshing ? 'rotate-180 text-amber-400' : ''}`} />
                    <span className="hidden sm:inline">{t('start.refreshFact')}</span>
                  </button>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-snug line-clamp-2">
                  {getPresidentTranslation(dailyFact.id, 'context', dailyFact.context)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-1 sm:mt-2 shrink-0 flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-1 text-[11px] sm:text-xs text-slate-400 z-20">
          <button onClick={onShowPrivacy} className="hover:text-blue-400 transition-colors underline underline-offset-2">{t('start.privacyPolicy')}</button>
          <button onClick={onShowTerms} className="hover:text-blue-400 transition-colors underline underline-offset-2">{t('start.termsOfService')}</button>
          <a href="mailto:historicaltimelines4@gmail.com?subject=US Presidents Timeline&body=BODY" className="hover:text-blue-400 transition-colors underline underline-offset-2">{t('start.feedback')}</a>
      </div>
    </div>
  );
};

export default StartScreen;