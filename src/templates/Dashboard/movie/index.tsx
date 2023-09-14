import { useRouter } from 'next/router';

import { List, ListItem } from '@/components/List';
import { Loading } from '@/components/Loading';

import { formatDateBr, goBack } from '@/utils';

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
      <S.Container>
        {movie.poster_path && (
          <S.PosterPath
            src={`${process.env.API_IMAGE}${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        )}

        <S.Info>
          <S.Content>
            <h1>{movie.title}</h1>
            <S.Overview>
              {movie.overview && movie.overview}
              {!movie.overview && 'Não há descrição.'}
            </S.Overview>
          </S.Content>

          <S.Content>
            <h1>Data de lançamento</h1>
            <p>
              {movie.release_date && formatDateBr(`${movie.release_date}`)}
              {!movie.release_date && 'Sem informações.'}
            </p>
          </S.Content>

          <S.Content>
            <h1>Gêneros</h1>
            <List>
              {movie.genres.map((genre: { id: string; name: string }) => (
                <ListItem key={genre.id}>{genre.name}</ListItem>
              ))}
            </List>
          </S.Content>

          <S.Content>
            <h1>Duração</h1>
            <p>{movie.runtime} minutos</p>
          </S.Content>
        </S.Info>
        <S.GoBack onClick={goBack}>&larr; Voltar</S.GoBack>
      </S.Container>
    </>
  );
};
