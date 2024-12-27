import React from 'react';
import { HelpCircle, Mail, MessageCircle } from 'lucide-react';

export function Help() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Помощь</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <HelpCircle className="text-blue-500" size={24} />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Часто задаваемые вопросы</h2>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Как начать просмотр?</li>
            <li>Проблемы с воспроизведением</li>
            <li>Как оценить фильм?</li>
            <li>Правила использования</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="text-blue-500" size={24} />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Связаться с нами</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="text-gray-500 dark:text-gray-400" size={20} />
              <span className="text-gray-700 dark:text-gray-300">support@movies.ru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}