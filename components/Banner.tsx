import Link from 'next/link';
import s from './Banner.module.css';
import Nav from './Nav';
import Image from 'next/image';
import LogoMark from './LogoMark';

interface Props {
  invert?: boolean;
}

const Banner = ({ invert }: Props): JSX.Element => (
  <div className={s.bannerContainer}>
    <div className={`${s.banner} ${invert && s.invert}`}>
      <div className={s.logo}>
        <Link href="/" className={s.logoMarkContainer}>
          {/* <Image
            src="/images/monogram.svg"
            width={32}
            height={32}
            alt=""
            style={{ marginRight: '16px' }}
          /> */}
          <LogoMark
            className={`${s.logoMark} ${invert && s.logoMarkInverted}`}
          />
          {/* Phillip Miles */}
        </Link>
      </div>
      <Nav invert={invert} />
    </div>
  </div>
);

export default Banner;
