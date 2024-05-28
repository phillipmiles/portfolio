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
  className?: string;
  style?: object;
  speed?: string;
  translateX?: -1 | 0 | 1;
}

const InfinityPanner = ({
  children,
  className,
  style,
  speed = '6000ms',
  translateX = -1,
  translateY = 0,
  ...props
}: Props): JSX.Element => {
  const containerRef = useRef<HTMLInputElement>(null);
  const [appendElements, setAppendElements] = useState([]);

  useEffect(() => {
    const recalcPanner = () => {
      if (!containerRef.current) return;
      console.log('run');
      const items = containerRef.current.children;

      if (items.length === 0) return;

      // Get the complete width of all original children added together.
      let childrenWidth = 0;

      // Only loop through the number of original children so as to not add
      // width of appended childrens.
      for (let index = 0; index < children.length; index++) {
        childrenWidth =
          childrenWidth + items[index].getBoundingClientRect().width;
        if (items[index].style.marginLeft) {
          childrenWidth =
            childrenWidth + parseInt(items[index].style.marginLeft);
        }

        if (items[index].style.marginRight) {
          childrenWidth =
            childrenWidth + parseInt(items[index].style.marginRight);
        }
      }

      // The width of the container cropping the out of view children.
      const croppedContainerWidth =
        containerRef.current.getBoundingClientRect().width;

      // Get an array of children to copy and appended to the container
      const itemsToAppend = [];
      let appendWidth = 0;

      while (appendWidth < croppedContainerWidth) {
        for (let index = 0; index < children.length; index++) {
          const el = containerRef.current.children[index];
          appendWidth = appendWidth + el.getBoundingClientRect().width;
          if (items[index].style.marginLeft)
            appendWidth = appendWidth + parseInt(el.style.marginLeft);
          if (items[index].style.marginRight)
            appendWidth = appendWidth + parseInt(el.style.marginRight);
          itemsToAppend.push(children[index]);
        }
      }

      setAppendElements(itemsToAppend);
      console.log(`translateX(${childrenWidth})`);
      containerRef.current.style.transform = `translateX(${
        (childrenWidth - 1) * translateX
      }px)`;
    };

    recalcPanner();

    const onresize = () => {
      console.log('resize');
      recalcPanner();
    };
    window.addEventListener('resize', onresize);
    return () => {
      window.removeEventListener('resize', onresize);
    };
  }, [children, translateX]);

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
