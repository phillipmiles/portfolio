import { roundDecimalTo } from '../../../../utils/math';

export const Example = () => {
  return (
    <div>
      <p>{roundDecimalTo(0.373, 1)}</p>
      <p>{roundDecimalTo(1.373, 1)}</p>
      <p>{roundDecimalTo(4.22, 2)}</p>
      <p>{roundDecimalTo(4.5216, 0)}</p>
      <p>{roundDecimalTo(-4.5216, 3)}</p>
      <p>{roundDecimalTo(-4.25, 1)}</p>
    </div>
  );
};

export const code = [
  {
    language: 'js',
    code: `<div>
  <p>{roundDecimalTo(0.373, 1)}</p>
  <p>{roundDecimalTo(1.373, 1)}</p>
  <p>{roundDecimalTo(4.22, 2)}</p>
  <p>{roundDecimalTo(4.5216, 0)}</p>
  <p>{roundDecimalTo(-4.5216, 3)}</p>
  <p>{roundDecimalTo(-4.25, 1)}</p>
</div>`,
  },
];
