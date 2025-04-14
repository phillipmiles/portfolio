import { useRouter } from 'next/router';
import s from './Nav.module.css';
import NavItem from './NavItem';
import Sidebar from './constructs/Sidebar';
import { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from './generic/ButtonIcon';

interface Props {
  invert?: boolean;
}

const Nav = ({ invert }: Props): JSX.Element => {
  const router = useRouter();
  // const pathParts = router.route.split('/').filter((path) => path !== '');
  const [sideBarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    if (!sideBarOpen) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    setSidebarOpen((state) => !state);
  };

  return (
    <>
      <nav className={`${s.nav} ${invert && s.invert}`}>
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
        <NavItem
          href="/reading-list"
          invert={invert}
          // active={pathParts[0] == 'resources' ? true : false}
          active={router.pathname == '/reading-list' ? true : false}
        >
          Reading list
        </NavItem>
        {/* <Link href="/about">About</Link> */}
        {/* <Link href="blog">Blog</Link> */}
        <NavItem href="mailTo:phillip@phillipmiles.com" invert={invert}>
          Contact
        </NavItem>
      </nav>
      <ButtonIcon
        onClick={handleToggleSidebar}
        icon={sideBarOpen ? faXmark : faBars}
        className={`${s.sidebarButton} ${invert && s.invert}`}
      />
      <Sidebar open={sideBarOpen} onClickClose={handleToggleSidebar} />
    </>
  );
};

export default Nav;
