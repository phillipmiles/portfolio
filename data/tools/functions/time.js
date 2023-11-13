import {
  Example as ToMillisecondsExample,
  code as toMillisecondsCode,
} from './examples/time/toMilliseconds';
import {
  Example as ToSecondsExample,
  code as toSecondsCode,
} from './examples/time/toSeconds';
import {
  Example as ToMinutesExample,
  code as toMinutesCode,
} from './examples/time/toMinutes';
import {
  Example as IsoDateStringToLabelExample,
  code as isoDateStringToLabelCode,
} from './examples/time/isoDateStringToLabel';
import {
  Example as DaysDifferenceExample,
  code as daysDifferenceCode,
} from './examples/time/daysDifference';

const timeFunctions = [
  {
    slug: 'time',
    title: 'Time',
    description: 'A collection of functions relating to time.',
    content: [
      {
        type: 'text',
        title: 'daysDifference()',
        example: DaysDifferenceExample,
        description: 'Returns the number days between two dates.',
        exampleMarkDown: daysDifferenceCode,
      },
      // {
      //   type: 'text',
      //   title: 'isoDateStringToLabel()',
      //   example: IsoDateStringToLabelExample,
      //   description: 'Returns a date label.',
      //   exampleMarkDown: isoDateStringToLabelCode,
      // },
      {
        type: 'text',
        title: 'toMinutes()',
        example: ToMinutesExample,
        description:
          'Convert a number from a specified time measurement into minutes.',
        exampleMarkDown: toMinutesCode,
      },
      {
        type: 'text',
        title: 'toSeconds()',
        example: ToSecondsExample,
        description:
          'Convert a number from a specified time measurement into seconds.',
        exampleMarkDown: toSecondsCode,
      },
      {
        type: 'text',
        title: 'toMilliseconds()',
        example: ToMillisecondsExample,
        description:
          'Convert a number from a specified time measurement into milliseconds.',
        exampleMarkDown: toMillisecondsCode,
      },
    ],
  },
];

// Sort tools array into alphabetical order
timeFunctions.sort((a, b) => {
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

export default timeFunctions;
