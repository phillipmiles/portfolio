import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import PageContentWrap from '../components/generic/PageContentWrap';
import Nav from '../components/Nav';
import Button from '../components/generic/Button';
import Link from 'next/link';
import DevTools from '../components/DevTools';
import Flex from '../components/generic/Flex';
import Footer from '../components/Footer';
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
import PageWithFooter from '../components/PageWithFooter';
import Banner from '../components/Banner';
import ProjectCard from '../components/ProjectCard';
import PageTitle from '../components/PageTitle';
import PageIntro from '../components/PageIntro';

const Projects: NextPage = () => {
  return (
    <PageWithFooter footerComponent={<Footer />}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ background: '#ECF4FA' }}>
        <Banner />
        <PageContentWrap>
          <div style={{ marginBottom: 96 }}>
            <div
              style={{ textAlign: 'center', marginTop: 64, marginBottom: 96 }}
            >
              <PageTitle>Thought Stream</PageTitle>
              <PageIntro>
                Mobile not taking app built with React Native
              </PageIntro>
              <p style={{ marginBottom: 96 }}>2020 - 2021</p>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 512,
                  marginBottom: 96,
                }}
              >
                <Image
                  src={'/images/blush.jpeg'}
                  alt=""
                  fill={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ maxWidth: 680, margin: 'auto', textAlign: 'left' }}>
                <p>
                  This is an example file where I would be writing and editing
                  the content of a blog post completly ignoring how it will be
                  rendered in the final app. This is just about content only.
                </p>
                <p>
                  Praesent eget augue in tellus porta luctus. Mauris quis nulla
                  nulla. Vivamus rutrum rutrum nisi, sed laoreet augue dignissim
                  egestas.
                </p>
                <h2>Oh look, a heading 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  a diam vitae metus rhoncus ornare. Donec imperdiet libero vel
                  lectus molestie maximus. Integer iaculis lobortis cursus.
                  Nullam sodales odio magna, a mollis est aliquet et. Proin
                  posuere metus non interdum sagittis. Nulla ac risus
                  ullamcorper, pellentesque odio vehicula, laoreet libero. Sed
                  neque libero, venenatis et euismod ac, mollis nec mauris.
                </p>
                <p>
                  Phasellus interdum, velit eu tincidunt lobortis, lorem est
                  dictum arcu, at bibendum velit turpis at purus. In fermentum,
                  dolor sed rutrum accumsan, lorem risus maximus purus, id
                  tempus ipsum ex at nibh.
                </p>
              </div>
            </div>
          </div>
        </PageContentWrap>
      </main>
    </PageWithFooter>
  );
};

export default Projects;