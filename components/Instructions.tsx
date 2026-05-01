import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface InstructionsProps {
  onClose: () => void;
}

const GameModeExplanation: React.FC<{ title: string; children: React.ReactNode; icon: string }> = ({ title, children, icon }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 text-3xl">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{children}</p>
    </div>
  </div>
);

const Instructions: React.FC<InstructionsProps> = ({ onClose }) => {
  const { t } = useLanguage();
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="instructions-title"
    >
      <div
        className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl max-w-2xl w-full animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-slate-700 flex justify-between items-center">
          <h2 id="instructions-title" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
            {t('instructions.title')}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors text-3xl leading-none font-bold" aria-label="Close">&times;</button>
        </header>
        <div className="p-6 space-y-6">
          <GameModeExplanation title={t('start.guessYear')} icon="🗓️">
            {t('instructions.guessYear').split(' : ')[1] || t('instructions.guessYear').split(': ')[1]}
          </GameModeExplanation>
          <GameModeExplanation title={t('start.guessPresident')} icon="🤔">
            {t('instructions.guessPresident').split(' : ')[1] || t('instructions.guessPresident').split(': ')[1]}
          </GameModeExplanation>
          <GameModeExplanation title={t('start.guessSuccessor')} icon="👑">
            {t('instructions.guessSuccessor').split(' : ')[1] || t('instructions.guessSuccessor').split(': ')[1]}
          </GameModeExplanation>
        </div>
        <footer className="p-4 flex justify-end border-t border-slate-700">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all"
          >
            {t('instructions.close')}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Instructions;