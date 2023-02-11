import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import Image from 'next/image';
import jamila from 'assets/images/flick/projects/jamila.jpg';
import hemmavid from 'assets/images/flick/projects/hemmavid.jpg';
import yustina from 'assets/images/flick/projects/yustina.jpg';
import giveabeep from 'assets/images/flick/projects/give-a-beep.jpg';
import homosyster from 'assets/images/flick/projects/min-homosyster.jpg';
import podium from 'assets/images/flick/projects/podium.jpg';
import girlsboys from 'assets/images/flick/projects/girls-boys.jpg';
import bror from 'assets/images/flick/projects/bror.jpg';
import lisa from 'assets/images/flick/projects/lisaekdahl.jpg';
import mazda from 'assets/images/flick/projects/mazda.jpg';
import existensminimum from 'assets/images/flick/projects/existensminimum.jpg';
import lastrebels from 'assets/images/flick/projects/last-rebels.jpg';

const Flick = () => {
  return (
    <Layout>
      <main>
        <ul className={styles['gallery-list']}>
          <li>
            <figure>
              {/* 1 */}
              {/* <img src="https://via.placeholder.com/400x225?text=1" alt="" /> */}
              <Image src={bror} alt="Bror" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 2 */}
              {/* <img src="https://via.placeholder.com/400x225?text=2" alt="" /> */}
              <Image src={yustina} alt="Yustinas hämnd" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 3 */}
              {/* <img src="https://via.placeholder.com/400x225?text=3" alt="" /> */}
              <Image src={jamila} alt="Jamila" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 4 */}
              {/* <img src="https://via.placeholder.com/400x225?text=4" alt="" /> */}
              <Image src={giveabeep} alt="Give a *beep*" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 5 */}
              {/* <img src="https://via.placeholder.com/400x225?text=5" alt="" /> */}
              <Image src={hemmavid} alt="Hemmavid" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 6 */}
              {/* <img src="https://via.placeholder.com/400x225?text=6" alt="" /> */}
              <Image src={girlsboys} alt="Girls & Boys" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 7 */}
              {/* <img src="https://via.placeholder.com/400x225?text=7" alt="" /> */}
              <Image src={homosyster} alt="Min Homosyster" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 8 */}
              {/* <img src="https://via.placeholder.com/400x225?text=8" alt="" /> */}
              <Image src={podium} alt="Podium" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 9 */}
              {/* <img src="https://via.placeholder.com/400x225?text=9" alt="" /> */}
              <Image src={lisa} alt="Lisa Ekdahl" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 10 */}
              {/* <img src="https://via.placeholder.com/400x225?text=10" alt="" /> */}
              <Image src={lastrebels} alt="Last Rebels" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 11 */}
              {/* <img src="https://via.placeholder.com/400x225?text=11" alt="" /> */}
              <Image src={mazda} alt="Mazda" placeholder="blur" />
            </figure>
          </li>
          <li>
            <figure>
              {/* 12 */}
              {/* <img src="https://via.placeholder.com/400x225?text=12" alt="" /> */}
              <Image
                src={existensminimum}
                alt="Existensminimum"
                placeholder="blur"
              />
            </figure>
          </li>
        </ul>
      </main>
    </Layout>
  );
};

export default Flick;

// sources/tools
//----------------------------
// https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
