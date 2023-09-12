import { CardMovie } from '@/components/CardMovie';
import { Loading } from '@/components/Loading';
import { Search } from '@/components/Search';

import { MovieProps } from '@/models';

import * as S from './styles';

export const Popularity = ({
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
        <S.SearchName>Filmes Populares</S.SearchName>
        <S.Movies>
          {loading && <Loading loading={loading} />}
          {!loading &&
            movies.map((movie: { id: string; title: string }) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
        </S.Movies>
      </S.Container>
    </>
  );
};
