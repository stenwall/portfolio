import Image from 'next/image';
import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import yustina from 'assets/images/flick/projects/yustina-poster.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Yustina = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Yustinas Hämnd</h2>
      <section className={styles.film}>
        <figure className={styles['profile-pic']}>
          <Image
            src={yustina}
            alt="Poster for the film."
            placeholder="blur"
            fill
          />
        </figure>
        <div className={styles['film-desc']}>
          <ul>
            <li>
              <span>Director</span> Isabella Carbonell
            </li>
            <li>
              <span>Producer</span> Madbunny Film
            </li>
            <li>
              <span>15 min</span>
            </li>
          </ul>
          <div>
            <p>
              <i>
                Yustina’s sister is missing. She left their village in Kosovo to
                find work for them in Sweden, but the letters stopped coming.
                Now Yustina finds herself in this new country where she, all by
                herself, has to find and save her big sister.
              </i>
            </p>
            <p>
              Yustina’s journey will be filled with danger, so in order to cope
              with a brutal reality, she uses her imagination to create her own
              world. A world where the people that has imprisoned her sister are
              monsters that only she can defeat.
            </p>
            <p className={styles.extra}>
              –{' '}
              <a
                className={styles.link}
                href="https://drakenfilm.se/film/yustinas-hamnd"
              >
                Watch the film on Draken Film{' '}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Yustina;
