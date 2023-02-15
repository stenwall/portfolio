import Image from 'next/image';
import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import jamila from 'assets/images/flick/projects/jamila-poster.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Jamila = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Jamila</h2>
      <section className={styles.film}>
        <figure className={styles['profile-pic']}>
          <Image
            src={jamila}
            alt="Poster for the film."
            placeholder="blur"
            fill
          />
        </figure>
        <div className={styles['film-desc']}>
          <ul>
            <li>
              <span>Director</span> Sophie Vukovic
            </li>
            <li>
              <span>Producer</span> Grand Slam Film
            </li>
            <li>
              <span>13 min</span>
            </li>
          </ul>
          <div>
            <p>
              <i>
                She is on her way out when she sees the envelope. Jamila's
                family has had their asylum application rejected. She pretends
                not to have seen it, drags her little sister to school and meets
                up with her friends. But suddenly, she sees them everywhere she
                turns – the police.
              </i>
            </p>
            <p className={styles.extra}>
              –{' '}
              <a className={styles.link} href="https://viddla.se/film/5647970">
                Watch the film on Viddla{' '}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Jamila;
