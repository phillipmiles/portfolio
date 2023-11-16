import Image from 'next/image';
import Link from 'next/link';
import s from './ProjectCardImage.module.css';

const ProjectCardImage = ({ slug, url, src, className, style, ...props }) => {
  return (
    <div className={`${s.imageWrap} ${className}`} style={style} {...props}>
      <Link href={url} className={s.imageContainer}>
        <Image src={src} fill={true} alt="" className={s.image} />
      </Link>
    </div>
  );
};

export default ProjectCardImage;
