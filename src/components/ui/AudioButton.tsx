'use client';

import { speakJapanese } from '@/lib/speech';

interface AudioButtonProps {
  japanese: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// The visible circle can be small, but the tappable area must not be: 44px is
// the minimum target size in the Apple HIG and WCAG 2.5.5. The pseudo-element
// expands the hit box without changing the layout.
const sizes = {
  sm: 'w-8 h-8 text-base',
  md: 'w-10 h-10 text-lg',
  lg: 'w-12 h-12 text-xl',
};

const HIT_AREA =
  "relative after:absolute after:left-1/2 after:top-1/2 after:h-11 after:w-11 " +
  "after:-translate-x-1/2 after:-translate-y-1/2 after:content-['']";

export default function AudioButton({ japanese, size = 'md', className = '' }: AudioButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speakJapanese(japanese);
      }}
      className={`rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center justify-center active:scale-90 ${sizes[size]} ${HIT_AREA} ${className}`}
      aria-label="Play audio"
    >
      🔊
    </button>
  );
}
