import Link from 'next/link';
// import theme from '../../styles/theme';
// import s from './Button.module.css';

interface Props {
  children: JSX.Element | string | Array<JSX.Element>;
  href: string;
  style?: { [key: string]: any };
}

const Button = ({ children, href, style, ...props }: Props): JSX.Element => {
  return (
    <Link
      href={href}
      // className={s.button}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
