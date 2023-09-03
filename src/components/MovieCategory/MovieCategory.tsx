import { MovieCategoryProps } from '@/models';
import { Movie } from './components';
import { useMovieCategory } from './hooks/useMovieCategory';

import * as S from './styles';

export const MovieCategory = ({ category }: MovieCategoryProps) => {
  const { movies } = useMovieCategory({ category: category });

  return (
    <>
      <S.Content>
        <S.Category>{category.name}</S.Category>
        <S.Movies>
          {movies.map((movie: { id: string; title: string }) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </S.Movies>
      </S.Content>
    </>
  );
};
