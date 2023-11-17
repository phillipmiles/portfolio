import { useRouter } from 'next/router';
import s from './Nav.module.css';
import NavItem from './NavItem';

interface Props {
  invert: boolean;
}

const Nav = ({ invert }: Props): JSX.Element => {
  const router = useRouter();
  // const pathParts = router.route.split('/').filter((path) => path !== '');

  return (
    <nav className={s.nav}>
      {/* <NavItem href="/services" invert={invert}>
      Services
    </NavItem> */}
      <NavItem
        href="/projects"
        invert={invert}
        // active={pathParts[0] == 'projects' ? true : false}
        active={router.pathname == '/projects' ? true : false}
      >
        Projects
      </NavItem>
      <NavItem
        href="/resources"
        invert={invert}
        // active={pathParts[0] == 'resources' ? true : false}
        active={router.pathname == '/resources' ? true : false}
      >
        Resources
      </NavItem>
      {/* <Link href="/about">About</Link> */}
      {/* <Link href="blog">Blog</Link> */}
      <NavItem href="mailTo:hello@phillipmiles.com" invert={invert}>
        Contact
      </NavItem>
    </nav>
  );
};

export default Nav;
