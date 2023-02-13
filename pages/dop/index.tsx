import styles from '@styles/Flick.module.scss';
import Layout from '@components/layout/FlickLayout';
import { films } from 'projects/flick/films';
import GalleryItem from '@components/galleryItem';

const Flick = () => {
  return (
    <Layout>
      <main>
        <ul className={styles['gallery-list']}>
          {films &&
            films.map((film, idx) => (
              <GalleryItem
                key={idx}
                img={film.img}
                title={film.title}
                link={film.link}
                delay={film.delay}
              />
            ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Flick;

// sources/tools
//----------------------------
// responsive image grid
// https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
// inspo for hover effect
// https://codepen.io/maheshambure21/pen/GgVbVW
