import React, { useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { AuthModal } from './auth/AuthModal';

export function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [authType, setAuthType] = useState<'login' | 'register' | null>(null);

  return (
    <>
      <div className="flex justify-end p-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="space-x-2">
          <button 
            className="text-gray-600 dark:text-white text-xs hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setAuthType('login')}
          >
            {isMobile ? 'Вход' : 'Войти'}
          </button>
          <button 
            className="text-gray-600 dark:text-white text-xs hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            onClick={() => setAuthType('register')}
          >
            {isMobile ? 'Рег.' : 'Регистрация'}
          </button>
        </div>
      </div>
      
      <AuthModal
        isOpen={authType !== null}
        onClose={() => setAuthType(null)}
        type={authType || 'login'}
      />
    </>
  );
}