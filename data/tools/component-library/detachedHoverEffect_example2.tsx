import Flex from '../../../components/generic/Flex';
import HoverRevealEffect from '../../../components/generic/HoverRevealEffect';
import s from './hoverEffect_example_css.module.css';

export const Example2 = () => (
  <HoverRevealEffect className={s.hoverEffect2}>
    <div className={s.contentStyle2}>Hover over me</div>
  </HoverRevealEffect>
);

export const example2Code = [
  {
    language: 'jsx',
    code: `<HoverRevealEffect className="hoverEffect">
  <div className="contentStyle">
    Hello
  </div>
</HoverRevealEffect>`,
  },
  {
    language: 'css',
    code: `.hoverEffect {

}`,
  },
];
