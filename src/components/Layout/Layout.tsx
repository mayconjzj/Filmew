import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
