import React, { useRef } from 'react';
import { President } from '../types';
import PartyIcon from './HouseIcon';
import PresidentialSeal from './CoatOfArms';
import { useLanguage } from '../contexts/LanguageContext';

interface PresidentCardProps {
  president: President;
  showTerm: boolean;
  isAdmin?: boolean;
  onPortraitUpload?: (presidentId: number, newImageUrl: string) => void;
  stagedPortraitUrl?: string;
  onSealUpload?: (presidentId: number, newImageUrl: string) => void;
  stagedSealUrl?: string;
  compact?: boolean;
}

const getPartyStyles = (party: string): { badge: string; cardHover: string; } => {
  if (party.includes('Republican')) return { badge: 'bg-red-500/10 text-red-300', cardHover: 'hover:border-red-500/50' };
  if (party.includes('Democratic')) return { badge: 'bg-blue-500/10 text-blue-300', cardHover: 'hover:border-blue-500/50' };
  if (party.includes('Whig')) return { badge: 'bg-yellow-500/10 text-yellow-300', cardHover: 'hover:border-yellow-500/50' };
  if (party.includes('Federalist')) return { badge: 'bg-indigo-500/10 text-indigo-300', cardHover: 'hover:border-indigo-500/50' };
  return { badge: 'bg-slate-700 text-slate-300', cardHover: 'hover:border-slate-600' };
};

const PresidentCard: React.FC<PresidentCardProps> = ({ president, showTerm, isAdmin, onPortraitUpload, stagedPortraitUrl, onSealUpload, stagedSealUrl, compact = false }) => {
  const { t, getPresidentTranslation } = useLanguage();
  const portraitFileInputRef = useRef<HTMLInputElement>(null);

  if (!president) {
    return null;
  }

  const handleUploadClick = () => {
    portraitFileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onPortraitUpload && president) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          onPortraitUpload(president.id, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSealUpload = (imageUrl: string) => {
    if (onSealUpload) {
      onSealUpload(president.id, imageUrl);
    }
  };

  const { name, party, termStart, termEnd } = president;
  const title = getPresidentTranslation(president.id, 'title', president.title);
  const styles = getPartyStyles(party);
  const displayImageUrl = stagedPortraitUrl || president.imageUrl;
  
  const termEndDisplay = termEnd ?? t('review.present');
  let durationDisplay: string;

  if (termEnd) {
    if (termEnd === termStart) {
      durationDisplay = t('card.lessThanYear');
    } else {
      const duration = termEnd - termStart;
      durationDisplay = t('card.years', { duration, s: duration === 1 ? '' : 's' });
    }
  } else {
    const currentYear = new Date().getFullYear();
    const duration = currentYear - termStart;
    durationDisplay = t('card.yearsAndCounting', { duration, s: duration === 1 ? '' : 's' });
  }
  
  return (
    <div className={`bg-slate-800 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-700 flex flex-col items-center w-full transform transition-all duration-300 hover:scale-[1.02] ${styles.cardHover} ${
      compact ? 'p-1.5 sm:p-3 max-w-[9.5rem] sm:max-w-[13rem]' : 'p-2.5 sm:p-4 max-w-[12.5rem] sm:max-w-xs hover:scale-105 duration-500'
    }`}>
      <div className={`bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg shadow-lg w-full ${
        compact ? 'p-1 mb-1 sm:p-1.5 sm:mb-2' : 'p-1.5 sm:p-2 mb-2 sm:mb-3'
      }`}>
        <div 
          className={`relative w-full rounded-md overflow-hidden bg-slate-900 flex items-center justify-center group shadow-inner ${
            compact ? 'aspect-[3/4] h-24 sm:h-36 max-h-36' : 'aspect-[3/4] h-32 sm:h-auto max-h-44 sm:max-h-none'
          }`}
        >
          {displayImageUrl ? (
            <img 
              src={displayImageUrl} 
              alt={`Portrait of ${name}`} 
              className="w-full h-full object-contain object-top transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              key={displayImageUrl}
            />
          ) : (
            <span className={`text-slate-400 ${compact ? 'text-xs' : 'text-sm'}`}>{t('card.portraitNotAvailable')}</span>
          )}
          {stagedPortraitUrl && (
            <div className={`absolute top-1.5 right-1.5 bg-yellow-400 text-yellow-900 font-bold px-1.5 py-0.5 rounded-full shadow-lg pointer-events-none ${
              compact ? 'text-[10px]' : 'text-xs'
            }`}>
              {t('card.pending')}
            </div>
          )}
          {isAdmin && (
            <>
              <div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                onClick={(e) => { e.stopPropagation(); handleUploadClick(); }}
                role="button"
                aria-label="Change president portrait"
              >
                <div className={`text-center text-white ${compact ? 'p-2' : 'p-4'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${compact ? 'h-6 w-6' : 'h-10 w-10'} mx-auto`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  <p className={`font-semibold ${compact ? 'text-xs mt-1' : 'text-sm mt-2'}`}>{t('card.changePortrait')}</p>
                </div>
              </div>
              <input
                type="file"
                ref={portraitFileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </>
          )}
        </div>
      </div>
      <div 
        className="text-center w-full"
      >
        <h2 className={`font-bold text-center text-white pointer-events-none ${
          compact ? 'text-sm sm:text-lg leading-tight' : 'text-lg sm:text-3xl md:text-4xl leading-tight sm:leading-normal'
        }`}>{name}</h2>
        <p className={`text-slate-400 pointer-events-none ${
          compact ? 'text-[10px] sm:text-xs mt-0.5 leading-tight' : 'text-xs sm:text-lg md:text-xl mt-0.5 sm:mt-2 leading-tight'
        }`}>{title}</p>
        <div className={`font-semibold rounded-full inline-flex items-center pointer-events-none ${styles.badge} ${
          compact ? 'text-[10px] sm:text-xs mt-0.5 sm:mt-1 px-2 sm:px-2.5 py-0.2 sm:py-0.5 gap-1 sm:gap-1.5' : 'text-xs sm:text-base mt-1.5 sm:mt-2 px-2.5 sm:px-3 py-0.5 sm:py-1 gap-1.5 sm:gap-2'
        }`}>
          <PartyIcon party={party} className={compact ? 'h-3 w-3 sm:h-3.5 sm:w-3.5' : 'h-3.5 w-3.5 sm:h-5 sm:w-5'} />
          <span>{party}</span>
        </div>
      </div>
      
      {showTerm && (
        <p className={`text-amber-300/80 font-mono ${
          compact ? 'text-[10px] sm:text-xs mt-0.5 sm:mt-1' : 'text-xs sm:text-base mt-1 sm:mt-2'
        }`}>
          {termStart} – {termEndDisplay} {durationDisplay}
        </p>
      )}

      <div className={`w-full border-t border-slate-700/50 flex justify-center ${
        compact ? 'mt-1.5 sm:mt-2 pt-1.5 sm:pt-2' : 'mt-2 sm:mt-4 pt-2 sm:pt-4'
      }`}>
        <div className={`flex items-center justify-center ${compact ? 'gap-1.5 sm:gap-2' : 'gap-2 sm:gap-4'}`}>
           <div className={`${compact ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-4 h-4 sm:w-6 sm:h-6'} text-slate-400 animate-rise-up`} aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" className={`${compact ? 'h-2.5 w-2.5 sm:h-3.5 sm:w-3.5' : 'h-3.5 w-3.5 sm:h-5 sm:w-5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
          <PresidentialSeal
              className={compact ? 'w-6 h-6 sm:w-10 sm:h-10' : 'w-9 h-9 sm:w-16 sm:h-16'}
              isAdmin={isAdmin}
              imageUrl={stagedSealUrl || president.sealUrl}
              onImageUpload={handleSealUpload}
          />
           <div className={`${compact ? 'w-3 h-3 sm:w-4 sm:h-4' : 'w-4 h-4 sm:w-6 sm:h-6'} text-slate-400 animate-rise-up`} aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" className={`${compact ? 'h-2.5 w-2.5 sm:h-3.5 sm:w-3.5' : 'h-3.5 w-3.5 sm:h-5 sm:w-5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentCard;