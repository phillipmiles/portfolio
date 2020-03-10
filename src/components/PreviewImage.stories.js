/** @jsx jsx */
import { jsx } from 'theme-ui';
import imageCPA from '../assets/images/cpa_screen_ipad.jpg';
import PreviewImage from './PreviewImage';

export default {
  title: 'Components/Preview/PreviewImage',

  parameters: {
    component: PreviewImage,
  },
};
export const normal = () => <PreviewImage src={imageCPA} linkUrl="/" />;
