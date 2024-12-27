import { Movie } from '../../types/movie';
import { movieCategories } from '../movieCategories';
import { movieImages } from '../movieUtils';

export const spaceMovies: Movie[] = [
  {
    id: 1,
    title: 'Вызов',
    rating: '9.0',
    image: `${movieImages.space[0]}?w=800`,
    description: '«Вызов» — российская драма 2023 года режиссёра Клима Шипенко. Сюжет: во время ремонта спутника космонавт Олег Богданов получает травму лёгкого. До Земли он не долетит, поэтому серьёзную операцию решают провести прямо на МКС в условиях невесомости.',
    videoUrl: 'https://www.youtube.com/embed/BQm8qCgfo0s',
    genre: movieCategories.DRAMA,
    year: 2023
  },
  {
    id: 2,
    title: 'Салют-7',
    rating: '8.5',
    image: `${movieImages.space[1]}?w=800`,
    description: '«Салют-7» — российский драматический фильм о космосе, основанный на реальных событиях. Космическая станция «Салют-7», находящаяся на орбите в беспилотном режиме, неожиданно перестает отвечать на сигналы центра управления полетом.',
    videoUrl: 'https://www.youtube.com/embed/9ovV0u__6qw',
    genre: movieCategories.DRAMA,
    year: 2017
  },
  {
    id: 3,
    title: 'Время первых',
    rating: '8.8',
    image: `${movieImages.space[2]}?w=800`,
    description: '«Время первых» — российский исторический фильм о первом выходе человека в открытый космос. 60-е. Разгар холодной войны. Две супердержавы, СССР и США бьются за первенство в космической гонке.',
    videoUrl: 'https://www.youtube.com/embed/MITW2_2ASZk',
    genre: movieCategories.HISTORICAL,
    year: 2017
  }
];