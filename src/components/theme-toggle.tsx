'use client';

import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 px-3 py-1 text-sm font-medium shadow-sm hover:scale-105 transition"
      aria-label="Toggle dark mode"
    >
      <span className="h-3 w-3 rounded-full bg-gradient-to-br from-desert-clay to-desert-ember shadow-inner" aria-hidden />
      {isDark ? 'Light mode' : 'Dark mode'}
    </button>
  );
}
