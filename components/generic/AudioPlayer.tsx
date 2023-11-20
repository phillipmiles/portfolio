import { useRef, useState, useEffect, useCallback } from 'react';
import { toMinutes, addLeadingZero } from '../../utils/time';
import { percentage } from '../../utils/math';
import DraggableConstraint from './DraggableConstraint';
import useAudio from '../../hooks/useAudio';

const AudioPlayer = ({
  className,
  src,
}: {
  className?: string;
  src: string;
}) => {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useAudio(src);

  useEffect(() => {
    if (audio.audioState === 'loaded') {
      audio.play();
    }
  }, [audio.audioState]);

  const togglePlay = () => {
    if (audio.audioState === 'unloaded') {
      audio.load();
    } else if (audio.audioState === 'play') {
      audio.pause();
    } else if (audio.audioState === 'pause') {
      audio.play();
    }
  };

  const handleClickTimeline = (e: any) => {
    if (!timelineRef.current || audio.audioState === 'unloaded') return;

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

    const time = audio.a.duration * percentage;

    audio.setTime(time);
  };

  const handleMoveSeeker = (e: any, data: any) => {
    if (!audio.a) return;
    const progressAsFraction = data.offsetLeftPercent / 100;
    const newTime = audio.a.duration * progressAsFraction;
    setProgress(data.offsetLeftPercent);
    // setCurrentTimeString(getTimeString(newTime));
  };

  const handleMoveSeekerEnd = (e: any, data: any) => {
    if (!audio.a) return;
    const progressAsFraction = data.offsetLeftPercent / 100;
    const newTime = audio.a.duration * progressAsFraction;

    audio.a.currentTime = newTime;

    audio.play();
    setIsPlaying(true);
  };

  const handleDragSeekStart = () => {
    if (!audio.a) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // NOTE: Minor bug when clicking timeline to change seekers position. If the time change
  // makes the audio time string change from 0:00 to say 14:00 then the extra digit will
  // throw off the seekers position by a few pixels for a moment until the next position
  // interval runs moving to the correct spot
  const getSeekerPos = () => {
    if (!timelineRef.current || !timelineRef.current.parentElement) return 0;

    const seekerWidth = timelineRef.current.parentElement.querySelector(
      '.mmcq-component-audio-timeline-seeker'
    );

    if (!seekerWidth) return;
    const el = seekerWidth.getBoundingClientRect().width;

    const seekerPos = Math.floor(
      ((timelineRef.current.parentElement.getBoundingClientRect().width - el) *
        audio.progress) /
        100
    );

    return seekerPos;
  };

  return (
    <div>
      <button>Loading</button>
      <button onClick={togglePlay}>Play</button>
      <button onClick={togglePlay}>Pause</button>
      <a href={src} target="_blank">
        Download
      </a>

      <div>
        <div>
          <div
            ref={timelineRef as React.RefObject<HTMLDivElement>}
            onClick={handleClickTimeline}
            style={{
              width: '300px',
              height: '8px',
              background: '#CCC',
              position: 'relative',
            }}
          >
            {audio.buffered.map((item, index) => (
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
                width: `${audio.progress}%`,
                top: 0,
                left: 0,
                bottom: 0,
                background: 'blue',
                position: 'absolute',
              }}
            ></div>
          </div>
          <DraggableConstraint
            className={'mmcq-component-audio-timeline-seeker'}
            axisYMultiplier={0}
            onStart={handleDragSeekStart}
            onMove={handleMoveSeeker}
            onEnd={handleMoveSeekerEnd}
            externalPosX={getSeekerPos()}
            disable={
              audio.audioState === 'unloaded' || audio.audioState === 'loading'
            }
          />
        </div>

        <span>
          {audio.currentTimeString} / {audio.durationTimeString}
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;
