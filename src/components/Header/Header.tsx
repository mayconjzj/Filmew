import { Nav } from '@/components/Nav';
import { Logo } from '@/components/Logo';
import { NavConfig } from '@/config';

import * as S from './styles';

export const Header = () => {
  return (
    <>
      <S.Container>
        <Logo />

        <Nav items={NavConfig.items} />
      </S.Container>
    </>
  );
};
