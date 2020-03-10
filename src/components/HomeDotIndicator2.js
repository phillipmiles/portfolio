/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs/lib/anime.es.js';

const HomeDotIndicator = props => {
  useLayoutEffect(() => {
    const runAnimation = async () => {
      anime({
        targets: '.property-keyframes-demo',
        left: [
          { value: '0%', duration: 1000, delay: 500 },
          { value: '100%', duration: 1000, delay: 500 },
        ],
        // translateY: [
        //   { value: -40, duration: 500 },
        //   { value: 40, duration: 500, delay: 1000 },
        //   { value: 0, duration: 500, delay: 1000 },
        // ],
        // scaleX: [
        //   { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        //   { value: 1, duration: 900 },
        //   { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        //   { value: 1, duration: 900 },
        // ],
        // scaleY: [
        //   { value: [1.75, 1], duration: 500 },
        //   { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        //   { value: 1, duration: 450 },
        //   { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        //   { value: 1, duration: 450 },
        // ],
        easing: 'easeOutElastic(1, .8)',
        loop: true,
      });
      // const animation = anime
      //   .timeline({})
      //   .add({
      //     targets: '.welcome-greeting',
      //     opacity: 1,
      //     duration: 0,
      //     delay: 100,
      //   })
      //   .add({
      //     targets: '.welcome-language',
      //     opacity: [0, 1],
      //     translateY: -4,
      //     duration: 1000,
      //     easing: 'easeInExpo',
      //     delay: 0,
      //   })
      //   .add(
      //     {
      //       targets: '.welcome-greeting .letter',
      //       scale: [0, 1],
      //       duration: 1500,
      //       elasticity: 600,
      //       delay: (el, i) => 45 * (i + 1),
      //     },
      //     '-=1000', // relative offset
      //   )
      //   .add({
      //     targets: '.welcome-greeting',
      //     opacity: 0,
      //     duration: 1000,
      //     easing: 'easeOutExpo',
      //     delay: 1000,
      //   })
      //   .add(
      //     {
      //       targets: '.welcome-language',
      //       opacity: 0,
      //       translateY: 0,
      //       duration: 1000,
      //       easing: 'easeOutExpo',
      //       delay: 0,
      //     },
      //     '-=1000', // relative offset;
      //   );

      // };
    };

    runAnimation();
  }, []);

  return (
    <div {...props}>
      <div
        {...props}
        className="property-keyframes-demo"
        sx={{
          position: 'absolute',
          bg: 'primary',
          borderRadius: 'medium',
          width: 1,
          height: 1,
        }}
      />
    </div>
  );
};

HomeDotIndicator.propTypes = {};

export default HomeDotIndicator;
