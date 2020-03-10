/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';

const PreviewBody = ({ children, ...props }) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Parallax sx={{ width: '100%' }} y={[48, -48]}>
      {children}
    </Parallax>
  </Flex>
);

PreviewBody.propTypes = {
  children: PropTypes.node,
};

export default PreviewBody;
