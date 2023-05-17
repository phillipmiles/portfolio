import s from './Flex.module.css';

interface Props {
  children: React.ReactNode;
  style?: { [key: string]: any };
  classNameFlex?: string;
}

const Flex = ({
  children,
  style,
  classNameFlex,
  ...props
}: Props): JSX.Element => (
  <div className={`${s.flex} ${classNameFlex}`} style={style} {...props}>
    {children}
  </div>
);

export default Flex;
