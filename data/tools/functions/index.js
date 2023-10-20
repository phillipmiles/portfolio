import math from './math';
import time from './time';
import change from './change';

const tools = [
  {
    slug: 'math-functions',
    title: 'Math',
    description:
      "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: column' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
    content: math,
  },
  {
    slug: 'time-functions',
    title: 'Time',
    description:
      "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: column' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
    content: time,
  },
  {
    slug: 'change-functions',
    title: 'Change',
    description:
      "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: column' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
    content: change,
  },
];

// Sort tools array into alphabetical order
tools.sort((a, b) => {
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

export default tools;
