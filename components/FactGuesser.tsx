import React, { useMemo } from 'react';
import { President } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface FactGuesserProps {
  correctPresident: President;
  allPresidents: President[];
  onSubmit: (presidentId: number) => void;
  disabled: boolean;
  guessFeedback: { type: 'president', value: number, isCorrect: boolean } | null;
}

const FactGuesser: React.FC<FactGuesserProps> = ({ correctPresident, allPresidents, onSubmit, disabled, guessFeedback }) => {
  const { t, getPresidentTranslation } = useLanguage();
  const options = useMemo(() => {
    // Get 3 other random presidents as distractors
    const distractors = allPresidents
      .filter(p => p.id !== correctPresident.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    // Combine and shuffle
    const choices = [...distractors, correctPresident].sort(() => 0.5 - Math.random());
    return choices;
  }, [correctPresident, allPresidents]);

  const getButtonClass = (presidentId: number) => {
    if (guessFeedback && guessFeedback.type === 'president' && guessFeedback.value === presidentId) {
      return guessFeedback.isCorrect 
        ? 'bg-green-500 hover:bg-green-500 scale-110' 
        : 'bg-red-500 hover:bg-red-500';
    }
    return 'bg-slate-700 hover:bg-slate-600';
  };

  return (
    <div className="w-full mx-auto p-4 bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700 text-center animate-fade-in-up">
      <div className="mb-4 p-3 bg-slate-900/50 border border-slate-700 rounded-lg">
        <p className="text-base text-slate-300 leading-relaxed italic">
          "{getPresidentTranslation(correctPresident.id, 'context', correctPresident.context)}"
        </p>
      </div>
      
      <p className="text-lg text-slate-200 font-semibold mb-3">{t('fact.whoIsThis')}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((president) => (
          <button
            key={president.id}
            onClick={() => onSubmit(president.id)}
            disabled={disabled}
            className={`w-full px-4 py-2 text-white font-semibold rounded-lg transform transition-all duration-300 ease-in-out shadow-lg disabled:opacity-80 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-teal-500/50 ${getButtonClass(president.id)}`}
          >
            {president.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FactGuesser;