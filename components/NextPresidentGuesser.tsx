import React, { useState, useMemo } from 'react';
import { President } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface NextPresidentGuesserProps {
  presidents: President[];
  onSubmit: (presidentId: number) => void;
  disabled: boolean;
  guessFeedback: { type: 'president', value: number, isCorrect: boolean } | null;
}

const NextPresidentGuesser: React.FC<NextPresidentGuesserProps> = ({ presidents, onSubmit, disabled, guessFeedback }) => {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>('');

  const sortedPresidents = useMemo(() => 
    [...presidents].sort((a, b) => a.name.localeCompare(b.name)),
    [presidents]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled || !selectedId) return;
    onSubmit(parseInt(selectedId, 10));
  };

  const feedbackClass = guessFeedback && guessFeedback.type === 'president'
    ? guessFeedback.isCorrect 
        ? '!border-green-500 ring-2 ring-green-500/50' 
        : '!border-red-500 ring-2 ring-red-500/50'
    : 'border-slate-600 focus:ring-2 focus:ring-purple-500';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        disabled={disabled}
        className={`bg-slate-700/50 border rounded-lg px-4 py-2 text-white w-full flex-grow focus:outline-none transition-all duration-300 disabled:opacity-50 ${feedbackClass}`}
        aria-label="Select the next president"
      >
        <option value="" disabled>{t('fact.selectPresident')}</option>
        {sortedPresidents.map(president => (
          <option key={president.id} value={president.id}>
            {president.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={disabled || !selectedId}
        className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
      >
        {t('game.submit')}
      </button>
    </form>
  );
};

export default NextPresidentGuesser;