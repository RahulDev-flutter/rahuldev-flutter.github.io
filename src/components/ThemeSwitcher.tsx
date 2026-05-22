import React, { useEffect, useRef, useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { Theme, themes, useTheme } from '../hooks/useTheme';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [open]);

  const select = (id: Theme) => {
    setTheme(id);
    setOpen(false);
  };

  const current = themes.find((t) => t.id === theme);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change theme"
        className="p-2 text-fg-muted hover:text-accent transition-colors relative"
      >
        <Palette size={18} />
        <span
          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-bg"
          style={{ background: current?.swatch }}
        ></span>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-bg-elev border border-border-strong rounded-xl shadow-2xl p-2 z-[70] animate-fade-in-up">
          <div className="px-2 py-1.5 font-mono text-[10px] uppercase tracking-widest text-fg-subtle border-b border-border mb-1">
            Theme
          </div>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => select(t.id)}
              className={`w-full flex items-center justify-between gap-3 px-2 py-2 rounded-md text-sm transition-colors ${
                theme === t.id ? 'bg-bg-elev-2 text-fg' : 'text-fg-muted hover:bg-bg-elev-2 hover:text-fg'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded-full border border-border ring-1 ring-bg"
                  style={{
                    background: `linear-gradient(135deg, ${t.swatch} 50%, ${t.bg} 50%)`,
                  }}
                ></span>
                <span>{t.label}</span>
              </div>
              {theme === t.id && <Check size={14} className="text-accent" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
