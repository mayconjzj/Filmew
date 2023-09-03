import { getData } from '@/services/api';
import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [categories, setCategories] = useState([]);

  const getApi = async () => {
    const { genres } = await getData('/genre/movie/list', { language: 'pt' });
    setCategories(genres);
  };

  useEffect(() => {
    getApi();
  }, []);

  return {
    categories
  };
};
