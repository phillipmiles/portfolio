import type { NextPage } from 'next';
import Head from 'next/head';
import PageContentWrap from '../../../components/generic/PageContentWrap';
import Flex from '../../../components/generic/Flex';
import Footer from '../../../components/Footer';
import PageWithFooter from '../../../components/generic/PageWithFooter';
import Banner from '../../../components/Banner';
import PageTitle from '../../../components/PageTitle';
import PageIntro from '../../../components/PageIntro';
import tools from '../../../data/tools/list';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CodeBox from '../../../components/generic/CodeBox';
import DetachedHoverEffect from '../../../components/generic/DetachedHoverEffect';
import s from './[slug].module.css';
import Select from '../../../components/Select';
import SelectMobile from '../../../components/SelectMobile';

const ToolsReactLibrary: NextPage = () => {
  const router = useRouter();

  const [currentTool, setCurrentTool] = useState(null);

  useEffect(() => {
    const tool = tools.find((tool) => tool.slug === router.query.slug);

    if (!tool) {
      return;
    }

    setCurrentTool({ value: tool.title, id: tool.slug, ...tool });
  }, [router]);

  const parsedTools = tools.map((tool) => ({
    value: tool.title,
    id: tool.slug,
    ...tool,
  }));

  return (
    <>
      <Head>
        <title>React Construct | Phillip Miles</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Banner />
      <PageContentWrap>
        <div style={{ marginBottom: 128 }}>
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <PageTitle>React Construct</PageTitle>
            <PageIntro>
              React Construct is a library of low-level react components used to
              construct reusable UI components.
            </PageIntro>
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
          <Flex
            style={{
              //gap: '64px',
              width: '100%',
            }}
          >
            <div className={s.componentMenu}>
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.slug}
                  scroll={false}
                  passHref={true}
                  style={{
                    margin: '24px',
                  }}
                >
                  <DetachedHoverEffect
                    className={`${s.hover} ${
                      currentTool &&
                      tool.slug === currentTool.slug &&
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
                    >
                      {tool.title}
                    </span>
                  </DetachedHoverEffect>
                </Link>
              ))}
            </div>
            <div className={s.content}>
              <div className={s.selectControl}>
                <h5>Components</h5>
                {currentTool && (
                  <SelectMobile
                    selectId="component-select"
                    options={parsedTools}
                    selectedOption={currentTool}
                    onSelect={(selection) => {
                      router.push(selection.id, '', { scroll: false });
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  // maxWidth: '700px',
                  marginTop: '48px',
                  marginBottom: '48px',
                }}
              >
                <h4>{currentTool ? currentTool.title : 'Title'}</h4>
                <p
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  {currentTool
                    ? currentTool.description
                    : 'Component not found.'}
                </p>
              </div>

              {currentTool &&
                currentTool.content.map((example, index) => (
                  <>
                    <div
                      key={index}
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