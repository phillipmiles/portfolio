import Flex from './generic/Flex';
import s from './ProjectCardTags.module.css';

const ProjectCardTags = ({ className, style, children, ...props }) => {
  return (
    <Flex className={`${s.container} ${className}`} style={style} {...props}>
      <span className={s.text}>{children}</span>
    </Flex>
  );
};

export default ProjectCardTags;
