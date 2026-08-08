import React from 'react';
import { President, GameMode } from '../types';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { t } = useLanguage();
  const allPortraits = presidents
    .map(president => ({ id: president.id, name: president.name, url: president.imageUrl }))
    .filter(p => p.url);

  const animationDuration = allPortraits.length * 2;

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex items-center opacity-20 scale-110 blur-sm pointer-events-none">
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
      
      <div className="relative text-center p-8 bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700 max-w-lg mx-auto z-10 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          {t('start.title')}
        </h1>
        <p className="text-lg text-slate-300 mb-8 font-light">
          {t('start.subtitle')}
        </p>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">{t('start.learn')}</h2>
            <button onClick={onShowInstructions} className="w-full flex-1 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all">{t('start.howToPlay')}</button>
            <button onClick={onReview} className="w-full flex-1 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all">{t('start.reviewMode')}</button>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">{t('start.play')}</h2>
            <button onClick={() => onStart('fact')} className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">{t('start.guessPresident')}</button>
            <button onClick={() => onStart('year')} className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">{t('start.guessYear')}</button>
            <button onClick={() => onStart('president')} className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">{t('start.guessSuccessor')}</button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-slate-400 z-20">
          <button onClick={onShowPrivacy} className="hover:text-blue-400 transition-colors underline underline-offset-2">{t('start.privacyPolicy')}</button>
          <button onClick={onShowTerms} className="hover:text-blue-400 transition-colors underline underline-offset-2">{t('start.termsOfService')}</button>
          <a href="mailto:historicaltimelines4@gmail.com?subject=US Presidents Timeline&body=BODY" className="hover:text-blue-400 transition-colors underline underline-offset-2">{t('start.feedback')}</a>
          <button 
            onClick={onShowLeaderboard}
            className="text-2xl hover:scale-125 transition-transform p-1 bg-slate-800/50 rounded-full border border-slate-700 shadow-xl"
            title={t('start.hallOfFame')}
          >
            🥇
          </button>
      </div>
    </div>
  );
};

export default StartScreen;