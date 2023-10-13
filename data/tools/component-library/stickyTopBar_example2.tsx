import StickyTopBar from '../../../components/generic/StickyTopBar';

export const Example2 = () => (
  <div style={{ height: '300px' }}>
    <StickyTopBar isRetractable={false}>
      <div style={{ padding: '16px', background: 'lightgrey', flexGrow: 1 }}>
        I'm sticky but won't retract.
      </div>
    </StickyTopBar>
  </div>
);

export const example2Code = [
  {
    language: 'jsx',
    code: `<StickyTopBar isRetractable={false}>
  <div style={{ 
    padding: '16px', 
    background: 'lightgrey', 
    flexGrow: 1 
  }}>
    I'm sticky but won't retract.
  </div>
</StickyTopBar>`,
  },
];
