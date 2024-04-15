import Link from 'next/link';
import s from './Banner.module.css';
import Nav from './Nav';

interface Props {
  invert?: boolean;
}

const Banner = ({ invert }: Props): JSX.Element => (
  <div className={s.bannerContainer}>
    <div className={`${s.banner} ${invert && s.invert}`}>
      <div className={s.logo}>
        <Link href="/">Phillip Miles</Link>
      </div>
      <Nav invert={invert} />
    </div>
  </div>
);

export default Banner;
