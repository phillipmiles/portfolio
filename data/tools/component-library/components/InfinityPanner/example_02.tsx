import InfinityPanner from '../../../../../components/generic/InfinityPanner';

export const Example = () => {
  return (
    <InfinityPanner speed="6000ms" translateX={1}>
      <div style={{ width: '50px', flexShrink: 0, backgroundColor: '#DDD' }}>
        Apple
      </div>
      <div style={{ width: '150px', flexShrink: 0, backgroundColor: '#EEE' }}>
        Banner
      </div>
      <div style={{ width: '100px', flexShrink: 0, backgroundColor: '#DDD' }}>
        Carrot
      </div>
      <div style={{ width: '100px', flexShrink: 0, backgroundColor: '#EEE' }}>
        Duck
      </div>
      <div style={{ width: '100px', flexShrink: 0, backgroundColor: '#DDD' }}>
        Sandwich
      </div>
      <div style={{ width: '100px', flexShrink: 0, backgroundColor: '#EEE' }}>
        Purple
      </div>
    </InfinityPanner>
  );
};

export const code = [
  {
    language: 'jsx',
    code: ` <InfinityPanner speed="6000ms" translateX={1}>
  <div style={{ width: '30px', flexShrink: 0 }}>Apple</div>
  <div style={{ width: '340px', flexShrink: 0 }}>Banner</div>
  <div style={{ width: '140px', flexShrink: 0 }}>Carrot</div>
  <div style={{ width: '140px', flexShrink: 0 }}>Duck</div>
  <div style={{ width: '140px', flexShrink: 0 }}>Sandwich</div>
  <div style={{ width: '140px', flexShrink: 0 }}>Purple</div>
</InfinityPanner>`,
  },
];
