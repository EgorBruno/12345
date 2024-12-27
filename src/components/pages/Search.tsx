import React, { useState, useMemo } from 'react';
import { SearchBar } from '../search/SearchBar';
import { FilterPanel } from '../search/FilterPanel';
import { MovieList } from '../search/MovieList';
import { MovieFilters } from '../../types/filters';
import { useMovie } from '../../context/MovieContext';
import { popularMovies } from '../../data/movies';
import { Movie } from '../../types/movie';

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<MovieFilters>({});
  const { setCurrentMovie } = useMovie();

  const filteredMovies = useMemo(() => {
    return popularMovies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = !filters.genre || movie.genre === filters.genre;
      const matchesYear = !filters.year || movie.year === filters.year;
      const matchesRating = !filters.rating || parseFloat(movie.rating) >= filters.rating;
      
      return matchesSearch && matchesGenre && matchesYear && matchesRating;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return parseFloat(b.rating) - parseFloat(a.rating);
        case 'year':
          return (b.year || 0) - (a.year || 0);
        default:
          return 0;
      }
    });
  }, [searchQuery, filters]);

  const handleMovieSelect = (movie: Movie) => {
    setCurrentMovie(movie);
    window.dispatchEvent(new CustomEvent('changeTab', { detail: 'view' }));
  };

  return (
    <div className="p-6 h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>
          
          <div className="lg:col-span-3">
            <MovieList
              movies={filteredMovies}
              onMovieSelect={handleMovieSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}