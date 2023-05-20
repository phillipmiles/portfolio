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
        marginLeft: 24,
        marginRight: 24,
        width: '33%',
        // ':hover': {
        //   boxShadow: (theme) => `0 0px 0px 4px ${theme.colors.primaryLight}`,
        // },
      }}
    >
      <h5>{title}</h5>
      <p style={{ marginBottom: 24 }}>{description}</p>
      <div style={{ position: 'relative', height: 200 }}>
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
    </Link>
  );
};

export default ToolCard;
