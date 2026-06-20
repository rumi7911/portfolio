'use client';

import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="font-mono text-xs border rounded px-2 py-1 hover:border-accent hover:text-accent transition-colors"
      style={{ borderColor: 'var(--border)' }}
    >
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
}
