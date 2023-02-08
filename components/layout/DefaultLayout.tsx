import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Source_Code_Pro } from '@next/font/google';

const sourceCodePro = Source_Code_Pro({
  weight: ['200', '300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

type Props = {
  children?: ReactNode;
  title?: string;
};

const DefaultLayout = ({ children, title = 'Karin Stenwall' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style jsx global>{`
      html {
        font-family: ${sourceCodePro.style.fontFamily};
      }
      body {
        background-color: #faf9f6;
      }
    `}</style>
    {children}
  </>
);

export default DefaultLayout;
