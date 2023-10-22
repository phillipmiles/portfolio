import { useRef, useState, useEffect, Dispatch, useCallback } from 'react';
// import './style.scss';
// import circleplay from '../../assets/icons/circle-play';
// import circlepause from '../../assets/icons/circle-pause';
// import download from '../../assets/icons/download';
// import circlenotch from './icons/circle-notch';
// import volumehigh from '../../assets/icons/volume-high';
// import '../../assets/icons';
import { toMinutes, addLeadingZero } from '../../utils/time';
import DraggableConstraint from './DraggableConstraint';

import { getValueAsPercentage } from '../../utils/math';

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
    if (!audioObject) return;
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
          start: getValueAsPercentage(
            audioRef.current.buffered.start(i),
            audioRef.current.duration
          ),
          end: getValueAsPercentage(
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
      const progress = getValueAsPercentage(
        audioRef.current.currentTime,
        audioRef.current.duration
      );

      // setCurrentTime(current);
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
    <>
      <div
        className={`mmcq-component-audio ${className} `}
        data-state={audioState}
      >
        <div className="mmcq-component-audio-wrap">
          <div className="mmcq-component-audio-content">
            <button className="mmcq-component-audio-button mmcq-component-audio-loading">
              {/* <Icon icon={circlenotch} /> */}
              Loading
            </button>
            <button
              onClick={togglePlay}
              className="mmcq-component-audio-button mmcq-component-audio-button-play"
            >
              {/* <Icon icon={circleplay} /> */}
              Play
            </button>
            <button
              onClick={togglePlay}
              className="mmcq-component-audio-button mmcq-component-audio-button-pause"
            >
              {/* <Icon icon={circlepause} /> */}
              Pause
            </button>
            <div className="mmcq-component-audio-title-box">
              <p className="mmcq-component-audio-abovetitle" />
              <p className="mmcq-component-audio-title" />
            </div>

            {/* <button
                onClick={handleToggleVolume}
                className="mmcq-component-audio-button mmcq-component-audio-button-volume"
              >
                <Icon icon={volumehigh} />
                {openVolume && (
                  <div className="mmcq-component-audio-volume-control">sdf</div>
                )}
              </button> */}
            {/* <Icon icon={circlenotch} /> */}
            <a
              href={src}
              target="_blank"
              className="mmcq-component-audio-button mmcq-component-audio-button-download"
            >
              {/* <Icon icon={download} /> */}
              Download
            </a>
          </div>
          <div className="mmcq-component-audio-timeline">
            <div className="mmcq-component-audio-timeline-wrap">
              <div
                ref={timelineRef as React.RefObject<HTMLDivElement>}
                className="mmcq-component-audio-timeline-bar"
                onClick={handleClickTimeline}
              >
                {buffered.map((item, index) => (
                  <div
                    key={index}
                    className="mmcq-component-audio-buffered"
                    style={{
                      left: `${item.start}%`,
                      width: `${item.end - item.start}%`,
                    }}
                  />
                ))}

                <div
                  className="mmcq-component-audio-progress"
                  style={{ width: `${progress}%` }}
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
            <div className="mmcq-component-audio-time">
              <span>
                {currentTimeString} / {getDurationTimeString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
