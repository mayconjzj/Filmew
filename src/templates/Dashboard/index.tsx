import { Main } from '@/components/Main';

import * as S from './styles';

export const Dashboard = () => {
  return (
    <>
      <Main>
        <h1>Filmes</h1>
        <S.Content>
          <h2>Ação</h2>
          <article>Filme 1</article>
          <article>Filme 2</article>
        </S.Content>
        <S.Content>
          <h2>Comédia</h2>
          <article>Filme 1</article>
          <article>Filme 2</article>
        </S.Content>
      </Main>
    </>
  );
};
