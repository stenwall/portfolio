import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import YouTubePlayer from '@components/video/YouTubePlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const GirlsBoys = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Girls & Boys</h2>
      <section className={styles.film}>
        <YouTubePlayer id="zRVMs1lBwKQ" />
        <div className={styles['film-desc']}>
          <ul>
            <li>
              <span>Director</span> Ninja Thyberg
            </li>
            <li>
              <span>Producer</span> StDH
            </li>
            <li>
              <span>31 min</span>
            </li>
          </ul>
          <div>
            <p>
              <i>
                Sixteen-year-old Nour is a horny nerd whose greatest desire is
                to get rid of her virginity. But if she can’t even talk to guys,
                how the heck will she then get laid?
              </i>
            </p>
            <p>
              Girls & Boys is a swedish High School comedy, but with a reversed
              gender system, were women are the predators and men are the prey.
            </p>
            <p className={styles.extra}>
              – <a className={styles.link} href="https://vimeo.com/ondemand/girlsandboys">Watch the film on Vimeo <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default GirlsBoys;
