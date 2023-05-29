import { useState } from 'react';
import ContentReveal from '../../../components/generic/ContentReveal';

export const ContentRevealExample = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <ContentReveal visible={isVisible}>
        <p>
          But though Death searched for the third brother for many years, he was
          never able to find him. It was only when he attained a great age that
          the youngest brother finally took off the Cloak of Invisibility and
          gave it to his son. And then he greeted Death as an old friend, and
          went with him gladly, and, equals, they departed this life.
        </p>
      </ContentReveal>

      <button onClick={() => setIsVisible((state) => !state)}>
        {isVisible ? 'Close' : 'Open'}
      </button>
    </>
  );
};

export const ContentRevealExample2 = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <h5>Reveal horizontally</h5>
      <ContentReveal visible={isVisible} revealAxis="x">
        <p>
          But though Death searched for the third brother for many years, he was
          never able to find him. It was only when he attained a great age that
          the youngest brother finally took off the Cloak of Invisibility and
          gave it to his son. And then he greeted Death as an old friend, and
          went with him gladly, and, equals, they departed this life.
        </p>
      </ContentReveal>

      <button onClick={() => setIsVisible((state) => !state)}>
        {isVisible ? 'Close' : 'Open'}
      </button>
    </>
  );
};

export const contentRevealCode = [
  {
    language: 'jsx',
    code: `const Example = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <ContentReveal visible={isVisible}>
        <p>
          But though Death searched for the third brother for many years, he was
          never able to find him. It was only when he attained a great age that
          the youngest brother finally took off the Cloak of Invisibility and
          gave it to his son. And then he greeted Death as an old friend, and
          went with him gladly, and, equals, they departed this life.
        </p>
      </ContentReveal>

      <button onClick={() => setIsVisible((state) => !state)}>
        {isVisible ? 'Close' : 'Open'}
      </button>
    </>
  );
};`,
  },
];

export const contentRevealCode2 = [
  {
    language: 'jsx',
    code: `const ContentRevealExample2 = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <h5>Reveal horizontally</h5>
      <ContentReveal visible={isVisible} revealAxis="x">
        <p>
          But though Death searched for the third brother for many years, he was
          never able to find him. It was only when he attained a great age that
          the youngest brother finally took off the Cloak of Invisibility and
          gave it to his son. And then he greeted Death as an old friend, and
          went with him gladly, and, equals, they departed this life.
        </p>
      </ContentReveal>

      <button onClick={() => setIsVisible((state) => !state)}>
        {isVisible ? 'Close' : 'Open'}
      </button>
    </>
  );
};`,
  },
];
