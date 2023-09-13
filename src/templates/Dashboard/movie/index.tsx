import { useRouter } from 'next/router';

import { Loading } from '@/components/Loading';

import { MovieProps } from '@/models';

import * as S from './styles';

export const Movie = ({ movie }: { movie: MovieProps }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading loading={true} />;
  }

  if (!movie) {
    return <S.NotFound>Filme não encontrado!</S.NotFound>;
  }

  return (
    <>
      <div>
        <p>{movie.title}</p>
      </div>
    </>
  );
};
