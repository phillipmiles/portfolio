import Link from 'next/link';
import s from './Button.module.css';

interface Props {
  children: JSX.Element | string | Array<JSX.Element>;
  href: string;
  className?: string;
  style: object;
}

const Button = ({
  children,
  href,
  className,
  style,
  ...props
}: Props): JSX.Element => {
  return (
    <Link
      href={href}
      className={`${s.button} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
