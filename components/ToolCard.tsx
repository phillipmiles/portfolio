import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { relative } from 'path';
import Button from './generic/Button';
// import { getPlatformIcon } from '../resolvers/platforms';
import Flex from './generic/Flex';
import s from './ToolCard.module.css';

const ToolCard = ({
  title,
  url,
  href,
  description,
  srcThumb,
  platforms,
  stack,
  style,
  className,
  ...props
}) => {
  // const platformIcons = platforms.map((platform) => ({
  //   id: 'platform',
  //   icon: getPlatformIcon(platform),
  // }));

  return (
    <Link href={href} className={`${s.box} ${className}`}>
      <div style={{ position: 'relative', height: 120, marginBottom: '24px' }}>
        <Image
          src={srcThumb}
          // height={200}
          // width={200}
          alt=""
          fill={true}
          style={{
            objectFit: 'contain',
            // transform: 'scale(1)',
            // transition: 'transform 200ms',
            width: '100%',
            height: '100%',
            // ':hover': { transform: 'scale(1.025)' },
          }}
          // fill
        />
      </div>
      <h2 className="h4" style={{ textAlign: 'center' }}>
        {title}
      </h2>
      <p>{description}</p>
    </Link>
  );
};

export default ToolCard;
