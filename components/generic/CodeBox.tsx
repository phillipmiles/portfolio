import SyntaxHighlighterComponent from './HighlightSyntax';

interface Props {
  language: 'jsx' | 'javascript';
  children: React.ReactNode;
}

const CodeBox = ({ language, children }: Props): JSX.Element => (
  <div
    style={{
      maxWidth: 728,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 48,
      marginBottom: 48,
      width: '100%',
      position: 'relative',
      backgroundColor: '#262C35',
      borderRadius: 8,
    }}
  >
    <span
      style={{
        position: 'absolute',
        top: '8px',
        right: '32px',
        color: 'white',
      }}
    >
      {language}
    </span>
    <SyntaxHighlighterComponent language={language}>
      {children}
    </SyntaxHighlighterComponent>
  </div>
);

export default CodeBox;
