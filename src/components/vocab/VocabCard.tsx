'use client';

import { useState, useEffect } from 'react';
import { VocabWord } from '@/lib/types';
import AudioButton from '@/components/ui/AudioButton';
import Badge from '@/components/ui/Badge';
import { getMasteryLevel, getMasteryLabel } from '@/lib/srs';

interface VocabCardProps {
  word: VocabWord;
}

export default function VocabCard({ word }: VocabCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [mastery, setMastery] = useState(-1);

  useEffect(() => {
    getMasteryLevel(word.id).then(setMastery);
  }, [word.id]);

  const masteryLabel = getMasteryLabel(mastery);

  return (
    <div
      className="bg-bg-card rounded-2xl p-5 shadow-sm cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
      onClick={() => setRevealed(!revealed)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold text-text">{word.romaji}</span>
          <AudioButton japanese={word.japanese} size="sm" />
        </div>
        <Badge variant={mastery >= 3 ? 'success' : mastery >= 0 ? 'warning' : 'default'}>
          {masteryLabel}
        </Badge>
      </div>

      <p className="text-xs text-text-secondary mb-2">{word.partOfSpeech}</p>

      {revealed ? (
        <div className="slide-up">
          <p className="text-lg text-primary font-medium">{word.english}</p>
          <p className="text-xs text-text-secondary mt-1">tap to hide</p>
        </div>
      ) : (
        <p className="text-sm text-text-secondary">tap to reveal meaning</p>
      )}
    </div>
  );
}
