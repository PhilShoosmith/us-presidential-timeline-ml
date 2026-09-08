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

export type CareerCategory = 
  | 'education'
  | 'military'
  | 'early_career'
  | 'state_local'
  | 'federal_diplomatic'
  | 'presidency'
  | 'post_presidency';

export interface CareerNode {
  id: string;
  category: CareerCategory;
  role: string;
  organization?: string;
  location?: string;
  years: string;
  details: string;
  highlight?: boolean;
}

export interface PresidentCareerProfile {
  presidentId: number;
  presidentName: string;
  highestEducation: string;
  almaMater: string;
  primaryField: string;
  steppingStoneRole: string;
  treeNodes: CareerNode[];
}
