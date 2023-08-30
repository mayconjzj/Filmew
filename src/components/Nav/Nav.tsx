import { List, ListItem } from '@/components/List';

import * as S from './styles';

export const Nav = () => {
  return (
    <>
      <S.Container>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Sobre</ListItem>
          <ListItem>Contato</ListItem>
        </List>
      </S.Container>
    </>
  );
};
