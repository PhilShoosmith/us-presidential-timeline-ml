import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { President } from '../types';
import ReviewCard from './ReviewCard';
import { GoogleGenAI } from '@google/genai';
import RAGModal from './RAGModal';
import { HISTORICAL_PERIODS } from '../constants';
import { Rewind, FastForward, Play, Pause, RotateCcw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ReviewScreenProps {
  presidents: President[];
  onBack: () => void;
}

interface GroundingSource {
  uri: string;
  title: string;
}

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: { name: string; startYear: string; endYear: string; period: string }) => void;
  onClearFilters: () => void;
  initialValues: { name: string; startYear: string; endYear: string; period: string };
}

const periodToTranslationKey: { [key: string]: string } = {
  'Early Republic': 'period.earlyRepublic',
  'Civil War & Industrialization': 'period.civilWar',
  'The American Century': 'period.americanCentury',
  'Modern America': 'period.modernAmerica',
};

const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose, onApplyFilters, onClearFilters, initialValues }) => {
  const { t } = useLanguage();
  const [name, setName] = useState(initialValues.name);
  const [startYear, setStartYear] = useState(initialValues.startYear);
  const [endYear, setEndYear] = useState(initialValues.endYear);
  const [period, setPeriod] = useState(initialValues.period);

  if (!isOpen) return null;

  const handleApply = () => {
    onApplyFilters({ name, startYear, endYear, period });
  };
  
  const handleClear = () => {
    setName('');
    setStartYear('');
    setEndYear('');
    setPeriod('');
    onClearFilters();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-popup-title"
    >
      <div
        className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl max-w-md w-full animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-slate-700 flex justify-between items-center">
          <h2 id="search-popup-title" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {t('review.advancedSearch')}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors text-3xl leading-none font-bold" aria-label={t('rag.close')}>&times;</button>
        </header>
        <div className="p-6 space-y-6">
          <div>
            <label htmlFor="search-name" className="block text-sm font-medium text-slate-300 mb-2">{t('review.searchName')}</label>
            <input
              id="search-name"
              type="text"
              placeholder={t('review.searchNamePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">{t('review.searchDates')}</label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                placeholder={t('review.searchFrom')}
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Start year"
              />
              <span className="text-slate-400">-</span>
              <input
                type="number"
                placeholder={t('review.searchTo')}
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="End year"
              />
            </div>
          </div>
          <div>
            <label htmlFor="search-period" className="block text-sm font-medium text-slate-300 mb-2">{t('review.searchPeriod')}</label>
            <select
              id="search-period"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{t('review.allPeriods')}</option>
              {HISTORICAL_PERIODS.map(p => (
                <option key={p.name} value={p.name}>{t(periodToTranslationKey[p.name] || p.name)}</option>
              ))}
            </select>
          </div>
        </div>
        <footer className="p-4 flex justify-between border-t border-slate-700">
          <button onClick={handleClear} className="px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors">{t('review.clearFilters')}</button>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2 text-slate-300 font-semibold rounded-lg hover:bg-slate-700/50 transition-colors">{t('review.cancel')}</button>
            <button onClick={handleApply} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all">{t('review.apply')}</button>
          </div>
        </footer>
      </div>
    </div>
  );
};


const ReviewScreen: React.FC<ReviewScreenProps> = ({ presidents, onBack }) => {
  const { t, getPresidentTranslation } = useLanguage();
  const [isTouched, setIsTouched] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [isReversed, setIsReversed] = useState(false);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  
  const animationDuration = presidents.length * 8; 

  useEffect(() => {
    if (carouselRef.current) {
      const animations = carouselRef.current.getAnimations();
      animations.forEach(anim => {
        anim.playbackRate = (isReversed ? -1 : 1) * speedMultiplier;
        if (isTouched || isHoverPaused || isManualPaused) {
          anim.pause();
        } else {
          anim.play();
        }
      });
    }
  }, [isReversed, speedMultiplier, isTouched, isHoverPaused, isManualPaused]);

  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [nameQuery, setNameQuery] = useState('');
  const [startYearQuery, setStartYearQuery] = useState('');
  const [endYearQuery, setEndYearQuery] = useState('');
  const [periodQuery, setPeriodQuery] = useState('');

  const [isRagModalOpen, setIsRagModalOpen] = useState<boolean>(false);
  const [ragContent, setRagContent] = useState<{ title: string; text: string; imageUrl?: string; } | null>(null);
  const [ragSources, setRagSources] = useState<GroundingSource[]>([]);
  const [isRagLoading, setIsRagLoading] = useState<boolean>(false);
  
  const areFiltersActive = useMemo(() => 
    nameQuery.trim() !== '' || 
    startYearQuery.trim() !== '' || 
    endYearQuery.trim() !== '' || 
    periodQuery !== '',
    [nameQuery, startYearQuery, endYearQuery, periodQuery]
  );

  const filteredPresidents = useMemo(() => {
    if (!areFiltersActive) {
      return [];
    }
    const lowercasedNameQuery = nameQuery.trim().toLowerCase();
    const startYear = parseInt(startYearQuery, 10);
    const endYear = parseInt(endYearQuery, 10);
    const periodData = HISTORICAL_PERIODS.find(p => p.name === periodQuery);

    return presidents.filter(p => {
      const translatedTitle = getPresidentTranslation(p.id, 'title', p.title).toLowerCase();
      const nameMatch = lowercasedNameQuery
        ? p.name.toLowerCase().includes(lowercasedNameQuery) || translatedTitle.includes(lowercasedNameQuery)
        : true;
      
      const periodMatch = periodData
        ? p.termStart >= periodData.start && p.termStart < periodData.end
        : true;
      
      const startYearMatch = !isNaN(startYear)
        ? p.termStart >= startYear
        : true;
      
      const endYearMatch = !isNaN(endYear)
        ? (p.termEnd ? p.termEnd >= startYear : true) && p.termStart <= endYear // Check if term intersects range
        : true;

      return nameMatch && periodMatch && startYearMatch && endYearMatch;
    });
  }, [presidents, areFiltersActive, nameQuery, startYearQuery, endYearQuery, periodQuery]);

  const handleApplyFilters = (filters: { name: string; startYear: string; endYear: string; period: string }) => {
    setNameQuery(filters.name);
    setStartYearQuery(filters.startYear);
    setEndYearQuery(filters.endYear);
    setPeriodQuery(filters.period);
    setIsSearchPopupOpen(false);
  };
  
  const handleClearFilters = () => {
    setNameQuery('');
    setStartYearQuery('');
    setEndYearQuery('');
    setPeriodQuery('');
  };

  const handleLearnMore = useCallback(async (president: President) => {
    setIsRagModalOpen(true);
    setIsRagLoading(true);
    setRagContent({ title: president.name, text: '', imageUrl: president.imageUrl });
    setRagSources([]);

    try {
      const apiKey = process.env.GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API_KEY environment variable not set");
      }
      const ai = new GoogleGenAI({ apiKey: apiKey as string });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Tell me a brief history about the US President ${president.name}, written in an engaging and accessible tone. Focus on their rise to power, key events during their presidency, and their legacy. Keep it concise, around 3-4 paragraphs.`,
        config: {
          tools: [{googleSearch: {}}],
        },
      });

      setRagContent({ title: president.name, text: response.text, imageUrl: president.imageUrl });
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const sources = (groundingChunks as any[] || [])
        .map(chunk => chunk.web)
        .filter((web): web is GroundingSource => !!(web?.uri && web.title));
      
      const uniqueSources = Array.from(new Map(sources.map(item => [item.uri, item])).values());
      setRagSources(uniqueSources);

    } catch (error) {
      console.error("Error fetching data from Gemini API", error);
      setRagContent({ title: president.name, text: t('rag.errorDetailed'), imageUrl: president.imageUrl });
    } finally {
      setIsRagLoading(false);
    }
  }, []);

  const handleFastForward = () => {
    if (isReversed) {
      setIsReversed(false);
      setSpeedMultiplier(1);
    } else {
      setSpeedMultiplier(prev => (prev < 8 ? prev * 2 : 1));
    }
    setIsManualPaused(false);
  };

  const handleRewind = () => {
    if (!isReversed) {
      setIsReversed(true);
      setSpeedMultiplier(1);
    } else {
      setSpeedMultiplier(prev => (prev < 8 ? prev * 2 : 1));
    }
    setIsManualPaused(false);
  };

  const handleResetSpeed = () => {
    setSpeedMultiplier(1);
    setIsReversed(false);
    setIsManualPaused(false);
  };

  const closeRagModal = () => setIsRagModalOpen(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start pt-24 relative overflow-hidden bg-slate-900">
      <div className="absolute top-0 left-0 right-0 p-4 bg-slate-900/70 backdrop-blur-md z-20 border-b border-slate-700">
        <div className="relative flex justify-center items-center w-full">
          <div className="absolute left-0">
            <button
              onClick={onBack}
              className="px-3 md:px-6 py-2 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-500/50 flex items-center justify-center gap-2"
              aria-label="Back to Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden md:inline">{t('review.back')}</span>
            </button>
          </div>
          <div className="absolute right-0">
            <button
                onClick={() => setIsSearchPopupOpen(true)}
                className="px-3 md:px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 flex items-center justify-center gap-2"
                aria-label="Open search and filter options"
            >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <span className="hidden md:inline">{t('review.searchAndFilter')}</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 whitespace-nowrap">{t('review.title')}</h1>
            <p className="text-xs sm:text-sm text-white mt-2">
              {areFiltersActive
                ? t('review.foundResults', { count: filteredPresidents.length })
                : t('review.hoverToPause')
              }
            </p>
          </div>
        </div>
      </div>
      
      <SearchPopup 
        isOpen={isSearchPopupOpen}
        onClose={() => setIsSearchPopupOpen(false)}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
        initialValues={{ name: nameQuery, startYear: startYearQuery, endYear: endYearQuery, period: periodQuery }}
      />

      {areFiltersActive ? (
        <div className="w-full overflow-y-auto px-4 pt-4 pb-4 flex-grow">
          {filteredPresidents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-[100rem] mx-auto">
              {filteredPresidents.map(president => (
                <ReviewCard
                  key={president.id}
                  president={president}
                  onClick={() => handleLearnMore(president)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-slate-400 mt-20 flex flex-col items-center">
              <svg className="w-24 h-24 text-slate-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z" />
              </svg>
              <h2 className="text-2xl font-bold text-slate-300">{t('review.noResults')}</h2>
              <p className="mt-2">{t('review.adjustFilters')}</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <div
            className="absolute inset-x-0 top-24 bottom-0 flex items-start pt-4 md:pt-8"
            onTouchStart={() => setIsTouched(true)}
            onTouchEnd={() => setIsTouched(false)}
            onTouchCancel={() => setIsTouched(false)}
          >
            <div 
              ref={carouselRef}
              className="flex animate-scroll-continuous"
              style={{ 
                animationDuration: `${animationDuration}s`,
              }}
            >
              {[...presidents, ...presidents].map((president, index) => (
                <div key={`${president.id}-${index}`} className="w-80 mx-4 flex-shrink-0">
                  <ReviewCard
                    president={president}
                    onMouseEnter={() => setIsHoverPaused(true)}
                    onMouseLeave={() => setIsHoverPaused(false)}
                    onClick={() => handleLearnMore(president)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
          
          {/* Carousel Controls */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700 shadow-2xl z-30">
            <div className="flex flex-col items-center mr-4">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">{t('review.speed')}</span>
              <span className="text-sm font-mono text-blue-400 font-bold">{isReversed ? '-' : ''}{speedMultiplier}x</span>
            </div>
            
            <button 
              onClick={handleRewind}
              className={`p-2 rounded-full transition-all ${isReversed ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              title="Fast Reverse"
            >
              <Rewind size={24} fill={isReversed ? "currentColor" : "none"} />
            </button>
            
            <button 
              onClick={() => setIsManualPaused(!isManualPaused)}
              className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg"
              title={isManualPaused ? "Play" : "Pause"}
            >
              {isManualPaused ? <Play size={24} fill="currentColor" /> : <Pause size={24} fill="currentColor" />}
            </button>
            
            <button 
              onClick={handleFastForward}
              className={`p-2 rounded-full transition-all ${(!isReversed && speedMultiplier > 1) ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              title="Fast Forward"
            >
              <FastForward size={24} fill={(!isReversed && speedMultiplier > 1) ? "currentColor" : "none"} />
            </button>
            
            <button 
              onClick={handleResetSpeed}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-all ml-2"
              title="Reset Speed"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </>
      )}

      <RAGModal
        isOpen={isRagModalOpen}
        isLoading={isRagLoading}
        content={ragContent}
        sources={ragSources}
        onClose={closeRagModal}
      />
    </div>
  );
};

export default ReviewScreen;