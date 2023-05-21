import Link from 'next/link';
import s from './Nav.module.css';

const Nav = (): JSX.Element => (
  <nav className={s.nav}>
    <Link href="/projects">Projects</Link>
    <Link href="/tools">Tools</Link>
    <Link href="/about">About</Link>
    {/* <Link href="blog">Blog</Link> */}
    <Link href="/contact">Contact</Link>
  </nav>
);

export default Nav;
