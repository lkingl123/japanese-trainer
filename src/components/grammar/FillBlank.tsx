'use client';

import { useState } from 'react';
import { FillBlankExercise } from '@/lib/types';

interface FillBlankProps {
  exercise: FillBlankExercise;
  onAnswer: (correct: boolean) => void;
}

export default function FillBlank({ exercise, onAnswer }: FillBlankProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === exercise.answer;

  const handleSelect = (option: string) => {
    if (selected !== null) return;
    setSelected(option);
    onAnswer(option === exercise.answer);
  };

  // Highlight the blank in the sentence
  const parts = exercise.sentence.split('___');

  return (
    <div className="slide-up">
      <p className="text-sm text-text-secondary mb-2">{exercise.english}</p>
      <div className="bg-bg-card rounded-2xl p-5 shadow-sm mb-4">
        <p className="text-lg">
          {parts[0]}
          <span className={`inline-block min-w-[4rem] px-2 py-0.5 mx-1 rounded-lg text-center font-semibold ${
            selected === null
              ? 'bg-primary/10 text-primary border-2 border-dashed border-primary/30'
              : isCorrect
              ? 'bg-success/10 text-success'
              : 'bg-error/10 text-error'
          }`}>
            {selected || '???'}
          </span>
          {parts[1]}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {exercise.options.map((option) => {
          let cls = 'bg-bg-card border-2 border-transparent';
          if (selected !== null) {
            if (option === exercise.answer) cls = 'bg-success/10 border-2 border-success';
            else if (option === selected) cls = 'bg-error/10 border-2 border-error';
            else cls = 'opacity-50';
          }
          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={selected !== null}
              className={`p-3 rounded-xl font-medium transition-all text-center ${cls}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected !== null && !isCorrect && (
        <p className="text-sm text-error mt-3 text-center">
          Correct answer: <strong>{exercise.answer}</strong>
        </p>
      )}
    </div>
  );
}
