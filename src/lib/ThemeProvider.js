import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as TP } from 'theme-ui';
import globalStyles from './globalStyles';
import './customFonts';
import theme from './theme';

const ThemeProvider = ({ children, ...props }) => {
  return (
    <TP {...props} theme={{ ...theme, ...globalStyles }}>
      {children}
    </TP>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
