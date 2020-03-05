/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import ThemeProvider from '../lib/ThemeProvider';
import theme from '../lib/theme';
import globalStyles from '../lib/globalStyles';

const AppContainer = ({ children, ...props }) => (
  <ThemeProvider {...props} theme={{ ...theme, ...globalStyles }}>
    {children}
  </ThemeProvider>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
