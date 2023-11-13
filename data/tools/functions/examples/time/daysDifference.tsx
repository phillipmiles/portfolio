import { daysDifference } from '../../../../../utils/time';

export const Example = () => {
  const yesterdaysDate = new Date();
  yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);
  return (
    <div>
      {/* <p>{daysDifference(new Date(), yesterdaysDate)}</p> */}
      <p>
        {yesterdaysDate.getDate()} was today ({new Date().getDate()}) -{' '}
        {daysDifference(yesterdaysDate, new Date())}
      </p>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: ` const yesterdaysDate = new Date();
yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);

return (
  <p>
    {yesterdaysDate.getDate()} was today ({new Date().getDate()}) -{' '}
    {daysDifference(yesterdaysDate, new Date())}
  </p>
);`,
  },
];
