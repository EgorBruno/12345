import React, { createContext, useContext, useState } from 'react';
import { Movie } from '../types/movie';

interface MovieContextType {
  currentMovie: Movie | null;
  setCurrentMovie: (movie: Movie) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  return (
    <MovieContext.Provider value={{ currentMovie, setCurrentMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovie must be used within MovieProvider');
  }
  return context;
}