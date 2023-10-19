import Image from 'next/image';
import Link from 'next/link';
import Flex from './generic/Flex';
import PageContentWrap from './generic/PageContentWrap';
import s from './Footer.module.css';

const Footer = ({ ...props }): JSX.Element => {
  return (
    <footer className={s.footer} {...props}>
      <PageContentWrap classNameInner={s.footerPageWrap}>
        <Flex className={s.footerContent}>
          <Flex className={s.avatarContent}>
            <Image
              src={'/images/avatar.jpg'}
              height={64}
              width={64}
              alt=""
              className={s.avatar}
            />
            <Flex style={{ flexDirection: 'column' }}>
              <p
                style={{
                  color: '#59b3ff',
                  marginBottom: 0,
                }}
              >
                My name is
              </p>
              <Link
                href="/"
                style={{
                  color: 'white',
                  fontSize: '22px',
                }}
              >
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
            <Link href="mailTo:hello@phillipmiles.com" className={s.link}>
              hello@phillipmiles.com
            </Link>
          </Flex>
        </Flex>
      </PageContentWrap>
    </footer>
  );
};

export default Footer;
