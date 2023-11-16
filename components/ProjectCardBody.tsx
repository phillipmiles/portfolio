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
    <Flex className={`${s.projectCardBody} ${className}`} style={style}>
      {children}
    </Flex>
  );
};

export default ProjectCardBody;
