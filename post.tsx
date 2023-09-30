// import Paragraph from '../components/Paragraph';
// import Image from '../components/Image';
import RenderMarkdown from '../components/RenderMarkdown';
// import Header from '../components/Header';
// import Heading from '../components/Heading';
// import Text from '../components/Text';
import Flex from '../components/generic/Flex';
import PageContentWrap from '../components/generic/PageContentWrap';
// import { imgProjectsThumb } from '../assets/assetLoader';
// import ContentWrap from '../components/ContentWrap';
// import SubscribeContentBlock from '../components/SubscribeContentBlock';
// import Footer from '../components/Footer';
// import ButtonText from '../components/ButtonText';
// import FontAwesomeIcon from '../components/FontAwesomeIcon';
// import { faArrowRight, faShare } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

import content from '../data/posts/posts';

const Post = ({
  title,
  description,
  tag,
  topics,
  readingLength,
  timePublished,
  // content,
  thumbSrc,
}) => {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <PageContentWrap
          style={{
            marginTop: 7,
            marginBottom: 8,
            color: 'black',
            textAlign: 'center',
          }}
        >
          <Flex>
            <div
              style={{
                maxWidth: '70%',
                margin: 'auto',
              }}
            >
              <div style={{ marginBottom: 4 }}>
                <span
                  // variant="detail"
                  style={{
                    backgroundColor: 'green',
                    color: 'primary',
                    padding: '16px 8px',
                  }}
                >
                  {tag}
                </span>
              </div>
              <h1 style={{ marginBottom: 5 }}>{title}</h1>
              {/* <Heading
                as="h1"
                style={{
                  marginBottom: 5,
                  variant: ['text.heading4', 'text.heading3', 'text.heading1'],
                }}
              >
                {title}
              </Heading> */}
              <p
                style={{
                  marginBottom: 5,
                  // color: 'neutral.7',
                  color: 'red',
                }}
              >
                {description}
              </p>
              <Flex
                style={{
                  // color: 'neutral.7',
                  color: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  // variant="detail"
                  style={{
                    marginRight: 3,
                  }}
                >
                  {timePublished}
                </span>
                <span
                  // variant="detail"
                  style={{
                    marginRight: 3,
                    marginLeft: 3,
                  }}
                >
                  {readingLength} read
                </span>
              </Flex>
            </div>
          </Flex>
        </PageContentWrap>
      </header>

      <PageContentWrap style={{ padding: 0 }}>
        <div
          style={{
            backgroundImage: `url('${thumbSrc}')`,
            backgroundPosition: 'center',
            width: '100%',
            height: '512px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </PageContentWrap>
      <PageContentWrap style={{ paddingTop: 8 }}>
        <div>
          <RenderMarkdown content={content} />
        </div>
      </PageContentWrap>

      {/* <ContentWrap maxWidth={'contentSmall'} style={{ pb: 9 }}>
        <Flex
          style={{
            my: 6,
            alignItems: 'center',
            color: 'primary',
            justifyContent: 'space-between',
          }}
        >
          <Flex style={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowRight} />
            <ButtonText to={''} style={{ ml: 3 }}>
              Discuss on Twitter
            </ButtonText>
          </Flex>
          <Flex style={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faTwitter} style={{ mr: 3 }} />
            <FontAwesomeIcon icon={faFacebook} style={{ mr: 3 }} />
            <FontAwesomeIcon icon={faShare} />
          </Flex>
        </Flex>
        <Paragraph style={{ mb: 5 }}>
          Read more articles relating to topics...
        </Paragraph>
        <Flex style={{ flexWrap: 'wrap' }}>
          {topics.map((topic) => (
            <div
              key={topic.title}
              style={{
                color: 'primary',
                borderRadius: 8,
                bg: 'neutral.9',
                px: 3,
                py: 3,
                mr: '12px',
                mb: '12px',
                flexShrink: 0,
                flexGrow: 0,
              }}
            >
              <Text variant="detail">
                {topic.title} ({topic.count})
              </Text>
            </div>
          ))}
        </Flex>
      </ContentWrap> */}

      {/* <SubscribeContentBlock /> */}
      {/* <Footer /> */}
    </div>
  );
};

Post.defaultProps = {
  topics: [],
};

export default Post;
