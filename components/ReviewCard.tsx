import React from 'react';
import { President } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { GitBranch } from 'lucide-react';

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
      className="flex-shrink-0 mx-auto w-auto aspect-[1/2] h-[32rem] md:h-[40rem] lg:h-[48rem] max-h-[calc(100vh-16rem)] bg-slate-800 rounded-3xl shadow-xl border border-slate-700/80 flex flex-col select-none cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-blue-500/80 group overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="relative h-1/2 w-full overflow-hidden bg-black flex-shrink-0">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Portrait of ${name}`} 
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            {t('review.noPortrait')}
          </div>
        )}
      </div>
      <div className="text-center flex-grow flex flex-col p-3 md:p-4 min-h-0">
        <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors truncate">{name}</h2>
        <p className="text-xs md:text-sm text-slate-400 mt-0.5 truncate">{title}</p>
        <div className="flex justify-center items-center my-1 md:my-1.5 flex-shrink-0">
            <p className="text-xs md:text-sm text-amber-300/80 font-mono">
              {termStart} – {termEndDisplay}
            </p>
        </div>
        <div className="text-[11px] md:text-xs text-slate-300 leading-snug text-left flex-grow overflow-y-auto custom-scrollbar mt-1 pr-1.5">
            {context}
        </div>

        <div className="mt-2 pt-2 border-t border-slate-700/70 flex items-center justify-between text-[10px] md:text-xs text-blue-400 font-medium flex-shrink-0">
          <span className="flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5 text-blue-400" />
            Career Tree & Roles
          </span>
          <span className="text-slate-400 text-[11px] group-hover:text-white transition-colors">Tap for details →</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
