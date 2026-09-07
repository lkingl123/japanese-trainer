'use client';

import { Verb } from '@/lib/types';

/**
 * A verb's mnemonic hook with its tier tag. Most hooks are Dota; `general`
 * marks the ones where no hero or item honestly fit, so a plain sound-alike
 * image is used instead. The tag is there so a weak general hook can be
 * spotted and rewritten later rather than silently blending in.
 */
export default function HookNote({ verb, className = '' }: { verb: Verb; className?: string }) {
  if (!verb.hook) return null;

  const isDota = verb.hookKind === 'dota';

  return (
    <div className={`bg-primary/5 rounded-xl px-4 py-3 text-left ${className}`}>
      <span
        className={`inline-block mb-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${
          isDota ? 'bg-primary/15 text-primary' : 'bg-black/10 text-text-secondary'
        }`}
      >
        {isDota ? 'Dota' : 'General'}
      </span>
      <p className="text-sm text-text-secondary">{verb.hook}</p>
    </div>
  );
}
