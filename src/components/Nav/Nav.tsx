import { List, ListItem } from '@/components/List';
import { Link } from '@/components/Link';
import { NavType } from '@/models';

import * as S from './styles';

export const Nav = ({ items }: NavType) => {
  return (
    <>
      <S.Container>
        <List>
          {items.map((item) => (
            <ListItem key={item.title}>
              <Link href={item.href}>
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </S.Container>
    </>
  );
};
