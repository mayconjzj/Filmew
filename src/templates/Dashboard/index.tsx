import { MovieGenre} from '@/components/MovieGenre';
import { useDashboard } from './useDashboard';

import * as S from './styles';

export const Dashboard = () => {
  const { genres, isLoading } = useDashboard();

  return (
    <>
      <S.Container>
        {isLoading && <p>Carrengando...</p>}
        {genres.map((genre: { id: string; name: string }) => (
          <MovieGenre key={genre.id} genre={genre} />
        ))}
      </S.Container>
    </>
  );
};
