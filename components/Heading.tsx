import HeadingModule from './generic/HeadingModule';
import s from './Heading.module.css';

interface Props {
  tag: string;
  as: string;
  children?: React.ReactNode;
  style?: { [key: string]: any };
}

const Heading = ({ tag, as, className, ...props }: Props) => (
  <HeadingModule
    tag={tag}
    as={as}
    className={className}
    cssModule={s}
    {...props}
  />
);

export default Heading;
