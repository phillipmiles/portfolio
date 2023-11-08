import Image from 'next/image';
import s from './MDXImage.module.css';

const MDXImage = ({
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
  return (
    <div
      className={`${s.container} ${s[float]}`}
      style={{
        maxWidth: w,
        ...(wide && {
          maxWidth: '100%',
        }),
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '6px',

          aspectRatio: aspectRatio,
          width: '100%',
          // backgroundColor: '#DDDDDD',
        }}
      >
        {/* <div
        style={{
          height: h,
          overflow: 'hidden',
          position: 'relative',
          // aspectRatio: '1 / 1',
          // height: 'auto',
          // overflow: 'hidden',
          // position: 'relative',
        }}
      > */}
        <Image
          src={src}
          alt={alt}
          // width={width}
          // height={height}
          // width={!wide || float ? width : undefined}
          // height={height}
          fill={true}
          style={{
            objectFit: 'cover',
            ...(!!zoom && { transform: `scale(${zoom})` }),
          }}
          priority={priority}
        />
        {/* </div> */}
      </div>
      {caption && <p className={s.caption}>{caption}</p>}
    </div>
  );
};

export default MDXImage;
