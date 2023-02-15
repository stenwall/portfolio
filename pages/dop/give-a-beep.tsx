import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import YouTubePlayer from '@components/video/YouTubePlayer';

const GiveABeep = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>Give a *beep*</h2>
      <section className={styles.film}>
        <YouTubePlayer id="1_YW6R1HjyY" />
        <div className={styles['film-desc']}>
          <ul>
            <li>
              <span>Directors</span> Hanna Stenwall, Carl Platon
            </li>
            <li>
              <span>Producer</span> Edelman Deportivo
            </li>
          </ul>
          <div>
            <p>
              <i>
                With Give A Beep campaign presented in London 2016, Swedish
                company Hövding reinvented the old bicycle bell. Hundreds of
                cycling influencers got a smart Flic button to be able to
                register their specific frustration hot spots in the London
                traffic. Each use of the smart bell was noted on an interactive
                heatmap of London. Simultaneously an automated email was sent to
                the Mayor of London to motivate him to act. The campaign has
                attracted interest from other cities, and it’s now in use by the
                London Road Network to build rapport with the city’s cyclists,
                and to remedy problems in the London traffic.
              </i>
            </p>
            <p className={styles.extra}>
              – Campaign won the White Pencil in the Urban Living category, D&AD
              Impact Awards 2016
            </p>
            <p className={styles.extra}>
              – Campaign won Golden Egg/Guldägg in the Digital category and two
              Silver Egg/Silverägg in the Mobile and PR categories, the Gold Egg
              Award/Guldägget 2017
            </p>
            <p className={styles.extra}>
              – Campaign won Bronze Lion in the category Best Mobile Campaign,
              Cannes Lions 2017
            </p>
            {/* <p className={styles.extra}>
              – Campaign won the Best Social Community Building and Engagement,
              the Webby Awards 2017
            </p>
            <p className={styles.extra}>
              – Campaign won Gold in category Digital Campaign of the Year,
              Spinn 2016
            </p> */}
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default GiveABeep;
