import FlexCol from '../../../components/generic/FlexCol';
import FlexColItem from '../../../components/generic/FlexColItem';

const CardExample = ({ children, ...props }) => (
  <div {...props} style={{ marginTop: 16, marginBottom: 16 }}>
    {children}
  </div>
);

// CardExample.propTypes = { children: PropTypes.node };

const ColExample = ({ ...props }) => (
  <FlexColItem
    {...props}
    cols={1}
    style={{
      borderColor: 'rgba(255, 0, 0 ,0.2)',
      borderRightStyle: 'solid',
      borderLeftStyle: 'solid',
      borderWidth: 'thin',
    }}
  >
    <div style={{ background: 'rgba(255, 0 ,0 ,0.12)', flex: 1 }} />
  </FlexColItem>
);

// const DisplayGuides = ({ ...props }) => (
//   <FlexColItem
//     {...props}
//     margin={0}
//     gutter={[3, 4]}
//     style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
//   >
//     <ColExample />
//     <ColExample />
//     <ColExample />
//     <ColExample />
//     <ColExample style={{ display: ['none', 'flex'] }} />
//     <ColExample style={{ display: ['none', 'flex'] }} />
//     <ColExample style={{ display: ['none', 'flex'] }} />
//     <ColExample style={{ display: ['none', 'flex'] }} />
//     <ColExample style={{ display: ['none', 'none', 'flex'] }} />
//     <ColExample style={{ display: ['none', 'none', 'flex'] }} />
//     <ColExample style={{ display: ['none', 'none', 'flex'] }} />
//     <ColExample style={{ display: ['none', 'none', 'flex'] }} />
//   </FlexColItem>
// );

export const FlexColExample = () => (
  <FlexCol
    gutter={24}
    margin={[40, 56]}
    style={{ position: 'relative', paddingTop: 56, paddingBottom: 56 }}
  >
    {/* <DisplayGuides /> */}
    <FlexColItem cols={8}>
      <CardExample style={{ background: 'red' }}>cols = 8</CardExample>
    </FlexColItem>
    <FlexColItem cols={4}>
      <CardExample style={{ background: 'red' }}>cols = 4</CardExample>
    </FlexColItem>
    <FlexColItem cols={4}>
      <CardExample style={{ background: 'red' }}>cols = 4</CardExample>
    </FlexColItem>
    <FlexColItem cols={[2, 8]}>
      <CardExample style={{ background: 'red' }}>cols = [2, 8]</CardExample>
    </FlexColItem>
    <FlexColItem cols={[2, 12]}>
      <CardExample style={{ background: 'red' }}>cols = [2, 12]</CardExample>
    </FlexColItem>
    <FlexColItem cols={[4, 2]}>
      <CardExample style={{ background: 'red' }}>cols = [4, 2]</CardExample>
    </FlexColItem>
    <FlexColItem cols={6}>
      <CardExample style={{ background: 'red' }}>cols = 6</CardExample>
    </FlexColItem>
    <FlexColItem cols={[12, 12, 4, 2]}>
      <CardExample style={{ background: 'red' }}>
        cols = [12, 12, 4, 2]
      </CardExample>
    </FlexColItem>
  </FlexCol>
);

export const flexColCode = [
  {
    language: 'jsx',
    code: `<Page>
  <PageContent style={{ background: 'lime' }}>Content</PageContent>
  <PageFooter style={{ background: 'yellow' }}>Footer</PageFooter>
</Page>`,
  },
];
