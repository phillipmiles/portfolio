import StickyContainer from '../../../components/generic/StickyTopBar';

export const Example2 = () => (
  <div style={{ height: '300px' }}>
    <StickyContainer isRetractable={false}>
      <div style={{ padding: '16px', background: 'lightgrey', flexGrow: 1 }}>
        I'm sticky and won't retract.
      </div>
    </StickyContainer>
  </div>
);

export const example2Code = [
  {
    language: 'jsx',
    code: `<StickyContainer isRetractable={false}>
  <div style={{ 
    padding: '16px', 
    background: 'lightgrey', 
    flexGrow: 1 
  }}>
    I'm sticky and won't retract.
  </div>
</StickyContainer>`,
  },
];
