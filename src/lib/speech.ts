'use client';

let jaVoice: SpeechSynthesisVoice | null = null;

function getJapaneseVoice(): SpeechSynthesisVoice | null {
  if (jaVoice) return jaVoice;
  if (typeof window === 'undefined') return null;

  const voices = window.speechSynthesis.getVoices();
  jaVoice = voices.find((v) => v.lang.startsWith('ja')) || null;
  return jaVoice;
}

// Ensure voices are loaded
if (typeof window !== 'undefined') {
  window.speechSynthesis.onvoiceschanged = () => {
    jaVoice = null;
    getJapaneseVoice();
  };
}

export function speakJapanese(japaneseText: string, rate: number = 0.85): void {
  if (typeof window === 'undefined') return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(japaneseText);
  utterance.lang = 'ja-JP';
  utterance.rate = rate;
  utterance.pitch = 1;

  const voice = getJapaneseVoice();
  if (voice) utterance.voice = voice;

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (typeof window === 'undefined') return;
  window.speechSynthesis.cancel();
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}
