import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Nunito_Sans, Nunito } from '@next/font/google';
import styles from '@components/layout/Layout.module.scss';
import Burger from '@components/flick-menu/burger';
import Menu from '@components/flick-menu/menu';
import useMediaQuery from 'hooks/useMediaQuery';

const nunitoSans = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

const nunito = Nunito({
  weight: ['200', '300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

type Props = {
  children?: ReactNode;
  title?: string;
};

const FlickLayout = ({
  children,
  title = 'Karin Stenwall | Director of Photography'
}: Props) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 810px)');

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx global>{`
        :root {
          --nunito-sans: ${nunitoSans.style.fontFamily};
          --nunito: ${nunito.style.fontFamily};
        }
        html {
          font-family: var(--nunito-sans);
          letter-spacing: 0.04em;
        }
        body {
          background-color: #222222;
          color: #dadada;
        }
      `}</style>
      <header className={styles.header}>
        <Link href="/dop">
          <h1>Karin Stenwall / Director of Photography</h1>
        </Link>
        <div>
          <Menu open={open} desktop={isDesktop}>
            {!isDesktop && <Burger open={open} setOpen={setOpen} />}
          </Menu>
        </div>
      </header>
      {children}
    </>
  );
};

export default FlickLayout;
