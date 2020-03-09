/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';

const Preview = ({ children, ...props }) => (
  <Flex
    {...props}
    sx={{ width: '100%', justifyContent: 'space-between', mb: 9 }}
  >
    {children}
  </Flex>
);

Preview.propTypes = {
  children: PropTypes.node,
};

export default Preview;
