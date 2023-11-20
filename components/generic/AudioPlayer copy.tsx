import { useRef, useState, useEffect, useCallback } from 'react';
import { toMinutes, addLeadingZero } from '../../utils/time';
import { percentage } from '../../utils/math';
import DraggableConstraint from './DraggableConstraint';

const AudioPlayer = ({
  className,
  src,
}: {
  className?: string;
  src: string;
}) => {
  const [audioObject, setAudioObject] = useState<HTMLAudioElement>();
  const [duration, setDuration] = useState('0:00');
  const [audioState, setAudioState] = useState('unloaded');
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>();
  const timelineRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buffered, setBuffered] = useState<{ start: number; end: number }[]>(
    []
  );
  const [currentTimeString, setCurrentTimeString] = useState('0:00');

  const getTimeString = (timeInSeconds: number) => {
    if (!timeInSeconds) {
      return '0:00';
    }

    const minutes = Math.trunc(toMinutes(Math.trunc(timeInSeconds), 'seconds'));
    const secondsAbs = Math.trunc(timeInSeconds);
    const secondsConverted = addLeadingZero(secondsAbs % 60, 2);

    return `${minutes}:${secondsConverted}`;
  };

  const onLoaded = useCallback((e: Event) => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration.toString());
    audioRef.current.play();
    setAudioState('play');
    setIsPlaying(true);
    audioRef.current.removeEventListener('loadeddata', onLoaded);
  }, []);

  const loadAudio = () => {
    const a = new Audio(src);
    setAudioObject(a);
    audioRef.current = a;

    setAudioState('loading');
    a.addEventListener('loadeddata', onLoaded);
  };

  useEffect(() => {
    return () => {
      // Pausing audio object subjecting it to garbage collection removing it
      // from memory.
      if (audioObject) {
        audioObject.pause();
        audioObject.removeEventListener('loadeddata', onLoaded);
      }
    };
  }, [audioObject, onLoaded, src]);

  const togglePlay = () => {
    // if (!audioObject) return;
    if (audioState === 'unloaded') {
      loadAudio();
    } else if (audioState === 'play') {
      audioObject.pause();
      setIsPlaying(false);
      setAudioState('pause');
    } else if (audioState === 'pause') {
      audioObject.play();
      setIsPlaying(true);
      setAudioState('play');
    }
  };

  useEffect(() => {
    const updateBuffer = () => {
      const buffered = [];
      if (!audioRef.current) return;
      for (let i = 0; i < audioRef.current.buffered.length; i++) {
        buffered.push({
          start: percentage(
            audioRef.current.buffered.start(i),
            audioRef.current.duration
          ),
          end: percentage(
            audioRef.current.buffered.end(i),
            audioRef.current.duration
          ),
        });
      }
      setBuffered(buffered);
    };

    const updateProgress = () => {
      if (!audioRef.current) return;

      const current = audioRef.current.currentTime;
      const progress = percentage(
        audioRef.current.currentTime,
        audioRef.current.duration
      );

      setProgress(progress);

      updateBuffer();
      setCurrentTimeString(getTimeString(current));
    };

    let timeout: any;

    if (isPlaying) {
      timeout = setInterval(updateProgress, 200);
    }

    return () => {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [isPlaying, src]);

  const handleClickTimeline = (e: any) => {
    if (!timelineRef.current || !audioObject) return;

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

    const time = audioObject.duration * percentage;

    audioObject.currentTime = time;
    setProgress(percentage * 100);
    setCurrentTimeString(getTimeString(time));
  };

  const getDurationTimeString = () => {
    if (audioState === 'unloaded' || audioState === 'loading') {
      return '0:00';
    }

    const minutes = Math.trunc(toMinutes(duration, 'seconds'));
    const secondsAbs = parseInt(duration);
    const secondsConverted = addLeadingZero(secondsAbs % 60, 2);
    return `${minutes}:${secondsConverted}`;
  };

  const handleMoveSeeker = (e: any, data: any) => {
    if (!audioObject) return;
    const progressAsFraction = data.offsetLeftPercent / 100;
    const newTime = audioObject.duration * progressAsFraction;
    setProgress(data.offsetLeftPercent);
    setCurrentTimeString(getTimeString(newTime));
  };

  const handleMoveSeekerEnd = (e: any, data: any) => {
    if (!audioObject) return;
    const progressAsFraction = data.offsetLeftPercent / 100;
    const newTime = audioObject.duration * progressAsFraction;

    audioObject.currentTime = newTime;

    audioObject.play();
    setIsPlaying(true);
  };

  const handleDragSeekStart = () => {
    if (!audioObject) return;
    if (isPlaying) {
      audioObject.pause();
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
        progress) /
        100
    );

    return seekerPos;
  };

  const handleDownload = () => {};

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
                width: `${progress}%`,
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
            disable={audioState === 'unloaded' || audioState === 'loading'}
          />
        </div>

        <span>
          {currentTimeString} / {getDurationTimeString()}
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;
