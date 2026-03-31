'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { VocabWord } from '@/lib/types';
import VocabCard from '@/components/vocab/VocabCard';
import VocabQuiz from '@/components/vocab/VocabQuiz';

async function loadWordsForCategory(level: string, categoryId: string): Promise<{ words: VocabWord[]; categoryName: string }> {
  let allWords: VocabWord[] = [];
  let categoryName = '';
  if (level === 'n5') {
    const mod = await import('@/data/vocab/n5');
    allWords = mod.allN5Vocab;
    categoryName = mod.n5Categories.find((c) => c.id === categoryId)?.name || '';
  } else if (level === 'n4') {
    const mod = await import('@/data/vocab/n4');
    allWords = mod.allN4Vocab;
    categoryName = mod.n4Categories.find((c) => c.id === categoryId)?.name || '';
  } else if (level === 'n3') {
    const mod = await import('@/data/vocab/n3');
    allWords = mod.allN3Vocab;
    categoryName = mod.n3Categories.find((c) => c.id === categoryId)?.name || '';
  }
  return { words: allWords.filter((w) => w.category === categoryId), categoryName };
}

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const level = params.level as string;
  const categoryId = params.categoryId as string;
  const [words, setWords] = useState<VocabWord[]>([]);
  const [categoryName, setCategoryName] = useState('');
  const [tab, setTab] = useState<'browse' | 'quiz'>('browse');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWordsForCategory(level, categoryId).then(({ words, categoryName }) => {
      setWords(words); setCategoryName(categoryName); setLoading(false);
    });
  }, [level, categoryId]);

  if (loading) return <div className="flex items-center justify-center min-h-screen text-text-secondary">Loading...</div>;

  return (
    <div className="px-4 pt-6">
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => router.back()} className="text-xl">←</button>
        <div>
          <h1 className="text-xl font-bold">{categoryName}</h1>
          <p className="text-sm text-text-secondary">{words.length} words · {level.toUpperCase()}</p>
        </div>
      </div>
      <div className="flex gap-2 mb-6">
        <button onClick={() => setTab('browse')}
          className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-all ${tab === 'browse' ? 'bg-primary text-white' : 'bg-bg-card text-text'}`}>
          📖 Browse
        </button>
        <button onClick={() => setTab('quiz')}
          className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-all ${tab === 'quiz' ? 'bg-primary text-white' : 'bg-bg-card text-text'}`}>
          🎯 Quiz
        </button>
      </div>
      {tab === 'browse' ? (
        <div className="space-y-3">{words.map((word) => <VocabCard key={word.id} word={word} />)}</div>
      ) : (
        <VocabQuiz words={words} />
      )}
    </div>
  );
}
