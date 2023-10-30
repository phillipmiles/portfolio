import { useEffect, useRef, useState } from 'react';
import s from './InfinityPanner.module.css';

const useInterval = (callback, delay) => {
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

interface Props {
  children: Array<JSX.Element>;
  href: string;
  className?: string;
  style: object;
}

const isWithin = (element) => {};

const InfinityPanner = ({
  children,
  href,
  className,
  style,
  speed = '6000ms',
  translateX = -1,
  translateY = 0,
  ...props
}: Props): JSX.Element => {
  const containerRef = useRef<HTMLInputElement>(null);
  const [appendElements, setAppendElements] = useState([]);

  // LOOKAT THIS
  // https://www.michellemcquaid.com/
  // https://www.michellemcquaid.com/
  // https://www.michellemcquaid.com/
  // https://www.michellemcquaid.com/
  // Clone some of the slides the equit to the parents width
  // Only slide the container not the individual items

  useEffect(() => {
    const recalcPanner = () => {
      if (!containerRef.current) return;
      console.log('run');
      const items = containerRef.current.children;

      let width = 0;

      for (let index = 0; index < children.length; index++) {
        width = width + items[index].getBoundingClientRect().width;
        if (items[index].style.marginLeft) {
          width = width + parseInt(items[index].style.marginLeft);
        }

        if (items[index].style.marginRight) {
          width = width + parseInt(items[index].style.marginRight);
        }
      }

      const append = [];

      let appendWidth = 0;
      for (let index = 0; index < children.length; index++) {
        if (appendWidth > containerRef.current.getBoundingClientRect().width)
          break;
        const el = containerRef.current.children[index];
        appendWidth = appendWidth + el.getBoundingClientRect().width;
        appendWidth = appendWidth + parseInt(el.style.marginLeft);
        appendWidth = appendWidth + parseInt(el.style.marginRight);
        append.push(children[index]);
      }

      setAppendElements(append);
      console.log(`translateX(${width})`);
      containerRef.current.style.transform = `translateX(${
        (width - 1) * translateX
      }px)`;
    };

    onresize = recalcPanner;

    recalcPanner();
    document.addEventListener('resize', onresize);

    return () => {
      document.removeEventListener('resize', onresize);
    };
  }, [children, translateX]);

  console.log(translateX);

  return (
    <div
      className={`${s.container} ${className}`}
      style={{
        overflow: 'hidden',

        ...style,
      }}
      {...props}
    >
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          animationDuration: speed,
          // justifyContent: 'center',
          marginLeft: translateX > 0 ? '-100%' : 0,
          alignItems: 'center',
        }}
        className={s.animate}
      >
        {children}
        {...appendElements}
      </div>
    </div>
  );
};

export default InfinityPanner;
