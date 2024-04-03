import {
  useReducer,
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { toPercent } from '../utils/math';
import { addLeadingZero, toMinutes, getTimeString } from '../utils/time';
import { calcLevels } from './useAudioFuncs';

const errorNoAudioContext =
  'AudioContext is not defined. This is probably a woopsy on my part and not yours.';
const errorNoBufferSource =
  'BufferSource is not defined. This is probably a woopsy on my part and not yours.';

const useAudio = (src: string) => {
  const audioRef = useRef();
  const [audioContext, setAudioContext] = useState<AudioContext>();
  const [buffer, setBuffer] = useState<AudioBuffer>();
  const [audioState, setAudioState] = useState('unloaded');
  const [levels, setLevels] = useState<number[]>([]);
  const [progress, setProgress] = useState<number>();

  const loadAudio = useCallback(() => {
    const run = async () => {
      const context = new AudioContext();

      const response = await fetch(src);
      const downloadedBuffer = await response.arrayBuffer();
      const decodedBuffer = await context.decodeAudioData(downloadedBuffer);

      setLevels(calcLevels(decodedBuffer));

      setBuffer(decodedBuffer);
      setAudioState('loaded');
      setAudioContext(context);
    };

    run();
  }, [src]);

  const start = (buffer, offsetInSeconds, duration) => {
    const audioTrack = audioContext.createBufferSource();

    audioTrack.connect(audioContext.destination);
    audioTrack.buffer = buffer;
    audioTrack.start(audioContext.currentTime, offsetInSeconds, duration);
  };

  // const jumpTo = () => {
  //   start(60);
  // };

  const play = () => {
    // if (audioContext.state === 'suspended') {

    if (audioState === 'loaded') {
      start(buffer, 0, undefined);
    } else {
      audioContext.resume();
    }
    setAudioState('play');
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/close
  const close = () => {
    audioContext.close();
  };

  const pause = () => {
    audioContext.suspend();
    setAudioState('pause');
  };

  const updateProgress = useCallback(() => {
    const progress = toPercent(audioContext?.currentTime, buffer?.duration);
    setProgress(progress);

    // setCurrentTimeString(getTimeString(audioObject.current.currentTime));
  }, [audioContext?.currentTime, buffer?.duration]);

  useEffect(() => {
    const progressing = () => {
      if (audioState === 'play') updateProgress();

      // if (hasBufferChanged()) {
      // updateBuffer();
      // }
    };

    if (audioState === 'unloaded') return;
    const timeout = setInterval(progressing, 200);

    return () => {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [audioState, updateProgress]);

  return {
    audioRef,
    load: loadAudio,
    play: play,
    pause: pause,
    levels: levels,
    currentTime: audioContext?.currentTime,
    progress: progress,
    audioState: audioState,
  };
};

export default useAudio;
