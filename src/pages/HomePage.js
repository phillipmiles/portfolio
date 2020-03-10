/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
import imageVerso from '../assets/images/verso_charts.png';
import imageGametalk from '../assets/images/gametalk_devices.jpg';
import imageCPA from '../assets/images/cpa_screen_ipad.jpg';
import imageClearEars from '../assets/images/clear-ears_dash.jpg';
import imageColes from '../assets/images/coles_screen_menu.jpg';
import imageBinder from '../assets/images/binder_dash.jpg';

const HomePage = ({ ...props }) => {
  return (
    <PageWrap {...props} sx={{ bg: 'black' }}>
      <ContentWrap sx={{ color: 'textWhite' }}>
        {/* <Flex sx={{ py: 8 }}> */}
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
            <Preview>
              <PreviewBody sx={{ pr: 6, width: '40%' }}>
                <Heading as="h5">Verso Learning</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  Multiple education web apps developed with a shared component
                  library.
                </Paragraph>
                <Text sx={{ color: 'primary' }}>View</Text>
              </PreviewBody>
              <PreviewImage
                src={imageVerso}
                alt=""
                linkUrl="project/derp"
                sx={{ width: '60%' }}
              />
            </Preview>

            <Preview>
              <PreviewImage
                src={imageCPA}
                alt=""
                linkUrl="project/derp"
                sx={{ width: '60%' }}
              />
              <PreviewBody sx={{ pl: 6, width: '40%' }}>
                <Heading as="h5">CPA</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  An award-winning new direction for educating financial
                  advisors.
                </Paragraph>
              </PreviewBody>
            </Preview>

            <Preview>
              <PreviewBody sx={{ pr: 6, width: '40%' }}>
                <Heading as="h5">Coles</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  54,000 lines of code automated in building five branching
                  learning modules.
                </Paragraph>
                <Button
                  icon={faChevronRight}
                  // variant="text"
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
              <PreviewImage
                src={imageColes}
                alt=""
                linkUrl="project/derp"
                sx={{ width: '60%' }}
              />
            </Preview>

            <Preview>
              <PreviewImage
                src={imageBinder}
                alt=""
                linkUrl="project/derp"
                sx={{ width: '60%' }}
              />
              <PreviewBody sx={{ pl: 6, width: '40%' }}>
                <Heading as="h5">Binder</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  A clean and simple collaborative document editor.
                </Paragraph>
              </PreviewBody>
            </Preview>

            <Preview>
              <PreviewBody sx={{ pr: 6, width: '40%' }}>
                <Heading as="h5">Clear Ears</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  A bespoke learning portal that strives to educate for a world
                  of cleaner ears.
                </Paragraph>
                <Button
                  as="link"
                  icon={faChevronRight}
                  iconPosition="right"
                  sx={{ mt: 3 }}
                >
                  View
                </Button>
              </PreviewBody>
              <PreviewImage
                src={imageClearEars}
                alt=""
                linkUrl="project/derp"
                sx={{ width: '60%' }}
              />
            </Preview>

            <Preview>
              <PreviewImage
                src={imageGametalk}
                alt=""
                linkUrl="project/derp"
                sx={{ width: '60%' }}
              />
              <PreviewBody sx={{ pl: 6, width: '40%' }}>
                <Heading as="h5">Gametalk</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  A complete front-end / back-end solution for a community
                  message board on gaming.
                </Paragraph>
              </PreviewBody>
            </Preview>
          </div>
        </div>
        {/* </Flex> */}
      </ContentWrap>
    </PageWrap>
  );
};

export default HomePage;
