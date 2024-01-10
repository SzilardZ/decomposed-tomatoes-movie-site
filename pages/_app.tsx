import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color='#63e6be' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
