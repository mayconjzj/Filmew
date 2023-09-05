import { getData } from '@/services/api';
import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getApi = async () => {
    setIsLoading(true);
    const { genres } = await getData('/genre/movie/list', { language: 'pt' });
    setGenres(genres);
    setIsLoading(false);
  };

  useEffect(() => {
    getApi();
  }, []);

  return {
    genres,
    isLoading
  };
};
