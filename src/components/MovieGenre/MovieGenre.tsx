import { CardMovie } from '@/components/CardMovie';
import { Loading } from '@/components/Loading';

import { useMovieGenre } from './hooks';

import { MovieGenreProps } from '@/models';

import * as S from './styles';

export const MovieGenre = ({ genre }: MovieGenreProps) => {
  const { movies, isLoading } = useMovieGenre({ genre: genre });

  return (
    <>
      <S.Content>
        <S.Category>{genre.name}</S.Category>

        <S.Movies>
          {isLoading && <Loading loading={isLoading} />}

          {movies.map((movie: { id: string; title: string }) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </S.Movies>
      </S.Content>
    </>
  );
};
