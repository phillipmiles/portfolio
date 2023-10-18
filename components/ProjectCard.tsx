import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { relative } from 'path';
import Button from './generic/Button';
// import { getPlatformIcon } from '../resolvers/platforms';
import Flex from './generic/Flex';
import s from './ProjectCard.module.css';
import Heading from './Heading';

const ProjectCard = ({
  slug,
  title,
  url,
  description,
  srcThumb,
  platforms,
  stack,
  className,
  ...props
}) => {
  // const platformIcons = platforms.map((platform) => ({
  //   id: 'platform',
  //   icon: getPlatformIcon(platform),
  // }));

  return (
    <Flex className={`${s[slug]} ${s.projectCard} ${className}`} {...props}>
      <Flex className={`${s[slug]} ${s.projectCardBody}`}>
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

          <h2 className={`h4 ${s.heading}`}>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />
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
        <div className={s.buttonContainer}>
          <Button
            className={s.button}
            href={url}
            style={{ alignSelf: 'flex-start' }}
          >
            View project
          </Button>
        </div>
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
