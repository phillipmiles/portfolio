/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
// import { useSpring, animated } from 'react-spring';
import { Keyframes, animated } from 'react-spring/renderprops';

const Content = Keyframes.Spring(async next => {
  // None of this will cause React to render, the component renders only once :-)

  while (true) {
    next({
      from: { left: '0%' },
      scale: 1,
      left: '100%',
      top: '40%',
      reset: true,

      config: { duration: 250 },
    });
    await next({
      from: { transform: 'scaleX(1)' },

      transform: 'scaleX(4)',
      config: { duration: 75 },
    });
    await next({
      from: { transform: 'scaleX(4)' },
      transform: 'scaleX(1)',
      config: { duration: 75 },
    });
    await next({
      // scale: 4,
      // from: { left: '0%' },
      left: '100%',
      config: { duration: 250 },
    });
    await next({
      // scale: 1,
      // from: { left: '0%' },
      config: { duration: 250 },
      top: '0%',
    });
    await next({
      // from: { left: '0%' },
      config: { duration: 250 },
      left: '60%',
    });
    await next({
      // from: { left: '0%' },
      config: { duration: 250 },
      top: '100%',
    });
    // next({
    //   from: { top: '0%' },
    //   top: '40%',
    //   background: 'plum',
    //   config: config.wobbly,
    // });
    // await delay(2000); // don't wait for the animation above to finish, go to the next one in 2s
    // await next({ left: '0%', background: 'hotpink' });
    // await next({
    //   top: '0%',
    //   background: 'teal',
    // });
    // await next({
    //   opacity: 0,
    //   width: 40,
    //   height: 40,
    //   background: 'black',
    // });
  }
});

const HomeDotIndicator = props => {
  // const springProps = useSpring({
  //   // from: {
  //   //   left: '0%',
  //   //   top: '40%',
  //   // },
  //   to: async next => {
  //     // while (true) {
  //     await next({
  //       // reset: true,
  //       top: '40%',
  //       left: '0%',
  //     });
  //     await next({
  //       left: '100%',
  //     });
  //     await next({
  //       top: '0%',
  //     });
  //     await next({
  //       left: '60%',
  //     });
  //     await next({
  //       top: '100%',
  //     });
  //     next({
  //       reset: true,
  //     });
  //     // }
  //   },
  //   config: {
  //     duration: 300,
  //   },
  // });
  return (
    <div {...props} sx={{ position: 'relative' }}>
      <Content native>
        {animationProps => (
          <animated.div
            sx={{
              bg: 'primary',
              width: 1,
              height: 1,
              borderRadius: 'medium',
              position: 'absolute',
            }}
            style={{ ...animationProps }}
          />
        )}
      </Content>
      {/* <animated.div
        sx={{ bg: 'primary', width: 1, height: 1 }}
        style={{ position: 'relative', borderRadius: '8px', ...springProps }}
      /> */}
    </div>
  );
};

HomeDotIndicator.propTypes = {};

export default HomeDotIndicator;
