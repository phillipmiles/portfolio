import marksy from 'marksy';
import { useEffect, useState, createElement } from 'react';
// import LazyLoader from './LazyLoader';
import HighlightSyntax from './HighlightSyntax';

import CodeBox from './CodeBox';

const RenderMarkdown = ({ content }) => {
  const [parsedMarkdown, setParsedMarkdown] = useState();

  useEffect(() => {
    if (!content) {
      return undefined;
    }
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
              {/* <LazyLoader height={200}>
                <Image src={src} alt={alt} sx={{ width: '100%' }} />
              </LazyLoader> */}
              {caption && (
                <div
                  style={{
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px',
                    borderBottomColor: '#D4DBE6',
                  }}
                >
                  <p style={{ marginTop: '16px', color: 'grey' }}>{caption}</p>
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
              // variant: ['text.heading5', 'text.heading4'],
              margin: 'auto',
              maxWidth: 'contentSmall',
              width: '100%',
              marginBottom: 32,
              marginTop: 64,
            }}
          >
            {children}
          </h2>
        ),

        h3: ({ id, children }) => (
          <h3
            style={{
              // variant: ['text.heading6', 'text.heading5'],
              margin: 'auto',
              maxWidth: 'contentSmall',
              width: '100%',
              marginBottom: 32,
              marginTop: 64,
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
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  maxWidth: 'contentSmall',
                  width: '100%',
                  // ':first-of-type': {
                  //   // variant: ['text.body', 'text.callout'],

                  //   marginBottom: '24px',
                  // },
                  // ':last-of-type': { marginBottom: 0 },
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
          // return (
          //   <LazyLoader>
          //     <Image
          //       src={src}
          //       alt={alt}
          //       style={{
          //         maxWidth: 900,
          //         marginTop: 96,
          //         marginBottom: 96,
          //         width: '100%',
          //       }}
          //     />
          //   </LazyLoader>
          // );
        },
        code({ language, code }) {
          return <CodeBox language={language}>{code}</CodeBox>;
        },
        codespan({ children }) {},
      },
    });

    const compiled = compile(content, {
      // Options passed to "marked" (https://www.npmjs.com/package/marked)
    });

    setParsedMarkdown(compiled.tree);
  }, [content]);

  return parsedMarkdown ? parsedMarkdown : null;
};

export default RenderMarkdown;
