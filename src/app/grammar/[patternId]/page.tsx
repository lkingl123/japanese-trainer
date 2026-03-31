'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { GrammarPattern } from '@/lib/types';
import PatternLearn from '@/components/grammar/PatternLearn';
import GrammarExerciseComponent from '@/components/grammar/GrammarExercise';

async function loadPattern(patternId: string): Promise<GrammarPattern | null> {
  const level = patternId.split('-')[0];
  let patterns: GrammarPattern[] = [];
  if (level === 'n5') patterns = (await import('@/data/grammar/n5')).n5Grammar;
  else if (level === 'n4') patterns = (await import('@/data/grammar/n4')).n4Grammar;
  else if (level === 'n3') patterns = (await import('@/data/grammar/n3')).n3Grammar;
  return patterns.find((p) => p.id === patternId) || null;
}

export default function PatternPage() {
  const params = useParams();
  const router = useRouter();
  const patternId = params.patternId as string;
  const [pattern, setPattern] = useState<GrammarPattern | null>(null);
  const [tab, setTab] = useState<'learn' | 'practice'>('learn');
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadPattern(patternId).then((p) => { setPattern(p); setLoading(false); }); }, [patternId]);

  if (loading || !pattern) return <div className="flex items-center justify-center min-h-screen text-text-secondary">Loading...</div>;

  return (
    <div className="px-4 pt-6">
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => router.back()} className="text-xl">←</button>
        <div>
          <h1 className="text-xl font-bold">{pattern.pattern}</h1>
          <p className="text-sm text-text-secondary">{pattern.meaning}</p>
        </div>
      </div>
      <div className="flex gap-2 mb-6">
        <button onClick={() => setTab('learn')}
          className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-all ${tab === 'learn' ? 'bg-primary text-white' : 'bg-bg-card text-text'}`}>
          📖 Learn
        </button>
        <button onClick={() => setTab('practice')}
          className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-all ${tab === 'practice' ? 'bg-primary text-white' : 'bg-bg-card text-text'}`}>
          🎯 Practice
        </button>
      </div>
      {tab === 'learn' ? <PatternLearn pattern={pattern} /> : <GrammarExerciseComponent pattern={pattern} />}
    </div>
  );
}
