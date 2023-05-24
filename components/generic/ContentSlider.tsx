import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from 'react';

interface Props {
  /** An array of carosel slides */
  children: React.ReactNode;
  /** Specifies which carosel item should be in view */
  currentIndex: number;
  /** Controls whether content should transition with a fade effect */
  applyFadeEffect?: boolean;
  /** Set the resize animation duration in milliseconds */
  animationResizeDuration?: number;
  /** Set the fade animation duration in milliseconds */
  animationFadeDuration?: number;
  /** Set the transiton slide animation duration in milliseconds */
  animationSlideDuration?: number;
  /** Will cause hidden slides to unmount from the DOM. */
  unmountWhenHidden?: boolean;
}

const ContentSlider = ({
  children,
  currentIndex = 0,
  applyFadeEffect = true,
  animationResizeDuration = 500,
  animationFadeDuration = 400,
  animationSlideDuration = 400,
  unmountWhenHidden = true,
  ...props
}: Props) => {
  /* Height of the carosel track */
  const [height, setHeight] = useState('auto');
  /* Flag for if the the carosel is currently animating a transition */
  const [isAnimating, setIsAnimating] = useState(false);
  /* Reference to the previous index for transitioning away from */
  const [previousIndex, setPreviousIndex] = useState(currentIndex);
  /* Holds the timeout that runs the duraction of a transition animation */

  const [transitionToIndex, setTransitionToIndex] = useState(currentIndex);

  const animationEndTimeout = useRef<any>();
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const endAnimation = () => {
      setPreviousIndex(currentIndex);
      setHeight('auto');
      setIsAnimating(false);
    };

    const updateCaroselHeight = () => {
      if (!trackRef.current) return;

      const currentCaroselItem =
        trackRef.current.children[currentIndex].children[0];
      const transitionedCaroselItem =
        trackRef.current.children[previousIndex].children[0];

      // Request animation frame caused flashes
      // requestAnimationFrame(() => {
      // Set current height ready for animating from
      setHeight(`${transitionedCaroselItem.scrollHeight}px`);

      requestAnimationFrame(() => {
        // Set new height for animating to
        setHeight(`${currentCaroselItem.scrollHeight}px`);
        animationEndTimeout.current = setTimeout(
          endAnimation,
          animationResizeDuration
        );
      });
      // });
    };

    if (!isAnimating && previousIndex !== currentIndex) {
      console.log('lets go');
      clearTimeout(animationEndTimeout.current);
      setTransitionToIndex(currentIndex);
      setIsAnimating(true);
      updateCaroselHeight();
    }
  }, [
    isAnimating,
    currentIndex,
    height,
    previousIndex,
    animationResizeDuration,
    animationEndTimeout,
  ]);

  useEffect(() => {
    return () => {
      clearTimeout(animationEndTimeout.current);
    };
  }, []);

  // Checks if number (n) is between values (a) and (b).
  const isBetween = (n: number, a: number, b: number) => {
    return (n - a) * (n - b) <= 0;
  };

  const findItemPosition = (index: number) => {
    return `${(index - transitionToIndex) * 100}%`;
  };

  return (
    <div
      {...props}
      style={{
        overflow: unmountWhenHidden && !isAnimating ? 'visible' : 'hidden',
        width: '100%',
        height,
        position: 'relative',
        transition: `height ${animationResizeDuration}ms`,
      }}
      ref={trackRef}
    >
      {React.Children.map(children, (item, index) => (
        <div
          style={{
            position: 'relative',
            width: '100%',
            transition: `opacity ${animationFadeDuration}ms`,
            opacity: applyFadeEffect && transitionToIndex !== index ? 0 : 1,
          }}
        >
          <div
            style={{
              // Used to stop collapsing margins on children content. It clashes overflow hidden on root div
              // already does this but unMountWhenHidden toggles it on an off so we need this hard kill
              // on the effect here.
              overflow: 'hidden',

              position:
                !isAnimating && transitionToIndex === index
                  ? 'static'
                  : 'absolute',
              width: '100%',
              transition: `transform ${animationSlideDuration}ms cubic-bezier(0.21, 0.61, 0.15, 1)`,
              transform:
                !isAnimating && transitionToIndex === index
                  ? 'translateX(0)'
                  : `translateX(${findItemPosition(index)})`,
            }}
          >
            {isBetween(index, previousIndex, transitionToIndex) && (
              <Fragment>{item}</Fragment>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentSlider;
