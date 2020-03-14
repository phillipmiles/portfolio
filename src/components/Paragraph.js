/** @jsx jsx */
import { jsx } from 'theme-ui';

const Paragraph = props => {
  return <p {...props} sx={{ variant: 'textStyles.body', mb: 3, mt: 0 }} />;
};

export default Paragraph;
