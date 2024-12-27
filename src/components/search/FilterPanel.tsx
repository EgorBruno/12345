import React from 'react';
import { MovieFilters, genres, years } from '../../types/filters';
import { SlidersHorizontal } from 'lucide-react';

interface FilterPanelProps {
  filters: MovieFilters;
  onFilterChange: (filters: MovieFilters) => void;
}

export function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <SlidersHorizontal className="text-gray-400" size={20} />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Фильтры</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Жанр
          </label>
          <select
            value={filters.genre || ''}
            onChange={(e) => onFilterChange({ ...filters, genre: e.target.value || undefined })}
            className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2"
          >
            <option value="">Все жанры</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Год
          </label>
          <select
            value={filters.year || ''}
            onChange={(e) => onFilterChange({ ...filters, year: Number(e.target.value) || undefined })}
            className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2"
          >
            <option value="">Все годы</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Минимальный рейтинг
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={filters.rating || 0}
            onChange={(e) => onFilterChange({ ...filters, rating: Number(e.target.value) })}
            className="w-full"
          />
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {filters.rating || 0}/10
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Сортировать по
          </label>
          <select
            value={filters.sortBy || 'popularity'}
            onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value as MovieFilters['sortBy'] })}
            className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2"
          >
            <option value="popularity">Популярности</option>
            <option value="rating">Рейтингу</option>
            <option value="year">Году</option>
          </select>
        </div>
      </div>
    </div>
  );
}