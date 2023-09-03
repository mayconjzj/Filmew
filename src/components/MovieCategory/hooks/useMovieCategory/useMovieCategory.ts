import { MovieCategoryProps } from '@/models';
import { getData } from '@/services/api';
import { useState, useEffect } from 'react';

export const useMovieCategory = ({ category }: MovieCategoryProps) => {
  const [movies, setMovies] = useState([]);

  const getApi = async () => {
    const { results } = await getData(`/genre/${category.id}/movies`);
    setMovies(results);
  };

  useEffect(() => {
    getApi();
  }, []);

  return {
    movies
  };
};
