import { roundDecimalTo } from '../../../../utils/math';

export const Example = () => {
  return (
    <div>
      <p>{roundDecimalTo(0.373, 1)}</p>
      <p>{roundDecimalTo(1.373, 1)}</p>
      <p>{roundDecimalTo(4.22, 2)}</p>
      <p>{roundDecimalTo(4.5216, 0)}</p>
    </div>
  );
};

export const code = [
  {
    language: 'js',
    code: `roundDecimalTo(0.373, 1);
roundDecimalTo(4.5216, 3);
roundDecimalTo(4.5216, 0);`,
  },
];
