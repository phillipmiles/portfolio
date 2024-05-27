// import AudioPlayer from './AudioPlayer';
// import MediaTimeline from './MediaTimeline';
import CheckboxInput from './CheckboxInput';

const components = [
  // AudioPlayer,
  // MediaTimeline,
  CheckboxInput,
];

// Sort hooks array into alphabetical order
components.sort((a, b) => {
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

export default components;
