import { CardMovie } from '@/components/CardMovie';
import { Loading } from '@/components/Loading';

import { GenreProps, MovieProps } from '@/models';

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
            movies.map((movie: MovieProps) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
        </S.Movies>
      </S.Content>
    </>
  );
};
