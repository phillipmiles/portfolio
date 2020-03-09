/** @jsx jsx */
import { jsx } from 'theme-ui';

const Paragraph = props => {
  return <p {...props} sx={{ variant: 'textStyles.body', my: 3 }} />;
};

export default Paragraph;
