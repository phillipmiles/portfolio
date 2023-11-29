import { code, Example } from './example_01';

const examples = {
  slug: 'useDragContained',
  title: 'useDragContained',
  category: 'Hooks',
  description:
    'A hook that handles management of drag event listeners within the React lifecycle and passes movement deltas into the onMove callback. Movement deltas are restricted from returning a value that will cause the draggable item from exiting the referenced container.',
  content: [
    {
      type: 'text',
      example: Example,
      exampleMarkDown: code,
    },
  ],
};

export default examples;
