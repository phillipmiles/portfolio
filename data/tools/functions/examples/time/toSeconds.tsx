import { toSeconds } from '../../../../../utils/time';

export const Example = () => {
  return (
    <div>
      <p>
        There are <strong>{toSeconds(1, 'milliseconds')}</strong> second in{' '}
        <strong>1 milliseconds.</strong>
      </p>
      <p>
        There are <strong>{toSeconds(1, 'seconds')}</strong> second in{' '}
        <strong>1 second.</strong>
      </p>
      <p>
        There are <strong>{toSeconds(1, 'minutes')}</strong> seconds in{' '}
        <strong>1 minute</strong>
      </p>
      <p>
        There are <strong>{toSeconds(1, 'hours')}</strong> seconds in
        <strong> 1 hour</strong>
      </p>
      <p>
        There are <strong>{toSeconds(1, 'days')}</strong> seconds in
        <strong> 1 day</strong>
      </p>
      <p>
        There are <strong>{toSeconds(1, 'weeks')}</strong> seconds in a{' '}
        <strong>1 week</strong>
      </p>
      <p>
        There are <strong>{toSeconds(2, 'hours')}</strong> seconds in{' '}
        <strong>2 hours</strong>
      </p>
      <p>
        There are <strong>{toSeconds(0.5, 'hours')}</strong> seconds in{' '}
        <strong>0.5 hours</strong>
      </p>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `<p>
  There are <strong>{toSeconds(1, 'milliseconds')}</strong> milliseconds
  in <strong>1 second.</strong>
</p>
<p>
  There are <strong>{toSeconds(1, 'seconds')}</strong> seconds
  in <strong>1 seconds</strong>
</p>
<p>
  There are <strong>{toSeconds(1, 'minutes')}</strong> minutes
  in <strong>1 minute</strong>
</p>
<p>
  There are <strong>{toSeconds(1, 'hours')}</strong> hours in
  <strong> 1 hour</strong>
</p>
<p>
  There are <strong>{toSeconds(1, 'days')}</strong> days in
  <strong> 1 day</strong>
</p>
<p>
  There are <strong>{toSeconds(1, 'weeks')}</strong> weeks in
  a <strong>1 week</strong>
</p>
<p>
  There are <strong>{toSeconds(2, 'hours')}</strong> hours
  in <strong>5.5 seconds</strong>
</p>
<p>
  There are <strong>{toSeconds(0.5, 'hours')}</strong> hours
  in <strong>0.5 seconds</strong>
</p>
`,
  },
];
