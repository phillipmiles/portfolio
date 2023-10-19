import Image from 'next/image';

const MDXVideo = ({
  alt,
  priority,
  src,
  wide,
  float,
  width,
  height,
  aspectRatio = '16 / 9',
  caption,
  videoStyle,
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
        height: h,
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
          borderRadius: '6px',
          aspectRatio: aspectRatio,
          width: '100%',
          height: '100%',
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
        {/* <video
          src={src}
          alt={alt}
          // width={width}
          // height={height}
          // width={!wide || float ? width : undefined}
          // height={height}
          fill={true}
          style={{ objectFit: 'cover' }}
          priority={priority}
        /> */}
        {/* <iframe width="420" height="315" src={src}></iframe> */}
        <video
          loop
          muted
          autoPlay
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateY(-50%) translateX(-50%)',
            ...videoStyle,
          }}
        >
          <source src="/video/cpa_video_1.mp4" type="audio/mp4" />
        </video>
        {/* </div> */}
      </div>
      {caption && (
        <p
          style={{
            color: '#465973',
            fontSize: '15px',
            maxWidth: 'none',
            width: '100%',
            paddingTop: '8px',
            paddingBottom: '8px',
            borderBottom: '1px solid #98a3b2',
            margin: 0,
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
};

export default MDXVideo;
