import s from './Nav.module.css';
import NavItem from './NavItem';

interface Props {
  invert: boolean;
}

const Nav = ({ invert }: Props): JSX.Element => (
  <nav className={s.nav}>
    <NavItem href="/projects" invert={invert}>
      Projects
    </NavItem>
    <NavItem href="/resources" invert={invert}>
      Resources
    </NavItem>
    {/* <Link href="/about">About</Link> */}
    {/* <Link href="blog">Blog</Link> */}
    <NavItem href="mailTo:hello@phillipmiles.com" invert={invert}>
      Contact
    </NavItem>
  </nav>
);

export default Nav;
