import type { NextPage } from 'next';
import Head from 'next/head';
import PageContentWrap from '../../../components/generic/PageContentWrap';
import Flex from '../../../components/generic/Flex';
import Footer from '../../../components/Footer';
import PageWithFooter from '../../../components/generic/PageWithFooter';
import Banner from '../../../components/Banner';
import PageTitle from '../../../components/PageTitle';
import PageIntro from '../../../components/PageIntro';
import libraries from '../../../data/tools/functions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CodeBox from '../../../components/generic/CodeBox';
import DetachedHoverEffect from '../../../components/generic/DetachedHoverEffect';
import s from './[slug].module.css';
import ContentSlider from '../../../components/generic/ContentSlider';
import Heading from '../../../components/Heading';
import Notification from '../../../components/Notification';

const ToolsReactLibrary: NextPage = () => {
  const router = useRouter();

  const [currentTool, setCurrentTool] = useState();
  const [currentLibrary, setCurrentLibrary] = useState();

  useEffect(() => {
    const library = libraries.find((tool) => tool.slug === router.query.slug);

    if (!library) {
      return;
    }
    console.log(library.content[0]);
    setCurrentLibrary(library);
    setCurrentTool(library.content[0]);
  }, [router]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Handy Dandy Functions are a collection of simple Javascript functions
              that I frequently find myself coming back to."
        />
      </Head>

      <Banner />
      <PageContentWrap>
        <div style={{ marginBottom: 128 }}>
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <h1 className="h2">Handy Dandy Functions</h1>
            <p
              style={{
                maxWidth: '500px',
                margin: 'auto',
                fontSize: '21px',
              }}
            >
              Handy Dandy Functions are a collection of simple Javascript
              functions that I have found myself using in many projects.
            </p>
          </div>
        </div>
      </PageContentWrap>
      <div
        style={{
          background: 'white',
          //padding: '16px'
          paddingTop: '64px',
          position: 'sticky',
          top: 0,
        }}
      >
        <PageContentWrap>
          <Notification style={{ marginBottom: '64px' }}>
            This library is under development. A NPM module will be made
            available when it is ready.
          </Notification>

          <Flex
            style={{
              //gap: '64px',
              width: '100%',
            }}
          >
            <div
              style={{
                width: '30%',
                paddingRight: '64px',
                flexShrink: 0,
                flexGrow: 0,
              }}
            >
              {libraries.map((library) => (
                <Link
                  key={library.slug}
                  href={library.slug}
                  scroll={false}
                  passHref={true}
                  className={`${s.toolsNavItem} ${
                    currentTool && library.slug === currentLibrary.slug
                      ? s.toolsNavItemActive
                      : ''
                  }`}
                  style={{
                    display: 'block',
                    margin: '16px 0',
                  }}
                >
                  {/* <DetachedHoverEffect
                    className={`${s.hover} ${
                      currentLibrary &&
                      library.slug === currentLibrary.slug &&
                      s.hoverSelect
                    }`}
                  >
                    <span
                      style={{
                        display: 'block',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                      }}
                    > */}
                  {library.title}
                  {/* </span>
                  </DetachedHoverEffect> */}
                </Link>
              ))}
            </div>
            <div style={{ marginBottom: 96, width: '70%' }}>
              <Heading tag="h2" as="h4">
                {currentTool ? currentTool.title : 'Function not found.'}
              </Heading>
              <p
                style={{
                  // maxWidth: 700,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: '48px',
                  marginBottom: '48px',
                }}
              >
                {currentTool ? currentTool.description : 'Function not found.'}
              </p>

              {currentTool &&
                currentTool.content.map((example, index) => (
                  <>
                    <Heading tag="h3" as="h5">
                      {example.title}
                    </Heading>
                    <p
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '24px',
                      }}
                    >
                      {example.description}
                    </p>
                    <div
                      style={{
                        // marginLeft: 8,
                        // width: '100%',
                        border: '2px solid #262C35',
                        borderRadius: '6px 6px 0px 0',
                        // padding: '16px',
                        flexGrow: 0,
                        flexShrink: 0,
                        background: '#ecf4fa',
                        padding: '24px',
                      }}
                    >
                      <example.example />
                    </div>
                    <div style={{}}>
                      {example.exampleMarkDown && (
                        <CodeBox
                          code={example.exampleMarkDown}
                          style={{
                            height: '100%',
                            borderRadius: '0px 0 6px 6px',
                            marginBottom: '64px',
                          }}
                        />
                      )}
                    </div>
                  </>
                ))}
            </div>
          </Flex>
        </PageContentWrap>
      </div>
    </>
  );
};

export default ToolsReactLibrary;
