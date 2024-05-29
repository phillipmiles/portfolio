import { code, Example } from './example_01';

const examples = {
  slug: 'useAudio',
  title: 'useAudio',
  category: 'Hooks',
  description: [
    'A hook that wraps a HTML media element and provides helpful functions and properties to make using a media element easier.',
    "TODO: Fix interval cleanup on unmounting to avoid accessing variable that doesn't exist anymore.",
  ],
  content: [
    {
      type: 'text',
      example: Example,
      exampleMarkDown: code,
    },
  ],
};
export default examples;
