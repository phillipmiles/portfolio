import Flex from './generic/Flex';
import s from './DevGraphic.module.css';

interface CodeSegmentProps {
  color?: string;
  className?: string;
  children?: React.ReactNode;
  style?: { [key: string]: any };
}

const colors: { [key: string]: any } = {
  grey: {
    background: 'rgb(152, 163, 178)',
  },
  blue: {
    background: 'rgb(0, 123, 228)',
  },
  lightBlue: {
    background: 'rgb(89, 179, 255)',
  },
  yellow: {
    background: 'rgb(255, 199, 0)',
  },
  green: {
    background: 'rgb(0, 183, 105)',
  },
  pink: {
    background: 'rgb(244, 121, 255)',
  },
};

const CodeSegment = ({
  color,
  className,
  style,
  children,
}: CodeSegmentProps) => (
  <div
    className={`${s.codeSegment} ${className}`}
    style={{
      ...style,
    }}
  >
    <div
      className={s.codeSegmentInner}
      style={{
        ...(color ? colors[color] : colors.grey),
      }}
    >
      {children}
    </div>
  </div>
);

const CodeLine = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => <Flex className={className}>{children}</Flex>;

const Cursor = ({ className }: { className?: string }) => (
  <div className={`${s.cursor} ${className}`}>
    <div />
  </div>
);

const CodeBlock = ({ children }: { children?: React.ReactNode }) => (
  <div className={s.codeBlock}>{children}</div>
);

const DevGraphic = (): JSX.Element => {
  return (
    <div>
      <CodeBlock>
        <CodeLine>
          <CodeSegment style={{ width: '20%' }} />
        </CodeLine>

        <CodeBlock>
          <CodeLine>
            <CodeSegment style={{ width: '15%' }} />
            <CodeSegment color="yellow" style={{ width: '30%' }} />
            <CodeSegment style={{ width: '60%' }} />
            <CodeSegment style={{ width: '50%' }} />
          </CodeLine>
          <CodeBlock>
            <CodeLine>
              <CodeSegment color="pink" style={{ width: '30%' }} />
              <CodeSegment style={{ width: '50%' }} />
            </CodeLine>
            <CodeBlock>
              <CodeLine>
                <CodeSegment style={{ width: '35%' }} />
                <CodeSegment color="blue" style={{ width: '20%' }} />
              </CodeLine>
              <CodeLine>
                <CodeSegment color="blue" style={{ width: '20%' }} />
              </CodeLine>
              <CodeLine>
                <CodeSegment style={{ width: '35%' }} />
              </CodeLine>
              <CodeLine>
                <CodeSegment style={{ width: '20%' }} />
                <CodeSegment color="lightBlue" style={{ width: '20%' }} />
              </CodeLine>
              <CodeBlock>
                <CodeLine>
                  <CodeSegment color="blue" style={{ width: '20%' }} />
                  <CodeSegment style={{ width: '40%' }} />
                </CodeLine>
                <CodeLine>
                  <CodeSegment color="green" style={{ width: '80%' }} />
                </CodeLine>
                <CodeLine className={`${s.animated} ${s.firstLine}`}>
                  <CodeSegment style={{ width: '10%' }} />
                  <CodeSegment
                    className={`${s.animated} ${s.first}`}
                    color="yellow"
                    style={{ width: '40%' }}
                  >
                    <Cursor className={`${s.animated} ${s.cursorFirst}`} />
                  </CodeSegment>
                </CodeLine>
              </CodeBlock>
              <CodeLine className={`${s.animated} ${s.secondLine}`}>
                <CodeSegment
                  className={`${s.animated} ${s.second}`}
                  style={{ width: '20%' }}
                >
                  <Cursor className={`${s.animated} ${s.cursorSecond}`} />
                </CodeSegment>
              </CodeLine>
              <CodeLine className={`${s.animated} ${s.thirdLine}`}>
                <CodeSegment
                  className={`${s.animated} ${s.third}`}
                  style={{ width: '15%' }}
                >
                  <Cursor className={`${s.animated} ${s.cursorThird}`} />
                </CodeSegment>
                <CodeSegment
                  className={`${s.animated} ${s.fourth}`}
                  color="yellow"
                  style={{ width: '20%' }}
                >
                  <Cursor className={`${s.animated} ${s.cursorFourth}`} />
                </CodeSegment>
              </CodeLine>
            </CodeBlock>
            <CodeLine>
              <CodeSegment color="blue" style={{ width: '15%' }} />
            </CodeLine>
            <CodeBlock>
              <CodeLine>
                <CodeSegment color="pink" style={{ width: '15%' }} />
                <CodeSegment style={{ width: '20%' }} />
                <CodeSegment color="lightBlue" style={{ width: '20%' }} />
              </CodeLine>
            </CodeBlock>
            <CodeLine>
              <CodeSegment color="blue" style={{ width: '25%' }} />
            </CodeLine>
          </CodeBlock>
          <CodeLine>
            <CodeSegment style={{ width: '10%' }} />
          </CodeLine>
        </CodeBlock>
        <CodeLine>
          <CodeSegment style={{ width: '25%' }} />
        </CodeLine>
      </CodeBlock>
    </div>
  );
};

export default DevGraphic;
