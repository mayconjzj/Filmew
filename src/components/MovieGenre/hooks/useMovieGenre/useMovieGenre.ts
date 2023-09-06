import { useState, useEffect } from 'react';

import { getData } from '@/services/api';

import { MovieGenreProps } from '@/models';

export const useMovieGenre = ({ genre }: MovieGenreProps) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getApi = async () => {
    setIsLoading(true);
    const { results } = await getData(`/genre/${genre.id}/movies`, {
      language: 'pt'
    });
    setMovies(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getApi();
  }, []);

  return {
    movies,
    isLoading
  };
};
