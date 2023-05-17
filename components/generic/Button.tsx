import Link from 'next/link';
import s from './Button.module.css';

interface Props {
  children: JSX.Element | string | Array<JSX.Element>;
  href: string;
  classNameButton?: string;
}

const Button = ({
  children,
  href,
  classNameButton,
  ...props
}: Props): JSX.Element => {
  return (
    <Link href={href} className={`${classNameButton} ${s.button}`} {...props}>
      {children}
    </Link>
  );
};

export default Button;
