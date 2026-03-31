'use client';

import { QuizResult } from '@/lib/types';
import Button from '@/components/ui/Button';
import AudioButton from '@/components/ui/AudioButton';

interface ResultScreenProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);

  return (
    <div className="slide-up text-center">
      <div className="bg-bg-card rounded-2xl p-8 shadow-sm mb-6">
        <div className="text-5xl mb-4">
          {result.isPerfect ? '🎉' : percentage >= 70 ? '✨' : '💪'}
        </div>
        <h2 className="text-2xl font-bold mb-2">
          {result.isPerfect ? 'Perfect!' : percentage >= 70 ? 'Great job!' : 'Keep practicing!'}
        </h2>
        <p className="text-4xl font-bold text-primary mb-2">{percentage}%</p>
        <p className="text-text-secondary">
          {result.correctAnswers}/{result.totalQuestions} correct
        </p>
        <div className="mt-4 inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
          +{result.xpEarned} XP
        </div>
      </div>

      {result.wrongWords.length > 0 && (
        <div className="bg-bg-card rounded-2xl p-5 shadow-sm mb-6 text-left">
          <h3 className="font-semibold mb-3">Review these words:</h3>
          <div className="space-y-2">
            {result.wrongWords.map((word) => (
              <div key={word.id} className="flex items-center justify-between py-2 border-b border-black/5 last:border-0">
                <div>
                  <span className="font-medium">{word.romaji}</span>
                  <span className="text-text-secondary mx-2">—</span>
                  <span className="text-text-secondary">{word.english}</span>
                </div>
                <AudioButton japanese={word.japanese} size="sm" />
              </div>
            ))}
          </div>
        </div>
      )}

      <Button onClick={onRestart} size="lg" className="w-full">
        Try Again
      </Button>
    </div>
  );
}
