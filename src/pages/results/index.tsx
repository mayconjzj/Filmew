import { GetServerSidePropsContext } from 'next';

import { getData } from '@/services/api';

import { MovieProps } from '@/models';

//RETORNA O RESUTADO DA BUSCA NA API
export default function Results({ results }: { results: MovieProps[] }) {
  return <Results results={results} />;
}

//BUSCA FILMES NA API
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const { search, language } = query;

  const { results } = await getData(`/search/movie?query=${search}`, {
    language: `${language}`
  });

  return {
    props: {
      results
    }
  };
};
