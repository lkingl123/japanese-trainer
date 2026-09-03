'use client';

import { useRef, useState } from 'react';
import { exportProgress, importProgress, resetProgress } from '@/lib/storage';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SettingsPage() {
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);
  const [confirmingReset, setConfirmingReset] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  function handleExport() {
    const blob = new Blob([exportProgress()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `verb-trainer-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage({ text: 'Backup downloaded.', ok: true });
  }

  async function handleImport(file: File) {
    try {
      importProgress(await file.text());
      setMessage({ text: 'Progress restored. Reloading…', ok: true });
      setTimeout(() => window.location.assign('/'), 800);
    } catch (e) {
      setMessage({
        text: e instanceof Error ? e.message : 'Could not read that file.',
        ok: false,
      });
    }
  }

  function handleReset() {
    resetProgress();
    setMessage({ text: 'Progress cleared. Reloading…', ok: true });
    setTimeout(() => window.location.assign('/'), 800);
  }

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-bold mb-1">Settings</h1>
      <p className="text-text-secondary text-sm mb-6">Your progress and backups</p>

      <Card className="mb-4">
        <h3 className="font-semibold mb-1">Where progress lives</h3>
        <p className="text-xs text-text-secondary leading-relaxed mb-4">
          Everything is saved in this browser on this device. Nothing is sent
          anywhere. Clearing site data will erase it, so export a backup if you
          have a streak worth keeping.
        </p>
        <Button onClick={handleExport} className="w-full">
          Export backup
        </Button>
      </Card>

      <Card className="mb-4">
        <h3 className="font-semibold mb-1">Restore</h3>
        <p className="text-xs text-text-secondary leading-relaxed mb-4">
          Load a backup file. This replaces all current progress.
        </p>
        <input
          ref={fileInput}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void handleImport(file);
            e.target.value = '';
          }}
        />
        <Button variant="secondary" onClick={() => fileInput.current?.click()} className="w-full">
          Choose backup file
        </Button>
      </Card>

      <Card>
        <h3 className="font-semibold mb-1">Start over</h3>
        <p className="text-xs text-text-secondary leading-relaxed mb-4">
          Clears every record and returns to week 1, day 1. This cannot be undone.
        </p>
        {confirmingReset ? (
          <div className="flex gap-2">
            <Button variant="error" onClick={handleReset} className="flex-1">
              Yes, erase everything
            </Button>
            <Button variant="ghost" onClick={() => setConfirmingReset(false)} className="flex-1">
              Cancel
            </Button>
          </div>
        ) : (
          <Button variant="ghost" onClick={() => setConfirmingReset(true)} className="w-full">
            Reset progress
          </Button>
        )}
      </Card>

      {message && (
        <p
          className={`text-sm text-center mt-4 slide-up ${
            message.ok ? 'text-success' : 'text-error'
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
