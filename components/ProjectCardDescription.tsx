import s from './ProjectCardDescription.module.css';

const ProjectCardDescription = ({ lines, children, style, ...props }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: children }}
      className={s.container}
      style={{
        lineClamp: lines,
        WebkitLineClamp: lines,
        ...style,
      }}
      {...props}
    />
  );
};

export default ProjectCardDescription;
