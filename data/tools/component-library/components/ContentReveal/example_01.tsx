import { useState } from 'react';
import s from './example_01.module.css';
import ContentReveal from '../../../../../components/generic/ContentReveal';

export const Example = () => {
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

      <button
        onClick={() => setIsVisible((state) => !state)}
        className={s.button}
      >
        {isVisible ? 'Close' : 'Open'}
      </button>
    </>
  );
};

export const code = [
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

      <button
        onClick={() => setIsVisible((state) => !state)}
        className={s.button}
      >
        {isVisible ? 'Close' : 'Open'}
      </button>
    </>
  );
}`,
  },
  {
    language: 'css',
    code: `.button {
  margin: 16px 0;
  padding: 8px 24px;
  background-color: var(--black-color);
  color: white;
}`,
  },
];
