import { MovieGenre } from '@/components/MovieGenre';
import { getData } from '@/services/api';

import * as S from '@/styles/Home';

export default function Home({ genres }: any) {
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
