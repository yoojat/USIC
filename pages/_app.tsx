import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Layout from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
