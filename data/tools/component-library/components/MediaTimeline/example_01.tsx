import { useState } from 'react';
import s from './example_01.module.css';
import MediaTimeline from '../../../../../components/generic/MediaTimeline';

export const Example = () => {
  const duration = 1500;

  const [currentTime, setCurrentTime] = useState(0);

  const handleClickTimeline = (percent) => {
    setCurrentTime(1500 * percent);
  };

  const handleDragSeeker = (percent) => {
    console.log(percent);
  };

  const handleEndSeeker = (position) => {
    // setCurrentTime(100);
  };
  return (
    <MediaTimeline
      buffered={[]}
      disable={false}
      currentTime={currentTime}
      duration={duration}
      onClick={handleClickTimeline}
      onDrag={handleDragSeeker}
      onEnd={handleEndSeeker}
    />
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const AudioPlayer = ({ className, src }) => {
  const audio = useAudio(src);

  const [renderedTime, setRenderedTime] = useState(getTimeString(0));

  useEffect(() => {
    setRenderedTime(audio.currentTimeString);
  }, [audio.currentTimeString]);

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

  const handleDragSeeker = (val) => {
    setRenderedTime(getTimeString(val));
  };

  const handleEndSeeker = (val) => {
    if (!audio.a) return;
    audio.a.currentTime = val;
    audio.play();
  };

  const handleDragStartSeeker = () => {
    audio.pause();
  };

  return (
    <div className={className}>
      {audio.audioState === 'loading' && <button>Loading</button>}

      <button onClick={togglePlay}>
        {audio.audioState === 'pause' ? 'Pause' : 'Play'}
      </button>

      <a href={src} target="_blank">
        Download
      </a>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
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
          onDragStart={handleDragStartSeeker}
          onDrag={handleDragSeeker}
          onEnd={handleEndSeeker}
        />

        <span>
          {renderedTime} / {audio.durationTimeString}
        </span>
      </div>
    </div>
  );
};`,
  },
  {
    language: 'css',
    code: `.dragElement {
  width: 150px;
  height: 150px;
  background-color: rgb(0, 123, 228);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.dragElement p {
  margin-bottom: 0;
}`,
  },
];
