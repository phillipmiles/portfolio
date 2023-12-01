import useAudioExamples from './useAudio';
import useDragExamples from './useDrag/index';
import useDragConstainedExamples from './useDragContained/index';

const hooks = [useAudioExamples, useDragExamples, useDragConstainedExamples];

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
