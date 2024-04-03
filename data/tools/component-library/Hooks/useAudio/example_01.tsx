import { useEffect } from 'react';
import s from './example_01.module.css';
import useAudio from '../../../../../hooks/useAudioNOHTML';

export const Example = () => {
  // const audio = useAudio(
  //   'https://traffic.libsyn.com/theleaderslabpodcast/S2_EP1_v2_-_Making_Leadership_Work.mp3'
  // );
  const audio = useAudio('/audio/trying-to-make-a-song.mp3');

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

  return (
    <div>
      <div>
        <h4 className={s.heading}>Some music</h4>
        <p>By Phillip Miles</p>

        <button onClick={togglePlay} className={s.button}>
          {audio.audioState === 'loading'
            ? 'loading'
            : audio.audioState === 'play'
            ? 'Pause'
            : 'Play'}
        </button>

        <span>
          {audio.currentTimeString} / {audio.durationTimeString}
        </span>
      </div>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `export const Example = () => {
  const audio = useAudio('/audio/trying-to-make-a-song.mp3');

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

  return (
    <div>
    <h4>Trying to make a song</h4>
      {audio.audioState === 'loading' && <span>Loading</span>}
      <div>
        <button onClick={togglePlay} className={s.button}>
          {audio.audioState === 'play' ? 'Pause' : 'Play'}
        </button>
        <span>
          {audio.currentTimeString} / {audio.durationTimeString}
        </span>
      </div>
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
}`,
  },
];
