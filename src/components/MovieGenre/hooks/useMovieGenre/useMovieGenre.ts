import { useState, useEffect, useCallback } from 'react';

import { getData } from '@/services/api';

import { MovieGenreProps } from '@/models';

export const useMovieGenre = ({ genre }: MovieGenreProps) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleMovies = useCallback(async () => {
    setIsLoading(true);

    const { results } = await getData(`/genre/${genre.id}/movies`, {
      language: 'pt'
    });

    setMovies(results);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleMovies();
  }, [handleMovies]);

  return {
    movies,
    isLoading
  };
};
