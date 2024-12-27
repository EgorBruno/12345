import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { Search } from './components/pages/Search';
import { MovieView } from './components/pages/MovieView';
import { Settings } from './components/pages/Settings';
import { Help } from './components/pages/Help';
import { Profile } from './components/pages/Profile';
import { ThemeProvider } from './context/ThemeContext';
import { MovieProvider } from './context/MovieContext';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setCurrentTab(event.detail);
    };

    window.addEventListener('changeTab', handleTabChange as EventListener);
    return () => window.removeEventListener('changeTab', handleTabChange as EventListener);
  }, []);

  return (
    <ThemeProvider>
      <MovieProvider>
        <div className="h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
          <div className="flex h-full">
            <Sidebar currentTab={currentTab} onTabChange={setCurrentTab} />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 overflow-hidden bg-gray-50 dark:bg-gray-900">
                {currentTab === 'home' && <Home />}
                {currentTab === 'search' && <Search />}
                {currentTab === 'view' && <MovieView />}
                {currentTab === 'settings' && <Settings />}
                {currentTab === 'help' && <Help />}
                {currentTab === 'profile' && <Profile />}
              </main>
            </div>
          </div>
        </div>
      </MovieProvider>
    </ThemeProvider>
  );
}