interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  color?: string;
  showLabel?: boolean;
}

export default function ProgressBar({ value, className = '', color = 'bg-primary', showLabel = false }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
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
