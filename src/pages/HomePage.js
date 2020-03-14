/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
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
    <PageWrap {...props} sx={{ bg: 'black' }}>
      <ContentWrap sx={{ color: 'textWhite' }}>
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
          <div sx={{ pb: 8, mt: -6 }}>
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
    </PageWrap>
  );
};

HomePage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};
export default HomePage;
