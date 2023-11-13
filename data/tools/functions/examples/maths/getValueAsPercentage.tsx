import {
  getValueAsPercentage,
  roundDecimalTo,
} from '../../../../../utils/math';

export const Example = () => {
  return (
    <div>
      <p>300 is {getValueAsPercentage(300, 450, 2)}% of 450</p>
      <p>0 is {getValueAsPercentage(0, 450, 2)}% of 450</p>
      <p>2.25 is {getValueAsPercentage(2.25, 5.5, 3)}% of 5.5</p>
    </div>
  );
};

export const code = [
  {
    language: 'tsx',
    code: `<div>
  <p>300 is {getValueAsPercentage(300, 450, 2)}% of 450</p>
  <p>0 is {getValueAsPercentage(0, 450, 2)}% of 450</p>
  <p>2.25 is {getValueAsPercentage(2.25, 5.5, 3)}% of 5.5</p>
</div>`,
  },
];
