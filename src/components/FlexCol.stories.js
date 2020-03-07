/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import FlexColItem from './FlexColItem';
import FlexCol from './FlexCol';

export default {
  title: 'Layout/FlexCol',

  parameters: {
    component: FlexCol,
  },
};

const CardExample = ({ children, ...props }) => (
  <div {...props} sx={{ my: 2, p: 2, bg: 'primary' }}>
    <p>{children}</p>
  </div>
);

CardExample.propTypes = { children: PropTypes.node };

const ColExample = ({ ...props }) => (
  <FlexColItem
    {...props}
    cols={1}
    sx={{
      borderColor: 'rgba(255, 0, 0 ,0.2)',
      borderRightStyle: 'solid',
      borderLeftStyle: 'solid',
      borderWidth: 'thin',
    }}
  >
    <div sx={{ bg: 'rgba(255, 0 ,0 ,0.12)', flex: 1 }} />
  </FlexColItem>
);

const DisplayGuides = ({ ...props }) => (
  <FlexCol
    {...props}
    margin={0}
    gutter={[3, 4]}
    sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
  >
    <ColExample />
    <ColExample />
    <ColExample />
    <ColExample />
    <ColExample sx={{ display: ['none', 'flex'] }} />
    <ColExample sx={{ display: ['none', 'flex'] }} />
    <ColExample sx={{ display: ['none', 'flex'] }} />
    <ColExample sx={{ display: ['none', 'flex'] }} />
    <ColExample sx={{ display: ['none', 'none', 'flex'] }} />
    <ColExample sx={{ display: ['none', 'none', 'flex'] }} />
    <ColExample sx={{ display: ['none', 'none', 'flex'] }} />
    <ColExample sx={{ display: ['none', 'none', 'flex'] }} />
  </FlexCol>
);

export const demonstration = () => (
  <FlexCol gutter={3} margin={[3, 4]} sx={{ position: 'relative', py: 5 }}>
    <DisplayGuides />
    <FlexColItem cols={8}>
      <CardExample>cols = 8</CardExample>
    </FlexColItem>
    <FlexColItem cols={4}>
      <CardExample>cols = 4</CardExample>
    </FlexColItem>
    <FlexColItem cols={4}>
      <CardExample>cols = 4</CardExample>
    </FlexColItem>
    <FlexColItem cols={[2, 8]}>
      <CardExample>cols = [2, 8]</CardExample>
    </FlexColItem>
    <FlexColItem cols={[2, 12]}>
      <CardExample>cols = [2, 12]</CardExample>
    </FlexColItem>
    <FlexColItem cols={[4, 2]}>
      <CardExample>cols = [4, 2]</CardExample>
    </FlexColItem>
    <FlexColItem cols={6}>
      <CardExample>cols = 6</CardExample>
    </FlexColItem>
    <FlexColItem cols={[12, 12, 4, 2]}>
      <CardExample>cols = [12, 12, 4, 2]</CardExample>
    </FlexColItem>
  </FlexCol>
);
