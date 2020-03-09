/** @jsx jsx */
import { jsx } from 'theme-ui';
import Heading from './Heading';

export default { title: 'Typography/Heading' };

export const h1 = () => <Heading as="h1">Heading 1</Heading>;
export const h2 = () => <Heading as="h2">Heading 2</Heading>;
export const h3 = () => <Heading as="h3">Heading 3</Heading>;
export const h4 = () => <Heading as="h4">Heading 4</Heading>;
export const h5 = () => <Heading as="h5">Heading 5</Heading>;
export const h6 = () => <Heading as="h6">Heading 6</Heading>;
export const overflowEllipsis = () => (
  <Heading as="h6" overflow="ellipsis" sx={{ width: '128px' }}>
    Overflow ellipsis example
  </Heading>
);
