import { getData } from '@/services/api';

import { MovieGenre } from '@/components/MovieGenre';

import { GenresProps } from '@/models';

import * as S from '@/styles/Home';

export default function Home({ genres }: GenresProps) {
  return (
    <>
      <S.Container>
        {genres.map((genre: { id: string; name: string }) => (
          <MovieGenre key={genre.id} genre={genre} />
        ))}
      </S.Container>
    </>
  );
}

export const getServerSideProps = async () => {
  const { genres } = await getData('/genre/movie/list', { language: 'pt' });

  return {
    props: {
      genres
    }
  };
};
