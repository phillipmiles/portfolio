import Image from 'next/image';
import { useState } from 'react';
import ContentSlider from '../../../components/generic/ContentSlider';
// import s from './detachedHoverEffect_styles.module.css';

export const Example = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlide = (newIndex: number) => {
    setSlideIndex(newIndex);
  };

  return (
    <div style={{ width: '100%' }}>
      <ContentSlider currentIndex={slideIndex}>
        <div>
          <h5>Slide 1</h5>
          <p>
            Sliding is a type of frictional motion between two surfaces in
            contact. This can be contrasted to rolling motion.
          </p>
        </div>
        <div>
          <h5>Slide 2</h5>

          <div style={{ position: 'relative', height: '300px' }}>
            <Image
              src="/images/woodfort_walnut.jpeg"
              alt=""
              fill={true}
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </div>
          <p>
            The relative motion or tendency toward such motion between two
            surfaces is resisted by friction. Friction may damage or 'wear' the
            surfaces in contact. However, wear can be reduced by lubrication.
            The science and technology of friction, lubrication, and wear is
            known as tribology.
          </p>
        </div>
        <div>
          <h5>Slide 3</h5>
          <p>
            Sliding may occur between two objects of arbitrary shape, whereas
            rolling friction is the frictional force associated with the
            rotational movement of a somewhat disclike or other circular object
            along a surface. Generally the frictional force of rolling friction
            is less than that associated with sliding kinetic friction. Typical
            values for the coefficient of rolling friction are less than that of
            sliding friction Correspondingly sliding friction typically produces
            greater sound and thermal bi-products. One of the most common
            examples of sliding friction is the movement of braking motor
            vehicle tires on a roadway, a process which generates considerable
            heat and sound, and is typically taken into account in assessing the
            magnitude of roadway noise pollution.
          </p>
        </div>
      </ContentSlider>
      <button onClick={() => changeSlide(0)}>Slide 1</button>
      <button onClick={() => changeSlide(1)}>Slide 2</button>
      <button onClick={() => changeSlide(2)}>Slide 3</button>
    </div>
  );
};

export const exampleCode = [
  {
    language: 'jsx',
    code: `const [slideIndex, setSlideIndex] = useState(0);

const changeSlide = (newIndex: number) => {
  setSlideIndex(newIndex);
};

return (
  <div>
    <button onClick={() => changeSlide(0)}>Slide 1</button>
    <button onClick={() => changeSlide(1)}>Slide 2</button>
    <button onClick={() => changeSlide(2)}>Slide 3</button>
    <div style={{ width: 500 }}>
      <ContentSlider currentIndex={slideIndex}>
        <div>
          <h5>Slide 1</h5>
          <p>
            Sliding is a type of frictional motion between two surfaces in
            contact. This can be contrasted to rolling motion. Both types of
            motion may occur in bearings.
          </p>
        </div>
        <div>
          <h5>Slide 2</h5>
          <p>
            he relative motion or tendency toward such motion between two
            surfaces is resisted by friction. Friction may damage or 'wear'
            the surfaces in contact. However, wear can be reduced by
            lubrication. The science and technology of friction, lubrication,
            and wear is known as tribology.
          </p>
        </div>
        <div>
          <h5>Slide 3</h5>
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
    </div>
  </div>
);`,
  },
  {
    language: 'css',
    code: `.contentStyle {
  background-color: black;
  color: white;
  padding: 24px;
}

.hoverEffect::before {
  inset: 0 0;
  border: 2px solid black;
  opacity: 0;
  transition-property: opacity, inset;
  transition-duration: 200ms;
}

.hoverEffect:hover::before {
  opacity: 1;
  inset: -8px -8px;
}`,
  },
];
