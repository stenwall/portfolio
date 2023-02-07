import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const BlipLayout = ({
  children,
  title = 'Karin Stenwall | Director of Photography'
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
);

export default BlipLayout;
