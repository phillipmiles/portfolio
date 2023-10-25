import Link from 'next/link';
import s from './NavItem.module.css';
import DetachedHoverEffect from './generic/DetachedHoverEffect';

interface Props {
  href: string;
  children: string;
  invert: boolean;
}

const NavItem = ({ href, invert, children }: Props) => (
  <DetachedHoverEffect className={`${s.hoverEffect} && ${invert && s.invert}`}>
    <Link href={href} className={s.contentStyle}>
      {children}
    </Link>
  </DetachedHoverEffect>
);

export default NavItem;
