/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ParallaxProvider } from 'react-scroll-parallax';
import ThemeProvider from '../lib/ThemeProvider';
import theme from '../lib/theme';
import globalStyles from '../lib/globalStyles';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import ParallaxCache from '../components/ParallaxCache';
import Router from './Router';

const AppContainer = ({ ...props }) => (
  <ParallaxProvider>
    <ThemeProvider {...props} theme={{ ...theme, ...globalStyles }}>
      <Router>
        <HomePage path="/" />
        <ProjectPage path="/project/:projectId" />
        <ErrorPage default />
      </Router>
    </ThemeProvider>
    <ParallaxCache />
  </ParallaxProvider>
);

export default AppContainer;
