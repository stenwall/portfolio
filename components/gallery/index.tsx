import styles from './Gallery.module.scss';
import { films } from 'projects/flick/films';
import GalleryItem from '@components/gallery/GalleryItem';
import useMediaQuery from 'hooks/useMediaQuery';

const Gallery = () => {
  const hoverable = useMediaQuery('(any-hover: hover)');

  return (
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
              hoverable={hoverable}
            />
          ))}
      </ul>
    </main>
  );
};

export default Gallery;

// sources/tools
//----------------------------
// responsive image grid
// https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
// inspo for hover effect
// https://codepen.io/maheshambure21/pen/GgVbVW
