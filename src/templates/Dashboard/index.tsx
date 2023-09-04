import { MovieCategory } from '@/components/MovieCategory';
import { getData } from '@/services/api';

import * as S from './styles';

export async function getStaticProps() {
  const { genres } = await getData('/genre/movie/list', { language: 'pt' });

  return {
    props: { genres }
  };
}

export const Dashboard = ({ genres }: any) => {
  if(!genres) return;

  return (
    <>
      <S.Container>
        {genres.map((genre: { id: string; name: string }) => (
          <MovieCategory key={genre.id} category={genre} />
        ))}
      </S.Container>
    </>
  );
};
