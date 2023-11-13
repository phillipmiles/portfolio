import {
  Example as IncrementNumberOverTimeExample,
  code as incrementNumberOverTimeCode,
} from './examples/change/incrementNumberOverTime';

const changeFunctions = [
  {
    slug: 'increment-number-to',
    title: 'Change',
    description: 'A collection of functions relating to change.',
    content: [
      {
        type: 'text',
        title: 'incrementNumberOverTime()',
        description:
          'Increments a number to another time over the time duration specified.',
        example: IncrementNumberOverTimeExample,
        exampleMarkDown: incrementNumberOverTimeCode,
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
