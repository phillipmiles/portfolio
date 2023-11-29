import useDragExamples from './useDrag';
import useDragConstainedExamples from './useDragContained';

const hooks = [useDragExamples, useDragConstainedExamples];

// Sort hooks array into alphabetical order
hooks.sort((a, b) => {
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

export default hooks;
