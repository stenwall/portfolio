import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';

const Flick = () => {
  

  return (
    <Layout>
      <main>
        <ul className={styles['gallery-list']}>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=1" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=2" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=3" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=4" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=5" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=6" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=7" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=8" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=9" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=10" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=11" alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://via.placeholder.com/400x225?text=12" alt="" />
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
