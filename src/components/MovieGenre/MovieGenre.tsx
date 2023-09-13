import { CardMovie } from '@/components/CardMovie';
import { Loading } from '@/components/Loading';

import { GenreProps } from '@/models';

import { useMovieGenre } from './hooks';
import * as S from './styles';

export const MovieGenre = ({ genre }: { genre: GenreProps }) => {
  const { movies, isLoading } = useMovieGenre({ genre: genre });

  return (
    <>
      <S.Content>
        <S.Category>{genre.name}</S.Category>

        <S.Movies>
          {isLoading && <Loading loading={isLoading} />}
          {!isLoading &&
            movies.map((movie: { id: string; original_title: string }) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
        </S.Movies>
      </S.Content>
    </>
  );
};
