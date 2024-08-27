import type { NextPage } from 'next';
import Head from 'next/head';
import PageContentWrap from '../../components/generic/PageContentWrap';
import Banner from '../../components/Banner';
import s from './index.module.css';
import Masonry from 'react-masonry-css';
import ReadingListItem from '../../components/ReadingListItem';
import LinkGhostBox from '../../components/LinkGhostBox';
import BookListItem from '../../components/BookListItem';
import PageTitle from '../../components/PageTitle';
import PageIntro from '../../components/PageIntro';

const ReadingList: NextPage = () => {
  const books = [
    {
      title: "So you've been publicly shamed",
      author: 'Jon Ronson',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://www.google.com.au/books/edition/So_You_ve_Been_Publicly_Shamed/-5elBQAAQBAJ',
      source: 'Google Books',
      image: '/images/readinglist/thumb_so-youve-been-publicly-shamed.jpg',
    },
    {
      title: 'Homo Deus',
      author: 'Yuval Noah Harari',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://www.google.com.au/books/edition/Homo_Deus/dWYyCwAAQBAJ',
      source: 'Google Books',
      image: '/images/readinglist/thumb_homo-deus.jpg',
    },
    {
      title: 'Atomic Design',
      author: 'Brad Frost',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://atomicdesign.bradfrost.com/',
      source: 'Brad Frost',
      image: '/images/readinglist/thumb_atomic-design.svg',
    },

    {
      title: 'Thinking fast and slow',
      author: 'Daniel Kahneman',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://www.google.com.au/books/edition/Thinking_Fast_and_Slow/oV1tXT3HigoC',
      source: 'Google Books',
      image: '/images/readinglist/thumb_thinking-fast-and-slow.jpg',
    },
    {
      title: 'The subtle art of not giving a fuck',
      author: 'Mark Manson',
      description:
        'A collection of user interfaces from over 350 games to explore and inspire.',
      url: 'https://www.google.com.au/books/edition/The_Subtle_Art_of_Not_Giving_a_F_ck/sTKxDAAAQBAJ',
      source: 'Google Books',
      image:
        '/images/readinglist/thumb_the-subtle-art-of-not-giving-a-fuck.jpg',
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
      title: 'Why React Re-Renders',
      description: 'A good look into how React works behind the scenes.',
      url: 'https://www.joshwcomeau.com/react/why-react-re-renders/',
      source: 'Josh W Comeau',
      icon: 'josh-w-comeau_icon.png',
      type: 'Article',
      topics: ['React'],
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
        <meta
          name="description"
          content="Interesting things I found on the web that made my dopamine
              receptors go woosh! bam! zap!"
        />
      </Head>

      <Banner />
      <PageContentWrap>
        <main className={s.main} style={{ marginBottom: 96 }}>
          <div
            style={{
              marginTop: 64,
              marginBottom: 96,
            }}
          >
            <PageTitle>Reading List</PageTitle>
            <PageIntro>
              Interesting things I found on the web that made my dopamine
              receptors go <i>woosh!</i> <b>bam!</b> <u>zap!</u>
            </PageIntro>
          </div>

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
                />
              </LinkGhostBox>
            ))}
          </Masonry>
          <h3 style={{ marginTop: '64px' }}>Books</h3>
          <div className={s.booksContainer}>
            {books.map((item) => (
              <LinkGhostBox key={item.url} style={{ marginBottom: '16px' }}>
                <BookListItem
                  title={item.title}
                  author={item.author}
                  description={item.description}
                  source={item.source}
                  url={item.url}
                  image={item.image}
                />
              </LinkGhostBox>
            ))}
          </div>
        </main>
      </PageContentWrap>
    </>
  );
};

export default ReadingList;
