import NumberAnimate from '../../../components/generic/NumberAnimate';

export const Example = () => {
  return <NumberAnimate startNumber={0} endNumber={100} duration={4000} />;
};

export const exampleCode = [
  {
    language: 'jsx',
    code: `<NumberAnimate startNumber={0} endNumber={100} duration={4000} />`,
  },
];
