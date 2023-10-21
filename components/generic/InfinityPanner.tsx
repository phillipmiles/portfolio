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
  ...props
}: Props): JSX.Element => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  // const intervalRef = useRef();
  const containerRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   setIsTransitioning(true);
  // }, []);

  // useInterval(() => {
  //   console.log('her');
  //   if (!containerRef.current) return;
  //   console.log('made it');
  // }, 1000);

  // LOOKAT THIS
  // https://www.michellemcquaid.com/
  // https://www.michellemcquaid.com/
  // https://www.michellemcquaid.com/
  // https://www.michellemcquaid.com/
  // Clone some of the slides the equit to the parents width
  // Only slide the container not the individual items

  useEffect(() => {
    const onInterval = () => {
      if (!containerRef.current) return;
      const containerBoundingBox = containerRef.current.getBoundingClientRect();

      let left = 0;
      for (const child of containerRef.current.children) {
        console.log(left);
        const childBoundingBox = child.getBoundingClientRect();
        child.style.left = `${left}px`;
        // if(childBoundingBox.length)
        // child.style.transform = `translateX(-${containerBoundingBox.width}px)`;
        if (childBoundingBox.left < 0) {
          child.style.transform = `translateX(${
            containerBoundingBox.width * 2
          }px)`;
          child.style.transitionDuration = '0ms';
          // containerRef.current.appendChild(child);
        } else {
          child.style.transitionDuration = '5000ms';
          child.style.transform = `translateX(-${
            containerBoundingBox.width * 2
          }px)`;
        }

        left = left + childBoundingBox.width;
        // console.log(left);
      }
      // containerRef.current.children.map((child) => {
      //   const boundingRect = child.getBoundingClientRect();
      //   console.log(boundingRect);
      // });
    };

    // if (!intervalRef.current) {
    // console.log('am');
    let intervalRef = setInterval(onInterval, 10);
    // }

    return () => {
      if (intervalRef) {
        clearInterval(intervalRef);
      }
    };
  }, []);

  const addChildren = () => {
    let leftPosition = 0;
    console.log('here', containerRef.current);
    return children.map((child, index) => {
      // leftPosition = leftPosition + child.getBoundingClientRect().width;
      // console.log(child);
      // child.props.style = { ...child.props.style, backgroundColor: 'red' };
      return (
        <div
          key={index}
          style={{
            // position: 'absolute',
            // float: 'left',
            // left: `${leftPosition}px`,
            // transition: 'all 5000ms',
            // transform: isTransitioning ? 'translateX(-100%)' : 'translateX(0%)',
            transitionProperty: 'transform',
            transitionTimingFunction: 'linear',
          }}
        >
          {child}
        </div>
      );
    });
  };
  return (
    <div
      ref={containerRef}
      className={`${s.container} ${className}`}
      style={{
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '500px',
        height: '500px',
        backgroundColor: 'green',
      }}
      {...props}
    >
      {addChildren()}
    </div>
  );
};

export default InfinityPanner;
