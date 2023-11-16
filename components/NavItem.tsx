import Link from 'next/link';
import s from './NavItem.module.css';
import HoverUnderline from './HoverUnderline';

interface Props {
  href: string;
  children: string;
  invert: boolean;
}

const NavItem = ({ href, invert, children }: Props) => (
  <HoverUnderline className={invert && s.underline}>
    <Link href={href} className={s.contentStyle}>
      {children}
    </Link>
  </HoverUnderline>
);

export default NavItem;
