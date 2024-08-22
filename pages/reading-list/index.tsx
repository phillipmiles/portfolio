import type { NextPage } from 'next';
import Head from 'next/head';
import PageContentWrap from '../../components/generic/PageContentWrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAws,
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faJsSquare,
  faNode,
  faNodeJs,
  faReact,
  faShopify,
} from '@fortawesome/free-brands-svg-icons';
import Banner from '../../components/Banner';
import ProjectCard from '../../components/ProjectCard';
import ProjectCardWide from '../../components/ProjectCardWide';
import PageTitle from '../../components/PageTitle';
import PageIntro from '../../components/PageIntro';
import projects from '../../data/projects';
import s from './index.module.css';
import Heading from '../../components/Heading';
import Image from 'next/image';
import DetachedHoverEffect from '../../components/generic/DetachedHoverEffect';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import ReadingListItem from '../../components/ReadingListItem';
import LinkGhostBox from '../../components/LinkGhostBox';

const ReadingList: NextPage = () => {
  const books = [
    {
      title: "So you've been publicly shamed",
      author: 'Bob Ross',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://interfaceingame.com/',
      source: 'Interface In Game',
      image: '/images/readinglist/thumb_so-youve-been-publicly-shamed.jpg',
      icon: 'interface-in-game_icon.png',
      type: 'book',
      topics: ['Design', 'Game Dev'],
      timeAdded: new Date(),
    },
    {
      title: 'Homo Deus',
      author: 'Bob Ross',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://interfaceingame.com/',
      source: 'Interface In Game',
      image: '/images/readinglist/thumb_homo-deus.jpg',
      icon: 'interface-in-game_icon.png',
      type: 'book',
      topics: ['Design', 'Game Dev'],
      timeAdded: new Date(),
    },
    {
      title: 'Atomic Design',
      author: 'Bob Ross',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://interfaceingame.com/',
      source: 'Interface In Game',
      image: '/images/readinglist/thumb_atomic-design.svg',
      icon: 'interface-in-game_icon.png',
      type: 'book',
      topics: ['Design', 'Game Dev'],
      timeAdded: new Date(),
    },

    {
      title: 'Thinking fast and slow',
      author: 'Bob Ross',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://interfaceingame.com/',
      source: 'Interface In Game',
      image: '/images/readinglist/thumb_thinking-fast-and-slow.jpg',
      icon: 'interface-in-game_icon.png',
      type: 'book',
      topics: ['Design', 'Game Dev'],
      timeAdded: new Date(),
    },
    {
      title: 'Interface In Game',
      author: 'Bob Ross',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://interfaceingame.com/',
      source: 'Interface In Game',
      image: '/images/readinglist/thumb_so-youve-been-publicly-shamed.jpg',
      icon: 'interface-in-game_icon.png',
      type: 'book',
      topics: ['Design', 'Game Dev'],
      timeAdded: new Date(),
    },
  ];
  const readingList = [
    {
      title: 'A Brief History & Ethos of the Digital Garden',
      description:
        "I love this idea of cultivating a digital garden of knowledge. Maggie Appleton's own website is a brilliant example of it.",
      url: 'https://maggieappleton.com/garden-history',
      source: 'Maggie Appleton',
      icon: 'maggie-appleton_icon.png',
      type: 'Article',
      // image: '/images/projects/binder/binder_image_01.jpg',
      topics: ['Internet'],
      timeAdded: new Date(),
    },
    {
      title: 'Interface In Game',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://interfaceingame.com/',
      source: 'Interface In Game',
      icon: 'interface-in-game_icon.png',
      type: 'Link',
      topics: ['Design', 'Game Dev'],
      timeAdded: new Date(),
    },
    {
      title: 'Hexagonal Grids from Red Blob Games',
      description:
        'A unbelievable deep dive into the maths involved with working with a hexagonal grid system with interactive diagrams.',
      url: 'https://www.redblobgames.com/grids/hexagons/',
      source: 'Red Blob Games',
      icon: 'red-blob-games_icon.png',
      type: 'Article',
      topics: ['Math', 'Game Dev'],
      timeAdded: new Date(),
    },
    {
      title: 'Snow Fall The Avalanche at Tunnel Creek',
      description:
        'My first encounter with professional journalism leaning into the strength of the digital medium by utilising video and interactive elements.',
      url: 'https://www.nytimes.com/projects/2012/snow-fall/index.html#/?part=tunnel-creek',
      source: 'New York Times',
      icon: 'icon_new-york-times.png',
      type: 'Article',
      topics: ['Math', 'Game Dev'],
      timeAdded: new Date(),
    },
  ];
  const columnBreakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <>
      <Head>
        <title>Reading List | Phillip Miles React Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Banner />
      <PageContentWrap>
        <main
          className={s.main}
          style={{
            marginBottom: 96,
            color: '#343435',
          }}
        >
          <div
            style={{
              marginTop: 64,
              marginBottom: 96,
            }}
          >
            <h1 style={{}}>Reading list</h1>
            <h2
              style={{
                fontSize: '26px',
                fontFamily: 'metropolis',
                fontWeight: '400',
                maxWidth: '700px',
              }}
            >
              {/* Things I've found on the web that I recommend. */}
              Interesting things I found on the web that made my dopamine
              receptors go <i>woosh!</i> <b>bam!</b> <u>zap!</u>
            </h2>
          </div>

          {/* <div className={s.grid}> */}
          <Masonry
            breakpointCols={columnBreakpoints}
            className={s.masonryGrid}
            columnClassName={s.masonryGridColumn}
          >
            {readingList.map((item) => (
              <LinkGhostBox key={item.url} style={{ marginBottom: '16px' }}>
                <ReadingListItem
                  url={item.url}
                  title={item.title}
                  description={item.description}
                  source={item.source}
                  icon={item.icon}
                  type={item.type}
                  image={item.image}
                />
              </LinkGhostBox>
            ))}
          </Masonry>
          <h3 style={{ marginTop: '64px' }}>Books</h3>
          <div className={s.booksContainer}>
            {books.map((item) => (
              <LinkGhostBox key={item.url}>
                <Link
                  target="blank"
                  href={item.url}
                  className={s.item}
                  style={{
                    display: 'block',
                    padding: '24px',
                    // backgroundColor: image ? 'white' : 'transparent',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '2/3',
                      position: 'relative',
                      marginBottom: '16px',
                    }}
                  >
                    <Image src={item.image} fill objectFit="contain" alt="" />
                  </div>
                  <h4
                    style={{
                      fontWeight: 400,
                      fontSize: '26px',
                      marginTop: 0,
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '16px' }}>{item.author}</p>
                  <p style={{ margin: 0, fontSize: '16px' }}>
                    {item.description}
                  </p>
                </Link>
              </LinkGhostBox>
            ))}
          </div>
          {/* <div>
              <h3>Links</h3>
              <p>Interface In Game</p>
              <p>https://interfaceingame.com/</p>
            </div> */}
          {/* </div> */}
        </main>
      </PageContentWrap>
    </>
  );
};

export default ReadingList;
