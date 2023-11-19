import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PageContentWrap from '../../components/generic/PageContentWrap';
import Flex from '../../components/generic/Flex';
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
import PageTitle from '../../components/PageTitle';
import PageIntro from '../../components/PageIntro';

import s from './Project.module.css';
import projects from '../../data/projects';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Projects: NextPage = (props) => {
  const router = useRouter();
  const [project, setProject] = useState();

  useEffect(() => {
    if (router.isReady) {
      const project = projects.find(
        (project) => project.slug === router.query.slug
      );
      if (!project) return;

      setProject(project);
    }
  }, [router.isReady, router.query.slug]);

  const metaTitle = `${
    project ? project.name : ''
  } | Phillip Miles React Portfolio`;
  const metaDescription = project ? project.description : '';
  const metaImage = project
    ? `./images/projects/${router.query.slug}/${router.query.slug}_thumbnail_01.jpg`
    : '';
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          property="og:url"
          content={`https://www.phillipmiles.com/projects/${router.query.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} key={metaImage} />
      </Head>

      <Banner />
      <PageContentWrap>
        <div style={{ marginBottom: 96 }}>
          {router.isReady && project && (
            <>
              <div
                style={{
                  textAlign: 'center',
                  marginTop: 64,
                  marginBottom: 96,
                }}
              >
                <p style={{ marginBottom: 30 }}>{project.year}</p>
                <PageTitle>{project.name}</PageTitle>
                <PageIntro>{project.intro}</PageIntro>
              </div>
              <div className={s.content}>{project.content}</div>
              <Flex
                style={{
                  justifyContent: 'flex-end',
                  maxWidth: 900,
                  alignItems: 'center',
                  marginTop: '60px',
                }}
              >
                <p
                  style={{
                    margin: '8px',
                    fontSize: '16px',
                  }}
                >
                  Share project:
                </p>
                <a
                  rel="canonical"
                  data-size="large"
                  className={`twitter-share-button ${s.shareButton}`}
                  href={`https://twitter.com/intent/tweet?text=www.phillipmiles.com/projects/${router.query.slug}`}
                >
                  <Image
                    src={'/images/companies/icons/x-icon.svg'}
                    width={24}
                    height={24}
                    alt="Share on X"
                    style={{ margin: 8, color: 'black' }}
                  />
                </a>

                <div id="fb-root"></div>
                <script
                  async
                  defer
                  crossOrigin="anonymous"
                  src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
                  nonce="QgmLflDB"
                ></script>

                <div
                  className={`fb-share-button ${s.shareButton}`}
                  data-href="https://www.phillipmiles.com"
                  data-layout=""
                  data-size=""
                >
                  <a
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.phillipmiles.com/projects/${router.query.slug}%2F&amp;src=sdkpreparse`}
                    className="fb-xfbml-parse-ignore"
                  >
                    <Image
                      src={'/images/companies/icons/facebook-icon.svg'}
                      width={24}
                      height={24}
                      alt="Share on Facebook"
                      style={{ margin: 8, color: 'black' }}
                    />
                  </a>
                </div>
              </Flex>
            </>
          )}
        </div>
      </PageContentWrap>
    </>
  );
};

export default Projects;
