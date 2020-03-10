/** @jsx jsx */
import { jsx } from 'theme-ui';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

export default { title: 'Components/Button' };

export const normal = () => <Button>Button</Button>;

export const icon = () => (
  <Button icon={faChevronRight} iconPosition="right" variant="text">
    Button
  </Button>
);
