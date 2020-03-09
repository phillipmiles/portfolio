/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  ContentWrap,
  PageWrap,
  Heading,
  Text,
  Paragraph,
  Image,
  Carousel,
} from '../components';

const HomePage = ({ ...props }) => {
  return (
    <PageWrap {...props} sx={{ bg: 'black' }}>
      <div>
        <ContentWrap sx={{ color: 'textWhite' }}>
          <div sx={{ minHeight: '100vh', py: 8 }}>
            <Text
              sx={{ color: 'primary', variant: 'textStyles.heading4', mb: 4 }}
            >
              Phillip Miles.
            </Text>
            <Heading as="h2">
              I make things for
              <br /> the internet
            </Heading>
          </div>
          <Heading as="h5" sx={{ mt: -4, opacity: 0.8 }}>
            I've work on projects for...
          </Heading>
        </ContentWrap>
      </div>
      <div sx={{ bg: 'brands.verso.primary', color: 'textWhite' }}>
        <ContentWrap sx={{ py: 8 }}>
          <Text
            sx={{ color: 'primary', variant: 'textStyles.overline', mb: 4 }}
          >
            2019 / 2020
          </Text>
          <Heading as="h3">Verso Learning</Heading>
          <Paragraph sx={{ variant: 'textStyles.introduction' }}>
            Multiple education web apps developed with a shared component
            library.
          </Paragraph>
          <Carousel>
            <div>
              <Image
                src="https://www.phillipmiles.com/images/work/cpa/cpa_screen_ipad.jpg"
                sx={{ width: '100%' }}
              />
            </div>
            <div>Slide 2</div>
            <div>Slide 3</div>
          </Carousel>
        </ContentWrap>
      </div>
      <div sx={{ bg: 'brands.cpa.primaryLight', color: 'textBlack' }}>
        <ContentWrap sx={{ py: 8 }}>
          <Text
            sx={{ color: 'primary', variant: 'textStyles.overline', mb: 4 }}
          >
            2016 / 2017 / 2018
          </Text>
          <Heading as="h3">CPA</Heading>
          <Paragraph sx={{ variant: 'textStyles.introduction' }}>
            An award-winning new direction for educating financial advisors.
          </Paragraph>
          <Carousel>
            <div>
              <Image
                src="https://www.phillipmiles.com/images/work/cpa/cpa_screen_ipad.jpg"
                sx={{ width: '100%' }}
              />
            </div>
            <div>Slide 2</div>
            <div>Slide 3</div>
          </Carousel>
        </ContentWrap>
      </div>
      <div sx={{ bg: 'brands.coles.secondary', color: 'textWhite' }}>
        <ContentWrap sx={{ py: 8 }}>
          <Text
            sx={{ color: 'primary', variant: 'textStyles.overline', mb: 4 }}
          >
            2018
          </Text>
          <Heading as="h3">Coles</Heading>
          <Paragraph sx={{ variant: 'textStyles.introduction' }}>
            54,000 lines of code automated in building five branching learning
            modules.
          </Paragraph>
        </ContentWrap>
      </div>
    </PageWrap>
  );
};

export default HomePage;
