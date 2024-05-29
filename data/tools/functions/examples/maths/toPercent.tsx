import { toPercent } from '../../../../../utils/math';

export const Example = () => {
  return (
    <div>
      <p>300 is {toPercent(300, 450, 2)}% of 450</p>
      <p>0 is {toPercent(0, 450, 2)}% of 450</p>
      <p>2.25 is {toPercent(2.25, 5.5, 3)}% of 5.5</p>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `<div>
  <p>300 is {toPercent(300, 450, 2)}% of 450</p>
  <p>0 is {toPercent(0, 450, 2)}% of 450</p>
  <p>2.25 is {toPercent(2.25, 5.5, 3)}% of 5.5</p>
</div>`,
  },
];
