import { useEffect, useState } from 'react';

export type Theme = 'lime' | 'cyan' | 'magenta' | 'amber' | 'light';

export const themes: { id: Theme; label: string; swatch: string; bg: string }[] = [
  { id: 'lime', label: 'Lime', swatch: '#bef264', bg: '#0a0a0a' },
  { id: 'cyan', label: 'Cyan', swatch: '#22d3ee', bg: '#050a12' },
  { id: 'magenta', label: 'Magenta', swatch: '#e879f9', bg: '#0a0710' },
  { id: 'amber', label: 'Amber', swatch: '#fbbf24', bg: '#0c0904' },
  { id: 'light', label: 'Light', swatch: '#65a30d', bg: '#fafaf9' },
];

const STORAGE_KEY = 'portfolio-theme';

const getInitial = (): Theme => {
  if (typeof window === 'undefined') return 'lime';
  const saved = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (saved && themes.some((t) => t.id === saved)) return saved;
  return 'lime';
};

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  return { theme, setTheme: setThemeState };
};
