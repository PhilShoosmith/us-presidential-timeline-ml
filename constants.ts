export const ROUNDS_PER_GAME = 10;
export const YEAR_TOLERANCE = 1; // Guesses within this many years are correct
export const TIMELINE_START_YEAR = 1780;
export const TIMELINE_END_YEAR = 2040;
export const ROUND_DURATION_SECONDS = 30;

export const HISTORICAL_PERIODS = [
  { name: 'Early Republic', start: 1789, end: 1849, color: 'bg-cyan-900/50', textColor: 'text-cyan-300', borderColor: 'border-cyan-700', hoverBorder: 'hover:border-cyan-700', timelineColor: 'bg-cyan-600' },
  { name: 'Civil War & Industrialization', start: 1849, end: 1901, color: 'bg-amber-900/50', textColor: 'text-amber-300', borderColor: 'border-amber-700', hoverBorder: 'hover:border-amber-700', timelineColor: 'bg-amber-600' },
  { name: 'The American Century', start: 1901, end: 1969, color: 'bg-indigo-900/50', textColor: 'text-indigo-300', borderColor: 'border-indigo-700', hoverBorder: 'hover:border-indigo-700', timelineColor: 'bg-indigo-600' },
  { name: 'Modern America', start: 1969, end: 2040, color: 'bg-rose-900/50', textColor: 'text-rose-300', borderColor: 'border-rose-700', hoverBorder: 'hover:border-rose-700', timelineColor: 'bg-rose-600' },
];