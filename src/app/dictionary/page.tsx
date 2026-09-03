'use client';

import { useEffect, useState } from 'react';
import { getProgress } from '@/lib/storage';
import { verbs, WEEK_LENGTH } from '@/data/verbs/dictionary';
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
  const q = query.trim().toLowerCase();

  const filtered = verbs.filter((v) => {
    if (onlyLearned && !records[v.id]) return false;
    if (!q) return true;
    return (
      v.masu.toLowerCase().includes(q) ||
      v.english.toLowerCase().includes(q) ||
      (v.code?.toLowerCase().includes(q) ?? false) ||
      (v.connection?.toLowerCase().includes(q) ?? false)
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
            const week = Math.floor(verbs.indexOf(verb) / WEEK_LENGTH) + 1;

            return (
              <Card key={verb.id}>
                <div className="flex items-start gap-3">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-sm font-bold shrink-0 ${
                      verb.code ? 'bg-primary/10 text-primary' : 'bg-black/5 text-text-secondary'
                    }`}
                  >
                    {verb.code ?? '—'}
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
                    {verb.connection && (
                      <p className="text-xs text-text-secondary mt-1.5 italic">{verb.connection}</p>
                    )}
                    <p className="text-[10px] text-text-secondary mt-1.5">
                      Week {week}
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
