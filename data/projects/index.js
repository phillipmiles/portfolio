import Woodfort from '../../data/projects/woodfort.mdx';
import Cpa from '../../data/projects/cpa.mdx';
import ThoughtStream from '../../data/projects/thought-stream.mdx';
import Verso from '../../data/projects/verso.mdx';
import Coles from '../../data/projects/coles.mdx';
import UntitledGame from '../../data/projects/untitled-game.mdx';
import Binder from '../../data/projects/binder.mdx';
import Wordpress from '../../data/projects/wordpress.mdx';

import binderThumb from '../../public/images/projects/binder/binder_thumbnail_02.jpg';
import gametalkThumb from '../../public/images/projects/gametalk/gametalk_thumbnail_01.jpg';
import woodfortThumb from '../../public/images/projects/woodfort/woodfort_thumbnail_01.jpg';
import untitledGameThumb from '../../public/images/projects/untitled-game/untitled-game_thumbnail_01.jpg';
import colesThumb from '../../public/images/projects/coles/coles_thumbnail_01.jpg';
import cpaThumb from '../../public/images/projects/cpa/cpa_thumbnail_01.jpg';
import versoThumb from '../../public/images/projects/verso/verso_thumbnail_01.jpg';
import thoughtStreamThumb from '../../public/images/projects/thought-stream/thought-stream_thumbnail_01.jpg';
import michelleMcquaidThumb from '../../public/images/projects/michelle-mcquaid/michelle-mcquaid_thumbnail.jpg';

const projects = [
  {
    slug: 'verso',
    name: 'Verso Learning',
    type: 'professional',
    tags: ['React', 'Storybook', 'Charts'],
    intro: 'Implementation of a site wide redesign as part of a rebranding.',
    year: '2020 - 2021',
    thumbnail: versoThumb,
    description:
      '<p>I was brought into Verso to implement a complete redesign and code refactor of their React based web app.</p><p>Working closely with the designer I implemented a strict design system, standardised coding practices and created a component library of over 100 reusable, well documented React components shared across multiple web apps.</p>',
    content: <Verso />,
  },
  {
    slug: 'cpa',
    name: 'CPA Web Based Learning Simulation',
    type: 'professional',
    tags: ['Javascript', 'Invision App', 'CSS'],
    intro: 'An award-winning new direction for educating financial advisors.',
    year: '2016 - 2018',
    thumbnail: cpaThumb,
    description:
      '<p>We created an industry first interactive and immersive learning experience to train financial advisors utilising video, gamification and performance tracking.</p><p>The success of this project resulted in multiple awards within the e-learning space and the production of two additional courses for CPA.</p>',
    content: <Cpa />,
  },
  {
    slug: 'thought-stream',
    name: 'Thought Stream Mobile App',
    type: 'personal',
    tags: ['React Native', 'Javascript'],
    intro:
      'A cross-platform mobile note taking app built with React Native built for me, by me.',
    year: '2021 - 2022',
    thumbnail: thoughtStreamThumb,
    description:
      '<p>Thought Stream is a note taking mobile app that I developed with React Native &#8212; a framework that lets you develop mobile apps using Javascript and React.</p>',
    content: <ThoughtStream />,
  },
  {
    slug: 'wordpress',
    name: 'Michelle Mcquaid',
    type: 'professional',
    tags: ['React', 'Wordpress', 'Gutenberg'],
    intro:
      "Migration of a legacy Wordpress site into Gutenburg, Wordpress's modern React framework.",
    year: '2021 - 2022',
    thumbnail: michelleMcquaidThumb,
    bannerSrc: '/images/projects/thought-stream/thought-stream_banner_01.png',
    description:
      '<p>Thought Stream is a note taking mobile app that I developed with React Native &#8212; a framework that lets you develop mobile apps using Javascript and React.</p>',
    content: <Wordpress />,
  },
  {
    slug: 'binder',
    type: 'personal',
    name: 'Collaborative Text Editor',
    tags: ['NodeJS', 'MongoDB', 'MySQL'],
    type: 'personal',
    intro:
      'A minimalist collaborative text editor made with NodeJS, ExpressJS, MongoDB and MySQL.',
    year: '2018',
    thumbnail: binderThumb,
    description:
      '<p>Binder was a web-based minimalist collaborative text editor I made that challenged me in solving the difficult requirement of multiple users editing the same document simultaneously.</p><p>This project used NodeJS with ExpressJS server side and two databases, one in MongoDB and another in MySQL.',
    content: <Binder />,
  },
  {
    slug: 'coles',
    name: 'Coles E-Learning',
    type: 'professional',
    tags: ['NodeJS', 'CSS'],
    intro:
      '54,000 lines of code automated in building five branching learning modules for Coles.',
    year: '2018',
    thumbnail: colesThumb,
    description:
      "<p>We created 5 E-Learning modules for Coles that, because of their branching narratives and the constraints of the E-Learning framework we were using, required an automated solution to generate over 54,000 lines of code.</p><p>For this we wrote a Node JS program that would convert multiple lengthy spreadsheets into the JSON data needed for the Framework's consumption.</p>",
    content: <Coles />,
  },
  {
    slug: 'untitled-game',
    name: 'Untitled PC Game',
    type: 'personal',
    tags: ['Unreal Game Engine', 'AI Generation'],
    intro:
      'A work-in-progress game made in the Unreal engine with art assets generated by AI for a stunning 2D game world.',
    year: '2023',
    thumbnail: untitledGameThumb,
    description:
      "<p>With the introduction of AI art generators I finally saw an opportunity to fullfil my childhood dream of creating a game.</p><p>The game is an isometric, slice-of-life game but handles some heavy themes. I'm developing it within the Unreal Engine. The art assets are generated by AI and further extended upon by myself.</p>",
    content: <UntitledGame />,
  },
  // {
  //   slug: 'gametalk',
  //   name: 'Gametalk Community Website',
  //   type: 'personal',
  //   tags: ['Front-end', 'Back-end'],
  //   intro:
  //     'A community website for gamers with both a completed front-end and back-end.',
  //   year: '2023',
  //   thumbnail: gametalkThumb,
  //   bannerSrc: '/../public/images/projects/thought-stream/og_image.png',
  //   description:
  //     "<p>With the introduction of AI art generators I finally saw an opportunity to fullfil my childhood dream of creating a game.</p><p>The game is an isometric, slice-of-life game but handles some heavy themes. I'm developing it within the Unreal Engine. The art assets are generated by AI and further extended upon by myself.</p>",
  //   content: <UntitledGame />,
  // },
  {
    slug: 'woodfort',
    name: 'Woodfort Cases',
    type: 'personal',
    tags: ['Business', 'Marketing'],
    intro:
      'A small business making luxury handmade wood panelled computer cases.',
    year: '2022 - 2023',
    thumbnail: woodfortThumb,
    description:
      "<p>Woodfort Cases is a budding small business of mine that sells handmade luxury computer cases that I make with materials like wood, metal and brass.</p><p>Although not a dev project, it is a project that I'm passionate about and I always want to show it off any chance that I get.</p>",
    content: <Woodfort />,
  },
];

export default projects;
