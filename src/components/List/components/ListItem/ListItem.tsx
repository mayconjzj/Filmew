import * as S from './styles';

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <S.ListItem>{children}</S.ListItem>
    </>
  );
};
