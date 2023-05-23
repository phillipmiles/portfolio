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
