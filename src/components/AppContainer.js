/** @jsx jsx */
import { jsx } from 'theme-ui';
import ThemeProvider from '../lib/ThemeProvider';
import theme from '../lib/theme';
import globalStyles from '../lib/globalStyles';
import HomePage from '../pages/HomePage';

const AppContainer = ({ ...props }) => (
  <ThemeProvider {...props} theme={{ ...theme, ...globalStyles }}>
    <HomePage />
  </ThemeProvider>
);

export default AppContainer;
