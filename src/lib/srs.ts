import { SrsCard, VocabWord } from './types';
import { getProgress } from './storage';

const SRS_INTERVALS = [0, 1, 3, 7, 14, 30]; // days per level 0-5

export function isDueForReview(card: SrsCard): boolean {
  const today = new Date().toISOString().split('T')[0];
  return card.nextReview <= today;
}

export function getNextReviewDate(level: number): string {
  const date = new Date();
  date.setDate(date.getDate() + SRS_INTERVALS[Math.min(level, 5)]);
  return date.toISOString().split('T')[0];
}

export async function getDueWords(words: VocabWord[]): Promise<VocabWord[]> {
  const progress = await getProgress();
  const today = new Date().toISOString().split('T')[0];

  return words.filter((word) => {
    const card = progress.vocabMastery[word.id];
    if (!card) return true; // never seen = due
    return card.nextReview <= today;
  });
}

export async function getNewWords(words: VocabWord[], limit: number = 10): Promise<VocabWord[]> {
  const progress = await getProgress();
  return words
    .filter((word) => !progress.vocabMastery[word.id])
    .slice(0, limit);
}

export async function getMasteryLevel(wordId: string): Promise<number> {
  const progress = await getProgress();
  const card = progress.vocabMastery[wordId];
  return card ? card.level : -1; // -1 = not started
}

export function getMasteryLabel(level: number): string {
  switch (level) {
    case -1: return 'New';
    case 0: return 'Learning';
    case 1: return 'Familiar';
    case 2: return 'Known';
    case 3: return 'Good';
    case 4: return 'Strong';
    case 5: return 'Mastered';
    default: return 'New';
  }
}

export function getMasteryColor(level: number): string {
  switch (level) {
    case -1: return 'text-text-secondary';
    case 0: return 'text-error';
    case 1: return 'text-warning';
    case 2: return 'text-yellow-500';
    case 3: return 'text-success';
    case 4: return 'text-primary';
    case 5: return 'text-primary-dark';
    default: return 'text-text-secondary';
  }
}
