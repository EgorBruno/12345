export interface MovieFilters {
  genre?: string;
  year?: number;
  rating?: number;
  sortBy?: 'popularity' | 'rating' | 'year';
}

export const genres = [
  'Драма',
  'Фантастика',
  'Приключения',
  'Исторический',
  'Биография',
  'Документальный'
] as const;

export const years = Array.from({ length: 54 }, (_, i) => 1970 + i);