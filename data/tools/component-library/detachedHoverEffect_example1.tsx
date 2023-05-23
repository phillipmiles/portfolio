import Flex from '../../../components/generic/Flex';
import HoverRevealEffect from '../../../components/generic/HoverRevealEffect';
import s from './hoverEffect_example_css.module.css';

export const Example1 = () => (
  <HoverRevealEffect className={s.hoverEffect1}>
    <div className={s.contentStyle1}>Hover over me</div>
  </HoverRevealEffect>
);

export const example1Code = [
  {
    language: 'jsx',
    code: `<DetachedHoverEffect className="hoverEffect">
  <div className="contentStyle">
    Hello
  </div>
</DetachedHoverEffect>`,
  },
  {
    language: 'css',
    code: `.contentStyle {
  background-color: black;
  color: white;
  padding: 24px;
}

.hoverEffect::before {
  inset: 0 0;
  border: 2px solid black;
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
