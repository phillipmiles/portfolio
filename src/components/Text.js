/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Text = ({ children, ...props }) => {
  return <span {...props}>{children}</span>;
};

Text.propTypes = {
  children: PropTypes.node,
};

export default Text;
