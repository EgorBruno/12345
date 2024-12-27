import { Movie } from '../../types/movie';
import { movieCategories } from '../movieCategories';
import { movieImages, generateRating, getRandomYear } from '../movieUtils';

export const actionMovies: Movie[] = [
  {
    id: 101,
    title: 'Время возмездия',
    rating: generateRating(),
    image: `${movieImages.action[0]}?w=800`,
    description: 'Детектив полиции Лос-Анджелеса ведет опасное расследование, которое может стоить ей всего.',
    videoUrl: 'https://www.youtube.com/embed/example1',
    genre: movieCategories.ACTION,
    year: getRandomYear()
  },
  // ... добавляем еще 20 боевиков
];