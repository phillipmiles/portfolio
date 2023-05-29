import DetachedHoverEffect from '../../../components/generic/DetachedHoverEffect';
import Flex from '../../../components/generic/Flex';
import s from './detachedHoverEffect_styles.module.css';

export const Example2 = () => (
  <Flex
    style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
  >
    <DetachedHoverEffect className={s.hoverEffect2}>
      <div className={s.contentStyle2}>Hover over me</div>
    </DetachedHoverEffect>
  </Flex>
);

export const example2Code = [
  {
    language: 'jsx',
    code: `<DetachedHoverEffect className="hoverEffect">
  <div className="contentStyle">
    Hover over me
  </div>
</DetachedHoverEffect>`,
  },
  {
    language: 'css',
    code: `.contentStyle {
  padding: 24px;
}

.hoverEffect::before {
  border-radius: 8px;
  inset: 0 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 30px;
  opacity: 0;
  transition-property: opacity, inset;
  transition-duration: 200ms;
}

.hoverEffect:hover::before {
  opacity: 1;
  inset: -8px -8px;
}`,
  },
];
