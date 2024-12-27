import React from 'react';
import { Volume2, Monitor } from 'lucide-react';
import { ThemeSelector } from '../theme/ThemeSelector';

export function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Настройки</h1>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Внешний вид</h2>
          <ThemeSelector />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Воспроизведение</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Volume2 size={20} className="text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Громкость по умолчанию</span>
              </div>
              <input type="range" className="w-32" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Monitor size={20} className="text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Качество видео</span>
              </div>
              <select className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-1 border border-gray-300 dark:border-gray-600">
                <option>Автоматически</option>
                <option>1080p</option>
                <option>720p</option>
                <option>480p</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}