import example from './example.md';
import example2 from './example2.md';
import { imgProjectsThumb } from '../assets/assetLoader';

const posts = [
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
      content: example2,
    },
  },
  {
    slug: 'test-post-2',
    title: 'Adding end-to-end encryption to your app',
    description:
      'In fermentum, dolor sed rutrum accumsan lorem risus maximus purus id tempus ipsum ex at nibh.',
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
    thumbSrc:
      'https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5fdb6b9cf7c801862c27cbbd_Blog%20_%20Cover%20_%20Gender%20Design%20Header%202.png',
    content: {
      type: 'text',
      content: example2,
    },
  },
  {
    slug: 'test-post-3',
    title: 'Nam bibendum fringilla efficitur',
    description:
      'In fermentum, dolor sed rutrum accumsan lorem risus maximus purus id tempus ipsum ex at nibh.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
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
    thumbSrc:
      'https://s3.amazonaws.com/www-inside-design/uploads/2021/03/Womens-History-Month-ID-Bee-Johnson-810x810.jpg',
    content: {
      type: 'text',
      content: example2,
    },
  },
  {
    slug: 'test-post-4',
    title: 'Nam bibendum fringilla efficitur',
    description: 'An example of a short description.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
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
    thumbSrc: imgProjectsThumb,
    content: {
      type: 'text',
      content: example,
    },
  },
  {
    slug: 'test-post-5',
    title: 'Adding end-to-end encryption to your app',
    description:
      'In fermentum, dolor sed rutrum accumsan lorem risus maximus purus id tempus ipsum ex at nibh.',
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
    thumbSrc:
      'https://uploads-ssl.webflow.com/5e81a08d29502f1024be75a7/5f72f13ad655fd116a911e41_img1.png',
    content: {
      type: 'text',
      content: example2,
    },
  },
  {
    slug: 'test-post-6',
    title: 'Adding end-to-end encryption to your app',
    description:
      'In fermentum, dolor sed rutrum accumsan lorem risus maximus purus id tempus ipsum ex at nibh.',
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
    thumbSrc:
      'https://figma.imgix.net/LcuG2N2IA33kK8Z63TrtJ/23c7adc820fae0b075ec4fa5d301ecfb/BlogHeader-AutoSave.png?&w=2120&auto=compress%2Cformat&crop=entropy&fit=crop&q=75',
    content: {
      type: 'text',
      content: example2,
    },
  },
  {
    slug: 'test-post-7',
    title: 'Adding end-to-end encryption to your app',
    description:
      'In fermentum, dolor sed rutrum accumsan lorem risus maximus purus id tempus ipsum ex at nibh.',
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
    thumbSrc:
      'https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5fdb6b9cf7c801862c27cbbd_Blog%20_%20Cover%20_%20Gender%20Design%20Header%202.png',
    content: {
      type: 'text',
      content: example2,
    },
  },
];

export default posts;
