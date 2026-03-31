'use client';

import { speakJapanese } from '@/lib/speech';

interface AudioButtonProps {
  japanese: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'w-8 h-8 text-base',
  md: 'w-10 h-10 text-lg',
  lg: 'w-12 h-12 text-xl',
};

export default function AudioButton({ japanese, size = 'md', className = '' }: AudioButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speakJapanese(japanese);
      }}
      className={`rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center justify-center active:scale-90 ${sizes[size]} ${className}`}
      aria-label="Play audio"
    >
      🔊
    </button>
  );
}
