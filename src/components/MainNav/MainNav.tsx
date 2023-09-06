import { List, ListItem } from '@/components/List';
import { Link } from '@/components/Link';
import { MainNavType } from '@/models';
import { ToggleButton, ListMobile } from './components';
import { useNav } from './hooks';

import * as S from './styles';

export const MainNav = ({ items }: MainNavType) => {
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

      <S.NavMobile isOpenMenu={isOpenMenu}>
        <S.Content>
          <ToggleButton
            isOpenMenu={isOpenMenu}
            handleToggleMenu={handleToggleMenu}
          />
        </S.Content>

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
