import type { NextPage } from 'next';
import { useState } from 'react';
import ContentReveal from '../components/generic/ContentReveal';
import ContentSlider from '../components/generic/ContentSlider';
import Page from '../components/generic/page';
import PageWithFooter from '../components/generic/PageWithFooter';

const Home: NextPage = () => {
  const [show, setShow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <PageWithFooter>
      <button onClick={() => setShow((prev) => !prev)}>Show</button>
      <div>
        <ContentSlider currentIndex={currentSlide}>
          <div>
            <h1>Slide 1</h1>
            <p>
              Sliding is a type of frictional motion between two surfaces in
              contact. This can be contrasted to rolling motion. Both types of
              motion may occur in bearings.
            </p>
          </div>
          <div>
            <h1>Slide 2</h1>
            <p>
              he relative motion or tendency toward such motion between two
              surfaces is resisted by friction. Friction may damage or 'wear'
              the surfaces in contact. However, wear can be reduced by
              lubrication. The science and technology of friction, lubrication,
              and wear is known as tribology.
            </p>
          </div>
          <div>
            <h1>Slide 3</h1>
            <p>
              Sliding may occur between two objects of arbitrary shape, whereas
              rolling friction is the frictional force associated with the
              rotational movement of a somewhat disclike or other circular
              object along a surface. Generally the frictional force of rolling
              friction is less than that associated with sliding kinetic
              friction. Typical values for the coefficient of rolling friction
              are less than that of sliding friction Correspondingly sliding
              friction typically produces greater sound and thermal bi-products.
              One of the most common examples of sliding friction is the
              movement of braking motor vehicle tires on a roadway, a process
              which generates considerable heat and sound, and is typically
              taken into account in assessing the magnitude of roadway noise
              pollution.
            </p>
          </div>
        </ContentSlider>
        <button onClick={() => setCurrentSlide(0)}>Go to slide 1</button>
        <button onClick={() => setCurrentSlide(1)}>Go to slide 2</button>
        <button onClick={() => setCurrentSlide(2)}>Go to slide 3</button>
      </div>
      <ContentReveal visible={show}>
        <div style={{ width: '200px', backgroundColor: 'red' }}>
          <p>hello world</p>
          <div style={{ backgroundColor: '#Ccc', flexGrow: 1 }}>test</div>
        </div>
      </ContentReveal>
      <div>s</div>
    </PageWithFooter>
  );
};

export default Home;
