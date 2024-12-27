import React from 'react';
import { Moon, Sun, Palette, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { CustomTheme } from '../../types/theme';
import { customThemes } from '../../styles/themes';

export function ThemeSelector() {
  const { theme, customTheme, setTheme, setCustomTheme } = useTheme();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {theme === 'dark' ? (
            <Moon size={20} className="text-gray-600 dark:text-gray-400" />
          ) : theme === 'custom' ? (
            <Palette size={20} style={{ color: customThemes[customTheme].primary }} />
          ) : (
            <Sun size={20} className="text-gray-600 dark:text-gray-400" />
          )}
          <span className="text-gray-700 dark:text-gray-300">Тема оформления</span>
        </div>
        <select 
          className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-1 border border-gray-300 dark:border-gray-600"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
        >
          <option value="light">Светлая</option>
          <option value="dark">Тёмная</option>
          <option value="system">Системная</option>
          <option value="custom">Пользовательская</option>
        </select>
      </div>

      {theme === 'custom' && (
        <div className="grid grid-cols-5 gap-2">
          {(Object.keys(customThemes) as CustomTheme[]).map((color) => (
            <button
              key={color}
              onClick={() => setCustomTheme(color)}
              className={`w-8 h-8 rounded-full transition-transform ${
                customTheme === color ? 'scale-110 ring-2 ring-offset-2' : ''
              }`}
              style={{ 
                backgroundColor: customThemes[color].primary,
                ringColor: customThemes[color].accent
              }}
              title={color}
            />
          ))}
        </div>
      )}
    </div>
  );
}