import React, { useState, useEffect } from 'react';
import { President, GameMode } from '../types';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { Lightbulb, RefreshCw } from 'lucide-react';

interface StartScreenProps {
  onStart: (mode: GameMode) => void;
  presidents: President[];
  onShowInstructions: () => void;
  onReview: () => void;
  onShowPrivacy: () => void;
  onShowTerms: () => void;
  onShowLeaderboard: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, presidents, onShowInstructions, onReview, onShowPrivacy, onShowTerms, onShowLeaderboard }) => {
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
    .filter(p => p.url);

  const animationDuration = allPortraits.length * 2;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden overflow-y-auto py-12 px-4">
      <div className="absolute inset-0 flex items-center opacity-20 scale-110 blur-sm pointer-events-none z-0">
        <div 
          className="flex-shrink-0 flex items-center animate-scroll-continuous"
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {[...allPortraits, ...allPortraits].map((portrait, index) => (
            <div key={`${portrait.id}-${index}`} className="w-48 h-64 md:w-64 md:h-80 flex-shrink-0 mx-2">
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
      
      <LanguageSelector />
      
      <div className="w-full flex-grow flex flex-col items-center justify-center z-10">
        <div className="relative text-center p-6 md:p-8 bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700 w-full max-w-lg mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            {t('start.title')}
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-8 font-light">
            {t('start.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-1">{t('start.learn')}</h2>
              <button onClick={onShowInstructions} className="w-full flex-1 px-4 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all">{t('start.howToPlay')}</button>
              <button onClick={onReview} className="w-full flex-1 px-4 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all">{t('start.reviewMode')}</button>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-1">{t('start.play')}</h2>
              <button onClick={() => onStart('fact')} className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">{t('start.guessPresident')}</button>
              <button onClick={() => onStart('year')} className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">{t('start.guessYear')}</button>
              <button onClick={() => onStart('president')} className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">{t('start.guessSuccessor')}</button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center items-center text-slate-300 font-bold text-lg md:text-xl">
            <span className="mr-3">{t('start.hallOfFame')} -&gt;</span>
            <button 
              onClick={onShowLeaderboard}
              className="text-3xl md:text-4xl hover:scale-110 transition-transform p-1 bg-slate-800/50 rounded-full shadow-xl"
              title={t('start.hallOfFame')}
            >
              🥇
            </button>
          </div>
        </div>

        {dailyFact && (
          <div className="mt-8 w-full max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-slate-800/90 backdrop-blur-md rounded-xl p-4 border border-slate-700/80 shadow-2xl flex items-start gap-4">
              <div className="bg-amber-500/20 p-2 md:p-3 rounded-full shrink-0">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              </div>
              <div className="text-left flex-grow min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xs md:text-sm font-bold text-amber-400 tracking-wide uppercase truncate">
                    {t('start.dailyHistoricalFact')}: {dailyFact.name}
                  </h3>
                  <button
                    onClick={handleRefreshFact}
                    className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-amber-300 text-xs font-medium border border-slate-600/60 hover:border-amber-500/40 transition-all duration-200 active:scale-95 shadow-sm"
                    title={t('start.refreshFact')}
                    aria-label={t('start.refreshFact')}
                  >
                    <RefreshCw className={`w-3.5 h-3.5 transition-transform duration-500 ${isRefreshing ? 'rotate-180 text-amber-400' : ''}`} />
                    <span className="hidden sm:inline">{t('start.refreshFact')}</span>
                  </button>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {getPresidentTranslation(dailyFact.id, 'context', dailyFact.context)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-slate-400 z-20">
          <button onClick={onShowPrivacy} className="hover:text-blue-400 transition-colors underline underline-offset-2">{t('start.privacyPolicy')}</button>
          <button onClick={onShowTerms} className="hover:text-blue-400 transition-colors underline underline-offset-2">{t('start.termsOfService')}</button>
          <a href="mailto:historicaltimelines4@gmail.com?subject=US Presidents Timeline&body=BODY" className="hover:text-blue-400 transition-colors underline underline-offset-2">{t('start.feedback')}</a>
      </div>
    </div>
  );
};

export default StartScreen;