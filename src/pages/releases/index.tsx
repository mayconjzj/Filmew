import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getData } from '@/services/api';

import { Releases } from '@/templates/Dashboard/releases';

export default function Page() {
  //BUSCA OS FILMES NA API
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { query } = router;
  const { language } = query;

  const getMovies = async () => {
    setIsLoading(true);
    const { results } = await getData(`/discover/movie`, {
      language: `${language}`,
      sort_by: `release_date.desc`,
      'primary_release_date.lte': new Date().toISOString().split('T')[0]
    });

    setIsLoading(false);
    setMovies(results);
  };

  useEffect(() => {
    getMovies();
  }, [language]);

  //RETORNA UM COMPONENTE JÁ COM OS FILMES
  return <Releases movies={movies} loading={isLoading} />;
}
