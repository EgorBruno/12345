import { Movie } from '../../types/movie';
import { movieCategories } from '../movieCategories';
import { movieImages, generateRating, getRandomYear } from '../movieUtils';

export const dramaMovies: Movie[] = [
  {
    id: 201,
    title: 'Последний шанс',
    rating: generateRating(),
    image: `${movieImages.drama[0]}?w=800`,
    description: 'История о человеке, который получает последний шанс изменить свою жизнь.',
    videoUrl: 'https://www.youtube.com/embed/example2',
    genre: movieCategories.DRAMA,
    year: getRandomYear()
  },
  // ... добавляем еще 20 драм
];