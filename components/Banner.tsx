import Link from 'next/link';
import s from './Banner.module.css';
import Nav from './Nav';
import LogoMark from './LogoMark';
import Sidebar from './constructs/Sidebar';
import { useState } from 'react';

interface Props {
  invert?: boolean;
}

const Banner = ({ invert }: Props): JSX.Element => {
  return (
    <div className={s.bannerContainer}>
      <div className={s.banner}>
        <div className={`${s.logo}  ${invert && s.invert}`}>
          <Link href="/" className={s.logoMarkContainer}>
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
};

export default Banner;
