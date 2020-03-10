import imageVerso from '../assets/images/verso_charts.png';
import imageGametalk from '../assets/images/gametalk_devices.jpg';
import imageCPA from '../assets/images/cpa_screen_ipad.jpg';
import imageClearEars from '../assets/images/clear-ears_dash.jpg';
import imageColes from '../assets/images/coles_screen_menu.jpg';
import imageBinder from '../assets/images/binder_dash.jpg';

// Data stored in JS not JSON so that parcel will automatically bundle images.
export default [
  {
    title: 'Verso Learning',
    summary:
      'Multiple education web apps developed with a shared component library.',
    pageUrl: 'verso',
    thumbnail: {
      src: imageVerso,
      alt: '',
    },
  },
  {
    title: 'CPA',
    summary: 'An award-winning new direction for educating financial advisors.',
    pageUrl: 'cpa',
    thumbnail: {
      src: imageCPA,
      alt: '',
    },
  },
  {
    title: 'Coles',
    summary:
      '54,000 lines of code automated in building five branching learning modules.',
    pageUrl: 'coles',
    thumbnail: {
      src: imageColes,
      alt: '',
    },
  },
  {
    title: 'Binder',
    summary: 'A clean and simple collaborative document editor.',
    pageUrl: 'binder',
    thumbnail: {
      src: imageBinder,
      alt: '',
    },
  },
  {
    title: 'Clear Ears',
    summary:
      'A bespoke learning portal that strives to educate for a world of cleaner ears.',
    pageUrl: 'clearears',
    thumbnail: {
      src: imageClearEars,
      alt: '',
    },
  },
  {
    title: 'Gametalk',
    summary:
      'A complete front-end / back-end solution for a community message board on gaming.',
    pageUrl: 'gametalk',
    thumbnail: {
      src: imageGametalk,
      alt: '',
    },
  },
];
