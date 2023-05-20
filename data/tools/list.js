import markdownReactComponentLibrary from './react-component-library-code.md';

const tools = [
  {
    slug: 'test-post-1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'An example of a short description.',
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
      content: markdownReactComponentLibrary,
    },
  },
];

export default tools;
