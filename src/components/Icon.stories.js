/** @jsx jsx */
import { jsx } from 'theme-ui';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

export default {
  title: 'Components/Icon',

  parameters: {
    component: Icon,
  },
};
export const normal = () => (
  <Icon icon={faCoffee} sx={{ color: 'primary' }} />
  // <LaptopCode />
);
