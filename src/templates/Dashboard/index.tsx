import { MovieCategory } from '@/components/MovieCategory';
import { useDashboard } from '@/hooks';

import * as S from './styles';

export const Dashboard = () => {
  const { categories } = useDashboard();

  return (
    <>
      <S.Container>
        {categories.map((category: { id: string; name: string }) => (
          <MovieCategory key={category.id} category={category} />
        ))}
      </S.Container>
    </>
  );
};
