import { CardMovie } from '@/components/CardMovie';
import { Loading } from '@/components/Loading';
import { Search } from '@/components/Search';

import { MovieProps } from '@/models';

import * as S from './styles';

export const Results = ({
  movies,
  loading,
  search
}: {
  movies: MovieProps[];
  loading: boolean;
  search: string | string[] | undefined;
}) => {
  return (
    <>
      <S.Container>
        <Search />
        <S.SearchName>
          Resultados para <S.Name>{search}</S.Name>
        </S.SearchName>
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
