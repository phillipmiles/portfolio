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
import ReactPlayer from 'react-player';
import { useEffect, useRef, useState } from 'react';
import HeroScreen3 from './HeroScreen3';
import HeroScreen4 from './HeroScreen4';

const Hero = () => {
  const [timeDelay, setTimeDelay]: any = useState();
  const [video, setVideo] = useState(1);
  const video1Ref: any = useRef();
  const video2Ref: any = useRef();
  const video3Ref: any = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (video === 1) {
        video2Ref.current.seekTo(15, 'seconds');
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

  const hideTransition = () => {
    return {
      transform: 'scale(80%)',
      opacity: 0,
    };
  };

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
        <div
          className={`${s.imageScreen} ${s.imageTransition}`}
          style={{
            ...(video !== 1 && hideTransition()),
          }}
        >
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
      <HeroScreen4 isVisible={video === 2} />

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
        <div
          className={`${s.imageScreen} ${s.imageTransition}`}
          style={{
            ...(video !== 3 && hideTransition()),
          }}
        >
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
            <div className={s.imageScreenHeaderWrap}>
              <div className={s.imageScreenHeader} />
              <div className={s.imageScreenAvatarWrap}>
                <div className={s.imageScreenAvatar} />
                <div className={s.imageScreenAvatar} />
              </div>
            </div>
            <div className={s.imageScreenColumns}>
              <div className={s.imageScreenCol}>
                <div className={s.imageScreenCard}>
                  <div className={s.imageScreenColumnImage} />
                </div>
                <div className={s.imageScreenCard}>
                  {/* <div className={s.imageScreenColumnImage} /> */}
                </div>
              </div>
              <div className={s.imageScreenCol}>
                <div className={s.imageScreenCard} />
                <div className={s.imageScreenCard}>
                  <div className={s.imageScreenColumnImage} />
                </div>
              </div>
              <div className={s.imageScreenCol}>
                <div className={s.imageScreenCard}>
                  <div className={s.imageScreenColumnImage} />
                </div>
                <div className={s.imageScreenCard}>
                  <div className={s.imageScreenColumnImage} />
                </div>
              </div>
              <div className={s.imageScreenCol}>
                <div className={s.imageScreenCard} />
                <div className={s.imageScreenCard} />
              </div>
            </div>
          </div>
        </div>
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
