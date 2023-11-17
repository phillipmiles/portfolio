import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { relative } from 'path';
import Button from './generic/Button';
// import { getPlatformIcon } from '../resolvers/platforms';
import Flex from './generic/Flex';
import s from './ProjectCard.module.css';
import Heading from './Heading';
import ProjectCardImage from './ProjectCardImage';
import ProjectCardBody from './ProjectCardBody';
import ProjectCardTags from './ProjectCardTags';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardDescription from './ProjectCardDescription';

const ProjectCard = ({
  slug,
  title,
  url,
  description,
  srcThumb,
  thumbnail,
  platforms,
  stack,
  className,
  tags,
  style,
  ...props
}) => {
  return (
    <Flex
      style={{
        background: 'white',
        borderRadius: '6px',
        overflow: 'hidden',
        minHeight: '400px',
        flexDirection: 'column',
        position: 'relative',
        ...style,
      }}
      className={`${s.container} ${className}`}
    >
      <ProjectCardImage slug={slug} url={url} src={thumbnail} />
      <ProjectCardBody slug={slug} style={{ width: '100%' }}>
        <Link href={url} className={s.link}>
          <ProjectCardTitle tag="h4" className={s.title}>
            {title}
          </ProjectCardTitle>

          <ProjectCardDescription lines={4}>
            {description}
          </ProjectCardDescription>

          <ProjectCardTags
            style={{
              marginTop: '24px',
            }}
          >
            {tags?.map((tag, index) => (
              <>
                <span
                  style={
                    {
                      // textTransform: 'uppercase',
                      // fontSize: '15px',
                      // letterSpacing: '1px',
                      // fontWeight: 500,
                      // opacity: 0.8,
                    }
                  }
                >
                  {tag}
                </span>
                {index !== tags.length - 1 && (
                  <span
                    style={{
                      margin: '0 8px',
                      opacity: 0.6,
                      fontSize: '18px',
                      display: 'inline-block',
                      transform: 'translateY(0.5px)',
                    }}
                  >
                    /
                  </span>
                )}
              </>
            ))}
          </ProjectCardTags>
        </Link>
      </ProjectCardBody>
    </Flex>
  );
};

export default ProjectCard;
