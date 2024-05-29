import Image from 'next/image';
import { useState } from 'react';
import ContentSlider from '../../../../../components/generic/ContentSlider';
import s from './example_01.module.css';

export const Example = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlide = (newIndex: number) => {
    setSlideIndex(newIndex);
  };

  return (
    <div>
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
          <div className={s.imageContainer}>
            <Image
              src="/images/projects/woodfort/photos/genesis_walnut/power1_walnut.jpg"
              alt=""
              fill={true}
              className={s.image}
            />
          </div>
          <p>
            The relative motion or tendency toward such motion between two
            surfaces is resisted by friction. Friction may damage or
            &lsquo;wear&rsquo; the surfaces in contact. However, wear can be
            reduced by lubrication. The science and technology of friction,
            lubrication, and wear is known as tribology.
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
      <div className={s.buttonContainer}>
        <button
          onClick={() => changeSlide(0)}
          className={s.button}
          style={{ opacity: slideIndex === 0 ? 1 : 0.8 }}
        >
          Slide 1
        </button>
        <button
          onClick={() => changeSlide(1)}
          className={s.button}
          style={{ opacity: slideIndex === 1 ? 1 : 0.8 }}
        >
          Slide 2
        </button>
        <button
          onClick={() => changeSlide(2)}
          className={s.button}
          style={{ opacity: slideIndex === 2 ? 1 : 0.8 }}
        >
          Slide 3
        </button>
      </div>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const Example = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlide = (newIndex: number) => {
    setSlideIndex(newIndex);
  };

  return (
    <div>
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
          <div className={s.imageContainer}>
            <Image
              src="/images/projects/woodfort/photos/genesis_walnut/power1_walnut.jpg"
              alt=""
              fill={true}
              className={s.image}
            />
          </div>
          <p>
            The relative motion or tendency toward such motion between two
            surfaces is resisted by friction. Friction may damage or
            &lsquo;wear&rsquo; the surfaces in contact. However, wear can be
            reduced by lubrication. The science and technology of friction,
            lubrication, and wear is known as tribology.
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
      <div className={s.buttonContainer}>
        <button
          onClick={() => changeSlide(0)}
          className={s.button}
          style={{ opacity: slideIndex === 0 ? 1 : 0.8 }}
        >
          Slide 1
        </button>
        <button
          onClick={() => changeSlide(1)}
          className={s.button}
          style={{ opacity: slideIndex === 1 ? 1 : 0.8 }}
        >
          Slide 2
        </button>
        <button
          onClick={() => changeSlide(2)}
          className={s.button}
          style={{ opacity: slideIndex === 2 ? 1 : 0.8 }}
        >
          Slide 3
        </button>
      </div>
    </div>
  );
}`,
  },
  {
    language: 'css',
    code: `.buttonContainer {
  display: flex;
  padding: 16px 0;
  gap: 8px;
}

.button {
  padding: 8px 24px;
  background-color: var(--black-color);
  color: white;
}

.imageContainer {
  position: relative;
  height: 300px;
  margin-bottom: 16px;
}

.image {
  object-fit: cover;
  height: 100%;
}
`,
  },
];
