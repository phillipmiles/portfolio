/** @jsx jsx */
import imgVersoCharts from '../assets/images/verso_charts.png';
import imgVersoComic from '../assets/images/verso_comic.jpg';
import imgVersoComicYellow from '../assets/images/verso_comic_yellow.jpg';
import imgVersoCampus from '../assets/images/verso_campus.jpg';
import imgVersoDash from '../assets/images/verso_dash.png';
import imageGametalkDevices from '../assets/images/gametalk_devices.jpg';
import imageGametalkGame from '../assets/images/gametalk_game.jpg';
import imageGametalkMobile from '../assets/images/gametalk_mobile.jpg';
import imageCPAIPad from '../assets/images/cpa_screen_ipad.jpg';
import imageCPAMCQ from '../assets/images/cpa_screen_mcq.jpg';
import imageCPAresults from '../assets/images/cpa_screen_results.jpg';
import imageCPAText from '../assets/images/cpa_screen_text.jpg';
import imageCPAVideo from '../assets/images/cpa_screen_video.jpg';
import imageClearEarsDash from '../assets/images/clear-ears_dash.jpg';
import imageClearEarsActivity from '../assets/images/clear-ears_activity.jpg';
import imageClearEarsCommunication from '../assets/images/clear-ears_communication.jpg';
import imageColesMenu from '../assets/images/coles_screen_menu.jpg';
import imageColesDeli from '../assets/images/coles_screen_deli.jpg';
import imageColesResults from '../assets/images/coles_screen_results.jpg';
import imageBinderDash from '../assets/images/binder_dash.jpg';
import imageBinderDoc from '../assets/images/binder_doc.jpg';
import imageBinderWorkspace from '../assets/images/binder_workspace.jpg';
import CPABody from './projectBodies/CPABody';
import VersoBody from './projectBodies/VersoBody';
import ColesBody from './projectBodies/ColesBody';
import BinderBody from './projectBodies/BinderBody';
import ClearEarsBody from './projectBodies/ClearEarsBody';
import GametalkBody from './projectBodies/GametalkBody';

// Data stored in JS not JSON so that parcel will automatically bundle images.
export default [
  {
    id: 'verso',
    title: 'Verso Learning',
    summary:
      'Implemented a monolithic visual uplift, created an extensive component library of reusable React components complete with detailed documentation and developed interactive and animated data visualisation solutions.',
    // 'Worked closely with the design team to implemented a full visual uplift and fresh design system to the Verso web app following a rebranding. Laid the groundwork for more efficiant development with the construction of a component library of over 100 reusable and documented components. Developed rich and interactive data visualisation charts,',

    years: '2019 / 2020',
    employer: 'Verso learning',
    cover: [
      {
        src: imgVersoCharts,
        alt: '',
      },
    ],
    thumbnail: {
      src: imgVersoCharts,
      alt: '',
    },
    images: [
      {
        src: imgVersoCharts,
        alt: '',
      },
      {
        src: imgVersoDash,
        alt: '',
      },
      {
        src: imgVersoCampus,
        alt: '',
      },
      {
        src: imgVersoComic,
        alt: '',
      },
    ],
    body: VersoBody,
  },
  {
    id: 'cpa',
    title: 'DeakinCo / CPA',
    summary:
      'Developed an ambitious web-based simulation for educating financial advisors. Using strong narrative to tie together interactive activities, first-person-view video of hired actors and simulated digital communications from characters created an immersive gameified experience that would go on to win multiple awards in learning design.',
    // 'An award-winning new direction for educating financial advisors.',
    years: '2016 / 2017 / 2018',
    employer: 'DeakinCo / CPA',
    thumbnail: {
      src: imageCPAIPad,
      alt: '',
    },
    cover: [
      {
        src: imageCPAIPad,
        alt: '',
      },
      {
        src: imageCPAMCQ,
        alt: '',
      },
      {
        src: imageCPAresults,
        alt: '',
      },
    ],
    images: [
      {
        src: imageCPAIPad,
        alt: '',
      },
      {
        src: imageCPAMCQ,
        alt: '',
      },
      {
        src: imageCPAresults,
        alt: '',
      },
      {
        src: imageCPAText,
        alt: '',
      },
      {
        src: imageCPAVideo,
        alt: '',
      },
    ],
    body: CPABody,
  },
  {
    id: 'coles',
    title: 'DeakinCo / Coles',
    summary:
      'Automated the generation of 54,000 lines of JSON code in order to build five branching choose-your-own-adventure style interactive learning modules.',
    years: '2018',
    employer: 'DeakinCo / Coles',
    thumbnail: {
      src: imageColesMenu,
      alt: '',
    },
    cover: [
      {
        src: imageColesMenu,
        alt: '',
      },
      {
        src: imageColesDeli,
        alt: '',
      },
      {
        src: imageColesResults,
        alt: '',
      },
    ],
    images: [
      {
        src: imageColesMenu,
        alt: '',
      },
      {
        src: imageColesDeli,
        alt: '',
      },
      {
        src: imageColesResults,
        alt: '',
      },
    ],
    body: ColesBody,
  },
  {
    id: 'binder',
    title: 'Binder',
    summary: 'A clean and simple collaborative document editor.',
    years: '2018',
    employer: 'Personal project',
    thumbnail: {
      src: imageBinderDash,
      alt: '',
    },
    cover: [
      {
        src: imageBinderDash,
        alt: '',
      },
      {
        src: imageBinderDoc,
        alt: '',
      },
      {
        src: imageBinderWorkspace,
        alt: '',
      },
    ],
    images: [
      {
        src: imageBinderDash,
        alt: '',
      },
      {
        src: imageBinderDoc,
        alt: '',
      },
      {
        src: imageBinderWorkspace,
        alt: '',
      },
    ],
    body: BinderBody,
  },
  {
    id: 'clearears',
    title: 'DeakinCo / Clear Ears',
    years: '2017',
    summary:
      'A bespoke learning portal that strives to educate for a world of cleaner ears.',
    employer: 'DeakinCo / Clear Ears',
    thumbnail: {
      src: imageClearEarsDash,
      alt: '',
    },
    cover: [
      {
        src: imageClearEarsDash,
        alt: '',
      },
      {
        src: imageClearEarsActivity,
        alt: '',
      },
      {
        src: imageClearEarsCommunication,
        alt: '',
      },
    ],
    body: ClearEarsBody,
    images: [
      {
        src: imageClearEarsDash,
        alt: '',
      },
      {
        src: imageClearEarsActivity,
        alt: '',
      },
      {
        src: imageClearEarsCommunication,
        alt: '',
      },
    ],
  },
  {
    id: 'gametalk',
    title: 'Gametalk',
    summary:
      'A idcomplete front-end / back-end solution for a community message board on gaming.',

    years: '2016',
    employer: 'Personal project',
    thumbnail: {
      src: imageGametalkDevices,
      alt: '',
    },
    cover: [
      {
        src: imageGametalkDevices,
        alt: '',
      },
      {
        src: imageGametalkGame,
        alt: '',
      },
      {
        src: imageGametalkMobile,
        alt: '',
      },
    ],
    images: [
      {
        src: imageGametalkDevices,
        alt: '',
      },
      {
        src: imageGametalkGame,
        alt: '',
      },
      {
        src: imageGametalkMobile,
        alt: '',
      },
    ],
    body: GametalkBody,
  },
];
