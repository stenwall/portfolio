import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import VimeoPlayer from '@components/video/VimeoPlayer';

const MinHomosyster = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Min Homosyster / My Gay Sister</h2>
      <section className={styles.film}>
        <VimeoPlayer
          url="https://player.vimeo.com/video/226770530?h=c476461902"
          color="9663b1"
        />
        <div className={styles['film-desc']}>
          <ul>
            <li>
              <span>Director</span> Lia Hietala
            </li>
            <li>
              <span>Producer</span> New Stories/Toft Film
            </li>
            <li>
              <span>15 min</span>
            </li>
          </ul>
          <div>
            <p>
              <i>
                10-year old Cleo joins her lesbian sister Gabbi and her
                girlfriend to her summerhouse. In the center of attention is the
                biggest question: Who is Cleo in love with, is it a girl or is
                it a boy?
              </i>
            </p>
            <p>
              My Gay Sister is a story about a young girls first meeting with
              the expectations to define her sexuality and about the ability to
              create, gain and lose trust for one another.
            </p>

            <p className={styles.extra}>
              – Won best short at the 31. TEDDY Award at the 2017 Berlinale
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default MinHomosyster;
