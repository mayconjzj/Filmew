import { GetServerSidePropsContext } from 'next';

import { getData } from '@/services/api';

import { CardMovie } from '@/components/CardMovie';

import { MovieProps } from '@/models';

import * as S from './styles';

//RETORNA O RESUTADO DA BUSCA NA API
export default function Results({ results }: { results: MovieProps[] }) {
  return (
    <S.Container>
      <h1>Resultados:</h1>
      <S.Movies>
        {results.map((movie: { id: string; title: string }) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </S.Movies>
    </S.Container>
  );
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
