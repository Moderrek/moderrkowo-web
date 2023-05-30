import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pl_PL' className='h-full bg-white'>
      <Head>
      </Head>
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}