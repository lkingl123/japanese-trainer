interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  color?: string;
  showLabel?: boolean;
}

export default function ProgressBar({ value, className = '', color = 'bg-primary', showLabel = false }: ProgressBarProps) {
  // A NaN from a 0/0 division would silently render an invalid width.
  const clamped = Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
  return (
    <div className={`w-full ${className}`}>
      <div className="h-2.5 rounded-full bg-black/5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <p className="text-xs text-text-secondary mt-1 text-right">{clamped}%</p>
      )}
    </div>
  );
}
