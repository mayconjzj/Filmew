import { CardMovie } from '@/components/CardMovie';
import { Loading } from '@/components/Loading';
import { Search } from '@/components/Search';

import { MovieProps } from '@/models';

import * as S from './styles';

export const Recommended = ({
  movies,
  loading
}: {
  movies: MovieProps[];
  loading: boolean;
}) => {
  return (
    <>
      <S.Container>
        <Search />
        <S.SearchName>Filmes Recomendados</S.SearchName>
        <S.Movies>
          {loading && <Loading loading={loading} />}
          {!loading &&
            movies.map((movie: MovieProps) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
        </S.Movies>
      </S.Container>
    </>
  );
};
