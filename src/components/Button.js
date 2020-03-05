/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const Button = ({ children, ...props }) => (
  <button {...props} sx={{ color: 'primary' }}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
