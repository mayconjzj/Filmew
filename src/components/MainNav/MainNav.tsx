import { Link } from '@/components/Link';
import { List, ListItem } from '@/components/List';
import { Search } from '@/components/Search';

import { MainNavType } from '@/models';

import { ToggleButton, ListMobile } from './components';
import { useMainNav } from './hooks';
import * as S from './styles';

export const MainNav = ({ items }: MainNavType) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

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

      <S.NavMobile isOpenMenu={isOpenMenu}>
        <ListMobile>
          {items.map((item) => (
            <ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </ListItem>
          ))}
        </ListMobile>
      </S.NavMobile>
    </>
  );
};
