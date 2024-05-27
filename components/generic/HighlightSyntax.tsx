import { useEffect, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';

const SyntaxHighlighterComponent = ({ language, children }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (language == 'jsx') {
      SyntaxHighlighter.registerLanguage('jsx', jsx);
    }
    if (language == 'css') {
      SyntaxHighlighter.registerLanguage('css', css);
    }
    setReady(true);
  }, [language]);

  // Useing 'ready' to re-render component after SyntaxHighlighter registers the language else
  // we don't have styles on page load/page refresh. See issue for more info...
  // https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/263
  if (!ready) return;

  return (
    <SyntaxHighlighter
      language={language}
      customStyle={{ lineHeight: 1.2 }}
      style={{
        ...prism,

        ...{
          lineHeight: 0,
          atrule: {
            color: 'red',
          },
          'attr-name': {
            // color: 'white',
            color: '#0087FE',
          },
          'attr-value': {
            color: 'rgb(243, 78, 95)',
          },

          doctype: {
            color: 'red',
          },
          // Brackets and semicolans
          punctuation: {
            color: 'white',
          },
          regex: {
            color: 'red',
          },
          cdata: {
            color: 'red',
          },
          char: {
            color: 'red',
          },
          symbol: {
            color: 'red',
          },
          inserted: {
            color: 'red',
          },
          'class-name': {
            color: '#15D1AF',
          },
          keyword: {
            // color: '#F479FF',
            // color: '#0087FE',
            color: '#007be4', // theme.colors.primary,
          },
          namespace: {
            color: 'red',
          },
          builtin: {
            color: 'red',
          },
          prolog: {
            color: 'red',
          },
          url: {
            color: 'red',
          },
          property: {
            color: 'rgb(243, 78, 95)',
          },
          deleted: {
            color: 'red',
          },
          // html tag
          tag: {
            color: '#00C2FF',
            // color: theme.colors.primaryLight,
          },
          selector: {
            color: '#FFEF64',
          },
          entity: {
            color: 'red',
          },
          important: {
            color: 'red',
          },
          constant: {
            color: 'red',
          },
          boolean: {
            color: '#00C2FF',
          },
          string: {
            color: '#F34E5F',
          },
          number: {
            color: '#F479FF',
            // color: '#FFEF64',
          },
          function: {
            color: '#FFEF64',
            // color: theme.colors.secondary,
          },
          variable: {
            color: 'red',
          },
          comment: {
            color: '#009C48',
          },
          operator: {
            color: 'white',
          },
          'pre[class*="language-"]': {
            ...prism['pre[class*="language-"]'],
            background: 'transparent',
            // color: theme.colors.white,
            color: '#00F0FF',
            textShadow: 'none',
            padding: 32,
            margin: 0,
          },
          'code[class*="language-"]': {
            ...prism['code[class*="language-"]'],
            // color: theme.colors.white,
            color: '#00F0FF',
            textShadow: 'none',
            fontSize: '14px',
            whiteSpace: 'inherit',
          },
        },
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlighterComponent;
