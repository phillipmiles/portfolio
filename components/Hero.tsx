import s from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCartShopping,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [timeDelay, setTimeDelay]: any = useState();
  const [video, setVideo] = useState(1);
  const video1Ref: any = useRef();
  const video2Ref: any = useRef();
  const video3Ref: any = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (video === 1) {
        video2Ref.current.seekTo(7, 'seconds');
        setVideo(2);
      } else if (video === 2) {
        video3Ref.current.seekTo(0, 'seconds');
        setVideo(3);
      } else if (video === 3 && video1Ref.current) {
        video1Ref.current.seekTo(0, 'seconds');
        setVideo(1);
      }
    }, 6000);

    setTimeDelay(timeout);

    return () => {
      clearTimeout(timeDelay);
    };
  }, [video]);

  return (
    <div className={s.wrap}>
      <div className={s.videoWrap}>
        <ReactPlayer
          ref={video1Ref}
          url="/video/hero-vid-1.mp4"
          className={s.video}
          style={{
            transition: 'transform 300ms, opacity 300ms',
            ...(video === 1 && {
              opacity: 1,
            }),
          }}
          playing={video === 1}
          muted={true}
          width="100%"
          height="100%"
          loop={true}
        />
        <ReactPlayer
          ref={video2Ref}
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
        <ReactPlayer
          ref={video3Ref}
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
      </div>
      {/* <div className={s.image}> */}
      <div className={s.imageButtonGroup}>
        <div className={s.imageButton1}></div>
        <div className={s.imageButton2}>Add to cart</div>
      </div>
      <div className={s.imageScreenWrap}>
        <div className={s.imageScreen}>
          <div className={`${s.imageScreenBar} ${s.imageScreenCard}`}>
            <div className={s.imageScreenBarMenu}>
              <div className={s.imageScreenBarMenuItem} />
              <div className={s.imageScreenBarMenuItem} />
              <div className={s.imageScreenBarMenuItem} />
            </div>
            <div className={s.imageScreenBarAddressWrapper}>
              <div className={s.imageScreenBarAddress} />
            </div>
          </div>
          <div className={s.imageScreenContent}>
            <div className={s.imageScreenHeader} />
            <div className={s.imageScreenContentSplit}>
              <div
                className={`${s.imageScreenContentLeft} ${s.imageScreenCard}`}
              >
                <div
                  className={`${s.imageScreenButton} ${s.imageScreenContentLeftButton}`}
                >
                  <div />
                </div>
              </div>
              <div className={s.imageScreenContentRight}>
                <div className={s.imageScreenContentRightHeader} />
                <div
                  className={`${s.imageScreenContentRightBox} ${s.imageScreenCard}`}
                >
                  <div
                    className={`${s.imageScreenButton} ${s.imageScreenContentLeftButton}`}
                  >
                    <div />
                  </div>
                </div>
                <div className={s.imageScreenContentRightTrio}>
                  <div className={s.imageScreenCard} />
                  <div className={s.imageScreenCard} />
                  <div className={s.imageScreenCard} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.imageIconGroup}>
        <div className={s.imageIcon}>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className={s.imageIcon}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className={s.imageIcon}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
