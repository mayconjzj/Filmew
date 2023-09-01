import { List, ListItem } from '@/components/List';
import { Link } from '@/components/Link';
import { NavType } from '@/models';
import { ToggleButton } from './components';
import { useNav } from './hooks';

import * as S from './styles';

export const Nav = ({ items }: NavType) => {
  const { isOpenMenu, handleToggleMenu } = useNav();

  return (
    <>
      <S.Nav>
        <List>
          {items.map((item) => (
            <ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </ListItem>
          ))}
        </List>
      </S.Nav>

      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>
    </>
  );
};
