import type { NextPage } from 'next';
import Head from 'next/head';
import PageContentWrap from '../../../components/generic/PageContentWrap';
import Flex from '../../../components/generic/Flex';
import Footer from '../../../components/Footer';
import PageWithFooter from '../../../components/generic/PageWithFooter';
import Banner from '../../../components/Banner';
import PageTitle from '../../../components/PageTitle';
import PageIntro from '../../../components/PageIntro';
import examples from '../../../data/tools/useFormState';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CodeBox from '../../../components/generic/CodeBox';
import DetachedHoverEffect from '../../../components/generic/DetachedHoverEffect';
import s from './index.module.css';
import Select from '../../../components/Select';
import SelectMobile from '../../../components/SelectMobile';

const ToolsReactLibrary: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>useFormState React Hook | Phillip Miles</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Banner />
      <PageContentWrap>
        <div style={{ marginBottom: 128 }}>
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <PageTitle>React useFormState</PageTitle>
            <PageIntro>
              UseFormState is a flexible React Hook that manages the state of a
              web form.
            </PageIntro>
          </div>
        </div>
      </PageContentWrap>
      <div
        style={{
          background: 'white',
          paddingTop: '64px',
          position: 'sticky',
          top: 0,
        }}
      >
        <PageContentWrap>
          <Flex
            style={{
              width: '100%',
            }}
          >
            <div className={s.content}>
              {/* <div className={s.selectControl}>
                <h5>Components</h5>
              </div>
              <div
                style={{
                  // maxWidth: '700px',
                  marginTop: '48px',
                  marginBottom: '48px',
                }}
              >
                <h4>useFormState</h4>
                <p
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  Lorem ipusm
                </p>
              </div> */}

              {examples.map((example, index) => (
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