import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import VimeoPlayer from '@components/video/VimeoPlayer';

const Podium = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Podium</h2>
      <section className={styles.film}>
        <VimeoPlayer
          url="https://player.vimeo.com/video/218344374"
          color="df43c0"
        />
        <div className={styles['film-desc']}>
          <ul>
            <li>
              <span>Director</span> Lina Forsgren
            </li>
            <li>
              <span>Producer</span> Studio Lina Forsgren
            </li>
          </ul>
          <div>
            <p>Teaser for Podium.</p>
            <p>
              <i>
                Podium is a culture association offering creative activities
                and safe meeting spots for young people identifying themselves
                as girls, non-binaries or transgender.
              </i>
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Podium;
