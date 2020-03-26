/** @jsx jsx */
import { jsx } from 'theme-ui';

const Paragraph = props => {
  return (
    <p
      {...props}
      sx={{
        variant: ['16px', 'textStyles.body'],
        lineHeight: ['1.6', 'textStyles.body.lineHeight'],
        mb: 3,
        mt: 0,
      }}
    />
  );
};

export default Paragraph;
