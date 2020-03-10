/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { useController } from 'react-scroll-parallax';
import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from '@reach/router';
import { Image } from '../components';

const calc = (mouseX, mouseY, e) => {
  const { left, top, width, height } = e.getBoundingClientRect();

  return [
    -(mouseY - top - height / 2) / 100,
    (mouseX - left - width / 2) / 100,
    1.06,
  ];
};

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PreviewImage = ({ alt, src, linkUrl, ...props }) => {
  const animationEventSourceRef = useRef();
  const { parallaxController } = useController();
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const updateParallax = () => {
    window.requestAnimationFrame(() => {
      parallaxController.update();
    });
  };

  return (
    // Outer div acts as the static source for position variables used
    // in animation calculations.
    <div {...props} ref={animationEventSourceRef}>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({ xys: calc(x, y, animationEventSourceRef.current) })
        }
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: springProps.xys.interpolate(trans) }}
      >
        <Link to={linkUrl}>
          <Image
            src={src}
            alt={alt}
            onLoad={updateParallax}
            sx={{
              maxWidth: '100%',
              display: 'block',
              boxShadow: 2,
              borderRadius: 'large',
              transition: 'transform 200ms ease',
            }}
          />
        </Link>
      </animated.div>
    </div>
  );
};

PreviewImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default PreviewImage;
