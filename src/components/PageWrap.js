/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';

const PageWrap = ({ children, ...props }) => (
  <Flex
    {...props}
    sx={{ bg: 'neutral.0', minHeight: '100vh', flexDirection: 'column' }}
  >
    {children}
  </Flex>
);

PageWrap.propTypes = {
  children: PropTypes.node,
};

export default PageWrap;
