import React from 'react';
import { Play } from 'lucide-react';
import { useMovie } from '../../context/MovieContext';
import { Movie } from '../../types/movie';
import { popularMovies } from '../../data/movies';

export function Home() {
  const { setCurrentMovie } = useMovie();

  const handleMovieClick = (movie: Movie) => {
    setCurrentMovie(movie);
    window.dispatchEvent(new CustomEvent('changeTab', { detail: 'view' }));
  };

  return (
    <div className="p-6 h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Популярные фильмы</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularMovies.map((movie) => (
          <div
            key={movie.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
            onClick={() => handleMovieClick(movie)}
          >
            <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Play className="w-16 h-16 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
              <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
              <p className="text-sm text-gray-300">Рейтинг: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}