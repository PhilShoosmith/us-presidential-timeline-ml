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
}

const getPartyStyles = (party: string): { badge: string; cardHover: string; } => {
  if (party.includes('Republican')) return { badge: 'bg-red-500/10 text-red-300', cardHover: 'hover:border-red-500/50' };
  if (party.includes('Democratic')) return { badge: 'bg-blue-500/10 text-blue-300', cardHover: 'hover:border-blue-500/50' };
  if (party.includes('Whig')) return { badge: 'bg-yellow-500/10 text-yellow-300', cardHover: 'hover:border-yellow-500/50' };
  if (party.includes('Federalist')) return { badge: 'bg-indigo-500/10 text-indigo-300', cardHover: 'hover:border-indigo-500/50' };
  return { badge: 'bg-slate-700 text-slate-300', cardHover: 'hover:border-slate-600' };
};

const PresidentCard: React.FC<PresidentCardProps> = ({ president, showTerm, isAdmin, onPortraitUpload, stagedPortraitUrl, onSealUpload, stagedSealUrl }) => {
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
    <div className={`bg-slate-800 rounded-2xl shadow-2xl p-4 border border-slate-700 flex flex-col items-center w-full max-w-[16rem] sm:max-w-xs transform transition-all duration-500 hover:scale-105 ${styles.cardHover}`}>
      <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black p-2 rounded-lg shadow-lg mb-3 w-full">
        <div 
          className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-slate-700 flex items-center justify-center group shadow-inner"
        >
          {displayImageUrl ? (
            <img 
              src={displayImageUrl} 
              alt={`Portrait of ${name}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              key={displayImageUrl}
            />
          ) : (
            <span className="text-slate-400">{t('card.portraitNotAvailable')}</span>
          )}
          {stagedPortraitUrl && (
            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-lg pointer-events-none">
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
                <div className="text-center text-white p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  <p className="mt-2 font-semibold">{t('card.changePortrait')}</p>
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
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white pointer-events-none">{name}</h2>
        <p className="text-lg sm:text-xl text-slate-400 mt-2 pointer-events-none">{title}</p>
        <div className={`text-md mt-2 font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 ${styles.badge} pointer-events-none`}>
          <PartyIcon party={party} className="h-5 w-5" />
          <span>{party}</span>
        </div>
      </div>
      
      {showTerm && (
        <p className="text-md text-amber-300/80 mt-2 font-mono">
          {termStart} – {termEndDisplay} {durationDisplay}
        </p>
      )}

      <div className="mt-4 pt-4 w-full border-t border-slate-700/50 flex justify-center">
        <div className="flex items-center justify-center gap-4">
           <div className="w-6 h-6 text-slate-400 animate-rise-up" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
          <PresidentialSeal
              className="w-16 h-16"
              isAdmin={isAdmin}
              imageUrl={stagedSealUrl || president.sealUrl}
              onImageUpload={handleSealUpload}
          />
           <div className="w-6 h-6 text-slate-400 animate-rise-up" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentCard;