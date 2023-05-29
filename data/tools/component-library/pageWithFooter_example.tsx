import Page from '../../../components/generic/Page';
import PageWithFooter from '../../../components/generic/PageWithFooter';

export const Example = () => (
  <PageWithFooter>
    <div style={{ background: 'darkred', flexGrow: 1 }}>Content</div>
    <div style={{ background: 'green' }}>Footer</div>
  </PageWithFooter>
);

export const exampleCode = [
  {
    language: 'jsx',
    code: `<PageWithFooter>
  <div style={{ background: 'darkred', flexGrow: 1 }}>Content</div>
  <div style={{ background: 'green' }}>Footer</div>
</PageWithFooter>`,
  },
];
