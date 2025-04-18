// Lazy load react-player to get around hydration error issue
// https://github.com/cookpete/react-player/issues/1455#issuecomment-1207154843
import dynamic from 'next/dynamic';
import s from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCartShopping,
  faComment,
  faCommentAlt,
  faHeart,
  faPen,
  faSearch,
  faShare,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Screen01 from './componentImages/Screen01';
import Screen02 from './componentImages/Screen02';
import Screen03 from './componentImages/Screen03';

const VideoPlayer = dynamic(() => import('./generic/VideoPlayer'), {
  ssr: false,
});

const Hero = () => {
  const [video, setVideo] = useState(1);
  const video1Ref: any = useRef();
  const video2Ref: any = useRef();
  const video3Ref: any = useRef();
  const [video1Ready, setVideo1Ready] = useState(false);
  const [video2Ready, setVideo2Ready] = useState(false);
  const [video3Ready, setVideo3Ready] = useState(false);

  const onVideo1Ready = useCallback(() => {
    if (!video1Ready) {
      video1Ref.current.seekTo(0, 'seconds');

      setVideo1Ready(true);
    }
  }, [video1Ready]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (video === 1) {
        setVideo2Ready(true);
        if (video3Ref.current) {
          video3Ref.current.seekTo(0, 'seconds');
        }
        setVideo(2);
      } else if (video === 2) {
        video1Ref.current.seekTo(0, 'seconds');
        setVideo(3);
      } else if (video === 3) {
        video2Ref.current.seekTo(0, 'seconds');
        setVideo(1);
      }
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, [video]);

  const hideTransition = () => {
    return {
      transform: 'scale(80%)',
      opacity: 0,
    };
  };

  return (
    <div className={s.wrap}>
      <div className={s.videoWrap}>
        {!video1Ready && (
          <Image
            src="/images/hero/video-placeholder.jpg"
            alt=""
            fill
            priority
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              objectFit: 'cover',
              opacity: 0.5,
            }}
          />
        )}
        <VideoPlayer
          playerRef={video1Ref}
          url="/video/hero-vid-1.mp4"
          onReady={onVideo1Ready}
          className={s.video}
          style={{
            transition: 'transform 300ms, opacity 300ms',
            ...((video === 1 || video1Ready === false) && {
              opacity: 1,
            }),
          }}
          playing={video === 1}
          muted={true}
          width="100%"
          height="100%"
          loop={true}
        />
        {video1Ready && (
          <VideoPlayer
            playerRef={video2Ref}
            url="/video/hero-vid-2.mp4"
            className={s.video}
            style={{
              transition: 'transform 300ms, opacity 300ms',
              ...(video === 2 && {
                opacity: 1,
              }),
            }}
            playing={video === 2}
            muted={true}
            width="100%"
            height="100%"
            loop={true}
          />
        )}
        {video2Ready && (
          <VideoPlayer
            playerRef={video3Ref}
            url="/video/hero-vid-3.mp4"
            className={s.video}
            style={{
              transition: 'transform 300ms, opacity 300ms',
              ...(video === 3 && {
                opacity: 1,
              }),
            }}
            playing={video === 3}
            muted={true}
            width="100%"
            height="100%"
            loop={true}
          />
        )}
      </div>
      {/* IMAGE GROUP 1 */}
      <div className={s.imageButtonGroup}>
        <div
          className={`${s.imageButton1} ${s.imageTransition}`}
          style={{ ...(video !== 1 && hideTransition()) }}
        ></div>
        <div
          className={`${s.imageButton2} ${s.imageTransition}`}
          style={{
            ...(video !== 1 && hideTransition()),
          }}
        >
          Add to cart
        </div>
      </div>
      <div className={s.imageScreenWrap}>
        <Screen01
          className={s.imageTransition}
          style={{
            ...(video !== 1 && hideTransition()),
          }}
        />
      </div>

      <div className={s.imageIconGroup}>
        <div
          className={`${s.imageIcon} ${s.imageTransition}`}
          style={{
            ...(video !== 1 && hideTransition()),
          }}
        >
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div
          className={`${s.imageIcon} ${s.imageTransition}`}
          style={{
            ...(video !== 1 && hideTransition()),
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div
          className={`${s.imageIcon} ${s.imageTransition}`}
          style={{
            ...(video !== 1 && hideTransition()),
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      {/* IMAGE GROUP 2*/}
      <div className={s.imageButtonGroup2}>
        <div
          className={`${s.imageButton3} ${s.imageTransition}`}
          style={{ ...(video !== 2 && hideTransition()) }}
        >
          <FontAwesomeIcon icon={faShare} />
          Share
        </div>
        <div
          className={`${s.imageButton3} ${s.imageTransition}`}
          style={{
            ...(video !== 2 && hideTransition()),
          }}
        >
          <FontAwesomeIcon icon={faCommentAlt} />
          Comment
        </div>
      </div>
      <div className={s.imageScreenWrap3}>
        <Screen03
          className={s.imageTransition}
          style={{
            ...(video !== 2 && hideTransition()),
          }}
        />
      </div>

      {/* ADDD AN AVATAR IN A CIRCLE !!!!!!!!!!!!!! font awesome human
      
      */}
      {/* IMAGE GROUP 3*/}
      <div
        className={`${s.imageSearch} ${s.imageTransition}`}
        style={{
          ...(video !== 3 && hideTransition()),
        }}
      >
        <span>Search</span>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className={s.imageScreenWrap2}>
        <Screen02
          className={s.imageTransition}
          style={{
            ...(video !== 3 && hideTransition()),
          }}
        />
      </div>
      <div className={s.imageIconGroup2}>
        <div
          className={`${s.imageIcon} ${s.imageTransition}`}
          style={{
            ...(video !== 3 && hideTransition()),
          }}
        >
          <FontAwesomeIcon icon={faShare} />
        </div>
        <div
          className={`${s.imageIcon} ${s.imageTransition}`}
          style={{
            ...(video !== 3 && hideTransition()),
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div
          className={`${s.imageIcon} ${s.imageTransition}`}
          style={{
            ...(video !== 3 && hideTransition()),
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
