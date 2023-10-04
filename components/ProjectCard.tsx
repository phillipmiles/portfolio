import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { relative } from 'path';
import Button from './generic/Button';
// import { getPlatformIcon } from '../resolvers/platforms';
import Flex from './generic/Flex';
import s from './ProjectCard.module.css';

const ProjectCard = ({
  title,
  url,
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
    <Flex
      style={{
        background: 'white',
        borderRadius: '6px',
        overflow: 'hidden',
        // width: '100%',
        height: 600,
        ...style,
      }}
      {...props}
    >
      <Flex
        style={{
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 40,
          paddingRight: 40,
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '40%',
        }}
      >
        <div>
          {/* <Flex style={{ mb: 3 }}>
            {platformIcons.map((platform) => (
              <Flex
                key={platform.id}
                style={{
                  bg: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 60,
                  width: '40px',
                  height: '40px',
                  mr: 4,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'primary',
                }}
              >
                <FontAwesomeIcon
                  icon={platform.icon}
                  sx={{
                    color: 'primary',
                    width: '20px !important',
                    height: '20px',
                  }}
                />
              </Flex>
            ))}
          </Flex> */}
          <h5>{title}</h5>
          <p>{description}</p>
          {/* <Flex style={{ mb: 4 }}>
            {stack.map((item) => (
              <p
                key={item}
                variant="detail"
                sx={{ color: 'neutral.7', mr: 4 }}
              >
                {item}
              </Text>
            ))}
          </Flex> */}
        </div>
        <Button href="/" style={{ alignSelf: 'flex-start' }}>
          View project
        </Button>
      </Flex>
      <div className={s.imageWrap}>
        <Link href={url} className={s.imageContainer}>
          <Image
            src={srcThumb}
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
    </Flex>
  );
};

export default ProjectCard;
