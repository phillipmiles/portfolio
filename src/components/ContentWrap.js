/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx, Flex } from 'theme-ui';

/** A wrapping component used to center and limit the width of any page content whilst
 * providing appropriate margin sizes for desktop and mobile devices. */

const ContentWrap = ({ children, ...props }) => {
  return (
    // Outer div used to set margins without reducing the maxWidth size.
    <Flex {...props} sx={{ px: 4, flexDirection: 'column' }}>
      <div
        sx={{
          position: 'relative',
          maxWidth: [
            'content',
            'content',
            'content',
            'content',
            'content',
            '80%',
          ],
          width: '100%',
          mx: 'auto',
        }}
      >
        {children}
      </div>
    </Flex>
  );
};

ContentWrap.propTypes = {
  children: PropTypes.node,
};

export default ContentWrap;
