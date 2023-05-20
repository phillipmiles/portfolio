import flexExample from './component-library/flex_example';
import flexMarkdown from './component-library/flex.md';

const tools = [
  {
    slug: 'flex',
    title: 'Flex',
    description:
      'A super basic utility component that just replaces a div with display flex to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
    type: 'custom2',
    topics: [
      {
        title: 'React',
        count: 12,
      },
      {
        title: 'Thought Stream',
        count: 3,
      },
      {
        title: 'Cryptography',
        count: 3,
      },
    ],
    thumbSrc: 'https://www.lapa.ninja/assets/blog/blush.jpg',
    content: {
      type: 'text',
      example: flexExample,
      exampleMarkDown: flexMarkdown,
    },
  },
];

export default tools;
