import { Movie } from '../types/movie';
import { movieCategories } from './movieCategories';

export function generateRating(): string {
  return (Math.floor(Math.random() * 30 + 70) / 10).toFixed(1);
}

export function getRandomYear(): number {
  return Math.floor(Math.random() * 54) + 1970;
}

export const movieImages = {
  space: [
    'https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3',
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
    'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45',
    'https://images.unsplash.com/photo-1454789548928-9efd52dc4031'
  ],
  action: [
    'https://images.unsplash.com/photo-1535016120720-40c646be5580',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    'https://images.unsplash.com/photo-1514066558159-fc8c737ef259'
  ],
  drama: [
    'https://images.unsplash.com/photo-1485846234645-a62644f84728',
    'https://images.unsplash.com/photo-1486693326701-77164fa4a3c7',
    'https://images.unsplash.com/photo-1500099817043-86d46000d58f'
  ],
  scifi: [
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    'https://images.unsplash.com/photo-1502899576159-f224dc2349fa',
    'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0'
  ]
};