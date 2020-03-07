/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Router } from '@reach/router';
import ThemeProvider from '../lib/ThemeProvider';
import theme from '../lib/theme';
import globalStyles from '../lib/globalStyles';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';

const AppContainer = ({ ...props }) => (
  <ThemeProvider {...props} theme={{ ...theme, ...globalStyles }}>
    <Router>
      <HomePage path="/" />
      <ErrorPage default />
    </Router>
  </ThemeProvider>
);

export default AppContainer;
