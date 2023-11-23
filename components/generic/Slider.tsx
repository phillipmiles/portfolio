import { useRef, useState, useEffect, useCallback } from 'react';
import { percentage } from '../../utils/math';
import DraggableConstraint from './Draggable';

const Slider = ({
  className,
  buffered,
  currentTime,
  duration,
  disable,
  onClick,
  onDragStart,
  onDrag,
  onEnd,
  TimelineComponent,
  SeekerComponent,
  style,
}) => {
  const timelineRef = useRef<HTMLElement>(null);

  const handleClickTimeline = (e: any) => {
    if (!timelineRef.current || disable) return;

    const clickPositionInEl = Math.floor(
      (window.scrollX +
        timelineRef.current.getBoundingClientRect().left -
        e.pageX) *
        -1
    );

    const percentage =
      Math.floor(
        (clickPositionInEl /
          timelineRef.current.getBoundingClientRect().width) *
          100
      ) / 100;

    onClick(percentage);
  };

  const handleMoveSeeker = (e: any, data: any) => {
    const progressAsFraction = data.offsetLeftPercent / 100;
    const newTime = duration * progressAsFraction;
    onDrag && onDrag(newTime);
  };

  const handleMoveSeekerEnd = (e: any, data: any) => {
    const progressAsFraction = data.offsetLeftPercent / 100;
    const newTime = duration * progressAsFraction;

    console.log('END', data);
    onEnd && onEnd(newTime);
    e.stopPropagation();
  };

  const handleDragSeekStart = (e) => {
    console.log(e);
    onDragStart && onDragStart();
    e.stopPropagation();
  };

  // NOTE: Minor bug when clicking timeline to change seekers position. If the time change
  // makes the audio time string change from 0:00 to say 14:00 then the extra digit will
  // throw off the seekers position by a few pixels for a moment until the next position
  // interval runs moving to the correct spot
  const getSeekerPos = () => {
    if (
      !timelineRef.current ||
      !timelineRef.current.parentElement ||
      !currentTime
    )
      return 0;

    const seekerWidth = timelineRef.current.querySelector(
      '.mmcq-component-audio-timeline-seeker'
    );

    if (!seekerWidth) return;

    const el = seekerWidth.getBoundingClientRect().width;

    const fraction = currentTime / duration;
    const leftOffset =
      (timelineRef.current.getBoundingClientRect().width - el) * fraction;

    return Math.round(leftOffset);
  };

  return (
    <div
      ref={timelineRef as React.RefObject<HTMLDivElement>}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      <TimelineComponent onClick={handleClickTimeline} />
      <DraggableConstraint
        className={'mmcq-component-audio-timeline-seeker'}
        axisYMultiplier={0}
        onStart={handleDragSeekStart}
        onMove={handleMoveSeeker}
        onEnd={handleMoveSeekerEnd}
        externalPosX={getSeekerPos()}
        disable={disable}
      >
        <SeekerComponent />
      </DraggableConstraint>
    </div>
  );
};

export default Slider;
