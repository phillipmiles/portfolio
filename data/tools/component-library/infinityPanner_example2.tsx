import s from './infinityPanner.module.css';
import InfinityPanner from '../../../components/generic/InfinityPanner';
import Image from 'next/image';

export const InfinityPannerExample2 = () => {
  const images = [
    '/images/panner/horse-1.jpg',
    '/images/panner/horse-2.jpg',
    '/images/panner/horse-3.jpg',
    '/images/panner/horse-4.jpg',
    '/images/panner/horse-5.jpg',
    '/images/panner/horse-6.jpg',
    '/images/panner/horse-7.jpg',
    '/images/panner/horse-8.jpg',
    '/images/panner/horse-9.jpg',
    '/images/panner/horse-10.jpg',
    '/images/panner/horse-11.jpg',
    '/images/panner/horse-12.jpg',
    '/images/panner/horse-13.jpg',
    '/images/panner/horse-14.jpg',
    '/images/panner/horse-15.jpg',
    '/images/panner/horse-16.jpg',
  ];
  return (
    <div style={{ position: 'relative' }}>
      <InfinityPanner speed="534ms" translateX={-1}>
        {images.map((src) => (
          <div
            style={{
              width: '182px',
              height: '134px',
              flexShrink: 0,
              marginRight: '182px',
              position: 'relative',
            }}
          >
            <Image
              key={src}
              src={src}
              fill
              style={{ objectFit: 'cover' }}
              alt=""
            />
          </div>
        ))}
      </InfinityPanner>
      {/* <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          opacity: 0.9,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ backgroundColor: 'rgb(236, 244, 250)', flexGrow: 1 }} />
        <div style={{ width: '182px' }} />
        <div style={{ backgroundColor: 'rgb(236, 244, 250)', flexGrow: 1 }} />
      </div> */}
    </div>
  );
};

export const InfinityPannerCode2 = [
  {
    language: 'jsx',
    code: ` const images = [
    '/images/panner/horse-1.jpg',
    '/images/panner/horse-2.jpg',
    '/images/panner/horse-3.jpg',
    '/images/panner/horse-4.jpg',
    '/images/panner/horse-5.jpg',
    '/images/panner/horse-6.jpg',
    '/images/panner/horse-7.jpg',
    '/images/panner/horse-8.jpg',
    '/images/panner/horse-9.jpg',
    '/images/panner/horse-10.jpg',
    '/images/panner/horse-11.jpg',
    '/images/panner/horse-12.jpg',
    '/images/panner/horse-13.jpg',
    '/images/panner/horse-14.jpg',
    '/images/panner/horse-15.jpg',
    '/images/panner/horse-16.jpg',
  ];
  return (
    <div style={{ position: 'relative' }}>
      <InfinityPanner speed="534ms" translateX={-1}>
        {images.map((src) => (
          <div
            style={{
              width: '182px',
              height: '134px',
              flexShrink: 0,
              marginRight: '182px',
              position: 'relative',
            }}
          >
            <Image
              key={src}
              src={src}
              fill
              style={{ objectFit: 'cover' }}
              alt=""
            />
          </div>
        ))}
      </InfinityPanner>
    </div>
  );>`,
  },
];
