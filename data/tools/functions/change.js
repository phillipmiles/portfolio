import {
  Example as IncrementNumberToExample,
  code as incrementNumberToCode,
} from './examples/incrementNumberTo';

const changeFunctions = [
  {
    slug: 'increment-number-to',
    title: 'incrementNumberTo',
    description:
      "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: column' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
    content: [
      {
        type: 'text',
        example: IncrementNumberToExample,
        exampleMarkDown: incrementNumberToCode,
      },
    ],
  },
];

// Sort tools array into alphabetical order
changeFunctions.sort((a, b) => {
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

export default changeFunctions;
