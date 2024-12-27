import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeType, CustomTheme, ThemeContextType } from '../types/theme';
import { customThemes } from '../styles/themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [customTheme, setCustomTheme] = useState<CustomTheme>('purple');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', ...Object.keys(customThemes));

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else if (theme === 'custom') {
      root.classList.add(customTheme);
      
      // Apply custom theme colors
      const colors = customThemes[customTheme];
      Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(`--theme-${key}`, value);
      });
    } else {
      root.classList.add(theme);
      // Reset custom theme colors
      Object.keys(customThemes.purple).forEach(key => {
        root.style.removeProperty(`--theme-${key}`);
      });
    }
  }, [theme, customTheme]);

  return (
    <ThemeContext.Provider value={{ theme, customTheme, setTheme, setCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}