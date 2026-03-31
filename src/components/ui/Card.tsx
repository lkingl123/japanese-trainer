interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      className={`bg-bg-card rounded-2xl p-4 shadow-sm ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow active:scale-[0.98]' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
