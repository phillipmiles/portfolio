import s from './ProjectCardTitle.module.css';

const ProjectCardTitle = ({ className, children, ...props }) => {
  return (
    <h2 className={className} {...props}>
      {children}
    </h2>
  );
};

export default ProjectCardTitle;
