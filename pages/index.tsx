import Link from 'next/link';
import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { dotAnim, transitionAnim } from 'helpers';
import Layout from '@components/layout/DefaultLayout';
import CodeIcon from '@components/svg/CodeIcon';
import CameraIcon from '@components/svg/CameraIcon';
import styles from '@styles/Page.module.scss';
import Blip from '@components/svg/Blip';
import Flick from '@components/svg/Flick';

const Index = () => {
  const flickRef = useRef<SVGSVGElement>(null),
    blipRef = useRef<SVGSVGElement>(null),
    [subtitle, setSubtitle] = useState(null),
    [cameraColor, setCameraColor] = useState('#000000'),
    [codeColor, setCodeColor] = useState('#000000');

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

  const hoverHandler = (icon: string) => {
    let ref: SVGSVGElement;
    switch (icon) {
      case 'flick':
        ref = flickRef.current;
        break;
      case 'blip':
        ref = blipRef.current;
        break;
      default:
        break;
    }
    const children = ref.querySelectorAll(':scope > path, line');
    const dot = ref.querySelector('.dot');

    dotAnim(dot as HTMLElement);
    transitionAnim(children);
  };

  const subtitleHandler = (e: BaseSyntheticEvent) => {
    if (e.target.firstChild?.id) {
      switch (e.target.firstChild?.id) {
        case 'camera-icon':
          setSubtitle('| director of photography');
          break;
        case 'code-icon':
          setSubtitle('| full-stack web developer');
          break;
        default:
      }
    }
  };

  return (
    <Layout>
      <main className={styles['main-start']}>
        <section>
          <div className={styles['wrapper-blip']}>
            <object>
              <Blip ref={blipRef} />
            </object>
            <Link
              onMouseEnter={() => {
                hoverHandler('blip');
                setCodeColor('#faf9f6');
              }}
              onMouseLeave={() => {
                setCodeColor('#000000');
              }}
              onMouseOver={subtitleHandler}
              href="/dev"
              className={styles.icon}
            >
              <CodeIcon color={codeColor} />
            </Link>
          </div>
          <div className={styles['wrapper-flick']}>
            <object>
              <Flick ref={flickRef} />
            </object>
            <Link
              onMouseEnter={() => {
                hoverHandler('flick');
                setCameraColor('#faf9f6');
              }}
              onMouseLeave={() => {
                setCameraColor('#000000');
              }}
              onMouseOver={subtitleHandler}
              href="/dop"
              className={styles.icon}
            >
              <CameraIcon color={cameraColor} />
            </Link>
          </div>
        </section>
      </main>
      <div className={styles['start-title']}>
        <h1>
          karin stenwall <span>{subtitle}</span>
        </h1>
      </div>
    </Layout>
  );
};

export default Index;

// sources to svg's
//-----------------------
// make svg's with paths
// https://www.svgator.com/blog/how-to-create-a-handwriting-animation/
// https://app.svgator.com/
// draw the lines without
// https://jakearchibald.com/2013/animated-line-drawing-svg/
// crop to content
// https://svgcrop.com/
// make svgr's
// https://react-svgr.com/playground/
// codepen with vanilla js
// https://codepen.io/nearbyalmond/pen/oNMayvv
