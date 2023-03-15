import Head from 'next/head';
import type { AppProps } from 'next/app';

import GlobalStyle from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jean Carlos Guimarães</title>
        <meta name="description" content="Meu blog pessoal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
