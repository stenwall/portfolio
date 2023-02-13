import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import VimeoPlayer from '@components/video/VimeoPlayer';

const Mazda = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Mazda</h2>
      <section className={styles.film}>
        <VimeoPlayer
          url="https://player.vimeo.com/video/184591407?h=cb1178d645"
          color="83262c"
        />
        <div className={styles['film-desc']}>
          <ul>
            <li>
              <span>Director</span> Alexis Almström
            </li>
            <li>
              <span>Producer</span> StDH
            </li>
            <li>
              <span>15 min</span>
            </li>
          </ul>
          <div>
            <p>
              <i>
                After a brutal police beating, riots has broken out in a suburb
                outside of Stockholm. Three friends, Sara, Victor and Billy join
                up to participate in the riots and to burn cars. Finding
                themselves trapped in the middle of the riots they are forced to
                escape, stumbling upon an old Mazda.
              </i>
            </p>
            <p className={styles.extra}>
              – Won Gold in the film school category, Sveriges kortfilmfestival
              2015
            </p>
            <p className={styles.extra}>
              – Won Best cinematography in the film school category, Sveriges
              kortfilmfestival 2015
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Mazda;
