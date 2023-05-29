import Flex from '../../../components/generic/Flex';
import Page from '../../../components/generic/Page';
import PageContentWrap from '../../../components/generic/PageContentWrap';
import s from './pageContentWidth_styles.module.css';

const PageContent = ({ style, children }) => (
  <Flex style={{ flexGrow: 1, flexDirection: 'column', ...style }}>
    {children}
  </Flex>
);

export const PageContentWidthExample = () => (
  <Page>
    {/* <PageContent> */}
    <div style={{ background: 'orange' }}>Normal div</div>
    <PageContentWrap classNameOuter={s.outer} classNameInner={s.inner}>
      A super basic utility component that just replaces a div with display flex
      to a component called Flex. I use flex alot and seeing a Flex component
      when scanning code is just easier for me to read.
    </PageContentWrap>
    <PageContentWrap classNameOuter={s.outer2} classNameInner={s.inner2}>
      A super basic utility component that just replaces a div with display flex
      to a component called Flex. I use flex alot and seeing a Flex component
      when scanning code is just easier for me to read.
    </PageContentWrap>
    {/* </PageContent> */}
  </Page>
);

export const pageContentWidthExampleCode = [
  {
    language: 'jsx',
    code: `<Page style={{ background: 'green' }}>
  <div style={{ background: 'orange' }}>Normal div</div>
  <PageContentWidth classNameOuter={s.outer} classNameInner={s.inner}>
    A super basic utility component that just replaces a div with display flex
    to a component called Flex. I use flex alot and seeing a Flex component
    when scanning code is just easier for me to read.
  </PageContentWidth>
  <PageContentWidth classNameOuter={s.outer2} classNameInner={s.inner2}>
    A super basic utility component that just replaces a div with display flex
    to a component called Flex. I use flex alot and seeing a Flex component
    when scanning code is just easier for me to read.
  </PageContentWidth>
</Page>`,
  },
  {
    language: 'css',
    code: `.outer {
  padding-left: 24px;
  padding-right: 24px;
  background: teal;
}

.inner {
  max-width: 300px;
}

.outer2 {
  padding-left: 24px;
  padding-right: 24px;
  background: lightblue;
}

.inner2 {
  max-width: 100%;
}
`,
  },
];
