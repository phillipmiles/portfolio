import {
  UseFormStateExample as Example1,
  UseFormStateCode as code1,
} from './example';

const useFormStateExamples = [
  {
    type: 'text',
    example: Example1,
    exampleMarkDown: code1,
  },
];

// Sort tools array into alphabetical order
useFormStateExamples.sort((a, b) => {
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

export default useFormStateExamples;
