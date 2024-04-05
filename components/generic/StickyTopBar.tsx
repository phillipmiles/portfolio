import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const StickyContainer = ({
  children,
  style,
  onClose,
  onUpdate,
  onOpen,
  className,
  forcePosition, // 'open', 'close' or -200px'
  isRetractable = true, // If false disables javascript translation to only utilise css sticky.
}) => {
  const headerRef = useRef(null);
  const [headerTranslate, setHeaderTranslate] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const headerBoundingRect = headerRef.current.getBoundingClientRect();
    // console.log(headerTranslate, headerBoundingRect.height);
    if (onClose && headerTranslate === headerBoundingRect.height * -1) {
      onClose();
    }
    // const distanceFromTop = currentScrollY + headerBoundingRect.top;
    if (onOpen && headerTranslate === 0) {
      onOpen();
    }
    if (onUpdate) {
      onUpdate();
    }
  }, [onOpen, onClose, onUpdate, headerTranslate]);

  useEffect(() => {
    const handleScroll = (e) => {
      const headerBoundingRect = headerRef.current.getBoundingClientRect();
      const parentBoundingRect =
        headerRef.current.parentElement.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const scrollDelta = prevScrollY - window.scrollY;
      setHeaderTranslate((oldState) => {
        let newTranslate = oldState - scrollDelta * -1;
        console.log(oldState);
        if (headerBoundingRect.top <= 0) {
          if (prevScrollY < currentScrollY) {
            if (
              headerBoundingRect.bottom > 0 &&
              parentBoundingRect.bottom > 0 &&
              parentBoundingRect.bottom - headerBoundingRect.height <= 0
            ) {
              console.log(
                'LKETS GOT',

                oldState

                // oldState - scrollDelta,
                // oldState - scrollDelta / 10,
                // oldState - scrollDelta * 2

                // parentBoundingRect.bottom - headerBoundingRect.height
              );
              // return (
              //   (parentBoundingRect.bottom -
              //     headerBoundingRect.height -
              //     newTranslate) *
              //   -1
              // );
              return oldState;
              // - scrollDelta / 2
              // (parentBoundingRect.bottom - headerBoundingRect.height) +
              // scrollDelta
              return (
                oldState -
                scrollDelta *
                  // + parentBoundingRect.bottom)
                  -1
              );
            } else if (
              parentBoundingRect.bottom - headerBoundingRect.height <
              0
            ) {
              console.log(
                'yupo',
                headerBoundingRect.top,
                parentBoundingRect.bottom -
                  headerBoundingRect.height -
                  newTranslate
              );
              // return (
              //   (parentBoundingRect.bottom -
              //     headerBoundingRect.height -
              //     newTranslate) *
              //   -1
              // );
              return oldState;
              return (
                oldState -
                scrollDelta *
                  // + parentBoundingRect.bottom)
                  -1
              );
            } else if (headerBoundingRect.height * -1 >= newTranslate) {
              console.log('negative height');
              return headerBoundingRect.height * -1;
            } else {
              return newTranslate;
            }
          }
          // if (
          //   parentBoundingRect.bottom - headerBoundingRect.height < 0 &&
          //   prevScrollY < currentScrollY
          // ) {
          //   console.log('HER', parentBoundingRect.bottom);
          //   return parentBoundingRect.bottom * -1;
          // } else
          if (headerBoundingRect.height * -1 >= newTranslate) {
            console.log('negative height');
            return headerBoundingRect.height * -1;
          } else if (0 < newTranslate) {
            console.log('zero');
            return 0;
          } else {
            // NEED A CATCH BEFORE THISSSS
            console.log('dg');

            return newTranslate;
          }
        } else if (prevScrollY > currentScrollY) {
          return oldState;
        } else {
          return oldState;
        }
      });

      setPrevScrollY(window.scrollY);
    };

    if (isRetractable) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isRetractable, prevScrollY]);

  return (
    <div
      ref={headerRef}
      className={className}
      style={{
        ...style,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transform: isRetractable ? `translateY(${headerTranslate}px)` : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default StickyContainer;
