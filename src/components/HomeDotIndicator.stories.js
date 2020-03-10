/** @jsx jsx */
import { jsx } from 'theme-ui';
import HomeDotIndicator from './HomeDotIndicator';

export default {
  title: 'Components/HomeDotIndicator',

  parameters: {
    component: HomeDotIndicator,
  },
};
export const normal = () => <HomeDotIndicator sx={{ height: 11, width: 11 }} />;
