import DetachedHoverEffect from '../../../components/generic/DetachedHoverEffect';
import Flex from '../../../components/generic/Flex';
import s from './detachedHoverEffect_styles.module.css';

export const Example3 = () => (
  <Flex
    style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
  >
    <DetachedHoverEffect className={s.hoverEffect3}>
      <div className={s.contentStyle3}>Hover over me</div>
    </DetachedHoverEffect>
  </Flex>
);

export const example3Code = [
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
  padding: 8px;
}

.hoverEffect::before {
  opacity: 0;
  top: auto;
  bottom: 0;
  height: 2px;
  background-color: black;
  transform: scaleX(0%);
  transition-property: opacity, transform;
  transition-duration: 200ms;
}

.hoverEffect:hover::before {
  opacity: 1;
  transform: scaleX(100%);
}
`,
  },
];
