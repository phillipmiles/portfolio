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
  const [appendElements, setAppendElements] = useState([]);
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

    // let intervalRef = setInterval(onInterval, 10);

    // return () => {
    //   if (intervalRef) {
    //     clearInterval(intervalRef);
    //   }
    // };
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

  const addChildren2 = () => {
    const childrenNew = [...children];
    childrenNew.unshift(children[children.length - 1]);
    childrenNew.unshift(children[children.length - 2]);
    childrenNew.unshift(children[children.length - 3]);
    childrenNew.unshift(children[children.length - 4]);
    childrenNew.unshift(children[children.length - 5]);

    return childrenNew;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.children;

    let width = 0;
    for (const item of items) {
      width = width + item.getBoundingClientRect().width;
      width = width + parseInt(item.style.marginLeft);
      width = width + parseInt(item.style.marginRight);
    }

    console.log(width);
    console.log(containerRef.current.getBoundingClientRect().width);
    // console.log(width - containerRef.current.getBoundingClientRect().width);
    const remainder = width;
    console.log(remainder);

    // setAppendElements([containerRef.current.children[0].cloneNode()]);

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
    console.log(appendWidth);
    setAppendElements(append);

    // width =
    //   width + appendWidth - containerRef.current.getBoundingClientRect().width;
    containerRef.current.style.transform = `translateX(-${width - 1}px)`;
    // containerRef.current.children.reduce((item) => {
    //   return item.getBoundingClientBox().width;
    // });
    // console.log(containerRef.current.children[0]);
    // containerRef.current.append(containerRef.current.children[0].cloneNode());

    // containerRef.current.append(containerRef.current.children[1].cloneNode());
    // containerRef.current.append(containerRef.current.children[2].cloneNode());
  }, []);

  console.log(appendElements);
  return (
    <div
      className={`${s.container} ${className}`}
      style={{
        overflow: 'hidden',
        // backgroundColor: 'green',
      }}
      {...props}
    >
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          // justifyContent: 'center',
          alignItems: 'center',
          // position: 'absolute',
          // left: 0,
        }}
        className={s.animate}
      >
        {children}
        {...appendElements}
        {/* {addChildren2()} */}
      </div>
    </div>
  );
};

export default InfinityPanner;
