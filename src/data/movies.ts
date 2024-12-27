import { Movie } from '../types/movie';
import { spaceMovies } from './movies/spaceMovies';
import { actionMovies } from './movies/actionMovies';
import { dramaMovies } from './movies/dramaMovies';
import { scifiMovies } from './movies/scifiMovies';

// Объединяем все фильмы в один массив
export const popularMovies: Movie[] = [
  ...spaceMovies,
  ...actionMovies,
  ...dramaMovies,
  ...scifiMovies
];