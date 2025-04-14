import Link from 'next/link';
import s from './DrawerNavigationItem.module.css';
import { MouseEventHandler } from 'react';

interface Props {
  children: React.ReactNode;
  active: boolean;
  href: string;
  onClick?: MouseEventHandler;
}

const DrawerNavigationItem = ({
  href,
  onClick,
  active = false,
  children,
}: Props) => {
  return (
    <li className={s.container}>
      <Link
        href={href}
        className={active ? `${s.link} ${s.active}` : s.link}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};
export default DrawerNavigationItem;
