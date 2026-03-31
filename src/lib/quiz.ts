import { VocabWord, QuizQuestion } from './types';

// Seeded random for daily challenges
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

export function getDateSeed(date?: string): number {
  const d = date || new Date().toISOString().split('T')[0];
  let hash = 0;
  for (let i = 0; i < d.length; i++) {
    hash = (hash << 5) - hash + d.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function shuffle<T>(arr: T[], rng?: () => number): T[] {
  const shuffled = [...arr];
  const random = rng || Math.random;
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function generateQuizQuestions(
  words: VocabWord[],
  count: number = 10,
  rng?: () => number
): QuizQuestion[] {
  if (words.length < 4) return [];
  const random = rng || Math.random;
  const selected = shuffle(words, () => random()).slice(0, count);

  return selected.map((word, i) => {
    const isListening = random() > 0.5;

    // Get 3 wrong options
    const otherWords = words.filter((w) => w.id !== word.id);
    const wrongOptions = shuffle(otherWords, () => random())
      .slice(0, 3)
      .map((w) => (isListening ? w.english : w.romaji));

    const correctAnswer = isListening ? word.english : word.romaji;
    const options = shuffle([correctAnswer, ...wrongOptions], () => random());

    return {
      id: `quiz-${i}`,
      type: isListening ? 'hear-pick-meaning' : 'see-english-pick-romaji',
      word,
      options,
      correctAnswer,
    };
  });
}

export function generateDailyVocabQuestions(
  words: VocabWord[],
  date?: string
): QuizQuestion[] {
  const seed = getDateSeed(date);
  const rng = seededRandom(seed);
  return generateQuizQuestions(words, 5, rng);
}

export { shuffle, seededRandom };
