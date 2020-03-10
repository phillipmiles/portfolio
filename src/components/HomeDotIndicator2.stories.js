/** @jsx jsx */
import { jsx } from 'theme-ui';
import HomeDotIndicator2 from './HomeDotIndicator2';

export default {
  title: 'Components/HomeDotIndicator2',

  parameters: {
    component: HomeDotIndicator2,
  },
};
export const normal = () => (
  <HomeDotIndicator2 sx={{ height: 12, width: 12 }} />
);
