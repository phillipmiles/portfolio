/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Fragment, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import ImageSelfie from '../assets/images/selfie.jpg';
import {
  ContentWrap,
  PageWrap,
  Heading,
  Text,
  Paragraph,
  Preview,
  PreviewImage,
  PreviewBody,
  Button,
  FlexCol,
  FlexColItem,
  Image,
  Icon,
  // AnimatedDot,
} from '../components';
import projectsData from '../data/projects';

const HomePage = ({ location, ...props }) => {
  const dotRef = useRef();

  // If user is routing from a project page. Set scroll position to that project preview.
  useLayoutEffect(() => {
    if (location.state && location.state.fromProjectId) {
      var elmnt = document.getElementById(
        `project${location.state.fromProjectId}`,
      );
      elmnt.scrollIntoView(true);
    }
  }, [location]);

  return (
    <PageWrap {...props} sx={{ bg: 'black', color: 'textWhite' }}>
      <ContentWrap>
        <div>
          <Flex
            sx={{
              height: '100vh',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div sx={{ mt: -7 }}>
              <Text
                sx={{
                  color: 'primary',
                  variant: 'textStyles.heading4',
                  mb: 4,
                }}
              >
                Phillip Miles
              </Text>
              <Heading as="h2">
                I make things for
                <br /> the internet
                <span ref={dotRef} />
                {/* <AnimatedDot /> */}
                <span sx={{ color: 'primary', ml: 2 }}>.</span>
              </Heading>
            </div>
          </Flex>
          <div sx={{ mt: -6 }}>
            {projectsData.map((project, index) => {
              const oddIndex = index % 2;
              const pageUrl = `/project/${project.id}`;
              const body = (
                <PreviewBody
                  id={`project${project.id}`}
                  sx={{
                    pl: oddIndex ? 6 : 0,
                    pr: oddIndex ? 0 : 6,
                    width: '40%',
                  }}
                >
                  <Heading as="h5">{project.title}</Heading>

                  <Paragraph sx={{ fontSize: '21px' }}>
                    {project.summary}
                  </Paragraph>
                  {project.years && (
                    <Text
                      sx={{
                        display: 'block',
                        mt: 2,
                        // fontSize: '16px',
                        opacity: 0.6,
                      }}
                    >
                      {project.years}
                    </Text>
                  )}
                  <Button
                    to={pageUrl}
                    icon={faChevronRight}
                    iconPosition="right"
                    sx={{
                      mt: 4,
                      minWidth: 9,
                      svg: {
                        transition: 'transform 150ms ease',
                      },
                      ':hover': {
                        svg: {
                          transform: theme => `translateX(${theme.space[2]}px)`,
                        },
                      },
                    }}
                  >
                    View
                  </Button>
                </PreviewBody>
              );
              const image = (
                <PreviewImage
                  src={project.thumbnail.src}
                  alt={project.thumbnail.alt}
                  linkUrl={pageUrl}
                  sx={{ width: '60%' }}
                />
              );

              return (
                <Preview key={project.title}>
                  {oddIndex ? (
                    <Fragment>
                      {image}
                      {body}
                    </Fragment>
                  ) : (
                    <Fragment>
                      {body}
                      {image}
                    </Fragment>
                  )}
                </Preview>
              );
            })}
          </div>
        </div>
      </ContentWrap>
      <div>
        <ContentWrap sx={{ pb: 8 }}>
          <FlexCol gutter={[4, 8]} margin={0}>
            <FlexColItem cols={6}>
              <Parallax sx={{ width: '100%' }} y={[40, -56]}>
                <Heading as="h2" variant="heading2" sx={{ mb: 4 }}>
                  Say hi
                  {/* <span sx={{ color: 'primary', ml: 1 }}>.</span> */}
                </Heading>
                <a
                  href="mailto:hello@phillipmiles.com"
                  sx={{
                    color: 'primary',
                    display: 'block',
                    variant: 'textStyles.heading5',
                    mb: 4,
                    ':hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  hello@phillipmiles.com
                </a>
                <Paragraph>
                  I love to design and develop impactful tools or experiences
                  for the web. It's made all the better if I am learning
                  something new whilst doing it.
                </Paragraph>
                <Paragraph>
                  I currently work at Verso Learning where build and maintain
                  the front-end for two professional development web apps aimed
                  at teacher.
                </Paragraph>
                <Paragraph>
                  I wind down my day by noodling on a guitar, reading whatever
                  and playing video games. Say hi!
                </Paragraph>
                <Paragraph>Phillip Miles,</Paragraph>
                <Paragraph>Melbourne, Australia</Paragraph>
                <Flex sx={{ mt: 5 }}>
                  <a
                    href="https://github.com/phillipmiles"
                    target="blank"
                    sx={{ color: 'white', ':hover': { color: 'primary' } }}
                  >
                    <Icon icon={faGithub} size={3} />
                  </a>
                  <a
                    href="https://www.twitter.com/PhillipAMiles"
                    target="blank"
                    sx={{ color: 'white', ':hover': { color: 'primary' } }}
                  >
                    <Icon icon={faTwitter} size={3} sx={{ ml: 3 }} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/phillip-miles-361084bb"
                    target="blank"
                    sx={{ color: 'white', ':hover': { color: 'primary' } }}
                  >
                    <Icon icon={faLinkedin} size={3} sx={{ ml: 3 }} />
                  </a>
                </Flex>
              </Parallax>
            </FlexColItem>
            <FlexColItem cols={6}>
              <Image src={ImageSelfie} sx={{ borderRadius: '50%' }} />
            </FlexColItem>
          </FlexCol>
        </ContentWrap>
      </div>
    </PageWrap>
  );
};

HomePage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};
export default HomePage;
