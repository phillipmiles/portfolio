import Image from 'next/image';

const MDXImage = ({
  alt,
  priority,
  src,
  wide,
  float,
  width,
  height,
  aspectRatio = '16 / 9',
}): JSX.Element => {
  const w = `${width}px`;
  const h = `${height}px`;
  console.log(width, height);
  return (
    <div
      className="mdx-content-image"
      style={{
        overflow: 'hidden',
        position: 'relative',
        maxWidth: w,
        margin: 'auto',
        marginTop: '48px',
        marginBottom: '48px',
        aspectRatio: aspectRatio,
        width: '100%',

        ...(wide && {
          maxWidth: '100%',
        }),

        ...(float === 'right' && {
          marginTop: 0,
          // marginBottom: 0,
          float: 'right',
          marginLeft: '48px',
          clear: 'both',
        }),
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
        style={{ objectFit: 'cover' }}
        priority={priority}
      />
      {/* </div> */}
    </div>
  );
};

export default MDXImage;
