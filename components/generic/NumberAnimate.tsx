import { useState, useEffect, useRef, useCallback } from 'react';

const calcIncrement = (
  startNumber: number,
  endNumber: number,
  duration: number,
  millisecondsSinceLastUpdate: number
) => {
  const delta = endNumber - startNumber;
  return (delta / duration) * millisecondsSinceLastUpdate;
};

const incrementNumber = (
  startNumber: number,
  endNumber: number,
  duration: number,
  incrementCallback: Function,
  currentNumber: number,
  lastTime: Date,
  updateSpeed: number,
  endCallback: Function
) => {
  const notCancelled = incrementCallback(currentNumber);

  if (currentNumber < endNumber && notCancelled) {
    const newTime = new Date();
    const millisecondsSinceLastUpdate = newTime.getTime() - lastTime.getTime();

    const increment = calcIncrement(
      startNumber,
      endNumber,
      duration,
      millisecondsSinceLastUpdate
    );

    const newNumber =
      currentNumber + increment > endNumber
        ? endNumber
        : currentNumber + increment;

    // Delay a bit before calling the function again for performance reasons
    setTimeout(function () {
      incrementNumber(
        startNumber,
        endNumber,
        duration,
        incrementCallback,
        newNumber,
        newTime,
        updateSpeed,
        endCallback
      );
    }, updateSpeed);
  } else {
    endCallback(endNumber);
  }
};

const isElementInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const commaNumber = (number: number) => {
  return number.toLocaleString('en-US');
};

const NumberAnimate = ({
  startNumber,
  endNumber,
  duration,
  ...props
}: {
  startNumber: number;
  endNumber: number;
  duration: number;
}) => {
  const elementRef = useRef(null);

  const [number, setNumber] = useState(endNumber);
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      incrementNumber(
        startNumber,
        endNumber,
        duration,
        (val: number) => {
          if (isAnimating) {
            return false;
          }
          setNumber(Math.floor(val));
          return true;
        },
        startNumber,
        new Date(),
        10,
        () => {
          setIsAnimating(false);
        }
      );
    }
  }, [startNumber, endNumber, duration, isAnimating]);

  const startAnimationInViewport = useCallback(() => {
    if (elementRef.current && isElementInViewport(elementRef.current)) {
      triggerAnimation();
    }
  }, [triggerAnimation]);

  useEffect(() => {
    window.addEventListener('scroll', startAnimationInViewport);

    return () => {
      window.removeEventListener('scroll', startAnimationInViewport);
    };
  }, [startAnimationInViewport]);

  useEffect(() => {
    console.log('wrong');
    if (elementRef.current && isElementInViewport(elementRef.current)) {
      triggerAnimation();
    }
  }, [triggerAnimation]);

  return (
    <span ref={elementRef} {...props}>
      {commaNumber(number)}
    </span>
  );
};

export default NumberAnimate;
