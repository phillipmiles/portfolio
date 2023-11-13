import { toMinutes } from '../../../../../utils/time';

export const Example = () => {
  return (
    <div>
      <p>
        There are <strong>{toMinutes(1, 'milliseconds')}</strong> minutes in{' '}
        <strong>1 milliseconds.</strong>
      </p>
      <p>
        There are <strong>{toMinutes(1, 'seconds')}</strong> minutes in{' '}
        <strong>1 second.</strong>
      </p>
      <p>
        There are <strong>{toMinutes(1, 'minutes')}</strong> minutes in{' '}
        <strong>1 minute</strong>
      </p>
      <p>
        There are <strong>{toMinutes(1, 'hours')}</strong> minutes in{' '}
        <strong> 1 hour</strong>
      </p>
      <p>
        There are <strong>{toMinutes(1, 'days')}</strong> minutes in{' '}
        <strong> 1 day</strong>
      </p>
      <p>
        There are <strong>{toMinutes(1, 'weeks')}</strong> minutes in a{' '}
        <strong>1 week</strong>
      </p>
      <p>
        There are <strong>{toMinutes(5.5, 'hours')}</strong> minutes in{' '}
        <strong>5.5 hours</strong>
      </p>
      <p>
        There are <strong>{toMinutes(0.5, 'hours')}</strong> minutes in{' '}
        <strong>0.5 hours</strong>
      </p>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `There are <strong>{toMinutes(1, 'milliseconds')}</strong> minutes in
<strong>1 milliseconds.</strong>

There are <strong>{toMinutes(1, 'seconds')}</strong> minutes in
<strong>1 second.</strong>

There are <strong>{toMinutes(1, 'minutes')}</strong> minutes in
<strong>1 minute</strong>

There are <strong>{toMinutes(1, 'hours')}</strong> minutes in
<strong> 1 hour</strong>

There are <strong>{toMinutes(1, 'days')}</strong> minutes in
<strong> 1 day</strong>

There are <strong>{toMinutes(1, 'weeks')}</strong> minutes in a
<strong>1 week</strong>

There are <strong>{toMinutes(5.5, 'hours')}</strong> minutes in
<strong>5.5 hours</strong>

There are <strong>{toMinutes(0.5, 'hours')}</strong> minutes in
<strong>0.5 hours</strong>`,
  },
];
