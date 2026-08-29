import React, { useState, useMemo, useRef, useEffect } from 'react';
import { President } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Search } from 'lucide-react';

interface NextPresidentGuesserProps {
  presidents: President[];
  onSubmit: (presidentId: number) => void;
  disabled: boolean;
  guessFeedback: { type: 'president', value: number, isCorrect: boolean } | null;
}

const NextPresidentGuesser: React.FC<NextPresidentGuesserProps> = ({ presidents, onSubmit, disabled, guessFeedback }) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortedPresidents = useMemo(() => 
    [...presidents].sort((a, b) => a.name.localeCompare(b.name)),
    [presidents]
  );

  const filteredPresidents = useMemo(() => {
    if (!searchQuery) return sortedPresidents;
    const lowerQuery = searchQuery.toLowerCase();
    return sortedPresidents.filter(p => p.name.toLowerCase().includes(lowerQuery));
  }, [searchQuery, sortedPresidents]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled || !selectedId) return;
    onSubmit(parseInt(selectedId, 10));
  };

  const handleSelect = (id: number, name: string) => {
    setSelectedId(id.toString());
    setSearchQuery(name);
    setIsOpen(false);
  };

  const feedbackClass = guessFeedback && guessFeedback.type === 'president'
    ? guessFeedback.isCorrect 
        ? '!border-green-500 ring-2 ring-green-500/50' 
        : '!border-red-500 ring-2 ring-red-500/50'
    : 'border-slate-600 focus-within:ring-2 focus-within:ring-purple-500';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
      <div className="relative w-full flex-grow" ref={dropdownRef}>
        <div className={`relative bg-slate-700/50 border rounded-lg flex items-center transition-all duration-300 ${disabled ? 'opacity-50' : ''} ${feedbackClass}`}>
          <Search className="w-4 h-4 text-slate-400 ml-3 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsOpen(true);
              if (selectedId) setSelectedId(''); // Clear selection if user types
            }}
            onFocus={() => setIsOpen(true)}
            disabled={disabled}
            placeholder={t('fact.selectPresident')}
            className="w-full bg-transparent px-3 py-2 text-white focus:outline-none disabled:cursor-not-allowed"
            aria-label="Search and select the next president"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none disabled:cursor-not-allowed flex-shrink-0"
            disabled={disabled}
          >
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {isOpen && !disabled && (
          <ul className="absolute z-10 w-full mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-xl max-h-60 overflow-y-auto custom-scrollbar">
            {filteredPresidents.length > 0 ? (
              filteredPresidents.map(president => (
                <li
                  key={president.id}
                  onClick={() => handleSelect(president.id, president.name)}
                  className={`px-4 py-2 cursor-pointer hover:bg-slate-700 text-slate-200 transition-colors
                    ${selectedId === president.id.toString() ? 'bg-slate-700 text-white font-medium' : ''}`}
                >
                  {president.name}
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-slate-400 text-center italic">
                No presidents found
              </li>
            )}
          </ul>
        )}
      </div>
      <button
        type="submit"
        disabled={disabled || !selectedId}
        className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 focus:outline-none focus:ring-4 focus:ring-purple-500/50 whitespace-nowrap"
      >
        {t('game.submit')}
      </button>
    </form>
  );
};

export default NextPresidentGuesser;