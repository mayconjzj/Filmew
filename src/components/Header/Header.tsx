import { Nav } from '@/components/Nav';
import { Logo } from '@/components/Logo';
import * as S from './styles';
import { fips } from 'crypto';

export const Header = () => {
  return (
    <>
      <S.Container>
        <Logo />

        <Nav />
      </S.Container>
    </>
  );
};
