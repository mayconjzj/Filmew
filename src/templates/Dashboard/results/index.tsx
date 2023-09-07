import { CardMovie } from '@/components/CardMovie';

import { MovieProps } from '@/models';

import * as S from './styles';

export const Results = ({ results }: { results: MovieProps[] }) => {
  return (
    <>
      <S.Container>
        <h1>Resultados:</h1>
        <S.Movies>
          {results.map((movie: { id: string; title: string }) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </S.Movies>
      </S.Container>
    </>
  );
};
