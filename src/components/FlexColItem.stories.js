/** @jsx jsx */
import { jsx } from 'theme-ui';
import FlexColItem from './FlexColItem';

export default {
  title: 'Layout/FlexColItem',

  parameters: {
    component: FlexColItem,
  },
};

export const normal = () => (
  <FlexColItem>
    The validationMessage read-only property of the HTMLObjectElement interface
    returns a DOMString representing a localized message that describes the
    validation constraints that the control does not satisfy (if any). This is
    the empty string if the control is not a candidate for constraint validation
    (willValidate is false), or it satisfies its constraints.
  </FlexColItem>
);