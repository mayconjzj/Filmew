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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
