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

const ReviewCard: React.FC<ReviewCardProps> = ({ president, onMouseEnter, onMouseLeave, onClick }) => {
  const { t, getPresidentTranslation } = useLanguage();
  const { name, imageUrl, termStart, termEnd } = president;
  const title = getPresidentTranslation(president.id, 'title', president.title);
  const context = getPresidentTranslation(president.id, 'context', president.context);
  const termEndDisplay = termEnd ?? t('review.present');

  return (
    <div
      className="flex-shrink-0 mx-auto w-full h-[29rem] sm:h-[32rem] md:h-[35rem] lg:h-[37rem] max-h-[calc(100vh-13rem)] bg-slate-800 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-700/80 flex flex-col select-none cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/80 group overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Portrait image taking two-thirds (65%) of the card */}
      <div className="relative h-[63%] sm:h-[65%] w-full overflow-hidden bg-slate-950 flex-shrink-0 flex items-center justify-center p-2.5 sm:p-3">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Portrait of ${name}`} 
            className="w-full h-full object-contain object-center drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
            {t('review.noPortrait')}
          </div>
        )}
      </div>

      {/* Info section taking the remaining one-third */}
      <div className="text-center flex-grow flex flex-col justify-between p-2.5 sm:p-3 md:p-3.5 min-h-0 bg-slate-800/95">
        <div className="min-h-0 flex flex-col">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-tight line-clamp-1">{name}</h2>
          <p className="text-xs sm:text-sm text-amber-300 font-mono font-semibold mt-0.5 tracking-tight">
            {termStart} – {termEndDisplay}
          </p>
          <p className="text-[11px] sm:text-xs text-slate-400 font-medium truncate mt-0.5">{title}</p>
          <div className="text-[11px] sm:text-xs text-slate-300 leading-relaxed text-left line-clamp-3 sm:line-clamp-4 mt-1.5 text-slate-300/90 overflow-hidden">
            {context}
          </div>
        </div>

        <div className="pt-1.5 border-t border-slate-700/80 flex items-center justify-between text-[11px] sm:text-xs text-blue-400 font-medium flex-shrink-0 mt-1">
          <span className="flex items-center gap-1">
            <GitBranch className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Career Tree</span>
            <span className="sm:hidden">Career</span>
          </span>
          <span className="text-slate-400 text-[10px] sm:text-[11px] group-hover:text-white transition-colors">Tap for details →</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
