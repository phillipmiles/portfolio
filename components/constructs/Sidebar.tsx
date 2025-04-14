import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Drawer from '../generic/Drawer';
import DrawerNavigation from '../generic/DrawerNavigation';
import DrawerNavigationItem from '../generic/DrawerNavigationItem';
import DrawerFooter from '../generic/DrawerFooter';
import s from './Sidebar.module.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import { MouseEventHandler } from 'react';
import ButtonIcon from '../generic/ButtonIcon';

interface Props {
  open?: boolean;
  onClickClose?: MouseEventHandler<HTMLButtonElement>;
}

const Sidebar = ({ open, onClickClose }: Props) => {
  const pathname = usePathname();
  return (
    <Drawer open={open} className={s.drawer}>
      <div className={s.drawerContent}>
        {/* <ButtonIcon className={s.drawerButton} onClick={onClickClose}>
          <FontAwesomeIcon icon={faXmark} />
        </ButtonIcon> */}
        <DrawerNavigation>
          <DrawerNavigationItem
            href="/"
            active={pathname === '/'}
            onClick={onClickClose}
          >
            Home
          </DrawerNavigationItem>
          <DrawerNavigationItem
            href="/projects"
            active={pathname === '/projects'}
            onClick={onClickClose}
          >
            Projects
          </DrawerNavigationItem>
          <DrawerNavigationItem
            href="/resources"
            active={pathname === '/resources'}
            onClick={onClickClose}
          >
            Resources
          </DrawerNavigationItem>
          <DrawerNavigationItem
            href="/reading-list"
            active={pathname === '/reading-list'}
            onClick={onClickClose}
          >
            Reading list
          </DrawerNavigationItem>
          <DrawerNavigationItem
            href="/contact"
            active={pathname === '/contact'}
            onClick={onClickClose}
          >
            Contact
          </DrawerNavigationItem>
        </DrawerNavigation>
      </div>
      {/* <DrawerFooter><Socials /></DrawerFooter> */}
    </Drawer>
  );
};

export default Sidebar;
