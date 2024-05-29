import { useRef, useState, useLayoutEffect } from 'react';
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
    onMove && onMove(delta.xPercent);
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
      className={className}
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
        }}
      >
        {/* TODO: Integrate with an input */}
        {/* TODO: Integrate with an input */}
        {/* TODO: Integrate with an input */}
        {/* TODO: Integrate with an input */}
        {/* TODO: Integrate with an input */}

        {/* <input
          data-index="0"
          aria-label="Volume"
          aria-valuenow={100}
          aria-orientation="horizontal"
          aria-valuemax={100}
          aria-valuemin={0}
          type="range"
          min={0}
          max={100}
          step={1}
          value={100}
          style={{
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: '100%',
            margin: '-1px',
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            whiteSpace: 'nowrap',
            width: '100%',
            direction: 'ltr',
          }}
        /> */}
        <SeekerComponent isDragging={isDragging} />
      </div>
    </div>
  );
};

export default Slider;
