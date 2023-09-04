import { MovieCategoryProps } from '@/models';
import { CardMovie } from '@/components/CardMovie';
import { useMovieCategory } from './hooks';

import * as S from './styles';

export const MovieCategory = ({ category }: MovieCategoryProps) => {
  const { movies } = useMovieCategory({ category: category });

  return (
    <>
      <S.Content>
        <S.Category>{category.name}</S.Category>
        <S.Movies>
          {movies.map((movie: { id: string; title: string }) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </S.Movies>
      </S.Content>
    </>
  );
};
