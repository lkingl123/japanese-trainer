// ===== Vocab Types =====
export type JlptLevel = 'N5' | 'N4' | 'N3';

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'i-adjective'
  | 'na-adjective'
  | 'adverb'
  | 'particle'
  | 'counter'
  | 'expression'
  | 'conjunction'
  | 'prefix'
  | 'suffix';

export interface VocabWord {
  id: string;
  romaji: string;
  japanese: string; // hidden from user, used for TTS
  english: string;
  category: string;
  jlptLevel: JlptLevel;
  partOfSpeech: PartOfSpeech;
}

export interface VocabCategory {
  id: string;
  name: string;
  emoji: string;
  jlptLevel: JlptLevel;
  wordCount: number;
}

// ===== Grammar Types =====
export interface GrammarExample {
  japanese: string; // for TTS
  romaji: string;
  english: string;
}

export interface FillBlankExercise {
  type: 'fill-blank';
  sentence: string; // romaji with ___ for blank
  answer: string;
  options: string[];
  english: string;
}

export interface SentenceBuildExercise {
  type: 'sentence-build';
  english: string;
  words: string[]; // scrambled romaji words
  answer: string[]; // correct order
}

export interface MultipleChoiceExercise {
  type: 'multiple-choice';
  question: string;
  options: string[];
  answer: string;
  english: string;
}

export type GrammarExercise = FillBlankExercise | SentenceBuildExercise | MultipleChoiceExercise;

export interface GrammarPattern {
  id: string;
  pattern: string; // romaji pattern name
  meaning: string;
  jlptLevel: JlptLevel;
  explanation: string;
  structure: string;
  examples: GrammarExample[];
  exercises: GrammarExercise[];
}

// ===== SRS Types =====
export interface SrsCard {
  wordId: string;
  level: number; // 0-5
  nextReview: string; // ISO date string
  lastReviewed: string | null;
  correctCount: number;
  incorrectCount: number;
}

// ===== Progress Types =====
export interface UserProgress {
  xp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  dailyChallengeDate: string | null; // last completed daily challenge date
  vocabMastery: Record<string, SrsCard>; // wordId -> SrsCard
  grammarMastery: Record<string, { completed: boolean; score: number }>; // patternId -> mastery
  unlockedLevels: JlptLevel[];
}

// ===== Quiz Types =====
export interface QuizQuestion {
  id: string;
  type: 'hear-pick-meaning' | 'see-english-pick-romaji';
  word: VocabWord;
  options: string[];
  correctAnswer: string;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  xpEarned: number;
  isPerfect: boolean;
  wrongWords: VocabWord[];
}

// ===== Daily Challenge Types =====
export interface DailyChallenge {
  date: string;
  vocabQuestions: QuizQuestion[];
  grammarExercises: GrammarExercise[];
  completed: boolean;
  score: number;
}
