import flexExample from './component-library/flex_example';
import flexCode from './component-library/flex_code.tsx';

const tools = [
  {
    slug: 'flex',
    title: 'Flex',
    description:
      "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: column' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
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
      exampleMarkDown: flexCode,
    },
  },
  {
    slug: 'hover-reveal-effect',
    title: 'Hover Reveal Effect',
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
      exampleMarkDown: flexCode,
    },
  },
  {
    slug: 'page',
    title: 'Page',
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
      exampleMarkDown: flexCode,
    },
  },
  {
    slug: 'page-with-footer',
    title: 'Page With Footer',
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
      exampleMarkDown: flexCode,
    },
  },
  {
    slug: 'page-content-wrap',
    title: 'Page Content Wrap',
    description:
      'A super basic utility component that just replaces a div with "display: flex;" and "flex-direction: column;" to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
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
      exampleMarkDown: flexCode,
    },
  },
  {
    slug: 'content-slider',
    title: 'Content Slider',
    description:
      'A super basic utility component that just replaces a div with "display: flex;" and "flex-direction: column;" to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
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
      exampleMarkDown: flexCode,
    },
  },
  {
    slug: 'content-reveal',
    title: 'Content Reveal',
    description:
      "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: row' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
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
      exampleMarkDown: flexCode,
    },
  },
];

const sortedTools = tools.sort((a, b) => {
  const nameA = a.title.toLowerCase();
  const nameB = b.title.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

export default sortedTools;
