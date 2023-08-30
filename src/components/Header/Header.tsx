import { Navbar } from '@/components/Navbar'
import { Logo } from '@/components/Logo';
import * as S from './styles';

export const Header = () => {
  return (
    <>
      <S.Container>
        <Logo />

        <Navbar />
      </S.Container>
    </>
  );
};
