import { getData } from '@/services/api';

import { MovieGenre } from '@/components/MovieGenre';
import { Search } from '@/components/Search';

import { GenreProps } from '@/models';

import * as S from './styles';

//RETORNA O RESUTADO DA BUSCA NA API
export default function Home({ genres }: { genres: GenreProps[] }) {
  return (
    <>
      <S.Container>
        <Search />
        {genres.map((genre: { id: string; name: string }) => (
          <MovieGenre key={genre.id} genre={genre} />
        ))}
      </S.Container>
    </>
  );
}

//BUSCA AS CATEGORIAS DE FILMES DISPONÍVEIS NA API
export const getServerSideProps = async () => {
  const { genres } = await getData('/genre/movie/list', { language: 'pt' });

  return {
    props: {
      genres
    }
  };
};
