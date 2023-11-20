import {
  useReducer,
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { percentage } from '../utils/math';
import { addLeadingZero, toMinutes } from '../utils/time';

const getTimeString = (seconds: Number) => {
  if (!seconds) {
    return '0:00';
  }

  const minutes = Math.trunc(toMinutes(seconds, 'seconds'));
  const secondsAbs = parseInt(seconds);
  const secondsConverted = addLeadingZero(secondsAbs % 60, 2);
  return `${minutes}:${secondsConverted}`;
};

// const useEffectEvent = (callback) => {
//   const ref = useRef(callback);

//   ref.current = callback;

//   return (...args) => {
//     ref.current(...args);
//   };
// };

const useAudio = (src) => {
  const audioObject = useRef();
  const [progress, setProgress] = useState(0);
  const [audioState, setAudioState] = useState('unloaded');
  const [currentTimeString, setCurrentTimeString] = useState('0:00');
  const [durationTimeString, setDurationTimeString] = useState('0:00');
  const [buffered, setBuffered] = useState<{ start: number; end: number }[]>(
    []
  );

  const onLoaded = (e: Event) => {
    if (!audioObject.current) return;

    setDurationTimeString(getTimeString(audioObject.current.duration));
    setAudioState('loaded');

    audioObject.current.removeEventListener('loadeddata', onLoaded);
  };

  useEffect(() => {
    return () => {
      // Pausing audio object subjecting it to garbage collection removing it
      // from memory.
      if (audioObject.current) {
        audioObject.current.pause();
        audioObject.current.removeEventListener('loadeddata', onLoaded);
      }
    };
  }, [audioObject, src]);

  const loadAudio = () => {
    const a = new Audio(src);
    audioObject.current = a;

    setAudioState('loading');
    a.addEventListener('loadeddata', onLoaded);
  };

  const updateBuffer = () => {
    const buffered = [];
    if (!audioObject.current) return;
    for (let i = 0; i < audioObject.current.buffered.length; i++) {
      buffered.push({
        start: percentage(
          audioObject.current.buffered.start(i),
          audioObject.current.duration
        ),
        end: percentage(
          audioObject.current.buffered.end(i),
          audioObject.current.duration
        ),
      });
    }
    setBuffered(buffered);
  };

  const updateProgress = () => {
    if (!audioObject.current) return;

    const progress = percentage(
      audioObject.current.currentTime,
      audioObject.current.duration
    );

    setProgress(progress);

    setCurrentTimeString(getTimeString(audioObject.current.currentTime));
  };

  const progressing = () => {
    if (audioState === 'play') {
      updateProgress();
    }
    updateBuffer();
  };

  useEffect(() => {
    const timeout = setInterval(progressing, 200);

    return () => {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [audioState]);

  const play = () => {
    if (!audioObject.current) return;
    audioObject.current.play();
    setAudioState('play');
  };

  const pause = () => {
    if (!audioObject.current) return;
    audioObject.current.pause();
    setAudioState('pause');
  };

  const changeTime = (time) => {
    audioObject.current.currentTime = time;
    updateBuffer();
    updateProgress();
  };

  return {
    a: audioObject.current,
    progress: progress,
    setTime: changeTime,
    buffered: buffered,
    currentTimeString: currentTimeString,
    durationTimeString: durationTimeString,
    load: loadAudio,
    play: play,
    pause: pause,
    audioState: audioState,
  };
};

export default useAudio;
