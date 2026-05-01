import React from 'react';
import { President } from '../types';
import PartyIcon from './HouseIcon';
import { useLanguage } from '../contexts/LanguageContext';

interface ReviewCardProps {
  president: President;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const getPartyStyles = (party: string): { badge: string; } => {
  if (party.includes('Republican')) return { badge: 'bg-red-500/10 text-red-300' };
  if (party.includes('Democratic')) return { badge: 'bg-blue-500/10 text-blue-300' };
  if (party.includes('Whig')) return { badge: 'bg-yellow-500/10 text-yellow-300' };
  if (party.includes('Federalist')) return { badge: 'bg-indigo-500/10 text-indigo-300' };
  return { badge: 'bg-slate-700 text-slate-300' };
};

const ReviewCard: React.FC<ReviewCardProps> = ({ president, onMouseEnter, onMouseLeave, onClick }) => {
  const { t, getPresidentTranslation } = useLanguage();
  const { name, imageUrl, party, termStart, termEnd } = president;
  const title = getPresidentTranslation(president.id, 'title', president.title);
  const context = getPresidentTranslation(president.id, 'context', president.context);
  const styles = getPartyStyles(party);
  const termEndDisplay = termEnd ?? t('review.present');

  return (
    <div
      className="flex-shrink-0 w-full h-[28rem] bg-slate-800 rounded-2xl shadow-lg p-4 border border-slate-700/80 flex flex-col select-none cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-blue-500/80"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-black mb-3">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Portrait of ${name}`} 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            {t('review.noPortrait')}
          </div>
        )}
      </div>
      <div className="text-center flex-grow flex flex-col">
        <h2 className="text-xl font-bold text-white">{name}</h2>
        <p className="text-sm text-slate-400">{title}</p>
        <div className="flex justify-center items-center my-2">
            <p className="text-sm text-amber-300/80 font-mono">
              {termStart} – {termEndDisplay}
            </p>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed text-left flex-grow overflow-hidden">
            {context}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
