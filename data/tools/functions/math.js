import {
  Example as GetValueAsPercentageExample,
  code as getValueAsPercentageCode,
} from './examples/getValueAsPercentage';
import {
  Example as RoundDecimalToExample,
  code as roundDecimalToCode,
} from './examples/roundDecimalTo';

const mathFunctions = [
  {
    slug: 'get-value-as-percentage',
    title: 'getValueAsPercentage',
    description:
      "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: column' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
    content: [
      {
        type: 'text',
        example: GetValueAsPercentageExample,
        exampleMarkDown: getValueAsPercentageCode,
      },
      {
        type: 'text',
        example: RoundDecimalToExample,
        exampleMarkDown: roundDecimalToCode,
      },
    ],
  },
];

// Sort tools array into alphabetical order
mathFunctions.sort((a, b) => {
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

export default mathFunctions;
