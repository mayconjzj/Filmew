import { Logo } from '@/components/Logo';
import { MainNav } from '@/components/MainNav';
import { MainNavConfig } from '@/config';

import * as S from './styles';

export const Header = () => {
  return (
    <>
      <S.Container>
        <Logo />
        <MainNav items={MainNavConfig.items} /> 
      </S.Container>
    </>
  );
};
