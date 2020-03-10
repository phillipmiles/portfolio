/** @jsx jsx */
import { jsx } from 'theme-ui';
import PreviewBody from './PreviewBody';

export default {
  title: 'Components/Preview/PreviewBody',

  parameters: {
    component: PreviewBody,
  },
};
export const normal = () => (
  <PreviewBody>
    A test screening is a preview screening of a movie or television show before
    its general release to gauge audience reaction. Preview audiences are
    selected from a cross-section of the population and are usually asked to
    complete a questionnaire or provide feedback in some form. Harold Lloyd is
    credited with inventing the concept, having used it as early as 1928. Test
    screenings have been recommended for starting filmmakers &ldquo;even if a
    film festival is fast approaching&rdquo;.
  </PreviewBody>
);
