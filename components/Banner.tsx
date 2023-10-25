import Link from 'next/link';
import s from './Banner.module.css';
import Nav from './Nav';
import StickyTopBar from './generic/StickyTopBar';

interface Props {
  invert?: boolean;
}

const Banner = ({ invert }: Props): JSX.Element => (
  // <StickyTopBar>
  <div className={`${s.banner} ${invert && s.invert}`}>
    <div className={s.logo}>
      <Link href="/">Phillip Miles</Link>
    </div>
    <Nav invert={invert} />
  </div>
  // </StickyTopBar>
);

export default Banner;
