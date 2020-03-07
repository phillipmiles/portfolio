/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';

export default { title: 'Color library' };

const Swatch = ({ ...props }) => (
  <div {...props} sx={{ width: 9, height: 9, borderRadius: 'small' }} />
);

export const normal = () => (
  <Flex sx={{ justifyContent: 'space-between' }}>
    <Swatch sx={{ bg: 'primary' }} />
    <Swatch sx={{ bg: 'secondary' }} />
    <Swatch sx={{ bg: 'background' }} />
  </Flex>
);
