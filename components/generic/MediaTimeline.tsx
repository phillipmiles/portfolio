import { useRef, useState, useEffect, useCallback } from 'react';
import { percentage } from '../../utils/math';
import DraggableConstraint from './DraggableConstraint';

const MediaTimeline = ({
  className,
  buffered,
  currentTime,
  duration,
  disable,
  onClick,
  onDragStart,
  onDrag,
  onEnd,
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

    const seekerWidth = timelineRef.current.parentElement.querySelector(
      '.mmcq-component-audio-timeline-seeker'
    );

    if (!seekerWidth) return;

    const el = seekerWidth.getBoundingClientRect().width;

    const fraction = currentTime / duration;
    const leftOffset =
      (timelineRef.current.parentElement.getBoundingClientRect().width - el) *
      fraction;

    return Math.round(leftOffset);
  };

  const progress = () => {
    const progressAsFraction = data.offsetLeftPercent / 100;
    const newTime = audio.a.duration * progressAsFraction;
    return data.offsetLeftPercent;
  };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        height: '16px',
        width: '300px',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '4px',
        paddingBottom: '4px',
        marginRight: '8px',
        // background: 'green',
        // display: 'flex',
        // justifyContent: 'center'
      }}
    >
      <div
        ref={timelineRef as React.RefObject<HTMLDivElement>}
        onClick={handleClickTimeline}
        style={{
          background: '#CCC',
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '4px',
        }}
      >
        {buffered.map((item, index) => (
          <div
            key={index}
            style={{
              left: `${item.start}%`,
              width: `${item.end - item.start}%`,
              position: 'absolute',
              top: 0,
              bottom: 0,
              background: '#999',
            }}
          />
        ))}

        <div
          style={{
            width: `${(currentTime / duration) * 100}%`,
            top: 0,
            left: 0,
            bottom: 0,
            background: 'blue',
            position: 'absolute',
          }}
        ></div>
      </div>
      <DraggableConstraint
        style={{
          width: '16px',
          height: '16px',
          background: 'red',
          borderRadius: '8px',
        }}
        className={'mmcq-component-audio-timeline-seeker'}
        axisYMultiplier={0}
        onStart={handleDragSeekStart}
        onMove={handleMoveSeeker}
        onEnd={handleMoveSeekerEnd}
        externalPosX={getSeekerPos()}
        disable={disable}
      />
    </div>
  );
};

export default MediaTimeline;
