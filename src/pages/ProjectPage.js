/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, navigate } from '@reach/router';
import { useSpring, animated } from 'react-spring';
import projectsData from '../data/projects';
import {
  Heading,
  Paragraph,
  Image,
  Text,
  PageWrap,
  ContentWrap,
  FlexCol,
  FlexColItem,
  Icon,
} from '../components';

const ProjectPage = ({ projectId, ...props }) => {
  const projectData = projectsData.find(project => project.id === projectId);

  const [springProps, set] = useSpring(() => ({
    transform: 'scale(1)',
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <PageWrap {...props} sx={{ bg: 'black' }}>
      {/* <ContentWrap
        sx={{
          position: 'fixed',
          zIndex: 100,
          left: 0,
          right: 0,
          top: 0,
          bg: 'black',
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            height: 8,
          }}
        >
          <Text sx={{ color: 'primary', fontSize: '21px' }}>Phillip Miles</Text>
        </Flex>
      </ContentWrap> */}

      <Link
        to={'/'}
        state={{ fromProjectId: projectData.id }}
        sx={{
          position: 'fixed',
          // right: 6,
          // top: 5,
          right: 0,
          top: 0,
          cursor: 'pointer',
          zIndex: 100,
          width: 8,
          height: 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // boxShadow: 2,
          // borderRadius: '50%',
          color: 'white',
          bg: 'primary',
          transition: 'background-color 200ms ease',
          ':hover': {
            bg: 'primaryDark',
          },
          borderRadius: theme => `0 0 0 ${theme.radii.large}px`,
        }}
        onMouseOver={() => set({ transform: 'scale(1.2)' })}
        onMouseLeave={() => set({ transform: 'scale(1)' })}
      >
        <animated.div style={springProps}>
          <Icon icon={faTimes} sx={{ fontSize: '32px' }} />
        </animated.div>
      </Link>
      <Flex
        sx={{
          width: '100%',
          height: '40vw',
          maxHeight: '76vh',
          // pr: theme => theme.sizes[8],
        }}
      >
        <div
          sx={{
            width: '80%',
            height: '100%',
            backgroundImage: `url('${projectData.images[0].src}')`,
            backgroundSize: 'cover',
            backgroundPositionY: '35%',
            backgroundPositionX: '50%',
          }}
        />
        <Flex sx={{ flexDirection: 'column', width: '40%', height: '100%' }}>
          <div
            sx={{
              backgroundImage: `url('${projectData.images[1].src}')`,
              backgroundSize: 'cover',
              backgroundPositionY: '35%',
              backgroundPositionX: '50%',
              height: '50%',
              width: '100%',
            }}
          />
          <div
            sx={{
              backgroundImage: `url('${projectData.images[2].src}')`,
              backgroundSize: 'cover',
              backgroundPositionY: '35%',
              backgroundPositionX: '50%',
              height: '50%',
              width: '100%',
            }}
          />
          {/* {projectData.images.map(img => (
            <div
              sx={{
                backgroundImage: `url('${img.src}')`,
                backgroundSize: 'cover',
                backgroundPositionY: '35%',
                backgroundPositionX: '50%',
                height: '33.3%',
                width: '100%',
              }}
            />
          ))} */}
        </Flex>
      </Flex>

      <ContentWrap sx={{ color: 'textWhite', py: 7 }}>
        {/* <Image
          src={projectData.thumbnail.src}
          alt={projectData.thumbnail.alt}
        /> */}
        <Heading as="h4" sx={{ mb: 6, textAlign: 'center' }}>
          {projectData.title}
        </Heading>
        <FlexCol
          margin={[3, 4]}
          gutter={[3, 4]}
          sx={{ mb: 7, justifyContent: 'center' }}
        >
          <FlexColItem cols={3} sx={{ mb: 8 }}>
            <div sx={{ mb: 6 }}>
              <Text sx={{ opacity: 0.6, display: 'block', mb: 2 }}>When</Text>
              <Text sx={{ fontSize: '28px' }}>{projectData.years}</Text>
            </div>
            <div>
              <Text sx={{ opacity: 0.6, display: 'block', mb: 2 }}>
                Client / employer
              </Text>
              <Text sx={{ fontSize: '26px' }}>{projectData.employer}</Text>
            </div>
          </FlexColItem>

          <FlexColItem cols={9} sx={{ mb: 8 }}>
            <Paragraph sx={{ fontSize: '26px', mb: 6, mt: 0 }}>
              {projectData.summary}
            </Paragraph>
            {projectData.body && <projectData.body />}
          </FlexColItem>

          {projectData.images.map(img => (
            <FlexColItem cols={10} key={img.src} sx={{ mb: [3, 4] }}>
              <Image
                src={img.src}
                alt=""
                // sx={{ borderRadius: 'large' }}
              />
            </FlexColItem>
          ))}
        </FlexCol>
      </ContentWrap>
    </PageWrap>
  );
};

ProjectPage.propTypes = {
  projectId: PropTypes.string,
};

export default ProjectPage;
