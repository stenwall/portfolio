import Image from 'next/image';
import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import hemmavid from 'assets/images/flick/projects/hemmavid-poster.jpg';

const Hemmavid = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Hemmavid</h2>
      <section className={styles.film}>
        <figure className={styles['profile-pic']}>
          <Image
            src={hemmavid}
            alt="Poster for the film."
            placeholder="blur"
            fill
          />
        </figure>
        <div className={styles['film-desc']}>
          <ul>
            <li>
              <span>Director</span> Rebecka Ekholm
            </li>
            <li>
              <span>Producer</span> Claes Hedlund/SKH
            </li>
            <li>
              <span>12 min</span>
            </li>
          </ul>
          <div>
            <p>
              Hemmavid is a documentary poem about three women in a small
              village, Vormsele, in the interior of Västerbotten. We meet
              Isabelle, who has returned home after a personal trauma, Rut who
              has lived in the village all her life and Katharina - a German
              woman who together with her British husband drove through the
              village 8 years ago, and has stayed there ever since.
            </p>
            <p>
              Hemmavid is about these people's relationship to a home, and a
              place.
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Hemmavid;
