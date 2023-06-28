import StickyTopBar from '../../../components/generic/StickyTopBar';

export const Example = () => (
  <div style={{ height: '600px', position: 'relative' }}>
    <StickyTopBar>
      <div style={{ height: '56px', background: 'lightgrey', flexGrow: 1 }}>
        I'm sticky
      </div>
    </StickyTopBar>
  </div>
);

export const exampleCode = [
  {
    language: 'jsx',
    code: `<StickyTopBar>
  <div style={{ 
    height: '56px', 
    background: 'lightgrey', 
    flexGrow: 1 
  }}>
    I'm sticky
  </div>
</StickyTopBar>`,
  },
];
