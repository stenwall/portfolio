import styles from '@components/video/Video.module.scss';
import Vimeo from '@vimeo/player';
import { useEffect, useRef } from 'react';

interface Props {
  url: string;
  color?: string;
}

const VimeoPlayer = ({ url, color = '1f7390' }: Props) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoContainer = playerRef.current;

    const options = {
      url: url,
      byline: false,
      portrait: false,
      color: color,
      title: false
    };

    const player = new Vimeo(videoContainer, options);

    player.on('play', function () {
      console.log('played the video!');
    });
  }, []);

  return <div className={styles.wrapper} ref={playerRef}></div>;
};

export default VimeoPlayer;
