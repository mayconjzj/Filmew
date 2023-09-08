import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getData } from '@/services/api';

import { Results } from '@/templates/Dashboard/results';

export default function Page() {
  //BUSCA OS FILMES NA API
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { query } = router;
  const { search, language } = query;

  const getMovies = async () => {
    setIsLoading(true);
    const { results } = await getData(`/search/movie`, {
      language: `${language}`,
      query: `${search}`
    });

    setIsLoading(false);
    setMovies(results);
  };

  useEffect(() => {
    getMovies();
  }, [search, language]);

  //RETORNA UM COMPONENTE JÁ COM OS FILMES
  return <Results movies={movies} loading={isLoading} search={search} />;
}
