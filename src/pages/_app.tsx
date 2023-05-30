import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
