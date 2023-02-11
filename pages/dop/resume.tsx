import Link from 'next/link';
import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';

const Resume = () => (
  <Layout>
    <main className={styles.flick}>
      <h2>resumé</h2>
      <h3>Education</h3>
      <ul>
        <li>
          2012-2015 Bachelor in cinematography at Stockholm academy of dramatic
          arts, Sweden
        </li>
        <li>2006-2008 Basic filmproduction at Stockholm filmskola, Sweden</li>
      </ul>
      <h3>Short / Documentary films</h3>
      <ul>
        <li>2020 Hemmavid, documentary, Dir: Rebecka Ekholm, Prod: Claes Hedlund/SKH</li>
        <li>2019 Jamila, short, Dir: Sophie Vukovic, Prod: Grand Slam</li>
        <li>
          2019 Bror, short, Dir: Isabella Carbonell, Prod: Alegren Productions
        </li>
        <li>
          2019 Yustinas hämnd, short, Dir: Isabella Carbonell, Prod: Madbunny
          Productions
        </li>
        <li>2019 After Azeroth, documentary, Dir: Joel Viksten</li>
        <li>
          2018 Kattfällan, documentary (parts), Dir: Anna Asplund, Prod: Djurens
          Rätt
        </li>
        <li>
          2017 Min Homosyster, short, Dir: Lia Hietala, Prod: New Stories/Toft
          Film
        </li>
        <li>
          2016 Inuti ett träd, documentary (parts), Dir: Gustaf Ågerstrand,
          Prod: StDH
        </li>
        <li>2015 Girls & Boys, short, Dir: Ninja Thyberg, Prod: StDH</li>
        <li>2015 Mazda, short, Dir: Alexis Almström, Prod: StDH</li>
        <li>2014 The last rebels, short, Dir: Mathias Toivonen, Prod: StDH</li>
      </ul>
      <h3>Commercials</h3>
      <p>
        Hövding, MyNewsdesk, Wide Narrow, Hammarby Fotboll, Brödinstitutet,
        Podium, TCO
      </p>
      <h3>Music promos</h3>
      <p>
        Peter Bjorn & John, Existensminimum, Lisa Ekdahl, EP’s Trailerpark,
        Soles of men, San Fairy Ann, APA
      </p>
    </main>
  </Layout>
);

export default Resume;
