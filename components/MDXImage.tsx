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
  caption,
}): JSX.Element => {
  const w = `${width}px`;
  const h = `${height}px`;
  return (
    <div
      style={{
        margin: 'auto',
        marginTop: '48px',
        marginBottom: '48px',
        width: '100%',
        maxWidth: w,
        textAlign: 'left',

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
      <div
        style={{
          overflow: 'hidden',
          position: 'relative',

          aspectRatio: aspectRatio,
          width: '100%',
          backgroundColor: '#DDDDDD',
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
      {caption && (
        <p
          style={{
            color: '#98A3B2',
            fontSize: '15px',
            maxWidth: 'none',
            width: '100%',
            paddingTop: '8px',
            paddingBottom: '8px',
            borderBottom: '1px solid #D4DBE6',
            margin: 0,
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
};

export default MDXImage;
