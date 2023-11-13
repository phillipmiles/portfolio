import { toMilliseconds } from '../../../../../utils/time';

export const Example = () => {
  return (
    <div>
      <p>
        There are <strong>{toMilliseconds(1, 'milliseconds')}</strong>{' '}
        millisecond in <strong>1 millisecond.</strong>
      </p>
      <p>
        There are <strong>{toMilliseconds(1, 'seconds')}</strong> milliseconds
        in <strong>1 second.</strong>
      </p>
      <p>
        There are <strong>{toMilliseconds(1, 'minutes')}</strong> milliseconds
        in <strong>1 minute</strong>
      </p>
      <p>
        There are <strong>{toMilliseconds(1, 'hours')}</strong> milliseconds in
        <strong> 1 hour</strong>
      </p>
      <p>
        There are <strong>{toMilliseconds(1, 'days')}</strong> milliseconds in{' '}
        <strong> 1 day</strong>
      </p>
      <p>
        There are <strong>{toMilliseconds(1, 'weeks')}</strong> milliseconds in
        a <strong>1 week</strong>
      </p>
      <p>
        There are <strong>{toMilliseconds(5.5, 'seconds')}</strong> milliseconds
        in <strong>5.5 seconds</strong>
      </p>
      <p>
        There are <strong>{toMilliseconds(0.5, 'seconds')}</strong> milliseconds
        in <strong>0.5 seconds</strong>
      </p>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `There are <strong>{toMilliseconds(1, 'seconds')}</strong> milliseconds
in <strong>1 second.</strong>

There are <strong>{toMilliseconds(1, 'minutes')}</strong> milliseconds
in <strong>1 minute</strong>

There are <strong>{toMilliseconds(1, 'hours')}</strong> milliseconds in
<strong> 1 hour</strong>

There are <strong>{toMilliseconds(1, 'days')}</strong> milliseconds in
<strong> 1 day</strong>

There are <strong>{toMilliseconds(1, 'weeks')}</strong> milliseconds in
a <strong>1 week</strong>

There are <strong>{toMilliseconds(5.5, 'seconds')}</strong> milliseconds
in <strong>5.5 seconds</strong>

There are <strong>{toMilliseconds(0.5, 'seconds')}</strong> milliseconds
in <strong>0.5 seconds</strong>`,
  },
];
