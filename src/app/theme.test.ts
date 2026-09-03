import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Contrast is easy to break by nudging a hex value, and the failure is silent —
 * the app still renders, it is just unreadable for some people. These tests pin
 * the palette to WCAG AA so a future colour tweak has to stay legible.
 */

const css = readFileSync(join(process.cwd(), 'src/app/globals.css'), 'utf8');

function token(name: string): string {
  const match = css.match(new RegExp(`--color-${name}:\\s*#([0-9a-fA-F]{6})`));
  if (!match) throw new Error(`--color-${name} not found in globals.css`);
  return match[1].toLowerCase();
}

/** Relative luminance, per WCAG 2.x. */
function luminance(hex: string): number {
  const channel = (v: number) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const r = channel(parseInt(hex.slice(0, 2), 16));
  const g = channel(parseInt(hex.slice(2, 4), 16));
  const b = channel(parseInt(hex.slice(4, 6), 16));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const AA_NORMAL = 4.5;

describe('palette contrast (WCAG AA)', () => {
  const card = token('bg-card');
  const bg = token('bg');

  // Every colour used for text or icons, against both surfaces it can sit on.
  const foregrounds = ['primary', 'primary-dark', 'success', 'error', 'warning', 'text', 'text-secondary'];

  for (const name of foregrounds) {
    it(`${name} is readable on cards and on the page background`, () => {
      const fg = token(name);
      expect(contrast(fg, card)).toBeGreaterThanOrEqual(AA_NORMAL);
      expect(contrast(fg, bg)).toBeGreaterThanOrEqual(AA_NORMAL);
    });
  }

  it('white text is readable on a filled primary button', () => {
    expect(contrast('ffffff', token('primary'))).toBeGreaterThanOrEqual(AA_NORMAL);
  });

  it('keeps success and error different colours', () => {
    // Both are deliberately dark so each reads on white, which makes their
    // contrast ratio against each other close to 1. What matters is that they
    // are not the same swatch — compare the channels, not the luminance.
    expect(token('success')).not.toBe(token('error'));
  });
});
