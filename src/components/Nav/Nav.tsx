import { List, ListItem } from '@/components/List';
import { NavType } from '@/models';

import * as S from './styles';

export const Nav = ({ items }: NavType) => {
  return (
    <>
      <S.Container>
        <List>
          {items.map((item) => (
            <ListItem key={item.title}>{item.title}</ListItem>
          ))}
        </List>
      </S.Container>
    </>
  );
};
