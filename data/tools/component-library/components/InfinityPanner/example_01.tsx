import InfinityPanner from '../../../../../components/generic/InfinityPanner';
import s from './example_01.module.css';

export const Example = () => {
  return (
    <InfinityPanner speed="6000ms" translateX={-1}>
      <div className={s.item}>Apple</div>
      <div className={s.item}>Banner</div>
      <div className={s.item}>Carrot</div>
      <div className={s.item}>Duck</div>
      <div className={s.item}>Sandwich</div>
      <div className={s.item}>Purple</div>
    </InfinityPanner>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `<InfinityPanner speed="6000ms" translateX={-1}>
  <div className="item">Apple</div>
  <div className="item">Banner</div>
  <div className="item">Carrot</div>
  <div className="item">Duck</div>
  <div className="item">Sandwich</div>
  <div className="item">Purple</div>
</InfinityPanner>`,
  },
  {
    language: 'css',
    code: `.item {
  flex-shrink: 0;
  padding: 16px 24px;
  background-color: rgba(255, 255, 255, 0.5);
}

.item:nth-child(2n) {
  background-color: #fff;
}`,
  },
];
