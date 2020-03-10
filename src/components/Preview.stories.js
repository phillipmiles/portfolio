/** @jsx jsx */
import { jsx } from 'theme-ui';
import imageCPA from '../assets/images/cpa_screen_ipad.jpg';
import Preview from './Preview';
import PreviewBody from './PreviewBody';
import PreviewImage from './PreviewImage';

export default {
  title: 'Components/Preview/Preview',

  parameters: {
    component: Preview,
  },
};
export const normal = () => (
  <Preview>
    <PreviewBody sx={{ mr: 6, width: '40%' }}>
      A test screening is a preview screening of a movie or television show
      before its general release to gauge audience reaction. Preview audiences
      are selected from a cross-section of the population and are usually asked
      to complete a questionnaire or provide feedback in some form. Harold Lloyd
      is credited with inventing the concept, having used it as early as 1928.
      Test screenings have been recommended for starting filmmakers &ldquo;even
      if a film festival is fast approaching&rdquo;.
    </PreviewBody>
    <PreviewImage src={imageCPA} linkUrl="/" sx={{ width: '60%' }} />
  </Preview>
);
