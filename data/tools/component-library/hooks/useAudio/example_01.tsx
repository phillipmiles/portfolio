import { useRef } from 'react';
import s from './example_01.module.css';
import useAudio from '../../../../../hooks/useAudio';

export const Example = () => {
  const audioRef = useRef(null);

  const {
    connectAudio,
    playAudio,
    toggleAudio,
    muteAudio,
    unmuteAudio,
    setAudioTime,
    audioState,
    audioProgress,
    currentAudioTimeString,
    audioDurationTimeString,
    audioMuted,
  } = useAudio(audioRef);

  const togglePlay = () => {
    if (audioState === 'unloaded') {
      connectAudio();
      playAudio();
    } else {
      toggleAudio();
    }
  };

  const jumpToStart = () => {
    setAudioTime(0);
  };

  const mute = () => {
    if (audioMuted) {
      unmuteAudio();
    } else {
      muteAudio();
    }
  };

  return (
    <div>
      <h4 className={s.heading}>Song name</h4>
      <p>By artist name</p>

      <p>
        <button onClick={togglePlay} className={s.button}>
          {audioState === 'playing' ? 'Pause' : 'Play'}
        </button>
        <span style={{ margin: '16px' }}>|</span>
        <button onClick={jumpToStart} className={s.button}>
          Restart
        </button>
        <button onClick={mute} className={s.button}>
          Mute
        </button>
      </p>

      <audio
        ref={audioRef}
        src="/audio/trying-to-make-a-song.mp3"
        controls={false}
      >
        <source type="audio/mpeg" src="/audio/trying-to-make-a-song.mp3" />
      </audio>

      <p>
        {currentAudioTimeString} / {audioDurationTimeString}
      </p>
      <p>{Math.floor(audioProgress)}% song played.</p>
      <p>
        Volume:{' '}
        <span style={{ textDecoration: audioMuted ? 'line-through' : 'none' }}>
          100%
        </span>
        {audioMuted && 'Muted'}
      </p>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const Example = () => {
  const audioRef = useRef(null);

  const {
    connectAudio,
    playAudio,
    toggleAudio,
    muteAudio,
    unmuteAudio,
    setAudioTime,
    audioState,
    audioProgress,
    currentAudioTimeString,
    audioDurationTimeString,
    audioMuted,
  } = useAudio(audioRef);

  const togglePlay = () => {
    if (audioState === 'unloaded') {
      connectAudio();
      playAudio();
    } else {
      toggleAudio();
    }
  };

  const jumpToStart = () => {
    setAudioTime(0);
  };

  const mute = () => {
    if (audioMuted) {
      unmuteAudio();
    } else {
      muteAudio();
    }
  };

  return (
    <div>
      <h4 className={s.heading}>Song name</h4>
      <p>By artist name</p>

      <p>
        <button onClick={togglePlay} className={s.button}>
          {audioState === 'playing' ? 'Pause' : 'Play'}
        </button>
        <span style={{ margin: '16px' }}>|</span>
        <button onClick={jumpToStart} className={s.button}>
          Restart
        </button>
        <button onClick={mute} className={s.button}>
          Mute
        </button>
      </p>

      <audio ref={audioRef} src="/audio/trying-to-make-a-song.mp3" controls={false}>
        <source type="audio/mpeg" src="/audio/trying-to-make-a-song.mp3" />
      </audio>

      <p>
        {currentAudioTimeString} / {audioDurationTimeString}
      </p>
      <p>{Math.floor(audioProgress)}% song played.</p>
      <p>
        Volume:{' '}
        <span style={{ textDecoration: audioMuted ? 'line-through' : 'none' }}>
          100%
        </span>
        {audioMuted && 'Muted'}
      </p>
    </div>
  );
};`,
  },
  {
    language: 'css',
    code: `.button {
  width: 80px;
  border: 2px solid black;
  border-radius: 4px;
  margin-right: 8px;
}

.heading {
  margin-bottom: 0px;
}
`,
  },
];
