import { VocabWord } from '@/lib/types';

// Re-export all N4 vocabulary arrays
export { n4EmotionsPersonality } from './emotions-personality';
export { n4SocietyWork } from './society-work';
export { n4Education } from './education';
export { n4MovementTransport } from './movement-transport';
export { n4Communication } from './communication';
export { n4NatureScience } from './nature-science';
export { n4AbstractConcepts } from './abstract-concepts';
export { n4Verbs } from './verbs';
export { n4Adjectives } from './adjectives';

// Import for aggregation
import { n4EmotionsPersonality } from './emotions-personality';
import { n4SocietyWork } from './society-work';
import { n4Education } from './education';
import { n4MovementTransport } from './movement-transport';
import { n4Communication } from './communication';
import { n4NatureScience } from './nature-science';
import { n4AbstractConcepts } from './abstract-concepts';
import { n4Verbs } from './verbs';
import { n4Adjectives } from './adjectives';

export interface VocabCategory {
  id: string;
  name: string;
  emoji: string;
  jlptLevel: 'N4';
  wordCount: number;
}

export const n4Categories: VocabCategory[] = [
  { id: 'emotions-personality', name: 'Emotions & Personality', emoji: '😊', jlptLevel: 'N4', wordCount: n4EmotionsPersonality.length },
  { id: 'society-work', name: 'Society & Work', emoji: '🏢', jlptLevel: 'N4', wordCount: n4SocietyWork.length },
  { id: 'education', name: 'Education', emoji: '📚', jlptLevel: 'N4', wordCount: n4Education.length },
  { id: 'movement-transport', name: 'Movement & Transport', emoji: '🚃', jlptLevel: 'N4', wordCount: n4MovementTransport.length },
  { id: 'communication', name: 'Communication', emoji: '💬', jlptLevel: 'N4', wordCount: n4Communication.length },
  { id: 'nature-science', name: 'Nature & Science', emoji: '🌿', jlptLevel: 'N4', wordCount: n4NatureScience.length },
  { id: 'abstract-concepts', name: 'Abstract Concepts', emoji: '💭', jlptLevel: 'N4', wordCount: n4AbstractConcepts.length },
  { id: 'verbs', name: 'Verbs', emoji: '🏃', jlptLevel: 'N4', wordCount: n4Verbs.length },
  { id: 'adjectives', name: 'Adjectives', emoji: '🎨', jlptLevel: 'N4', wordCount: n4Adjectives.length },
];

export const allN4Vocab: VocabWord[] = [
  ...n4EmotionsPersonality,
  ...n4SocietyWork,
  ...n4Education,
  ...n4MovementTransport,
  ...n4Communication,
  ...n4NatureScience,
  ...n4AbstractConcepts,
  ...n4Verbs,
  ...n4Adjectives,
];
