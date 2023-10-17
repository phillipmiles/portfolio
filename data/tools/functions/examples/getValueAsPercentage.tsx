import { getValueAsPercentage, roundDecimalTo } from '../../../../utils/math';

export const Example = () => {
  return <p>{getValueAsPercentage(300, 450, 2)}</p>;
};

export const code = [
  {
    language: 'js',
    code: `getValueAsPercentage(300, 450, 2);`,
  },
];
