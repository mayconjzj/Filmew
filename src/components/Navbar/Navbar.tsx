import { List, ListItem } from '@/components/List';

export const Navbar = () => {
  return (
    <>
      <nav>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Sobre</ListItem>
          <ListItem>Contato</ListItem>
        </List>
      </nav>
    </>
  );
};
