import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const StickyTopBar = ({ children }) => {
  const prevScrollY = useRef(0);

  const headerRef = useRef(null);
  const [headerTranslate, setHeaderTranslate] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const headerBoundingRect = headerRef.current.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const distanceFromTop = currentScrollY + headerBoundingRect.top;

      setHeaderTranslate((oldState) => {
        let newTranslate =
          oldState - (prevScrollY.current - currentScrollY) * -1;

        if (
          headerBoundingRect.top <= 0
          // &&
          // prevScrollY.current <= currentScrollY
        ) {
          if (headerBoundingRect.height * -1 > newTranslate) {
            console.log('hi');
            return headerBoundingRect.height * -1;
          } else if (0 < newTranslate) {
            console.log('hi3', newTranslate);
            return 0;
          } else {
            return newTranslate;
          }
        } else if (prevScrollY.current > currentScrollY) {
          console.log('nope2');
          return oldState;
        } else {
          console.log('nope');
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
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerTranslate]);

  return (
    <header
      ref={headerRef}
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        background: 'white',
        zIndex: 100,
        transform: `translateY(${headerTranslate}px)`,
      }}
    >
      {children}
    </header>
  );
};

export default StickyTopBar;
