import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nunito_Sans, Nunito } from '@next/font/google';
import styles from '@components/layout/Layout.module.scss';

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
  const { asPath: currentPath } = useRouter();

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
        <nav className={styles.nav}>
          <Link
            href="/dop"
            className={currentPath === '/dop' ? styles.active : ''}
          >
            selected work
          </Link>
          <Link
            href="/dop/resume"
            className={currentPath === '/dop/resume' ? styles.active : ''}
          >
            resumé
          </Link>
          <Link
            href="/dop/contact"
            className={currentPath === '/dop/contact' ? styles.active : ''}
          >
            contact
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
};

export default FlickLayout;
