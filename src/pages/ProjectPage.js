/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';
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
  ButtonClose,
} from '../components';

const ProjectPage = ({ projectId, ...props }) => {
  const projectData = projectsData.find(project => project.id === projectId);

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

      <ButtonClose
        sx={{ position: 'fixed', top: 0, right: 0 }}
        to={'/'}
        state={{ fromProjectId: projectData.id }}
      />
      <Flex
        sx={{
          width: '100%',
          height: '44vw',
          maxHeight: '76vh',
          minHeight: 11,
        }}
      >
        <div
          sx={{
            width:
              projectData.cover.length > 2 ? ['100%', '100%', '80%'] : '100%',
            height: '100%',
            backgroundImage: `url('${projectData.cover[0].src}')`,
            backgroundSize: 'cover',
            backgroundPositionY: '35%',
            backgroundPositionX: '50%',
          }}
        />
        {projectData.cover.length > 2 && (
          <Flex
            sx={{
              flexDirection: 'column',
              width: '40%',
              height: '100%',
              display: ['none', 'none', 'flex'],
            }}
          >
            <div
              sx={{
                backgroundImage: `url('${projectData.cover[1].src}')`,
                backgroundSize: 'cover',
                backgroundPositionY: '35%',
                backgroundPositionX: '50%',
                height: '50%',
                width: '100%',
              }}
            />
            <div
              sx={{
                backgroundImage: `url('${projectData.cover[2].src}')`,
                backgroundSize: 'cover',
                backgroundPositionY: '35%',
                backgroundPositionX: '50%',
                height: '50%',
                width: '100%',
              }}
            />
          </Flex>
        )}
      </Flex>

      <ContentWrap sx={{ color: 'textWhite', py: 7 }}>
        <Heading as="h4" sx={{ mb: 6, textAlign: 'center' }}>
          {projectData.title}
        </Heading>
        <FlexCol
          margin={0}
          gutter={[3, 4]}
          sx={{ mb: 7, justifyContent: 'center' }}
        >
          <FlexColItem
            cols={[4, 8, 3]}
            sx={{
              flexDirection: ['row', 'row', 'column'],
              display: ['none', 'none', 'flex'],
            }}
          >
            <div sx={{ mb: 6, mr: [7, 7, 0] }}>
              <Text sx={{ opacity: 0.6, display: 'block', mb: 2 }}>When</Text>
              <Text sx={{ fontSize: '28px' }}>{projectData.years}</Text>
            </div>
            <div>
              <Text sx={{ opacity: 0.6, display: 'block', mb: 2 }}>
                Employer / client
              </Text>
              <Text sx={{ fontSize: '26px' }}>{projectData.employer}</Text>
            </div>
          </FlexColItem>

          <FlexColItem cols={9} sx={{ mb: [4, 4, 8] }}>
            <Paragraph sx={{ fontSize: ['26px', '26px'], mb: 6, mt: 0 }}>
              {projectData.summary}
            </Paragraph>
            {projectData.body && <projectData.body />}
          </FlexColItem>

          <FlexColItem
            cols={[12]}
            sx={{
              flexDirection: 'row',
              display: ['flex', 'flex', 'none'],
              mb: 6,
            }}
          >
            <div sx={{ mb: 6, mr: 7 }}>
              <Text sx={{ opacity: 0.6, display: 'block', mb: 2 }}>When</Text>
              <Text sx={{ fontSize: '28px' }}>{projectData.years}</Text>
            </div>
            <div>
              <Text sx={{ opacity: 0.6, display: 'block', mb: 2 }}>
                Employer / client
              </Text>
              <Text sx={{ fontSize: '26px' }}>{projectData.employer}</Text>
            </div>
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
