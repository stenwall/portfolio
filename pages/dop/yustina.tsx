import Link from 'next/link';
import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';

const Yustina = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Yustinas Hämnd</h2>
      <h3>Education</h3>
      <ul>
        <li>
          2012-2015 Bachelor in cinematography at Stockholm academy of dramatic
          arts, Sweden
        </li>
        <li>2006-2008 Basic filmproduction at Stockholm filmskola, Sweden</li>
      </ul>
      <h3>Music promos</h3>
      <p>
        Peter Bjorn & John, Existensminimum, Lisa Ekdahl, EP’s Trailerpark,
        Soles of men, San Fairy Ann, APA
      </p>
    </main>
  </Layout>
);

export default Yustina;
