import { useRef, useState, useLayoutEffect } from 'react';
import { toPercent } from '../../utils/math';
import useDragContained from '../../hooks/useDragContained';
import s from './Slider.module.css';

const Slider = ({
  className,
  onClick,
  onStart,
  onMove,
  onEnd,
  TimelineComponent,
  SeekerComponent,
  style,
  percent,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const timelineRef = useRef(null);
  const seekerRef = useRef(null);

  const handleClickTimeline = (e: any) => {
    if (!timelineRef.current) return;

    const clickPositionInEl = Math.floor(
      (window.scrollX +
        timelineRef.current.getBoundingClientRect().left -
        e.pageX) *
        -1
    );

    const percentage = Math.floor(
      (clickPositionInEl / timelineRef.current.getBoundingClientRect().width) *
        100
    );

    onClick(percentage);
  };

  const handleDragSeekerMove = (e: any, delta: any) => {
    const currentPos = seekerRef.current.offsetLeft;
    const newPos = currentPos + delta.x;

    const newPercent = toPercent(
      newPos,
      timelineRef.current.getBoundingClientRect().width -
        seekerRef.current.getBoundingClientRect().width
    );

    onMove && onMove(newPercent);
  };

  const handleDragSeekerEnd = (e: any, data: any) => {
    setIsDragging(false);
    onEnd && onEnd();
    e.stopPropagation();
  };

  const handleDragSeekerStart = (e) => {
    onStart && onStart();
    setIsDragging(true);
    e.stopPropagation();
  };

  useDragContained(
    seekerRef,
    timelineRef,
    handleDragSeekerStart,
    handleDragSeekerMove,
    handleDragSeekerEnd
  );

  // useLayoutEffect to prevent flicker from init value to calculated value.
  useLayoutEffect(() => {
    const newOffset = Math.round(
      (timelineRef.current.getBoundingClientRect().width -
        seekerRef.current.getBoundingClientRect().width) *
        (percent / 100)
    );

    setOffset(newOffset);
  }, [percent]);

  return (
    <div
      ref={timelineRef}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      <TimelineComponent onClick={handleClickTimeline} />
      <div
        ref={seekerRef}
        className={s.seekWrap}
        style={{
          top: 0,
          left: `${offset}px`,
          ...(isDragging && { transform: 'scale(1)' }),
        }}
      >
        <SeekerComponent />
      </div>
    </div>
  );
};

export default Slider;
