import Image from 'next/image';
import Link from 'next/link';
import s from './ProjectCardImage.module.css';

const ProjectCardImage = ({ slug, url, src, className, style, ...props }) => {
  return (
    <div className={s.imageWrap} style={style} {...props}>
      <Link href={url} className={s.imageContainer}>
        <Image
          src={src}
          fill={true}
          alt=""
          className={s.image}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </Link>
    </div>
  );
};

export default ProjectCardImage;
