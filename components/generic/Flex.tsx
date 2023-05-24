import s from './Flex.module.css';

interface Props {
  children: React.ReactNode;
  style?: { [key: string]: any };
  className?: string;
}

const Flex = ({ children, style, className, ...props }: Props): JSX.Element => (
  <div className={`${s.flex} ${className}`} style={style} {...props}>
    {children}
  </div>
);

export default Flex;
