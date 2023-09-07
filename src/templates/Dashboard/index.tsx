import { MovieGenre } from '@/components/MovieGenre';
import { Search } from '@/components/Search';

import { GenreProps } from '@/models';

import * as S from './styles';

export const Dashboard = ({ genres }: { genres: GenreProps[] }) => {
  return (
    <>
      <S.Container>
        <Search />
        {genres.map((genre: { id: string; name: string }) => (
          <MovieGenre key={genre.id} genre={genre} />
        ))}
      </S.Container>
      ;
    </>
  );
};
