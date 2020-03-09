/** @jsx jsx */
import { jsx } from 'theme-ui';
import Carousel from './Carousel';

export default { title: 'Components/Carousel' };

export const normal = () => (
  <Carousel>
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
  </Carousel>
);
