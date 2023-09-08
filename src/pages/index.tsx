import { getData } from '@/services/api';

import { GenreProps } from '@/models';

import { Dashboard } from '@/templates/Dashboard';

//RETORNA O RESUTADO DA BUSCA NA API
export default function Page({ genres }: { genres: GenreProps[] }) {
  return <Dashboard genres={genres} />;
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
