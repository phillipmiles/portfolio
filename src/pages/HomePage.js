/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import {
  ContentWrap,
  PageWrap,
  Heading,
  Text,
  Paragraph,
  Preview,
  PreviewImage,
  PreviewBody,
} from '../components';

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
            {/* <Parallax className="custom-class2" opacity={[1, 0]}> */}
            <div sx={{ mt: -7 }}>
              <Text
                sx={{
                  color: 'primary',
                  variant: 'textStyles.heading4',
                  mb: 4,
                }}
              >
                Phillip Miles.
              </Text>
              <Heading as="h2">
                I make things for
                <br /> the internet
              </Heading>
            </div>
            {/* </Parallax> */}
          </Flex>
          {/* <Parallax className="custom-class" x={[20, -20]} tagOuter="figure">
              <Flex>
                <Image
                  src="https://www.phillipmiles.com/images/work/cpa/cpa_screen_ipad.jpg"
                  sx={{ maxWidth: 11 }}
                />
                <Image
                  src="https://www.phillipmiles.com/images/work/cpa/cpa_screen_ipad.jpg"
                  sx={{ maxWidth: 11 }}
                />
                <Image
                  src="https://www.phillipmiles.com/images/work/cpa/cpa_screen_ipad.jpg"
                  sx={{ maxWidth: 11 }}
                />
              </Flex>
            </Parallax> */}
          <div sx={{ pb: 8, mt: 3 }}>
            <Preview sx={{ mb: 9 }}>
              <PreviewBody sx={{ pr: 6 }}>
                <Heading as="h5">Verso Learning</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  Multiple education web apps developed with a shared component
                  library.
                </Paragraph>
                <Text sx={{ color: 'primary' }}>View</Text>
              </PreviewBody>
              <PreviewImage src="/images/verso_charts.png" />
            </Preview>

            <Preview>
              <PreviewImage src="https://www.phillipmiles.com/images/work/cpa/cpa_screen_ipad.jpg" />
              <PreviewBody sx={{ pl: 6 }}>
                <Heading as="h5">CPA</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  An award-winning new direction for educating financial
                  advisors.
                </Paragraph>
              </PreviewBody>
            </Preview>

            <Preview>
              <PreviewBody sx={{ pr: 6 }}>
                <Heading as="h5">Coles</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  54,000 lines of code automated in building five branching
                  learning modules.
                </Paragraph>
              </PreviewBody>
              <PreviewImage src="/images/coles_screen_menu.jpg" />
            </Preview>

            <Preview>
              <PreviewImage src="/images/binder_dash.jpg" />
              <PreviewBody sx={{ pl: 6 }}>
                <Heading as="h5">Binder</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  A clean and simple collaborative document editor.
                </Paragraph>
              </PreviewBody>
            </Preview>

            <Preview>
              <PreviewBody sx={{ pr: 6 }}>
                <Heading as="h5">Clear Ears</Heading>
                <Paragraph sx={{ fontSize: '21px' }}>
                  A bespoke learning portal that strives to educate for a world
                  of cleaner ears.
                </Paragraph>
              </PreviewBody>
              <PreviewImage src="/images/clear-ears_dash.jpg" />
            </Preview>

            <Preview>
              <PreviewImage src="/images/gametalk_devices.jpg" />
              <PreviewBody sx={{ pl: 6 }}>
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
