import Link from 'next/link';
import s from './NavItem.module.css';
import HoverUnderline from './HoverUnderline';

interface Props {
  href: string;
  active?: boolean;
  children: string;
  invert?: boolean;
}

const NavItem = ({ href, invert, active, children }: Props) => (
  <HoverUnderline
    className={`${s.hover} ${invert && s.underline}`}
    active={active}
  >
    <Link href={href} className={s.contentStyle}>
      {children}
    </Link>
  </HoverUnderline>
);

export default NavItem;
