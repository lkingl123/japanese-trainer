'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { getProgress } from '@/lib/storage';
import { GrammarPattern, JlptLevel } from '@/lib/types';

async function loadGrammarPatterns(level: JlptLevel): Promise<GrammarPattern[]> {
  switch (level) {
    case 'N5': return (await import('@/data/grammar/n5')).n5Grammar;
    case 'N4': return (await import('@/data/grammar/n4')).n4Grammar;
    case 'N3': return (await import('@/data/grammar/n3')).n3Grammar;
  }
}

export default function GrammarPage() {
  const [activeLevel, setActiveLevel] = useState<JlptLevel>('N5');
  const [patterns, setPatterns] = useState<GrammarPattern[]>([]);
  const [unlockedLevels, setUnlockedLevels] = useState<JlptLevel[]>(['N5']);
  const [grammarMastery, setGrammarMastery] = useState<Record<string, { completed: boolean; score: number }>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProgress().then((p) => {
      setUnlockedLevels(p.unlockedLevels);
      setGrammarMastery(p.grammarMastery);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    loadGrammarPatterns(activeLevel).then((p) => { setPatterns(p); setLoading(false); });
  }, [activeLevel]);

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-bold mb-1">Grammar</h1>
      <p className="text-text-secondary text-sm mb-4">Master Japanese grammar patterns</p>

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
        <div className="space-y-2">
          {patterns.map((pattern, index) => {
            const mastery = grammarMastery[pattern.id];
            return (
              <Link key={pattern.id} href={`/grammar/${pattern.id}`}>
                <Card className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-text-secondary font-mono w-6">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-semibold text-sm">{pattern.pattern}</p>
                      <p className="text-xs text-text-secondary">{pattern.meaning}</p>
                    </div>
                  </div>
                  {mastery ? (
                    <Badge variant={mastery.score >= 80 ? 'success' : mastery.score >= 50 ? 'warning' : 'error'}>{mastery.score}%</Badge>
                  ) : (
                    <span className="text-text-secondary text-sm">→</span>
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
