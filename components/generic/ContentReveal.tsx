/* A utility component for revealing content by vertically sliding it open. */
import { useRef, useState, useLayoutEffect } from 'react';

interface Props {
  /** Is the content to sit within the expander */
  children: React.ReactNode;
  /** Visibility state of the content. */
  visible?: boolean;
  /** Set on which axis content should be revealed */
  revealAxis?: 'y' | 'x';
  /** Controls whether content should reveal with a fade effect */
  applyFadeEffect?: boolean;
  /** Set the revealing duration in milliseconds */
  animationOpenDuration?: number;
  /** Set the closing duration in milliseconds */
  animationCloseDuration?: number;
  /** Set the fade in duration in milliseconds */
  animationFadeInDuration?: number;
  /** Set the fade out duration in milliseconds */
  animationFadeOutDuration?: number;
  /** Experimental prop that may improve performance when true. Will
   * keep content in the DOM when hidden. */
  keepContentInDom?: boolean;
}

const ContentReveal = ({
  children,
  visible = false,
  revealAxis = 'y',
  applyFadeEffect = true,
  animationCloseDuration = 250,
  animationOpenDuration = 300,
  animationFadeInDuration = 250,
  animationFadeOutDuration = 200,
  keepContentInDom = false,
  ...props
}: Props) => {
  const container = useRef<HTMLDivElement>(null);
  const parentContainer = useRef<HTMLDivElement>(null);

  const [currentDimension, setCurrentDimension] = useState(
    visible ? 'auto' : '0px'
  );
  const [stageDimension, setStageDimension] = useState(
    visible ? 'auto' : '0px'
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(visible);

  useLayoutEffect(() => {
    const findDimension = () => {
      if (!parentContainer.current) return;
      if (!container.current) return;
      if (revealAxis === 'x') {
        const parentWidth = parentContainer.current.scrollWidth;
        const componentWidth = container.current.scrollWidth;
        return parentWidth > 0 ? parentWidth : componentWidth;
      }
      const componentWidth = container.current.scrollHeight;
      return componentWidth;
    };

    const animateSliderOpen = () => {
      const dimension = findDimension();

      setStageDimension(`${dimension}px`);
      setCurrentDimension(`0px`);
      setIsAnimating(true);
      requestAnimationFrame(() => {
        setCurrentDimension(`${dimension}px`);
        setIsOpen(true);
        setTimeout(() => {
          setIsAnimating(false);
          // Set sizes back to auto so it remains dynamic.
          setStageDimension('auto');
          setCurrentDimension('auto');
        }, animationOpenDuration);
      });
    };

    const animateSliderClosed = () => {
      const dimension = findDimension();

      setStageDimension(`${dimension}px`);
      setCurrentDimension(`${dimension}px`);
      setIsAnimating(true);
      requestAnimationFrame(() => {
        setIsOpen(false);
        setCurrentDimension('0px');
        setTimeout(() => {
          setStageDimension('auto');
          setIsAnimating(false);
        }, animationCloseDuration);
      });
    };

    if (!isOpen && visible && !isAnimating) {
      requestAnimationFrame(() => {
        animateSliderOpen();
      });
    } else if (isOpen && !visible && !isAnimating) {
      requestAnimationFrame(() => {
        animateSliderClosed();
      });
    }
  }, [
    animationCloseDuration,
    animationOpenDuration,
    isOpen,
    visible,
    currentDimension,
    revealAxis,
    isAnimating,
  ]);

  return (
    <div ref={parentContainer} {...props}>
      <div
        style={{
          height: revealAxis === 'y' ? currentDimension : 'auto',
          width: revealAxis === 'x' ? currentDimension : 'auto',
          position: 'relative',
          overflow: 'hidden',
          transitionProperty: 'width, height',
          transitionDuration: isOpen
            ? `${animationOpenDuration}ms`
            : `${animationCloseDuration}ms`,
          // transitionTimingFunction: (theme) => theme.easing.standard,
        }}
      >
        {(keepContentInDom || visible || isAnimating || isOpen) && (
          <div
            ref={container}
            style={{
              height: revealAxis === 'y' ? stageDimension : 'auto',
              width: revealAxis === 'x' ? stageDimension : 'auto',
              overflow: 'auto',
              ...(applyFadeEffect && {
                opacity: isOpen ? 1 : 0,
                transitionProperty: 'opacity',
                transitionDuration: isOpen
                  ? `${animationFadeInDuration}ms`
                  : `${animationFadeOutDuration}ms`,
                // transitionTimingFunction: (theme) => theme.easing.standard,
              }),
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentReveal;
