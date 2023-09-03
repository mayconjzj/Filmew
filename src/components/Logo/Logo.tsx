import Link from 'next/link';
import * as S from './styles';

export const Logo = () => {
  return (
    <>
      <S.Container>
        <Link href="/" legacyBehavior>
          <S.Logo>
            FILME<S.W>W</S.W>
          </S.Logo>
        </Link>
      </S.Container>
    </>
  );
};
