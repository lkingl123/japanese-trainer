'use client';

import { useState } from 'react';
import { SentenceBuildExercise } from '@/lib/types';
import Button from '@/components/ui/Button';

interface SentenceBuildProps {
  exercise: SentenceBuildExercise;
  onAnswer: (correct: boolean) => void;
}

export default function SentenceBuild({ exercise, onAnswer }: SentenceBuildProps) {
  const [placed, setPlaced] = useState<string[]>([]);
  const [available, setAvailable] = useState<string[]>([...exercise.words]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handlePlace = (word: string, index: number) => {
    if (submitted) return;
    setPlaced([...placed, word]);
    setAvailable(available.filter((_, i) => i !== index));
  };

  const handleRemove = (index: number) => {
    if (submitted) return;
    const word = placed[index];
    setPlaced(placed.filter((_, i) => i !== index));
    setAvailable([...available, word]);
  };

  const handleSubmit = () => {
    const correct = placed.length === exercise.answer.length &&
      placed.every((w, i) => w === exercise.answer[i]);
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  return (
    <div className="slide-up">
      <p className="text-sm text-text-secondary mb-2">Build the sentence:</p>
      <p className="text-base font-medium mb-4">{exercise.english}</p>

      {/* Placed words area */}
      <div className={`min-h-[3.5rem] rounded-2xl p-3 mb-4 flex flex-wrap gap-2 ${
        submitted
          ? isCorrect
            ? 'bg-success/10 border-2 border-success'
            : 'bg-error/10 border-2 border-error'
          : 'bg-bg-card border-2 border-dashed border-black/10'
      }`}>
        {placed.length === 0 && !submitted && (
          <span className="text-text-secondary text-sm py-1">Tap words below to build the sentence...</span>
        )}
        {placed.map((word, i) => (
          <button
            key={`${word}-${i}`}
            onClick={() => handleRemove(i)}
            disabled={submitted}
            className="bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2 mb-4">
        {available.map((word, i) => (
          <button
            key={`${word}-${i}`}
            onClick={() => handlePlace(word, i)}
            disabled={submitted}
            className="bg-bg-card border border-black/10 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-primary/30 transition-colors"
          >
            {word}
          </button>
        ))}
      </div>

      {!submitted && placed.length > 0 && (
        <Button onClick={handleSubmit} className="w-full">
          Check Answer
        </Button>
      )}

      {submitted && !isCorrect && (
        <p className="text-sm text-error text-center mt-2">
          Correct: <strong>{exercise.answer.join(' ')}</strong>
        </p>
      )}
    </div>
  );
}
