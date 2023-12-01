import { useState, useEffect } from 'react';
import { toMinutes, addLeadingZero, getTimeString } from '../../utils/time';

import useAudio from '../../hooks/useAudio';
import MediaTimeline from './MediaTimeline';

const AudioPlayer = ({
  className,
  src,
}: {
  className?: string;
  src: string;
}) => {
  const audio = useAudio(src);
  const [renderedTime, setRenderedTime] = useState(getTimeString(0));

  useEffect(() => {
    setRenderedTime(audio.currentTimeString);
  }, [audio, audio.currentTimeString]);

  useEffect(() => {
    if (audio.audioState === 'loaded') {
      audio.play();
    }
  }, [audio, audio.audioState]);

  const togglePlay = () => {
    if (audio.audioState === 'unloaded') {
      audio.load();
    } else if (audio.audioState === 'play') {
      audio.pause();
    } else if (audio.audioState === 'pause') {
      audio.play();
    }
  };

  const handleDragSeeker = (val: number) => {
    setRenderedTime(getTimeString(val));
  };

  const handleEndSeeker = (val: number) => {
    if (!audio.a) return;
    audio.a.currentTime = val;
    audio.play();
  };

  return (
    <div className={className}>
      {audio.audioState === 'loading' && <button>Loading</button>}

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <button
          onClick={togglePlay}
          style={{
            width: '80px',
            border: '2px solid black',
            borderRadius: '4px',
            marginRight: '8px',
          }}
        >
          {audio.audioState === 'play' ? 'Pause' : 'Play'}
        </button>

        {/* <a href={src} target="_blank">
        Download
      </a> */}

        <MediaTimeline
          buffered={audio.buffered}
          disable={
            audio.audioState === 'unloaded' || audio.audioState === 'loading'
          }
          currentTime={audio.a ? audio.a.currentTime : 0}
          duration={audio.a ? audio.a.duration : 0}
          onClick={(val) => {
            audio.setTime(audio.a.duration * val);
          }}
          onDrag={handleDragSeeker}
          onEnd={handleEndSeeker}
        />

        <span>
          {renderedTime} / {audio.durationTimeString}
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;
