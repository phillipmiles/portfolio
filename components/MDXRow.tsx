import s from './MDXInstagramEmbed.module.css';
import { useEffect } from 'react';

const MDXInstagramEmbed = ({
  alt,
  priority,
  src,
  wide,
  float,
  width,
  height,
  zoom,
  aspectRatio = '16 / 9',
  caption,
  children,
}): JSX.Element => {
  const w = `${width}px`;

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: w,
        width: '100%',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default MDXInstagramEmbed;
