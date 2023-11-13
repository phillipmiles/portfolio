import { getValueAsPercentage, roundDecimalTo } from '../../../../utils/math';

export const Example = () => {
  return (
    <div>
      <p>{getValueAsPercentage(300, 450, 2)}</p>
      <p>{getValueAsPercentage(0, 450, 2)}</p>
    </div>
  );
};

export const code = [
  {
    language: 'js',
    code: `percentage(300, 450, 2); // 66.67
percentage(0, 450, 2); // 0`,
  },
];
