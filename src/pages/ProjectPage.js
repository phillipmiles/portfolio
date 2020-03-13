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
} from '../components';

const ProjectPage = ({ projectId, ...props }) => {
  const projectData = projectsData.find(project => project.id === projectId);

  return (
    <PageWrap {...props} sx={{ bg: 'black' }}>
      {/* <ContentWrap>
        <Flex sx={{ alignItems: 'center', height: 7 }}>
          <Text sx={{ color: 'primary', fontSize: '21px' }}>Phillip Miles</Text>
        </Flex>
      </ContentWrap> */}
      <Flex sx={{ width: '100%', height: '40vw', maxHeight: '76vh' }}>
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
            When
          </FlexColItem>

          <FlexColItem cols={9} sx={{ mb: 8 }}>
            <Paragraph sx={{ fontSize: '26px', mb: 6 }}>
              {projectData.summary}
            </Paragraph>
            {projectData.body && <projectData.body />}
          </FlexColItem>

          {projectData.images.map(img => (
            <FlexColItem cols={10} key={img.src} sx={{ mb: [3, 4] }}>
              <Image src={img.src} alt="" />
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
