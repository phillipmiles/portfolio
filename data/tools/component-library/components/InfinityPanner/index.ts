import { code as code01, Example as Example01 } from './example_01';
import { code as code02, Example as Example02 } from './example_02';
import { code as code03, Example as Example03 } from './example_03';

const examples = {
  slug: 'infinity-panner',
  title: 'InfinityPanner',
  category: 'Components',
  description:
    'Scrolls the children of this component infinitly by seamlessly repositioning them back at the start.',
  content: [
    {
      type: 'text',
      example: Example01,
      exampleMarkDown: code01,
    },
    {
      type: 'text',
      example: Example02,
      exampleMarkDown: code02,
    },
    {
      type: 'text',
      example: Example03,
      exampleMarkDown: code03,
    },
  ],
};
export default examples;
