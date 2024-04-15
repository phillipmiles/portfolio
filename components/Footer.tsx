import Image from 'next/image';
import Link from 'next/link';
import Flex from './generic/Flex';
import PageContentWrap from './generic/PageContentWrap';
import s from './Footer.module.css';

const Footer = ({ ...props }): JSX.Element => {
  return (
    <footer className={s.footer} {...props}>
      <PageContentWrap
        classNameOuter={s.footerPageWrapWrap}
        classNameInner={s.footerPageWrap}
      >
        <Flex className={s.footerContent}>
          <Flex className={s.avatarContent}>
            <Image
              src={'/images/avatar.jpg'}
              height={64}
              width={64}
              alt=""
              className={s.avatar}
            />
            <Flex className={s.avatarTextContainer}>
              <p className={s.avatarLabel}>My name is</p>
              <Link href="/" className={s.avatarText}>
                Phillip Miles
              </Link>
            </Flex>
          </Flex>

          <Flex className={s.linkContent}>
            <p className={s.linkLabel}>Follow me on Twitter</p>
            <Link href="https://twitter.com/PhillipAMiles" className={s.link}>
              @PhillipAMiles
            </Link>
          </Flex>
          <Flex className={s.linkContent}>
            <p className={s.linkLabel}>Get in touch</p>
            <Link href="mailTo:contact@phillipmiles.com" className={s.link}>
              contact@phillipmiles.com
            </Link>
          </Flex>
        </Flex>
      </PageContentWrap>
    </footer>
  );
};

export default Footer;
