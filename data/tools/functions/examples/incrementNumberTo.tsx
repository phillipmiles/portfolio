import { useCallback, useEffect, useState } from 'react';
import { incrementNumberTo } from '../../../../utils/change';

export const Example = () => {
  const startNumber = 0;
  const [number, setNumber] = useState(startNumber);
  const [isAnimating, setIsAnimating] = useState(false);

  const incrementCallback = useCallback(
    (val) => {
      if (isAnimating) {
        console.log('sdg');
        return false;
      }
      setNumber(Math.floor(val));
      return true;
    },
    [isAnimating]
  );

  const triggerAnimation = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    incrementNumberTo(
      startNumber,
      200,
      2000,
      incrementCallback,
      startNumber,
      new Date(),
      10,
      () => {
        setIsAnimating(false);
      }
    );
  }, [isAnimating, incrementCallback]);

  return (
    <div>
      <p>{number}</p>
      <button onClick={triggerAnimation}>Start</button>
    </div>
  );
};

export const code = [
  {
    language: 'js',
    code: `roundDecimalTo(0.373, 1);
roundDecimalTo(4.5216, 3);
roundDecimalTo(4.5216, 0);`,
  },
];