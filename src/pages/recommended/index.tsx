import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getData } from '@/services/api';

import { Recommended } from '@/templates/Dashboard/recommended';

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
      sort_by: `vote_count.desc`
    });

    setIsLoading(false);
    setMovies(results);
  };

  useEffect(() => {
    getMovies();
  }, [language]);

  //RETORNA UM COMPONENTE JÁ COM OS FILMES
  return <Recommended movies={movies} loading={isLoading} />;
}
