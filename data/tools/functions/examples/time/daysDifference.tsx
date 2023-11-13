import { daysDifference } from '../../../../../utils/time';

export const Example = () => {
  const yesterdaysDate = new Date();
  yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);

  const tomorrowsDate = new Date();
  tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);

  const someDate = new Date('August 19, 2015 23:15:30');

  return (
    <div>
      <p>
        {yesterdaysDate.toDateString()} was today{' '}
        {daysDifference(new Date(), yesterdaysDate)} day
      </p>
      <p>
        {tomorrowsDate.toDateString()} was today +
        {daysDifference(new Date(), tomorrowsDate)} day
      </p>
      <p>
        {someDate.toDateString()} was today{' '}
        {daysDifference(new Date(), someDate)} days
      </p>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const yesterdaysDate = new Date();
yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);

const tomorrowsDate = new Date();
tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);

const someDate = new Date('August 19, 2015 23:15:30');

return (
  <div>
    <p>
      {yesterdaysDate.toDateString()} was today{' '}
      {daysDifference(new Date(), yesterdaysDate)} day
    </p>
    <p>
      {tomorrowsDate.toDateString()} was today +
      {daysDifference(new Date(), tomorrowsDate)} day
    </p>
    <p>
      {someDate.toDateString()} was today{' '}
      {daysDifference(new Date(), someDate)} days
    </p>
  </div>
);`,
  },
];
