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
  const [buffered, setBuffered] = useState<{ start: number; end: number }[]>();
  const analyserArray = useRef();
  const analyser = useRef();
  const [bufferLength, setBufferLength] = useState();
  const [doOnce, setDoOnce] = useState(false);

  const getAnalyserData = () => {
    const HEIGHT = 50;

    analyser.current.getByteFrequencyData(analyserArray.current);

    // console.log(bufferLength);
    // return analyserArray.current;
    const array = [];
    for (let i = 0; i < bufferLength; i++) {
      array.push(analyserArray.current[i]);
      // const v = analyserArray.current[i] / 128.0;
      // const y = (v * HEIGHT) / 2;
    }
    return array;
    // console.log(analyserArray.current);
  };

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
    const audioContext = new AudioContext();
    const a = new Audio(src);

    const source = audioContext.createMediaElementSource(a);

    source.connect(audioContext.destination);

    analyser.current = audioContext.createAnalyser();
    source.connect(analyser.current);
    analyser.current.fftSize = 256;
    const bufferLength2 = analyser.current.frequencyBinCount;
    setBufferLength(bufferLength2);
    analyserArray.current = new Uint8Array(bufferLength2);
    analyser.current.getByteTimeDomainData(analyserArray.current);

    // TODO!!!! SHOULD ADD AN REF TO AN AUDIO HTML ELEMENT FOR ACCESSIBILITY
    // TODO!!!! SHOULD ADD AN REF TO AN AUDIO HTML ELEMENT FOR ACCESSIBILITY
    // TODO!!!! SHOULD ADD AN REF TO AN AUDIO HTML ELEMENT FOR ACCESSIBILITY
    // TODO!!!! SHOULD ADD AN REF TO AN AUDIO HTML ELEMENT FOR ACCESSIBILITY
    // TODO!!!! SHOULD ADD AN REF TO AN AUDIO HTML ELEMENT FOR ACCESSIBILITY
    // TODO!!!! SHOULD ADD AN REF TO AN AUDIO HTML ELEMENT FOR ACCESSIBILITY
    // TODO!!!! SHOULD ADD AN REF TO AN AUDIO HTML ELEMENT FOR ACCESSIBILITY
    audioObject.current = a;

    setAudioState('loading');
    a.addEventListener('loadeddata', onLoaded);
  };

  const updateBuffer = () => {
    const buffered = [];
    if (!audioObject.current) return;
    for (let i = 0; i < audioObject.current.buffered.length; i++) {
      buffered.push({
        start: toPercent(
          audioObject.current.buffered.start(i),
          audioObject.current.duration
        ),
        end: toPercent(
          audioObject.current.buffered.end(i),
          audioObject.current.duration
        ),
      });
    }
    setBuffered(buffered);
  };

  const updateProgress = () => {
    if (!audioObject.current) return;

    const progress = toPercent(
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
    getAnalyserData: getAnalyserData,
  };
};

export default useAudio;
