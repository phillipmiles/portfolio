import Image from 'next/image';

const MDXImage = ({ alt, priority, src }): JSX.Element => (
  <div
    style={{
      height: '512px',
      overflow: 'hidden',
      position: 'relative',
      marginBottom: '96px',
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill={true}
      style={{ objectFit: 'cover' }}
      priority={priority}
    />
  </div>
);

export default MDXImage;
