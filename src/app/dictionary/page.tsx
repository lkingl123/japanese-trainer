'use client';

import { useEffect, useState } from 'react';
import { getProgress, unmarkVerbKnown } from '@/lib/storage';
import { verbs, getSyllabus, WEEK_LENGTH } from '@/data/verbs/dictionary';
import { UserProgress } from '@/lib/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import AudioButton from '@/components/ui/AudioButton';

export default function DictionaryPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [query, setQuery] = useState('');
  const [onlyLearned, setOnlyLearned] = useState(false);

  useEffect(() => {
    getProgress().then(setProgress);
  }, []);

  const records = progress?.records ?? {};
  const known = new Set(progress?.knownVerbIds ?? []);
  // Week numbers come from the active syllabus, not the raw dictionary —
  // skipping a verb shifts everything after it up a slot.
  const syllabus = getSyllabus(progress?.knownVerbIds ?? []);
  const q = query.trim().toLowerCase();

  const filtered = verbs.filter((v) => {
    if (onlyLearned && !records[v.id]) return false;
    if (!q) return true;
    return (
      v.masu.toLowerCase().includes(q) ||
      v.english.toLowerCase().includes(q) ||
      v.sound.toLowerCase().includes(q) ||
      (v.hook?.toLowerCase().includes(q) ?? false)
    );
  });

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-bold mb-4">
        Dictionary{' '}
        <span className="text-sm font-normal text-text-secondary">
          {verbs.length} verbs
        </span>
      </h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search…"
        className="w-full px-4 py-3 rounded-xl bg-bg-card border-2 border-transparent focus:border-primary outline-none text-sm mb-3"
      />

      <button
        onClick={() => setOnlyLearned((v) => !v)}
        className={`mb-5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          onlyLearned ? 'bg-primary text-white' : 'bg-black/5 text-text-secondary'
        }`}
      >
        {onlyLearned ? '✓ Learned only' : 'Learned only'}
      </button>

      {filtered.length === 0 ? (
        <p className="text-center py-12 text-text-secondary text-sm">No matches.</p>
      ) : (
        <div className="space-y-2.5">
          {filtered.map((verb) => {
            const record = records[verb.id];
            const total = record ? record.correctCount + record.incorrectCount : 0;
            const accuracy = total > 0 ? Math.round((record.correctCount / total) * 100) : null;
            const position = syllabus.indexOf(verb);
            const week = position < 0 ? null : Math.floor(position / WEEK_LENGTH) + 1;

            return (
              <Card key={verb.id}>
                <div className="flex items-start gap-3">
                  <span className="w-24 shrink-0 px-2 py-1 rounded-lg text-[10px] leading-tight font-bold tracking-wider text-center bg-primary/10 text-primary">
                    {verb.sound}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-bold truncate">{verb.masu}</p>
                      {record && accuracy !== null && (
                        <Badge variant={accuracy >= 80 ? 'success' : accuracy >= 50 ? 'warning' : 'error'}>
                          {accuracy}%
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary">{verb.english}</p>
                    {verb.hook && (
                      <p className="text-xs text-text-secondary mt-1.5 italic">
                        <span
                          className={`not-italic font-bold mr-1 ${
                            verb.hookKind === 'dota' ? 'text-primary' : 'text-text-secondary'
                          }`}
                        >
                          {verb.hookKind === 'dota' ? 'Dota' : 'Gen'}
                        </span>
                        {verb.hook}
                      </p>
                    )}
                    {known.has(verb.id) && (
                      <p className="text-[10px] text-text-secondary mt-1.5">
                        Skipped — you marked this known ·{' '}
                        <button
                          onClick={() => setProgress(unmarkVerbKnown(verb.id))}
                          className="underline hover:text-text"
                        >
                          put it back
                        </button>
                      </p>
                    )}
                    <p className="text-[10px] text-text-secondary mt-1.5">
                      {week === null ? 'Not in the course' : `Week ${week}`}
                      {record ? ` · learned ${record.learnedOn}` : ' · not yet learned'}
                    </p>
                  </div>

                  <AudioButton japanese={verb.japanese} size="sm" />
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
