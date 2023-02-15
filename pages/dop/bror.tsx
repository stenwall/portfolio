import Image from 'next/image';
import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import bror from 'assets/images/flick/projects/bror-poster.jpg';

const Bror = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Bror</h2>
      <section className={styles.film}>
        <figure className={styles['profile-pic']}>
          <Image
            src={bror}
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
              <span>Producer</span> Alegren Productions
            </li>
            <li>
              <span>15 min</span>
            </li>
          </ul>
          <div>
            <p>
              <i>
                Nico and Khalid are best friends, always have been. Khalid was
                born in Iran, a country where having feelings for another man
                can lead to the death penalty. Nico was born in Sweden, a
                country where it's openly accepted for a man to have a
                boyfriend. And yet it's Nico who keeps holding back when Khalid
                tries to take their relationship to another level.
              </i>
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Bror;
