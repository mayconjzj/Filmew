import { Logo } from '@/components/Logo';
import { Nav } from '@/components/Nav';
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
