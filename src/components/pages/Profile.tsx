import React, { useMemo } from 'react';
import { Film, Star, Clock, Play } from 'lucide-react';
import { useMovie } from '../../context/MovieContext';
import { popularMovies } from '../../data/movies';

interface WatchHistory {
  movieId: number;
  watchedAt: Date;
}

// Имитация истории просмотров (используем только существующие ID фильмов)
const watchHistory: WatchHistory[] = [
  { movieId: 1, watchedAt: new Date('2024-03-10T15:00:00') },
  { movieId: 3, watchedAt: new Date('2024-03-09T20:30:00') },
  { movieId: 2, watchedAt: new Date('2024-03-08T18:45:00') }
];

export function Profile() {
  const { setCurrentMovie } = useMovie();

  const handleMovieClick = (movieId: number) => {
    const movie = popularMovies.find(m => m.id === movieId);
    if (movie) {
      setCurrentMovie(movie);
      window.dispatchEvent(new CustomEvent('changeTab', { detail: 'view' }));
    }
  };

  const recentlyWatched = useMemo(() => {
    return watchHistory
      .sort((a, b) => b.watchedAt.getTime() - a.watchedAt.getTime())
      .map(history => {
        const movie = popularMovies.find(m => m.id === history.movieId);
        return movie ? { ...history, movie } : null;
      })
      .filter((item): item is { movie: typeof popularMovies[0]; watchedAt: Date } => item !== null);
  }, []);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0"></div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Имя Фамилия</h1>
              <p className="text-gray-600 dark:text-gray-400">На сайте с 2024 года</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Film className="text-blue-500" size={20} />
                <h2 className="font-semibold text-gray-900 dark:text-white">Просмотрено</h2>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{watchHistory.length}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="text-blue-500" size={20} />
                <h2 className="font-semibold text-gray-900 dark:text-white">Оценок</h2>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{recentlyWatched.length}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="text-blue-500" size={20} />
                <h2 className="font-semibold text-gray-900 dark:text-white">Часов просмотра</h2>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(recentlyWatched.length * 2.1)}
              </p>
            </div>
          </div>

          {/* Watch History */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Недавние просмотры</h2>
            <div className="space-y-4">
              {recentlyWatched.map(({ movie, watchedAt }) => (
                <div 
                  key={movie.id} 
                  className="flex items-center space-x-4 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="w-16 h-16 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 dark:text-white font-medium truncate">{movie.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {watchedAt.toLocaleDateString('ru-RU', { 
                        day: 'numeric', 
                        month: 'long',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <Play className="text-gray-400 dark:text-gray-500 flex-shrink-0" size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}