'use client';

import { useState } from 'react';
import { MultipleChoiceExercise } from '@/lib/types';

interface MultipleChoiceProps {
  exercise: MultipleChoiceExercise;
  onAnswer: (correct: boolean) => void;
}

export default function MultipleChoice({ exercise, onAnswer }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const isCorrect = selected === exercise.answer;

  const handleSelect = (option: string) => {
    if (selected !== null) return;
    setSelected(option);
    onAnswer(option === exercise.answer);
  };

  return (
    <div className="slide-up">
      <p className="text-sm text-text-secondary mb-2">{exercise.english}</p>
      <div className="bg-bg-card rounded-2xl p-5 shadow-sm mb-4">
        <p className="text-lg font-medium">{exercise.question}</p>
      </div>

      <div className="grid grid-cols-1 gap-2">
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
              className={`w-full p-3 rounded-xl font-medium transition-all text-left ${cls}`}
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
