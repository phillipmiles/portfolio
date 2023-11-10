import Button from './generic/Button';
import Flex from './generic/Flex';
import s from './ProjectCardBody.module.css';

const ProjectCardBody = ({
  slug,
  title,
  url,
  description,
  srcThumb,
  platforms,
  stack,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <Flex className={`${s[slug]} ${s.projectCardBody}`} style={style}>
      {children}

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
  );
};

export default ProjectCardBody;
