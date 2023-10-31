import Woodfort from '../../data/projects/woodfort.mdx';
import Cpa from '../../data/projects/cpa.mdx';
import ThoughtStream from '../../data/projects/thought-stream.mdx';
import Verso from '../../data/projects/verso.mdx';
import Coles from '../../data/projects/coles.mdx';
import UntitledGame from '../../data/projects/untitled-game.mdx';

const projects = [
  {
    slug: 'verso',
    name: 'Verso Learning',
    intro: 'Implementation of a site wide redesign as part of a rebranding.',
    year: '2020 - 2021',
    thumbnail: '/images/projects/verso/verso_thumbnail_01.jpg',
    bannerSrc: '/../public/images/projects/thought-stream/og_image.png',
    description:
      'I was brought into this project to implement a full visual uplift and fresh design system to the Verso web app following as part of a rebranding. I worked closeslyOther goals were to lay the groundwork for more efficiant development with the construction of a component library of over 100 reusable and documented components. Developed rich and interactive data visualisation charts,',
    content: <Verso />,
  },
  {
    slug: 'cpa',
    name: 'CPA Interactive Story',
    intro: 'An award-winning new direction for educating financial advisors.',
    year: '2016 - 2018',
    thumbnail: '/images/projects/cpa/cpa_thumbnail_01.jpg',
    bannerSrc: '/images/projects/cpa/cpa_image_banner.jpeg',
    description:
      '<p>We created an industry first interactive and immersive experience to train financial advisors utilising video, gameification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <Cpa />,
  },
  {
    slug: 'thought-stream',
    name: 'Thought Stream',
    intro:
      'A cross-platform mobile note taking app built with React Native built by me for me.',
    year: '2021 - 2022',
    thumbnail:
      '/images/projects/thought-stream/thought-stream_thumbnail_01.jpg',
    bannerSrc: '/images/projects/thought-stream/thought-stream_banner_01.png',
    description:
      '<p>We created an industry first interactive and immersive experience to train financial advisors utilising video, gameification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <ThoughtStream />,
  },
  {
    slug: 'untitled-game',
    name: 'AI Generated Unreal Game',
    intro: 'Creating AI assisted art assets for a stunning 2D game world.',
    year: '2023 - Current',
    thumbnail: '/images/projects/untitled-game/untitled-game_thumbnail_01.jpg',
    bannerSrc: '/../public/images/projects/thought-stream/og_image.png',
    description:
      "<p>With the introduction of AI art generators I finally saw an oportunity to fullfill my childhood dream of creating a game.</p><p>I'm developing the game in the Unreal Engine. The art assets start out as AI generated which are then spliced together and further altered with my own illustrating to create rich seamless backgrounds.</p>",
    content: <UntitledGame />,
  },
  {
    slug: 'coles',
    name: 'Coles E-Learning',
    intro:
      '54,000 lines of code automated in building five branching learning modules.',
    year: '2018',
    thumbnail: '/images/projects/coles/coles_thumbnail_01.jpg',
    bannerSrc: '/../public/images/projects/thought-stream/og_image.png',
    description:
      '<p>We created an industry first interactive and immersive experience to train financial advisors utilising video, gameification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <Coles />,
  },
  {
    slug: 'woodfort',
    name: 'Woodfort Cases',
    intro: 'Mobile not taking app built with React Native',
    year: '2020 - 2021',
    thumbnail: '/images/woodfort_walnut.jpeg',
    bannerSrc: '/images/projects/woodfort/woodfort_banner_01.jpg',
    description:
      '<p>We created an industry first interactive and immersive experience to train financial advisors utilising video, gameification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <Woodfort />,
  },
];

export default projects;
