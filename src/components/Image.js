/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const Image = ({ alt, ...props }) => {
  return <img {...props} alt={alt} />;
};

Image.propTypes = {
  /** URL */
  src: PropTypes.string.isRequired,

  /** alt text */
  alt: PropTypes.string.isRequired,
};

export default Image;
