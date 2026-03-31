import { VocabWord } from '@/lib/types';
import { n3AdvancedDaily } from './advanced-daily';
import { n3BusinessEconomy } from './business-economy';
import { n3CultureArts } from './culture-arts';
import { n3ScienceTechnology } from './science-technology';
import { n3AbstractFormal } from './abstract-formal';
import { n3Verbs } from './verbs';
import { n3Adjectives } from './adjectives';

export interface VocabCategory {
  id: string;
  name: string;
  emoji: string;
  jlptLevel: 'N3';
  wordCount: number;
}

// IDs match the `category` field on each word
export const n3Categories: VocabCategory[] = [
  { id: 'advanced-daily', name: 'Advanced Daily Life', emoji: '🏙️', jlptLevel: 'N3', wordCount: n3AdvancedDaily.length },
  { id: 'business-economy', name: 'Business & Economy', emoji: '💼', jlptLevel: 'N3', wordCount: n3BusinessEconomy.length },
  { id: 'culture-arts', name: 'Culture & Arts', emoji: '🎭', jlptLevel: 'N3', wordCount: n3CultureArts.length },
  { id: 'science-technology', name: 'Science & Technology', emoji: '🔬', jlptLevel: 'N3', wordCount: n3ScienceTechnology.length },
  { id: 'abstract-formal', name: 'Abstract & Formal', emoji: '📜', jlptLevel: 'N3', wordCount: n3AbstractFormal.length },
  { id: 'n3-verbs', name: 'Advanced Verbs', emoji: '⚡', jlptLevel: 'N3', wordCount: n3Verbs.length },
  { id: 'n3-adjectives', name: 'Advanced Adjectives', emoji: '🎨', jlptLevel: 'N3', wordCount: n3Adjectives.length },
];

export const allN3Vocab: VocabWord[] = [
  ...n3AdvancedDaily,
  ...n3BusinessEconomy,
  ...n3CultureArts,
  ...n3ScienceTechnology,
  ...n3AbstractFormal,
  ...n3Verbs,
  ...n3Adjectives,
];
