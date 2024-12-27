export interface Movie {
  id: number;
  title: string;
  rating: string;
  image: string;
  description: string;
  videoUrl: string;
  trailerUrl?: string;
  genre?: string;
  year?: number;
}