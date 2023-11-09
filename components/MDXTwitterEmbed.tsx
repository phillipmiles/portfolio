import Image from 'next/image';
import s from './MDXImage.module.css';
import { useEffect } from 'react';

const MDXTwitterEmbed = ({
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
}): JSX.Element => {
  const w = `${width}px`;
  const h = `${height}px`;

  useEffect(() => {
    const script = document.createElement('script');

    script.src = src;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '48px auto',

        width: '100%',
        maxWidth: w,

        ...(float === 'right' && {
          marginTop: 0,
          // marginBottom: 0,
          float: 'right',
          marginLeft: '48px',
          clear: 'both',
        }),
      }}
    >
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Thoughts? 🧐{' '}
          <a href="https://t.co/AFZ3dF7pUC">https://t.co/AFZ3dF7pUC</a>
        </p>
        &mdash; NZXT (@NZXT){' '}
        <a href="https://twitter.com/NZXT/status/1555168124999151616?ref_src=twsrc%5Etfw">
          August 4, 2022
        </a>
      </blockquote>{' '}
    </div>
  );
};

export default MDXTwitterEmbed;
