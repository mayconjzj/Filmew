import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Search } from '@/components/Search';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Search />
      <Main>{children}</Main>
    </>
  );
};
