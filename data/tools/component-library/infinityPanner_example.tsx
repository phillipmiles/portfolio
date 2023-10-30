import s from './infinityPanner.module.css';
import InfinityPanner from '../../../components/generic/InfinityPanner';

export const InfinityPannerExample = () => {
  return (
    <InfinityPanner speed="6000ms" translateX={1}>
      <div style={{ width: '140px', flexShrink: 0 }}>Apple</div>
      <div style={{ width: '140px', flexShrink: 0 }}>Banner</div>
      <div style={{ width: '140px', flexShrink: 0 }}>Carrot</div>
      <div style={{ width: '140px', flexShrink: 0 }}>Duck</div>
      <div style={{ width: '140px', flexShrink: 0 }}>Sandwich</div>
      <div style={{ width: '140px', flexShrink: 0 }}>Purple</div>
    </InfinityPanner>
  );
};

export const InfinityPannerCode = [
  {
    language: 'jsx',
    code: ` <InfinityPanner speed="3000ms" translateX={1}>
  <div style={{ width: '140px', flexShrink: 0 }}>Apple</div>
  <div style={{ width: '140px', flexShrink: 0 }}>Banner</div>
  <div style={{ width: '140px', flexShrink: 0 }}>Carrot</div>
  <div style={{ width: '140px', flexShrink: 0 }}>Duck</div>
  <div style={{ width: '140px', flexShrink: 0 }}>Sandwich</div>
  <div style={{ width: '140px', flexShrink: 0 }}>Purple</div>
</InfinityPanner>`,
  },
];
