import { MovieProps } from '@/models';

import * as S from './styles';

export const CardMovie = ({ movie }: MovieProps) => {
  const API_IMAGE = process.env.API_IMAGE;

  return (
    <>
      <S.CardMovie>
        <img
          src={`${API_IMAGE}${movie.poster_path}`}
          alt={`Capa do filme ${movie.title}`}
        />
      </S.CardMovie>
    </>
  );
};
