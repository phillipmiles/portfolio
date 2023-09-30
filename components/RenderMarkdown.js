import marksy from 'marksy';
import { useEffect, useState, createElement } from 'react';

// XXX Parcel v1 is once again having troubles with it's imports. Should be fixed
// in Parcel v2. Current work around is to directly import from the common js module.
// See... https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/180
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import codeLangJstyle from 'react-syntax-highlighter/dist/esm/languages/prism/jstyle';
// import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import Image from 'next/image';

// SyntaxHighlighter.registerLanguage('jstyle', codeLangJstyle);

const RenderMarkdown = ({ content }) => {
  console.log(content);
  const [parsedMarkdown, setParsedMarkdown] = useState();

  useEffect(() => {
    const compile = marksy({
      // Pass in whatever creates elements for your
      // virtual DOM library. h('h1', {})
      createElement,
      components: {
        Image({ blockType, src, alt, float, caption }) {
          return (
            <div
              style={{
                clear: 'both',
                maxWidth:
                  blockType === 'wide'
                    ? ['contentSmall', 'contentSmall', 'content']
                    : 'contentSmall',
                my: float ? [6, 6, 0] : [6, 6, 6],

                width: float ? ['100%', '100%', '460px'] : '100%',
                mx: 'auto',

                ...(float && {
                  mb: [6, 6, 4],

                  ...(float === 'right' && {
                    pl: [0, 0, 6],
                  }),
                  ...(float === 'left' && {
                    pr: [0, 0, 6],
                  }),
                }),

                float: float ? ['none', 'none', float] : 'none',

                ':first-child': {
                  mt: 0,
                },
              }}
            >
              {/* Need to standardise image heights so lazy loader knows
              what to do and to avoid content layout shifts. */}
              {/* <LazyLoader height={200}> */}
              <Image src={src} alt={alt} style={{ width: '100%' }} />
              {/* </LazyLoader> */}
              {caption && (
                <div
                  style={{
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px',
                    borderBottomColor: '#D4DBE6',
                  }}
                >
                  <p
                    variant="detail"
                    style={{
                      marginTop: '16px',
                      marginBottom: '16px',
                      color: 'green',
                    }}
                  >
                    {caption}
                  </p>
                </div>
              )}
            </div>
          );
        },
      },
      elements: {
        // Supress rendering h1. Post title is pulled from the post object not from
        // the markdown file.
        h1: () => null,
        h2: ({ id, children }) => (
          <h2
            style={{
              margin: 'auto',
              maxWidth: '600px',
              width: '100%',
              marginBottom: '40px',
              marginTop: '64px',
            }}
          >
            {children}
          </h2>
        ),

        h3: ({ id, children }) => (
          <h3
            style={{
              margin: 'auto',
              maxWidth: 'contentSmall',
              width: '100%',
              marginBottom: '40px',
              marginTop: '64px',
            }}
          >
            {children}
          </h3>
        ),
        h4({ id, children }) {},
        blockquote({ children }) {},
        hr() {},
        ol({ children }) {},
        ul({ children }) {},
        p({ children, context, ...props }) {
          // Checks if this paragraph is containing only an image. If so, don't wrap it in
          // paragraph tags.
          if (
            !children[0] &&
            !children[2] &&
            children[1] &&
            children[1].type.name === 'img'
          ) {
            return children;
          } else {
            return (
              <p
                style={{
                  mx: 'auto',
                  maxWidth: 'contentSmall',
                  width: '100%',
                  ':first-of-type': {
                    variant: ['text.body', 'text.callout'],
                    mb: [4, 5],
                  },
                  ':last-of-type': { mb: 0 },
                }}
              >
                {children}
              </p>
            );
          }
        },
        table({ children }) {},
        thead({ children }) {},
        tbody({ children }) {},
        tr({ children }) {},
        th({ children }) {},
        td({ children }) {},
        a({ href, title, target, children }) {},
        strong({ children }) {
          return <strong>{children}</strong>;
        },
        em({ children }) {},
        br() {},
        del({ children }) {},
        img({ src, alt }) {
          return (
            <Image
              src={src}
              alt={alt}
              style={{
                maxWidth: '600px',
                marginTop: '64px',
                marginBottom: '64px',
                width: '100%',
              }}
            />
          );
        },
        // code({ language, code }) {
        //   return (
        //     <div
        //       style={{
        //         maxWidth: 728,
        //         margin: '64px auto',
        //         width: '100%',
        //         position: 'relative',
        //         background: 'black',
        //         borderRadius: 8,
        //       }}
        //     >
        //       <span
        //         style={{
        //           position: 'absolute',
        //           top: 2,
        //           right: 5,
        //           color: 'white',
        //         }}
        //       >
        //         {language}
        //       </span>
        //       <SyntaxHighlighter
        //         language={language}
        //         style={{
        //           ...prism,
        //           ...{
        //             atrule: {
        //               color: 'red',
        //             },
        //             'attr-name': {
        //               // color: 'white',
        //               color: '#0087FE',
        //             },
        //             'attr-value': {
        //               color: 'red',
        //             },

        //             // italic: {

        //             // },
        //             // bold: {

        //             // },
        //             doctype: {
        //               color: 'red',
        //             },
        //             // Brackets and semicolans
        //             punctuation: {
        //               color: theme.colors.white,
        //             },
        //             regex: {
        //               color: 'red',
        //             },
        //             cdata: {
        //               color: 'red',
        //             },
        //             char: {
        //               color: 'red',
        //             },
        //             symbol: {
        //               color: 'red',
        //             },
        //             inserted: {
        //               color: 'red',
        //             },
        //             'class-name': {
        //               color: '#15D1AF',
        //             },
        //             keyword: {
        //               // color: '#F479FF',
        //               // color: '#0087FE',
        //               color: theme.colors.primary,
        //             },
        //             namespace: {
        //               color: 'red',
        //             },
        //             builtin: {
        //               color: 'red',
        //             },
        //             prolog: {
        //               color: 'red',
        //             },
        //             url: {
        //               color: 'red',
        //             },
        //             property: {
        //               color: 'red',
        //             },
        //             deleted: {
        //               color: 'red',
        //             },
        //             // html tag
        //             tag: {
        //               color: '#00C2FF',
        //               // color: theme.colors.primaryLight,
        //             },
        //             selector: {
        //               color: 'red',
        //             },
        //             entity: {
        //               color: 'red',
        //             },
        //             important: {
        //               color: 'red',
        //             },
        //             constant: {
        //               color: 'red',
        //             },
        //             boolean: {
        //               color: '#00C2FF',
        //             },
        //             string: {
        //               color: '#F34E5F',
        //             },
        //             number: {
        //               color: '#F479FF',
        //               // color: '#FFEF64',
        //             },
        //             function: {
        //               color: '#FFEF64',
        //               // color: theme.colors.secondary,
        //             },
        //             variable: {
        //               color: 'red',
        //             },
        //             comment: {
        //               color: '#009C48',
        //             },
        //             operator: {
        //               color: theme.colors.white,
        //             },
        //             'pre[class*="language-"]': {
        //               ...prism['pre[class*="language-"]'],
        //               background: 'transparent',
        //               // color: theme.colors.white,
        //               color: '#00F0FF',
        //               textShadow: 'none',
        //               padding: 32,
        //               margin: 0,
        //             },
        //             'code[class*="language-"]': {
        //               ...prism['code[class*="language-"]'],
        //               // color: theme.colors.white,
        //               color: '#00F0FF',
        //               textShadow: 'none',
        //               fontSize: '16px',
        //             },
        //           },
        //         }}
        //       >
        //         {code}
        //       </SyntaxHighlighter>
        //     </div>
        //   );
        //   // return (
        //   //   <pre style={{ maxWidth: 'contentSmall', mx: 'auto', width: '100%' }}>
        //   //     <code>{code}</code>
        //   //   </pre>
        //   // );
        // },
        codespan({ children }) {},
      },
    });

    if (!content) {
      return;
    }
    const compiled = compile(content.content, {
      // Options passed to "marked" (https://www.npmjs.com/package/marked)
    });

    // compiled.tree // The React tree of components
    // compiled.toc // The table of contents, based on usage of headers
    console.log('compiled', compiled);
    setParsedMarkdown(compiled.tree);
  }, [content]);

  return parsedMarkdown ? parsedMarkdown : null;
};

RenderMarkdown.propTypes = {};

export default RenderMarkdown;
