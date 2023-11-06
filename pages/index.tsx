import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import s from './index.module.css';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import PageContentWrap from '../components/generic/PageContentWrap';
import Nav from '../components/Nav';
import Button from '../components/generic/Button';
import Link from 'next/link';
import DevTools from '../components/DevTools';
import Flex from '../components/generic/Flex';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAws,
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faJsSquare,
  faNode,
  faNodeJs,
  faReact,
  faShopify,
  faWordpress,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons';
import PageWithFooter from '../components/generic/PageWithFooter';
import Banner from '../components/Banner';
import ContentSlider from '../components/generic/ContentSlider';
import InfinityPanner from '../components/generic/InfinityPanner';

const Home: NextPage = () => {
  return (
    <>
      <div className={s.introBlock}>
        <Banner invert />
        <PageContentWrap
          classNameOuter={s.pageWrapOuter}
          classNameInner={s.pageWrapInner}
        >
          <header className={s.header}>
            <div className={s.headerLeft}>
              <h1 className={s.title}>Versatile, Performant, Documented</h1>
              <p className={s.description}>
                React component library specialist
              </p>
              <div className={s.ctaWrap}>
                <Link href="/projects" className={s.cta}>
                  View projects
                </Link>
                <div className={s.ctaShadow} />
              </div>
            </div>
            <div className={s.headerRight}>
              <Hero />
            </div>
          </header>
        </PageContentWrap>
      </div>
      <div
        style={{
          backgroundColor: '#ECF4FA',
          width: '100%',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255,255,255, 0.8)',
          outline: '1px solid #FFF',
        }}
      >
        <PageContentWrap>
          <Flex className={s.techIcons}>
            <div
              style={{
                display: 'block',
                height: 32,
                width: 32,
                margin: 12,
              }}
            >
              <FontAwesomeIcon icon={faReact} />
            </div>

            <div
              style={{
                display: 'block',
                height: 32,
                width: 32,
                margin: 12,
              }}
            >
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
            <div
              style={{
                display: 'block',
                height: 32,
                width: 32,
                margin: 12,
              }}
            >
              <FontAwesomeIcon icon={faGit} />
            </div>
            <div
              style={{
                display: 'block',
                height: 32,
                width: 32,
                margin: 12,
              }}
            >
              <FontAwesomeIcon icon={faWordpressSimple} />
            </div>
            <div
              style={{
                display: 'block',
                height: 32,
                width: 32,
                margin: 12,
              }}
            >
              <Image
                alt=""
                width={32}
                height={32}
                src={'/images/companies/icons/storybook-icon.svg'}
              />
            </div>
            <div
              style={{
                display: 'block',
                height: 32,
                width: 32,
                margin: 12,
              }}
            >
              <Image
                alt=""
                width={32}
                height={32}
                src={'/images/companies/icons/typescript-icon.svg'}
              />
            </div>
          </Flex>
          <div className={s.testimonial}>
            <p>
              <q>
                Phil&lsquo;s always able to balance shippability and quality
                with his work. He was always willing to call out problems early
                and would always articulate them at ease. He brings a
                solution-focused mindset, strong problem-solving capabilities
                and keen eye of design to every project. Phil&lsquo;s a pleasure
                to work with and would be a great member of any future team.
              </q>
            </p>

            <Flex className={s.testimonialContainer}>
              <Image
                alt=""
                src="/images/testimonials/daniel-steen.jpeg"
                width={48}
                height={48}
                style={{ borderRadius: '100px' }}
              />
              <div className={s.testimonialTextContainer}>
                <p
                  style={{
                    textAlign: 'left',
                    marginBottom: '0',
                    fontSize: '16px',
                  }}
                >
                  Daniel Steen
                </p>
                <p className={s.testimonialTextDivider}>|</p>
                <p
                  style={{
                    margin: 0,
                    opacity: 0.6,
                    fontSize: '16px',
                  }}
                >
                  Lead Digital Experience and Innovation, RMIT
                </p>
              </div>
            </Flex>
          </div>
          <Projects />
          <DevTools />
        </PageContentWrap>
      </div>

      <Flex className={s.companiesContainer}>
        <InfinityPanner speed="30000ms" translateX={-1} translateY={0}>
          <Image
            src={'/images/companies/logo_anz_h_white.svg'}
            width={140}
            height={100}
            alt="ANZ Logo"
            style={{ margin: 40 }}
          />
          <Image
            src={'/images/companies/logo_coles_white.svg'}
            width={140}
            height={100}
            alt="Coles Logo"
            style={{ margin: 40 }}
          />
          <Image
            src={'/images/companies/logo_deakinuni_h_white.svg'}
            width={140}
            height={100}
            alt="Deakin University Logo"
            style={{ margin: 40 }}
          />

          <Image
            src={'/images/companies/logo_auspost_white.svg'}
            width={140}
            height={100}
            alt="Aus Post Logo"
            style={{ margin: 40 }}
          />
          <Image
            src={'/images/companies/logo_hla_white.svg'}
            width={140}
            height={100}
            alt="HLA Logo"
            style={{ margin: 40 }}
          />
          <Image
            src={'/images/companies/logo_cpa_white.svg'}
            width={140}
            height={100}
            alt="CPA Logo"
            style={{ margin: 40 }}
          />
          <Image
            src={'/images/companies/logo_transurban_white.svg'}
            width={140}
            height={100}
            alt="Transurban Logo"
            style={{ margin: 40 }}
          />
          <Image
            src={'/images/companies/logo_dhhs_white.png'}
            width={140}
            height={50}
            alt="DHHS Logo"
            style={{ margin: 40 }}
          />
        </InfinityPanner>
      </Flex>
    </>
  );
};

export default Home;
