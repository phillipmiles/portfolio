import Woodfort from '../../data/projects/woodfort.mdx';
import Cpa from '../../data/projects/cpa.mdx';
import ThoughtStream from '../../data/projects/thought-stream.mdx';
import Verso from '../../data/projects/verso.mdx';
import Coles from '../../data/projects/coles.mdx';

const projects = [
  {
    slug: 'woodfort',
    name: 'Woodfort Cases',
    thumbnail: '/images/woodfort_walnut.jpeg',
    bannerSrc: '/images/projects/woodfort/woodfort_banner_01.jpg',
    description:
      '<p>We created an industry first interactive and immersive experience to train financial advisors utilising video, gameification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <Woodfort />,
  },
  {
    slug: 'thought-stream',
    name: 'Thought Stream',
    thumbnail:
      '/images/projects/thought-stream/thought-stream_thumbnail_01.jpg',
    bannerSrc: '/images/projects/thought-stream/thought-stream_banner_01.png',
    description:
      '<p>We created an industry first interactive and immersive experience to train financial advisors utilising video, gameification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <ThoughtStream />,
  },
  {
    slug: 'cpa',
    name: 'CPA Interactive Story',
    thumbnail: '/images/projects/cpa/cpa_thumbnail_01.jpg',
    bannerSrc: '/images/projects/cpa/cpa_image_banner.jpeg',
    description:
      '<p>We created an industry first interactive and immersive experience to train financial advisors utilising video, gameification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <Cpa />,
  },
  {
    slug: 'verso',
    name: 'Verso Learning',
    thumbnail: '/images/projects/verso/verso_thumbnail_01.jpg',
    bannerSrc: '/../public/images/projects/thought-stream/og_image.png',
    description:
      '<p>We created an industry first interactive and immersive experience to train financial advisors utilising video, gameification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <Verso />,
  },
  {
    slug: 'coles',
    name: 'Coles E-Learning',
    thumbnail: '/images/projects/coles/coles_thumbnail_01.jpg',
    bannerSrc: '/../public/images/projects/thought-stream/og_image.png',
    description:
      '<p>We created an industry first interactive and immersive experience to train financial advisors utilising video, gameification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <Coles />,
  },
];

export default projects;
