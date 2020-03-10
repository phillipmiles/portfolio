/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon: icon, size, ...props }) => {
  return (
    <FontAwesomeIcon
      {...props}
      icon={icon}
      sx={{
        color: 'text',
        // size: 2, https://github.com/styled-system/styled-system/pull/684
        padding: '2px', // Hardcoded padding adjustment to keep SVG sizes inline with Sketch SVGs.
        fontSize: theme => theme.sizes[size],
        fill: 'currentColor',
        verticalAlign: 'top', // Removes svg top/bottom whitespace caused by sitting inline on the baseline.
      }}
    />
  );
};

Icon.propTypes = {
  /** A React component that renders inline SVG. */
  icon: PropTypes.object.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 2,
};

export default Icon;
