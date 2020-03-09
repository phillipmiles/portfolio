/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';

const PreviewBody = ({ children, ...props }) => (
  <Flex
    {...props}
    sx={{
      width: '40%',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    {children}
  </Flex>
);

PreviewBody.propTypes = {
  children: PropTypes.node,
};

export default PreviewBody;
