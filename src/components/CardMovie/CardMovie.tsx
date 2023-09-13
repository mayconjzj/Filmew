import Link from 'next/link';

import { MovieProps } from '@/models';

import * as S from './styles';

export const CardMovie = ({ movie }: { movie: MovieProps }) => {
  const API_IMAGE = process.env.API_IMAGE;

  const hasPoster: boolean =
    movie.poster_path !== null && movie.poster_path !== '';

  return (
    <>
      <Link href={`movie/${movie.id}?language=pt`} legacyBehavior>
        <S.CardMovie>
          {hasPoster && (
            <S.CardImage
              src={`${API_IMAGE}${movie.poster_path}`}
              alt={`Capa do filme ${movie.title}`}
            />
          )}
          {!hasPoster && <S.NoPoster>{movie.title}</S.NoPoster>}
        </S.CardMovie>
      </Link>
    </>
  );
};
