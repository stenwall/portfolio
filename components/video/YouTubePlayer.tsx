import styles from '@components/video/Video.module.scss';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useEffect, useRef } from 'react';

interface Props {
  id: string;
}

const YouTubePlayer = ({ id }: Props) => {
  const onPlay: YouTubeProps['onPlay'] = event => {
    console.log('played the video!');
  };
  const onPlayerReady: YouTubeProps['onReady'] = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      modestbranding: 1,
      playsinline: 1,
      autoplay: 0,
      controls: 1,
      showinfo: 0,
      rel: 0,
      fs: 1
    }
  };

  return (
    <YouTube
      videoId={id}
      className={styles.wrapper}
      opts={opts}
      onReady={onPlayerReady}
      onPlay={onPlay}
    />
  );
};

export default YouTubePlayer;
