import { percentage } from '../../../../../utils/math';

export const Example = () => {
  return (
    <div>
      <p>300 is {percentage(300, 450, 2)}% of 450</p>
      <p>0 is {percentage(0, 450, 2)}% of 450</p>
      <p>2.25 is {percentage(2.25, 5.5, 3)}% of 5.5</p>
    </div>
  );
};

export const code = [
  {
    language: 'tsx',
    code: `<div>
  <p>300 is {percentage(300, 450, 2)}% of 450</p>
  <p>0 is {percentage(0, 450, 2)}% of 450</p>
  <p>2.25 is {percentage(2.25, 5.5, 3)}% of 5.5</p>
</div>`,
  },
];
