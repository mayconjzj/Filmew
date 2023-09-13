import { getData } from '@/services/api';

import { MovieProps } from '@/models';

import { Movie } from '@/templates/Dashboard/movie';

export default function Page({ movie }: { movie: MovieProps }) {
  return <Movie movie={movie} />;
}

// BUSCAR O FILME NA API
export const getStaticProps = async (context: {
  params: { movieId: string };
}) => {
  const { params } = context;

  try {
    const movie = await getData(`/movie/${params.movieId}`, {
      language: 'pt'
    });

    return {
      props: {
        movie
      }
    };
  } catch (error) {
    console.error('Erro ao buscar informações do filme:', error);

    return {
      props: {
        movie: null
      }
    };
  }
};

// BUSCA AS PÁGINAS DE CADA FILMES
export const getStaticPaths = async () => {
  const { results } = await getData(`/discover/movie`, {
    language: 'pt'
  });

  const paths = results.map((movie: { id: string }) => {
    return {
      params: {
        movieId: `${movie.id}`
      }
    };
  });

  return {
    paths,
    fallback: true
  };
};
