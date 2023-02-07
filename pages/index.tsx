import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { dotAnim, transitionAnim } from 'helpers';
import Layout from '@components/layout/DefaultLayout';
import CodeIcon from '@components/svg/CodeIcon';
import CameraIcon from '@components/svg/CameraIcon';
import styles from '@styles/Page.module.scss';
import Blip from '@components/svg/Blip';
import Flick from '@components/svg/Flick';

const Index = () => {
  const flickRef = useRef<SVGSVGElement>(null);
  const blipRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const flickSvg = flickRef.current;
    const flickChildren = flickSvg.querySelectorAll(':scope > path, line');
    const flickDot = flickSvg.querySelector('.dot');

    const blipSvg = blipRef.current;
    const blipChildren = blipSvg.querySelectorAll(':scope > path, line');
    const blipDot = blipSvg.querySelector('.dot');

    dotAnim(flickDot as HTMLElement);
    transitionAnim(flickChildren);
    dotAnim(blipDot as HTMLElement);
    transitionAnim(blipChildren);
  }, []);

  const flickHoverHandler = () => {
    const flickSvg = flickRef.current;
    const flickChildren = flickSvg.querySelectorAll(':scope > path, line');
    const dot = flickSvg.querySelector('.dot');

    dotAnim(dot as HTMLElement);
    transitionAnim(flickChildren);
  };

  const blipHoverHandler = () => {
    const blipSvg = blipRef.current;
    const blipChildren = blipSvg.querySelectorAll(':scope > path, line');
    const dot = blipSvg.querySelector('.dot');

    dotAnim(dot as HTMLElement);
    transitionAnim(blipChildren);
  };

  return (
    <Layout>
      <main className={styles['main-start']}>
        <section>
          <div className={styles['wrapper-blip']}>
            <Blip ref={blipRef} />
            <Link
              onMouseEnter={blipHoverHandler}
              href="/dev"
              className={styles.icon}
            >
              <CodeIcon />
            </Link>
          </div>
          <div className={styles['wrapper-flick']}>
            <Flick ref={flickRef} />
            <Link
              onMouseEnter={flickHoverHandler}
              href="/dop"
              className={styles.icon}
            >
              <CameraIcon />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Index;
