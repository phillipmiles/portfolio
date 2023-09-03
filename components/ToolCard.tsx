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
  ...props
}) => {
  // const platformIcons = platforms.map((platform) => ({
  //   id: 'platform',
  //   icon: getPlatformIcon(platform),
  // }));

  return (
    <Link
      href={href}
      className={s.box}
      style={{
        backgroundColor: 'white',
        borderRadius: '6px',
        padding: 24,
        marginLeft: '16px',
        marginRight: '16px',
        width: '33%',
        // ':hover': {
        //   boxShadow: (theme) => `0 0px 0px 4px ${theme.colors.primaryLight}`,
        // },
      }}
    >
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
      <h5 style={{ textAlign: 'center' }}>{title}</h5>
      <p>{description}</p>
    </Link>
  );
};

export default ToolCard;
