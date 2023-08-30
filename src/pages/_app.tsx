import { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Filmew</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
