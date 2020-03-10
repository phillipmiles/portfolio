/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';

const HomeDot = ({ ...props }) => {
  useEffect(() => {
    const runAnimation = async () => {
      anime
        .timeline({
          loop: true,
        })
        .add({
          targets: '.dot-animation .dot',
          left: '100%',
          duration: 250,
          easing: 'easeInExpo',
          delay: 250,
        })
        .add({
          targets: '.dot-animation .dot',
          left: '0%',
          duration: 250,
          easing: 'easeInExpo',
          delay: 250,
        });
      // // .add({
      // //   targets: '.dot',
      // //   opacity: [0, 1],
      // //   translateY: -4,
      // //   duration: 1000,
      // //   easing: 'easeInExpo',
      // //   delay: 0,
      // // })
      // .add(
      //   {
      //     targets: '.welcome-greeting .letter',
      //     scale: [0, 1],
      //     duration: 1500,
      //     elasticity: 600,
      //     delay: (el, i) => 45 * (i + 1),
      //   },
      //   '-=1000', // relative offset
      // )
      // .add({
      //   targets: '.welcome-greeting',
      //   opacity: 0,
      //   duration: 1000,
      //   easing: 'easeOutExpo',
      //   delay: 1000,
      // })
      // .add(
      //   {
      //     targets: '.welcome-language',
      //     opacity: 0,
      //     translateY: 0,
      //     duration: 1000,
      //     easing: 'easeOutExpo',
      //     delay: 0,
      //   },
      //   '-=1000', // relative offset;
      // );
    };

    runAnimation();
  }, []);

  return (
    <div
      {...props}
      className="dot-animation"
      sx={{ width: '300px', height: '300px', position: 'relative' }}
    >
      <div
        className="dot"
        sx={{
          width: 1,
          height: 1,
          bg: 'primary',
          borderRadius: 'medium',
          position: 'absolute',
        }}
      />
    </div>
  );
};

HomeDot.propTypes = {};

export default HomeDot;
