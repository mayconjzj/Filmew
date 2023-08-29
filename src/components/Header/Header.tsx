import { Logo } from '@/components/Logo';
import * as S from './styles';

export const Header = () => {
  return (
    <>
      <S.Container>
        <Logo />

        <nav>
          <ul>
            <li>Inicio</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
      </S.Container>
    </>
  );
};
