// import AudioPlayer from './AudioPlayer';
// import MediaTimeline from './MediaTimeline';
import CheckboxInput from './CheckboxInput';
import InfinityPanner from './InfinityPanner';
import ContentSlider from './ContentSlider';

const components = [
  // AudioPlayer,
  // MediaTimeline,
  CheckboxInput,
  InfinityPanner,
  ContentSlider,
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
