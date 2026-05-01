import React, { useState, useRef } from 'react';
import { LastYearGuess, President } from '../types';
import { TIMELINE_START_YEAR, TIMELINE_END_YEAR, YEAR_TOLERANCE, HISTORICAL_PERIODS } from '../constants';
import PartyIcon from './HouseIcon';
import { useLanguage } from '../contexts/LanguageContext';

interface TimelineProps {
  onGuess: (year: number) => void;
  disabled: boolean;
  lastGuess: LastYearGuess | null;
  allPresidents: President[];
  guessFeedback: { type: 'year'; value: number; isCorrect: boolean } | null;
}

const periodToPartyMap: { [key: string]: string } = {
  'Early Republic': 'Federalist',
  'Civil War & Industrialization': 'Republican',
  'The American Century': 'Democratic',
  'Modern America': 'Republican',
};

const periodToTranslationKey: { [key: string]: string } = {
  'Early Republic': 'period.earlyRepublic',
  'Civil War & Industrialization': 'period.civilWar',
  'The American Century': 'period.americanCentury',
  'Modern America': 'period.modernAmerica',
};

const Timeline: React.FC<TimelineProps> = ({ onGuess, disabled, lastGuess, allPresidents, guessFeedback }) => {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [hoverYear, setHoverYear] = useState<number | null>(null);

  const totalYears = TIMELINE_END_YEAR - TIMELINE_START_YEAR;

  const calculateYearFromX = (x: number) => {
    if (!timelineRef.current) return 0;
    const rect = timelineRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
    return Math.round(TIMELINE_START_YEAR + percentage * totalYears);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    setHoverYear(calculateYearFromX(e.clientX));
  };

  const handleMouseLeave = () => {
    setHoverYear(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    const year = calculateYearFromX(e.clientX);
    onGuess(year);
  };
  
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (disabled) return;
    setHoverYear(calculateYearFromX(e.touches[0].clientX));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (disabled) return;
    setHoverYear(calculateYearFromX(e.touches[0].clientX));
  };

  const handleTouchEnd = () => {
    if (disabled || hoverYear === null) return;
    onGuess(hoverYear);
    setHoverYear(null);
  };


  const yearToPercentage = (year: number) => {
    const boundedYear = Math.max(TIMELINE_START_YEAR, Math.min(TIMELINE_END_YEAR, year));
    return ((boundedYear - TIMELINE_START_YEAR) / totalYears) * 100;
  };

  const decadeMarkers = [];
  for (let year = Math.ceil(TIMELINE_START_YEAR / 10) * 10; year <= TIMELINE_END_YEAR; year += 20) {
    decadeMarkers.push(year);
  }

  return (
    <div className="w-full py-2 px-4 relative mt-2">
       {/* Historical Periods Background */}
      <div className="relative mb-3 w-full h-8 flex items-center rounded-lg overflow-hidden border border-slate-700">
        {HISTORICAL_PERIODS.map(period => (
            <div 
                key={period.name}
                className={`h-full flex items-center justify-center gap-2 px-2 ${period.color}`}
                style={{
                    position: 'absolute',
                    left: `${yearToPercentage(period.start)}%`,
                    width: `${yearToPercentage(period.end) - yearToPercentage(period.start)}%`,
                }}
            >
                <PartyIcon party={periodToPartyMap[period.name]} className={`h-5 w-5 opacity-80 ${period.textColor}`} />
                <span className={`text-sm font-semibold opacity-80 select-none ${period.textColor} hidden sm:inline`}>{t(periodToTranslationKey[period.name] || period.name)}</span>
            </div>
        ))}
      </div>

      <div
        ref={timelineRef}
        className="w-full h-3 bg-slate-700 rounded-full cursor-pointer relative touch-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden">
            {HISTORICAL_PERIODS.map(period => (
                <div
                    key={period.name}
                    aria-hidden="true"
                    className={`absolute top-0 bottom-0 h-full ${period.timelineColor}`}
                    style={{
                        left: `${yearToPercentage(period.start)}%`,
                        width: `${yearToPercentage(period.end) - yearToPercentage(period.start)}%`,
                    }}
                />
            ))}
        </div>
        
        {hoverYear && !disabled && (
          <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-20" style={{ left: `${yearToPercentage(hoverYear)}%` }}>
            <div className="h-8 w-1 bg-yellow-400 transform -translate-y-1/2 top-1/2 absolute"></div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded text-sm text-yellow-300 whitespace-nowrap">{hoverYear}</div>
          </div>
        )}

        {guessFeedback && guessFeedback.type === 'year' && (
            <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-30 transition-all duration-300" style={{ left: `${yearToPercentage(guessFeedback.value)}%` }}>
                <div className={`h-8 w-1 ${guessFeedback.isCorrect ? 'bg-green-400' : 'bg-red-500'} transform -translate-y-1/2 top-1/2 absolute animate-ping`}></div>
                <div className={`h-8 w-1 ${guessFeedback.isCorrect ? 'bg-green-400' : 'bg-red-500'} transform -translate-y-1/2 top-1/2 absolute`}></div>
            </div>
        )}

        {lastGuess && (
          <>
             <div
                className="absolute top-1/2 -translate-y-1/2 h-5 bg-green-500/30 rounded-full animate-pop-in-marker border border-green-500/50"
                style={{
                    left: `${yearToPercentage(lastGuess.correctYear - YEAR_TOLERANCE)}%`,
                    width: `${(YEAR_TOLERANCE * 2 / totalYears) * 100}%`
                }}
             />

            <div 
              className="absolute top-1/2 -translate-y-1/2 animate-pop-in-marker animation-delay-200" 
              style={{ left: `${yearToPercentage(lastGuess.correctYear)}%` }}
            >
              <div className="h-8 w-1 bg-green-400 transform -translate-y-1/2 top-1/2 absolute animate-pulse"></div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500/20 border border-green-500 px-2 py-1 rounded text-sm text-green-300 whitespace-nowrap">
                {t('timeline.correct', { year: lastGuess.correctYear })}
              </div>
            </div>

            {!lastGuess.isCorrect && !lastGuess.timedOut && (
              <div 
                className="absolute top-1/2 -translate-y-1/2 animate-pop-in-marker animation-delay-400" 
                style={{ left: `${yearToPercentage(lastGuess.guessedYear)}%` }}
              >
                 <div className="h-8 w-1 bg-red-500 transform -translate-y-1/2 top-1/2 absolute"></div>
                 <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-red-500/20 border border-red-500 px-2 py-1 rounded text-sm text-red-300 whitespace-nowrap">
                   {t('timeline.yourGuess', { year: lastGuess.guessedYear })}
                 </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="mt-4 w-full h-6 relative">
        {decadeMarkers.map(year => (
          <div
            key={year}
            className="absolute top-0"
            style={{ left: `${yearToPercentage(year)}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-px h-2 bg-slate-600"></div>
            <span className="text-xs text-slate-500 select-none">{year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;