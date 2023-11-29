import {
  Example as GetValueAsPercentageExample,
  code as getValueAsPercentageCode,
} from './examples/maths/toPercent';
import {
  Example as RoundDecimalToExample,
  code as roundDecimalToCode,
} from './examples/maths/roundDecimalTo';

const mathFunctions = [
  {
    slug: 'toPercent',
    title: 'Maths',
    description: 'A collection of functions relating to general maths.',
    content: [
      {
        type: 'text',
        title: 'toPercent()',
        description:
          'Returns the percent of one value to another rounded to a specified number of digits.',
        example: GetValueAsPercentageExample,
        exampleMarkDown: getValueAsPercentageCode,
      },
      {
        type: 'text',
        title: 'roundDecimalTo()',
        description: 'Round a decimal number to a specified number of digits.',
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
