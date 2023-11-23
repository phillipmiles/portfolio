import { useState } from 'react';
import ContentSlider from './ContentSlider';
import Flex from './Flex';
import SyntaxHighlighterComponent from './HighlightSyntax';

interface Props {
  language: 'jsx' | 'javascript' | 'css';
  children: React.ReactNode;
  code: [any];
  style?: { [key: string]: any };
}

const CodeBox = ({ code, language, children, style }: Props): JSX.Element => {
  const [languageIndex, setLanguageIndex] = useState(0);

  const changeLanguage = (index: number) => {
    setLanguageIndex(index);
  };

  return (
    <div
      style={{
        backgroundColor: '#262C35',
        borderRadius: 8,

        ...style,
      }}
    >
      <Flex
        style={{
          paddingTop: 20,
          paddingBottom: 16,
          right: 34,
          borderBottom: '2px solid rgb(236, 244, 250)',
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        {code.map((item, index) => (
          <span
            key={item.language}
            style={{
              top: '8px',
              marginRight: 32,
              color: 'white',
              opacity: index === languageIndex ? 1 : 0.4,
            }}
            onClick={() => changeLanguage(index)}
          >
            {item.language}
          </span>
        ))}
      </Flex>
      <ContentSlider currentIndex={languageIndex}>
        {code.map((item) => (
          <div
            key={item.language}
            style={{
              overflow: 'scroll',
              maxHeight: '680px',
            }}
          >
            <SyntaxHighlighterComponent language={item.language}>
              {item.code}
            </SyntaxHighlighterComponent>
          </div>
        ))}
      </ContentSlider>
    </div>
  );
};

export default CodeBox;
