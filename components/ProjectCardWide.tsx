import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { relative } from 'path';
import Button from './generic/Button';
// import { getPlatformIcon } from '../resolvers/platforms';
import Flex from './generic/Flex';
import s from './ProjectCardWide.module.css';
import Heading from './Heading';
import ProjectCardImage from './ProjectCardImage';
import ProjectCardBody from './ProjectCardBody';
import ProjectCardTags from './ProjectCardTags';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardDescription from './ProjectCardDescription';
import DetachedHoverEffect from './generic/DetachedHoverEffect';
import HoverGhost from './HoverGhost';
import ProjectCard from './ProjectCard';

const ProjectCardWide = ({
  slug,
  title,
  url,
  description,
  descriptionBrief,
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
    <>
      <Flex className={`${s.container} ${className}`} style={style} {...props}>
        <ProjectCardImage
          slug={slug}
          url={url}
          src={thumbnail}
          className={s.image}
        />
        <ProjectCardBody slug={slug} className={s.body}>
          <Link href={url} className={s.link}>
            <ProjectCardTitle
              tag="h4"
              url={url}
              className={s.title}
              style={{ marginBottom: '24px', fontSize: '36px' }}
            >
              {title}
            </ProjectCardTitle>
            <ProjectCardDescription lines={5}>
              {description}
            </ProjectCardDescription>

            {/* <Flex style={{ flexGrow: 1 }}>
            <Button
              className={s.button}
              href={`/projects/${slug}`}
              style={{ alignSelf: 'flex-end' }}
            >
              View project
            </Button>
          </Flex> */}
            <ProjectCardTags
              style={{
                marginTop: '24px',
                // marginBottom: '24px',
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
      <ProjectCard
        slug={slug}
        title={title}
        url={url}
        description={descriptionBrief}
        srcThumb={srcThumb}
        thumbnail={thumbnail}
        platforms={platforms}
        stack={stack}
        tags={tags}
        style={style}
        className={`${s.projectCardMobile} ${className}`}
        {...props}
      />
    </>
  );
};

export default ProjectCardWide;
