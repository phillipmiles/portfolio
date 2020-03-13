/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import {
  Router as RouterReach,
  createHistory,
  LocationProvider,
} from '@reach/router';
import { useLayoutEffect, useRef } from 'react';

const Router = ({ children }) => {
  const history = useRef(createHistory(window));
  // Rough handling of scroll restoration. If route action is a 'PUSH' action
  // app will set scroll to the top of the page. Otherwise apps browser's
  // automatic scroll restoration will try to return the scroll position
  // for instances where the back or next button is used.
  useLayoutEffect(() => {
    history.current.listen(({ action }) => {
      if (action !== 'POP') {
        window.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <LocationProvider history={history.current}>
      <RouterReach>{children}</RouterReach>
    </LocationProvider>
  );
};

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
