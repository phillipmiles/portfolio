import { roundDecimalTo } from '../../../../../utils/math';

export const Example = () => {
  return (
    <div>
      <p>0.373 rounded to 1 decimal place is {roundDecimalTo(0.373, 1)}</p>
      <p>1.373 rounded to 1 decimal place is {roundDecimalTo(1.373, 1)}</p>
      <p>4.22 rounded to 2 decimal places is {roundDecimalTo(4.22, 2)}</p>
      <p>4.5216 rounded to 0 decimal places is {roundDecimalTo(4.5216, 0)}</p>
      <p>-4.5216 rounded to 3 decimal places is {roundDecimalTo(-4.5216, 3)}</p>
      <p>-4.25 rounded to 1 decimal place is {roundDecimalTo(-4.25, 1)}</p>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `<div>
  <p>0.373 rounded to 1 decimal place is {roundDecimalTo(0.373, 1)}</p>
  <p>1.373 rounded to 1 decimal place is {roundDecimalTo(1.373, 1)}</p>
  <p>4.22 rounded to 2 decimal places is {roundDecimalTo(4.22, 2)}</p>
  <p>4.5216 rounded to 0 decimal places is {roundDecimalTo(4.5216, 0)}</p>
  <p>-4.5216 rounded to 3 decimal places is {roundDecimalTo(-4.5216, 3)}</p>
  <p>-4.25 rounded to 1 decimal place is {roundDecimalTo(-4.25, 1)}</p>
</div>`,
  },
];
