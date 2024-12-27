import React from 'react';
import { Home, Search, Eye, Settings, HelpCircle, User } from 'lucide-react';
import { Link } from './Link';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface SidebarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ currentTab, onTabChange }: SidebarProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={`bg-white dark:bg-gray-900 h-full flex flex-col border-r border-gray-200 dark:border-gray-800
                    ${isMobile ? 'w-16 p-2' : 'w-64 p-4'}`}>
      <div className={`flex items-center ${isMobile ? 'justify-center mb-4' : 'mb-6'}`}>
        <span className="text-blue-500 text-xl font-bold">Ф</span>
        {!isMobile && <span className="text-gray-900 dark:text-white text-lg ml-2">ИЛЬМЫ</span>}
      </div>
      
      <nav className="space-y-2">
        <Link 
          icon={<Home size={18} />} 
          label="Главная" 
          active={currentTab === 'home'}
          showTooltip={isMobile}
          onClick={() => onTabChange('home')}
        />
        <Link 
          icon={<Search size={18} />} 
          label="Поиск" 
          active={currentTab === 'search'}
          showTooltip={isMobile}
          onClick={() => onTabChange('search')}
        />
        <Link 
          icon={<Eye size={18} />} 
          label="Просмотр" 
          active={currentTab === 'view'}
          showTooltip={isMobile}
          onClick={() => onTabChange('view')}
        />
        <Link 
          icon={<Settings size={18} />} 
          label="Настройки" 
          active={currentTab === 'settings'}
          showTooltip={isMobile}
          onClick={() => onTabChange('settings')}
        />
        <Link 
          icon={<HelpCircle size={18} />} 
          label="Помощь" 
          active={currentTab === 'help'}
          showTooltip={isMobile}
          onClick={() => onTabChange('help')}
        />
        <Link 
          icon={<User size={18} />} 
          label="Профиль" 
          active={currentTab === 'profile'}
          showTooltip={isMobile}
          onClick={() => onTabChange('profile')}
        />
      </nav>

      {!isMobile && (
        <div className="mt-auto">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div>
                <p className="text-gray-900 dark:text-white text-sm">Имя Фамилия</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Пользователь</p>
              </div>
            </div>
            <div className="mt-2 text-gray-500 dark:text-gray-400 text-xs">
              <p>Оценок: 10 штук</p>
              <p>Среднее оценивание: 9</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}