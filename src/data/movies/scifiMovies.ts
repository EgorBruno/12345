import { Movie } from '../../types/movie';
import { movieCategories } from '../movieCategories';
import { movieImages, generateRating, getRandomYear } from '../movieUtils';

export const scifiMovies: Movie[] = [
  {
    id: 301,
    title: 'За гранью реальности',
    rating: generateRating(),
    image: `${movieImages.scifi[0]}?w=800`,
    description: 'В недалеком будущем ученые совершают прорыв в области квантовой физики, открывая доступ к параллельным мирам.',
    videoUrl: 'https://www.youtube.com/embed/example3',
    genre: movieCategories.SCIFI,
    year: getRandomYear()
  },
  // ... добавляем еще 20 фантастических фильмов
];