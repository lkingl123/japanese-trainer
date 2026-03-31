'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/vocab', label: 'Vocab', emoji: '📚' },
  { href: '/grammar', label: 'Grammar', emoji: '✏️' },
  { href: '/stats', label: 'Stats', emoji: '📊' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-bg-card border-t border-black/5 z-50">
      <div className="max-w-lg mx-auto flex">
        {tabs.map((tab) => {
          const active = tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex-1 flex flex-col items-center py-2 pt-3 transition-colors ${
                active ? 'text-primary' : 'text-text-secondary'
              }`}
            >
              <span className="text-xl">{tab.emoji}</span>
              <span className="text-[10px] font-medium mt-0.5">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
