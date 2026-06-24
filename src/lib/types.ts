export type Locale = 'en' | 'es' | 'pt';

export type TranslationDict = {
  siteTitle: string;
  siteTagline: string;
  home: string;
  language: string;
  allRightsReserved: string;
  across: string;
  down: string;
  check: string;
  reveal: string;
  reset: string;
  completed: string;
  congratulations: string;
  time: string;
 提示: string;
  nextPuzzle: string;
  dailyPuzzle: string;
};

export type PuzzleCell = {
  row: number;
  col: number;
  answer: string; // correct letter
  clueNumber?: number; // clue number if start of word
  isBlack: boolean; // black cell
};

export type PuzzleClue = {
  number: number;
  text: string;
  answer: string;
  startRow: number;
  startCol: number;
};

export type Puzzle = {
  title: string;
  date: string;
  grid: string[][]; // 2D array of letters, '.' for black cells
  across: { number: number; clue: string }[];
  down: { number: number; clue: string }[];
  width: number;
  height: number;
};
