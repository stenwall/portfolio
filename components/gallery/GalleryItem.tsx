import Link from 'next/link';
import { motion, Transition } from 'framer-motion';
import styles from './Gallery.module.scss';
import Image, { StaticImageData } from 'next/image';

const hoverBg = {
  rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
  hover: {
    opacity: 0.6,
    transition: {
      duration: 0.2,
      type: 'tween'
    }
  }
};

const hoverImg = {
  rest: { scale: 1, ease: 'easeOut', duration: 0.2, type: 'tween' },
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.7,
      type: 'spring'
    }
  }
};

const hoverCaption = {
  rest: { y: 30, opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring'
    }
  }
};

// const attributes = isMobile ? {
//   drag: "x",
//   dragConstraints: { left: 0, right: 0 },
//   animate: { x: myVariable },
//   onDragEnd: myFunction
// } : { onMouseOver, onMouseLeave };

// <motion.div {...attributes}> {/* stuff */} </motion.div>

interface Props {
  img: StaticImageData;
  title: string;
  link: string;
  delay: Transition['delay'];
  hoverable: boolean;
}

const GalleryItem = (props: Props) => {
  const { img, title, link, delay, hoverable } = props;

  return (
    <motion.li
      initial="rest"
      whileHover={hoverable ? 'hover' : null}
      animate="rest"
    >
      <Link href={link}>
        <motion.figure
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: delay }}
        >
          <motion.div className={styles['image-container']} variants={hoverImg}>
            <Image
              src={img}
              alt={title}
              fill
              priority
              sizes="(max-width: 400px) 100vw, (max-width: 829) 66vw, 50vw"
            />
          </motion.div>
          <motion.div
            className={styles['hover-bg']}
            variants={hoverBg}
          ></motion.div>
          <motion.figcaption variants={hoverCaption}>
            <h2>{title}</h2>
          </motion.figcaption>
        </motion.figure>
      </Link>
    </motion.li>
  );
};

export default GalleryItem;
