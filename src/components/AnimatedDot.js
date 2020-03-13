/** @jsx jsx */
import { jsx, useThemeUI, css } from 'theme-ui';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';

const AnimatedDot = props => {
  const { theme } = useThemeUI();
  const dotSpringProps = useSpring({
    from: {
      transform: 'translate3d(0px,0px,0) scale(0) rotateX(0deg)',
      // transform: 'scale(0)',
    },
    to: async next => {
      while (1) {
        await next({
          // transform: 'scale(1)',
          transform: 'translate3d(0px,-40px,0) scale(1) rotateX(0deg)',
          // transform: 'scale(1) translate3d(0, -40px, 0)',
          config: { mass: 5, tension: 400, friction: 40 },
        });
        await next({
          // transform: 'scale(1)',
          transform: 'translate3d(300px,0px,0) scale(1) rotateX(0deg)',
          // transform: 'scale(1) translate3d(0, -40px, 0)',
          config: { mass: 5, tension: 400, friction: 40 },
        });
        await next({
          // transform: 'scale(1)',
          transform: 'translate3d(300px,100px,0) scale(1) rotateX(0deg)',
          // transform: 'scale(1) translate3d(0, -40px, 0)',
          config: { mass: 5, tension: 400, friction: 40 },
        });
        await next({
          // transform: 'scale(0)',
          transform: 'translate3d(300px,100px,0) scale(0) rotateX(0deg)',
          // transform: 'scale(0) translate3d(0, 0, 0)',
          config: { mass: 5, tension: 200, friction: 80 },
        });
        await next({
          // transform: 'scale(0)',
          transform: 'translate3d(0px,0px,0) scale(0) rotateX(0deg)',
          // transform: 'scale(0) translate3d(0, 0, 0)',
          config: { mass: 5, tension: 200, friction: 80 },
        });
      }
    },
  });
  return (
    <animated.div
      style={{
        ...dotSpringProps,
        ...css({
          borderRadius: 'medium',
          // ml: 2,
          width: 1,
          height: 1,
          display: 'inline-block',
          bg: 'primary',
        })(theme),
      }}
      // style={springProps}
    />
  );
};

AnimatedDot.propTypes = {};

export default AnimatedDot;
