import React from 'react';
import { Play, Star } from 'lucide-react';
import { Movie } from '../../types/movie';

interface MovieListProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

export function MovieList({ movies, onMovieSelect }: MovieListProps) {
  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
        <p className="text-lg">Фильмы не найдены</p>
        <p className="text-sm">Попробуйте изменить параметры поиска</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => onMovieSelect(movie)}
          className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
        >
          <div className="aspect-video relative">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {movie.title}
            </h3>
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-400" size={16} fill="currentColor" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {movie.rating}/10
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}