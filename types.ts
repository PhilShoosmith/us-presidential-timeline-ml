export interface President {
  id: number;
  name: string;
  party: string;
  termStart: number;
  termEnd: number | null; // Can be null for the current president
  context: string;
  title: string;
  imageUrl?: string;
  sealUrl?: string;
}

export type GameState = 'start' | 'playing' | 'feedback' | 'end' | 'review' | 'privacy' | 'terms' | 'leaderboard';

export type GameMode = 'year' | 'president' | 'fact';

export interface LeaderboardEntry {
  name: string;
  score: number;
  totalTimeLeft: number;
  date: string;
}

export interface HighScores {
  year: LeaderboardEntry[];
  president: LeaderboardEntry[];
  fact: LeaderboardEntry[];
}

export interface LastYearGuess {
  type: 'year';
  isCorrect: boolean;
  guessedYear: number;
  correctYear: number;
  timedOut?: boolean;
}

export interface LastPresidentGuess {
  type: 'president';
  isCorrect: boolean;
  guessedPresidentId: number;
  correctPresidentId: number;
  timedOut?: boolean;
}

export interface LastFactGuess {
  type: 'fact';
  isCorrect: boolean;
  guessedPresidentId: number;
  correctPresidentId: number;
  timedOut?: boolean;
}

export type AnyLastGuess = LastYearGuess | LastPresidentGuess | LastFactGuess;