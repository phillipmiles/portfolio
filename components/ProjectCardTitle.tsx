import Heading from './Heading';
import s from './ProjectCardTitle.module.css';

const ProjectCardTitle = ({ as, className, children, ...props }) => {
  return (
    <Heading
      as={as ? as : 'h5'}
      className={`${s.heading} ${className}`}
      {...props}
    >
      {children}
    </Heading>
  );
};

export default ProjectCardTitle;
