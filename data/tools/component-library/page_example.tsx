import Flex from '../../../components/generic/Flex';
import Page from '../../../components/generic/Page';

const PageContent = ({ style, children }) => (
  <Flex style={{ flexGrow: 1, flexDirection: 'column', ...style }}>
    {children}
  </Flex>
);

const PageFooter = ({ style, children }) => <div style={style}>{children}</div>;

export const Example = () => (
  <Page>
    <PageContent style={{ background: 'lime' }}>Content</PageContent>
    <PageFooter style={{ background: 'yellow' }}>Footer</PageFooter>
  </Page>
);

export const exampleCode = [
  {
    language: 'jsx',
    code: `<Page>
  <PageContent style={{ background: 'lime' }}>Content</PageContent>
  <PageFooter style={{ background: 'yellow' }}>Footer</PageFooter>
</Page>`,
  },
];
