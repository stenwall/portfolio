import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const DefaultLayout = ({
  children,
  title = 'Karin Stenwall'
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    </header>
    {children}
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
);

export default DefaultLayout;
