import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import VimeoPlayer from '@components/video/VimeoPlayer';

const InutiEttTrad = () => (
  <Layout>
    <main className={styles.flick}>
      <div className={styles.heading}>
        <h2>
          Inuti ett träd <i>(parts)</i>
        </h2>
        <span className={styles.subtitle}>Documentary</span>
      </div>
      <section className={styles.film}>
        <VimeoPlayer
          url="https://player.vimeo.com/video/159278401?h=58412ab2b9"
          color="376a0e"
        />
        <div className={styles['film-desc']}>
          <ul>
            <li>
              <span>Director</span> Gustav Ågerstrand
            </li>
            <li>
              <span>Producer</span> StDH
            </li>
            <li>
              <span>58 min</span>
            </li>
          </ul>
          <div>
            <p>
              <i>
                Tania works in a cafe and sees how one of her guests disappears
                deeper and deeper into his drug addiction. Tomas' life is a
                chaos of emotions, amphetamines and rotting frozen food on the
                TV couch - and when no one else helps, Tania steps into his
                messy apartment to sort out his life. She has heard of a
                hallucinogenic cactus tea that could help Tomas break his
                destructive patterns, and does everything she can to get him to
                come along to the San Pedro cactus ceremony.
              </i>
            </p>
            <p>
              Inside a tree is an emotionally charged documentary about two
              people who, on the surface, are direct opposites, but who are
              nevertheless united in a deep humanity, a courage and a belief in
              the good that is found deepest in every human being.
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default InutiEttTrad;
