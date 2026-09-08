import React, { useState, useMemo, useRef, useEffect } from 'react';
import { President } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Search, X } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const sortedPresidents = useMemo(() => 
    [...presidents].sort((a, b) => a.name.localeCompare(b.name)),
    [presidents]
  );

  const filteredPresidents = useMemo(() => {
    if (!searchQuery.trim()) return sortedPresidents;
    const lowerQuery = searchQuery.toLowerCase().trim();
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

  // Reset active index when filtered results change
  useEffect(() => {
    setActiveIndex(-1);
  }, [filteredPresidents]);

  const handleSelect = (id: number, name: string) => {
    setSelectedId(id.toString());
    setSearchQuery(name);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
        e.preventDefault();
        return;
      }
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => {
        const next = prev < filteredPresidents.length - 1 ? prev + 1 : 0;
        // Scroll into view
        const item = listRef.current?.children[next] as HTMLElement;
        item?.scrollIntoView({ block: 'nearest' });
        return next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => {
        const next = prev > 0 ? prev - 1 : filteredPresidents.length - 1;
        const item = listRef.current?.children[next] as HTMLElement;
        item?.scrollIntoView({ block: 'nearest' });
        return next;
      });
    } else if (e.key === 'Enter') {
      if (isOpen && activeIndex >= 0 && filteredPresidents[activeIndex]) {
        e.preventDefault();
        const chosen = filteredPresidents[activeIndex];
        handleSelect(chosen.id, chosen.name);
      } else if (isOpen && filteredPresidents.length === 1) {
        e.preventDefault();
        const chosen = filteredPresidents[0];
        handleSelect(chosen.id, chosen.name);
      } else if (selectedId) {
        // Allow form submit
      } else if (filteredPresidents.length === 1) {
        e.preventDefault();
        const chosen = filteredPresidents[0];
        handleSelect(chosen.id, chosen.name);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled) return;

    // If user typed an exact match or there is 1 filtered match and none selected yet
    if (!selectedId && filteredPresidents.length === 1) {
      const chosen = filteredPresidents[0];
      onSubmit(chosen.id);
      return;
    }

    if (!selectedId) return;
    onSubmit(parseInt(selectedId, 10));
  };

  const handleClear = () => {
    setSearchQuery('');
    setSelectedId('');
    setIsOpen(true);
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
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={t('fact.selectPresident')}
            className="w-full bg-transparent px-3 py-2 text-white focus:outline-none disabled:cursor-not-allowed text-sm"
            aria-label="Search and select the next president"
            autoComplete="off"
          />
          {searchQuery && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-slate-400 hover:text-white rounded-full transition-colors mr-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none disabled:cursor-not-allowed flex-shrink-0"
            disabled={disabled}
            aria-label="Toggle president list"
          >
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {isOpen && !disabled && (
          <ul
            ref={listRef}
            className="absolute z-30 w-full mt-1 bg-slate-800 border border-slate-600 rounded-lg shadow-2xl max-h-60 overflow-y-auto custom-scrollbar divide-y divide-slate-700/50"
          >
            {filteredPresidents.length > 0 ? (
              filteredPresidents.map((president, idx) => {
                const isSelected = selectedId === president.id.toString();
                const isItemActive = activeIndex === idx;
                
                return (
                  <li
                    key={president.id}
                    onClick={() => handleSelect(president.id, president.name)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`px-4 py-2.5 cursor-pointer text-sm transition-colors flex items-center justify-between
                      ${isSelected ? 'bg-purple-900/40 text-purple-200 font-semibold' : ''}
                      ${isItemActive && !isSelected ? 'bg-slate-700 text-white' : ''}
                      ${!isSelected && !isItemActive ? 'text-slate-200 hover:bg-slate-700' : ''}`}
                  >
                    <span>{president.name}</span>
                    <span className="text-xs font-mono text-slate-400">
                      #{president.id}
                    </span>
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-3 text-slate-400 text-center italic text-sm">
                No presidents found
              </li>
            )}
          </ul>
        )}
      </div>
      <button
        type="submit"
        disabled={disabled || (!selectedId && filteredPresidents.length !== 1)}
        className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 focus:outline-none focus:ring-4 focus:ring-purple-500/50 whitespace-nowrap"
      >
        {t('game.submit')}
      </button>
    </form>
  );
};

export default NextPresidentGuesser;
