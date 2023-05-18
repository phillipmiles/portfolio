import Image from 'next/image';
import Link from 'next/link';
import Flex from './generic/Flex';
import PageContentWrap from './generic/PageContentWrap';

const Footer = (props): JSX.Element => {
  return (
    <div style={{ backgroundColor: '#262C35' }}>
      <PageContentWrap
        style={{
          color: 'white',
          paddingTop: 64,
          paddingBottom: 64,
        }}
      >
        <Flex
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: ['column', 'row'],
          }}
        >
          <Flex
            style={{
              minWidth: 240,
              alignItems: 'center',
              // mb: [4, 0],
            }}
          >
            <Image
              src={'/images/avatar.jpg'}
              height={64}
              width={64}
              alt=""
              style={{
                borderRadius: 64,
                marginRight: 24,
              }}
            />
            <Flex style={{ flexDirection: 'column' }}>
              <p
                style={{
                  color: '#59b3ff',
                }}
              >
                My name is
              </p>
              <Link
                // to={routeUrls.about}
                href="/"
                // variant="callout"
                style={{
                  color: 'white',
                  // ':hover': { textDecoration: 'underline' }
                }}
              >
                Phillip Miles
              </Link>
            </Flex>
          </Flex>

          <Flex
            style={{
              // width: '33%',
              minWidth: 240,
              // flexDirection: ['row', 'column'],
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                color: '#59b3ff',
                // variant: ['text.detail', 'text.body'],
                // mx: [2, 0],
              }}
            >
              Follow me on Twitter
            </p>
            <Link
              href="https://twitter.com/PhillipAMiles"
              // variant="detail"
              style={{
                // mx: [1, 0],
                color: 'white',
                // ':hover': { textDecoration: 'underline' },
              }}
            >
              @PhillipAMiles
            </Link>
          </Flex>
          <Flex
            style={{
              // width: '33%',
              minWidth: 240,
              // flexDirection: ['row', 'column'],
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                // color: 'neutral.6',
                color: '#59b3ff',
                // variant: ['text.detail', 'text.body'],
                // mx: [2, 0],
              }}
            >
              Get in touch
            </p>
            <Link
              href="mailTo:hello@phillipmiles.com"
              style={{
                // mx: [1, 0],
                margin: 8,
                color: 'white',
                // ':hover': { textDecoration: 'underline' },
              }}
            >
              hello@phillipmiles.com
            </Link>
          </Flex>
        </Flex>
      </PageContentWrap>
    </div>
  );
};

export default Footer;
