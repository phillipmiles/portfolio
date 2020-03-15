/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Helmet } from 'react-helmet';
import { Fragment } from 'react';
import ThemeProvider from '../lib/ThemeProvider';
import theme from '../lib/theme';
import globalStyles from '../lib/globalStyles';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import ParallaxCache from '../components/ParallaxCache';
import FavIcon from '../assets/images/favicon.ico';
import Router from './Router';

const AppContainer = ({ ...props }) => (
  <Fragment>
    {/* Add content to html <head> */}
    <Helmet>
      <link rel="shortcut icon" href={FavIcon}></link>
    </Helmet>
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
  </Fragment>
);

export default AppContainer;
