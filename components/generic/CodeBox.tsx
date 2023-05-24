import { useState } from 'react';
import ContentSlider from './ContentSlider';
import Flex from './Flex';
import SyntaxHighlighterComponent from './HighlightSyntax';

interface Props {
  language: 'jsx' | 'javascript' | 'css';
  children: React.ReactNode;
}

const CodeBox = ({ code, language, children, style }: Props): JSX.Element => {
  const [languageIndex, setLanguageIndex] = useState(0);

  const changeLanguage = (index) => {
    setLanguageIndex(index);
  };

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: '#262C35',
        borderRadius: 8,
        ...style,
      }}
    >
      <div
        style={{
          width: '100%',
          paddingTop: 20,
        }}
      >
        <Flex
          style={{
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
      </div>
      <ContentSlider currentIndex={languageIndex}>
        {code.map((item) => (
          <div
            key={item.language}
            style={{
              overflow: 'scroll',
              maxHeight: '600px',
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
