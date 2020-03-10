/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
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
} from '../components';
import projectsData from '../data/projects';

const HomePage = ({ ...props }) => {
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
                <span sx={{ color: 'primary', ml: 2 }}>.</span>
              </Heading>
            </div>
          </Flex>
          <div sx={{ pb: 8, mt: -6 }}>
            {projectsData.map((project, index) => {
              const oddIndex = index % 2;
              const body = (
                <PreviewBody
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
                  <Button
                    icon={faChevronRight}
                    iconPosition="right"
                    sx={{
                      mt: 4,
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
                  alt=""
                  linkUrl={project.pageUrl}
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

export default HomePage;
