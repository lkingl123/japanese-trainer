'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import { getProgress } from '@/lib/storage';
import { JlptLevel } from '@/lib/types';

interface VocabCat { id: string; name: string; emoji: string; jlptLevel: string; wordCount: number; }

async function loadCategories(level: JlptLevel): Promise<VocabCat[]> {
  switch (level) {
    case 'N5': return (await import('@/data/vocab/n5')).n5Categories;
    case 'N4': return (await import('@/data/vocab/n4')).n4Categories;
    case 'N3': return (await import('@/data/vocab/n3')).n3Categories;
  }
}

export default function VocabPage() {
  const [activeLevel, setActiveLevel] = useState<JlptLevel>('N5');
  const [categories, setCategories] = useState<VocabCat[]>([]);
  const [unlockedLevels, setUnlockedLevels] = useState<JlptLevel[]>(['N5']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProgress().then((p) => setUnlockedLevels(p.unlockedLevels));
  }, []);

  useEffect(() => {
    setLoading(true);
    loadCategories(activeLevel).then((cats) => { setCategories(cats); setLoading(false); });
  }, [activeLevel]);

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-bold mb-1">Vocabulary</h1>
      <p className="text-text-secondary text-sm mb-4">Learn words by category</p>

      <div className="flex gap-2 mb-6">
        {(['N5', 'N4', 'N3'] as const).map((level) => {
          const unlocked = unlockedLevels.includes(level);
          return (
            <button key={level} onClick={() => unlocked && setActiveLevel(level)} disabled={!unlocked}
              className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-all ${
                activeLevel === level ? 'bg-primary text-white'
                : unlocked ? 'bg-bg-card text-text hover:bg-primary/5'
                : 'bg-black/5 text-text-secondary cursor-not-allowed'
              }`}>
              {unlocked ? level : `🔒 ${level}`}
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="text-center py-12 text-text-secondary">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/vocab/${activeLevel.toLowerCase()}/${cat.id}`}>
              <Card>
                <div className="text-center py-2">
                  <span className="text-3xl block mb-2">{cat.emoji}</span>
                  <p className="font-semibold text-sm">{cat.name}</p>
                  <p className="text-xs text-text-secondary mt-1">{cat.wordCount} words</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
