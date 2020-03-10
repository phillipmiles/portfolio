import { useLayoutEffect } from 'react';
import { useController } from 'react-scroll-parallax';

/** Utility component to used with react-scroll-parallax components. Place on a page
 * with parallax elements to force parallax positions to update in the event the page
 * is loaded not at the top of the page. https://www.npmjs.com/package/react-scroll-parallax
 */
const ParallaxCache = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener('load', handler);
    return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  return null;
};

export default ParallaxCache;
