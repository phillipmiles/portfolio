import { isoDateStringToLabel } from '../../../../../utils/time';

export const Example = () => {
  const yesterdaysDate = new Date();
  yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);
  return (
    <div>
      <p>{isoDateStringToLabel(23503247523423)}</p>
      <p>{isoDateStringToLabel(new Date())}</p>
      <p>{isoDateStringToLabel(yesterdaysDate)}</p>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `isoDateStringToLabel(23503247523423);

const todaysDate = new Date();
isoDateStringToLabel(todaysDate);

const yesterdaysDate = new Date();
yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);

isoDateStringToLabel(yesterdaysDate);`,
  },
];
