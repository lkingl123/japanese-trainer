'use client';

import { GrammarPattern } from '@/lib/types';
import AudioButton from '@/components/ui/AudioButton';
import Badge from '@/components/ui/Badge';

interface PatternLearnProps {
  pattern: GrammarPattern;
}

export default function PatternLearn({ pattern }: PatternLearnProps) {
  return (
    <div className="space-y-4 slide-up">
      <div className="bg-bg-card rounded-2xl p-5 shadow-sm">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-xl font-bold text-primary">{pattern.pattern}</h2>
          <Badge variant="primary">{pattern.jlptLevel}</Badge>
        </div>
        <p className="text-lg font-medium text-text mb-2">{pattern.meaning}</p>
        <p className="text-text-secondary text-sm leading-relaxed">{pattern.explanation}</p>
      </div>

      <div className="bg-bg-card rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold mb-1 text-sm text-text-secondary uppercase tracking-wide">Structure</h3>
        <p className="text-lg font-mono bg-primary/5 px-3 py-2 rounded-lg text-primary">{pattern.structure}</p>
      </div>

      <div className="bg-bg-card rounded-2xl p-5 shadow-sm">
        <h3 className="font-semibold mb-3 text-sm text-text-secondary uppercase tracking-wide">Examples</h3>
        <div className="space-y-4">
          {pattern.examples.map((ex, i) => (
            <div key={i} className="border-b border-black/5 last:border-0 pb-3 last:pb-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-base font-medium">{ex.romaji}</p>
                <AudioButton japanese={ex.japanese} size="sm" />
              </div>
              <p className="text-sm text-text-secondary">{ex.english}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
