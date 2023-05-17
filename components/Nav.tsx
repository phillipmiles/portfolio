import s from './Nav.module.css';

const Nav = (): JSX.Element => (
  <nav className={s.nav}>
    <a href="">Services</a>
    <a href="">Work</a>
    <a href="">About</a>
    <a href="">Blog</a>
    <a href="">Contact</a>
  </nav>
);

export default Nav;
