import { VocabWord } from '@/lib/types';
import { n5DailyLife } from './daily-life';
import { n5FoodDrink } from './food-drink';
import { n5Travel } from './travel';
import { n5PeopleFamily } from './people-family';
import { n5TimeNumbers } from './time-numbers';
import { n5NatureWeather } from './nature-weather';
import { n5HomeObjects } from './home-objects';
import { n5BodyHealth } from './body-health';
import { n5Verbs } from './verbs';
import { n5Adjectives } from './adjectives';

export {
  n5DailyLife,
  n5FoodDrink,
  n5Travel,
  n5PeopleFamily,
  n5TimeNumbers,
  n5NatureWeather,
  n5HomeObjects,
  n5BodyHealth,
  n5Verbs,
  n5Adjectives,
};

export interface VocabCategory {
  id: string;
  name: string;
  emoji: string;
  jlptLevel: 'N5';
  wordCount: number;
}

// IDs match the `category` field on each word
export const n5Categories: VocabCategory[] = [
  { id: 'daily-life', name: 'Daily Life', emoji: '🗣️', jlptLevel: 'N5', wordCount: n5DailyLife.length },
  { id: 'food-drink', name: 'Food & Drink', emoji: '🍱', jlptLevel: 'N5', wordCount: n5FoodDrink.length },
  { id: 'travel', name: 'Travel & Places', emoji: '🚃', jlptLevel: 'N5', wordCount: n5Travel.length },
  { id: 'people-family', name: 'People & Family', emoji: '👨‍👩‍👧‍👦', jlptLevel: 'N5', wordCount: n5PeopleFamily.length },
  { id: 'time-numbers', name: 'Time & Numbers', emoji: '🔢', jlptLevel: 'N5', wordCount: n5TimeNumbers.length },
  { id: 'nature-weather', name: 'Nature & Weather', emoji: '🌸', jlptLevel: 'N5', wordCount: n5NatureWeather.length },
  { id: 'home-objects', name: 'Home & Objects', emoji: '🏠', jlptLevel: 'N5', wordCount: n5HomeObjects.length },
  { id: 'body-health', name: 'Body & Health', emoji: '💪', jlptLevel: 'N5', wordCount: n5BodyHealth.length },
  { id: 'verbs', name: 'Verbs', emoji: '🏃', jlptLevel: 'N5', wordCount: n5Verbs.length },
  { id: 'adjectives', name: 'Adjectives', emoji: '🎨', jlptLevel: 'N5', wordCount: n5Adjectives.length },
];

export const allN5Vocab: VocabWord[] = [
  ...n5DailyLife,
  ...n5FoodDrink,
  ...n5Travel,
  ...n5PeopleFamily,
  ...n5TimeNumbers,
  ...n5NatureWeather,
  ...n5HomeObjects,
  ...n5BodyHealth,
  ...n5Verbs,
  ...n5Adjectives,
];
