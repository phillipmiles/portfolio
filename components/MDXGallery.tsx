import Image from 'next/image';

const MDXGallery = ({
  alt,
  priority,
  images,
  wide,
  float,
  width,
  height,
  aspectRatio = '16 / 9',
}): JSX.Element => {
  const w = `${width}px`;
  const h = `${height}px`;
  return (
    <div
      style={{
        marginTop: '48px',
        marginBottom: '48px',
        display: 'flex',
        flexDirection: 'row',
        height: '540px',
        clear: 'both',
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '6px',
          width: '65%',
          aspectRatio: aspectRatio,
          backgroundColor: '#DDDDDD',
          marginRight: '16px',
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
          src={images[0].src}
          alt={images[0].alt}
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          // width: '35%'
          width: '416px',
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '6px',
            height: '50%',
            marginBottom: '8px',
            flexGrow: 1,
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
            src={images[1].src}
            alt={images[1].alt}
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
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '6px',
            marginTop: '8px',
            height: '50%',
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
            src={images[2].src}
            alt={images[2].alt}
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
      </div>
    </div>
  );
};

export default MDXGallery;
