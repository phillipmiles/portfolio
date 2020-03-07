import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as TP } from 'theme-ui';
import globalStyles from './globalStyles';
import './customFonts';
import theme from './theme';

const ThemeProvider = ({ theme: customTheme, children, ...props }) => {
  return (
    <TP
      {...props}
      theme={{ ...(customTheme ? customTheme : theme), ...globalStyles }}
    >
      {children}
    </TP>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({}),
};

export default ThemeProvider;
