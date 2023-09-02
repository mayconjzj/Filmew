import { Card } from '@/components/Card';

import * as S from './styles';

export const Dashboard = () => {
  return (
    <>
      <article>
        <section>
          <S.Category>Ação</S.Category>
          <S.Movies>
            <Card />
          </S.Movies>
        </section>
      </article>
    </>
  );
};
