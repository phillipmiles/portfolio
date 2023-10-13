import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const RetractableStickyElement = ({
  children,
  style,
  isRetractable = true, // If false disables javascript translation to only utilise css sticky.
}) => {
  const headerRef = useRef(null);
  const [headerTranslate, setHeaderTranslate] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const headerBoundingRect = headerRef.current.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const distanceFromTop = currentScrollY + headerBoundingRect.top;

      setHeaderTranslate((oldState) => {
        let newTranslate = oldState - (prevScrollY - window.scrollY) * -1;

        if (headerBoundingRect.top <= 0) {
          if (headerBoundingRect.height * -1 >= newTranslate) {
            return headerBoundingRect.height * -1;
          } else if (0 < newTranslate) {
            return 0;
          } else {
            return newTranslate;
          }
        } else if (prevScrollY > currentScrollY) {
          return oldState;
        } else {
          return oldState;
        }
        // const newTranslate = oldState - currentScrollY + prevScrollY.current;
        // const headerHeight = headerRef.current.clientHeight;

        // if (headerHeight * -1 > newTranslate) {
        //   return headerHeight * -1;
        // } else if (0 < newTranslate) {
        //   return 0;
        // } else {
        //   return newTranslate;
        // }
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
      style={{
        ...style,
        position: 'sticky',
        top: 0,
        width: '100%',
        background: 'white',
        zIndex: 100,
        transform: isRetractable ? `translateY(${headerTranslate}px)` : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default RetractableStickyElement;
