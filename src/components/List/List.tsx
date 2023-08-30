import * as S from './styles';

export const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <S.List>
        {children}
      </S.List>
    </>
  );
};
