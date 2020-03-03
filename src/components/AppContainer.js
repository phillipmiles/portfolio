/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const AppContainer = () => (
  <div sx={{ bg: 'blue', p: 4, color: 'white' }}>Hello world</div>
);

AppContainer.propTypes = {
  props: PropTypes.string,
};

export default AppContainer;
