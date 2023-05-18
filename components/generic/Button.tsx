import Link from 'next/link';
import s from './Button.module.css';

interface Props {
  children: JSX.Element | string | Array<JSX.Element>;
  href: string;
  classNameButton?: string;
  style: object;
}

const Button = ({
  children,
  href,
  classNameButton,
  style,
  ...props
}: Props): JSX.Element => {
  return (
    <Link
      href={href}
      className={`${s.button} ${classNameButton}`}
      style={style}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
