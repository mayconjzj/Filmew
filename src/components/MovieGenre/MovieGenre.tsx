import { MovieGenreProps } from '@/models';
import { CardMovie } from '@/components/CardMovie';
import { useMovieGenre } from './hooks';

import * as S from './styles';

export const MovieGenre = ({ genre }: MovieGenreProps) => {
  const { movies, isLoading } = useMovieGenre({ genre: genre });

  return (
    <>
      <S.Content>
        {isLoading && <S.Loading>Carregando...</S.Loading>}

        <S.Category>{genre.name}</S.Category>

        <S.Movies>
          {movies.map((movie: { id: string; title: string }) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </S.Movies>
      </S.Content>
    </>
  );
};
