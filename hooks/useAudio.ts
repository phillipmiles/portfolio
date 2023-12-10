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

const useAudio = (src) => {
  const audioObject = useRef();
  const [progress, setProgress] = useState(0);
  const [db, setDB] = useState([]);
  const [audioState, setAudioState] = useState('unloaded');
  const [currentTimeString, setCurrentTimeString] = useState('0:00');
  const [durationTimeString, setDurationTimeString] = useState('0:00');
  const [buffered, setBuffered] = useState<{ start: number; end: number }[]>(
    []
  );
  const analyserArray = useRef();
  const analyser = useRef();
  const [bufferLength, setBufferLength] = useState();
  const [doOnce, setDoOnce] = useState(false);

  const getAnalyserData = () => {
    return [];
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

  const loadOldAudioCtxt = () => {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(a);
    analyser.current = audioContext.createAnalyser();
    source.connect(analyser.current);
    source.connect(audioContext.destination);
    analyser.current.fftSize = 256;
    const bufferLength2 = analyser.current.frequencyBinCount;
    setBufferLength(bufferLength2);
    analyserArray.current = new Uint8Array(bufferLength2);
    analyser.current.getByteTimeDomainData(analyserArray.current);
  };

  const loadAudioCtx = async (audioContext) => {
    await audioContext.audioWorklet.addModule('./worklets/decibals.js');
    const randomNoiseNode = new AudioWorkletNode(audioContext, 'decibals');
    randomNoiseNode.parameters.get('sampleRate').value =
      audioContext.sampleRate;
    randomNoiseNode.connect(audioContext.destination);
  };

  const onLoaded = async (e: Event) => {
    if (!audioObject.current) return;

    setDurationTimeString(getTimeString(audioObject.current.duration));
    setAudioState('loaded');

    audioObject.current.removeEventListener('loadeddata', onLoaded);
  };

  const loadAudio = async () => {
    const setupAudio = async () => {
      // console.log('bam', audioObject.current.a);
      const context = new OfflineAudioContext({
        numberOfChannels: 2,
        length: 44100 * 40,
        sampleRate: 44100,
      });
      // const derp = TESTSONG.arrayBuffer();
      // const source = context.createMediaElementSource(a);
      // source.connect(context.destination);
      // const context = audioContext;

      await context.complete(() => {
        console.log('DONE!!!!');
      });
      await context.audioWorklet.addModule('./worklets/decibals.js');

      const toneNode = new AudioWorkletNode(context, 'decibals');
      toneNode.parameters.get('sampleRate').value = context.sampleRate;
      toneNode.connect(context.destination);
    };

    // const audioContext = new AudioContext();
    // const offlineCtx = new OfflineAudioContext({
    //   numberOfChannels: 2,
    //   length: 44100 * 40,
    //   sampleRate: 44100,
    // });
    const a = new Audio(src);

    // var bufferSource = offlineCtx.createBufferSource();
    // console.log(bufferSource);
    // offlineCtx.startRendering().then((whst) => {
    //   console.log('Derp', whst);
    // });
    // console.log(audioContext);

    // const source = audioContext.createMediaElementSource(a);
    // source.connect(audioContext.destination);

    // loadOfflineContext();

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

  const hasBufferChanged = () => {
    if (buffered.length !== audioObject.current.buffered.length) {
      return true;
    }

    const foundDiff = buffered.find((block, index) => {
      if (
        block.start !==
        toPercent(
          audioObject.current.buffered.start(index),
          audioObject.current.duration
        )
      ) {
        return true;
      }
      if (
        block.end !==
        toPercent(
          audioObject.current.buffered.end(index),
          audioObject.current.duration
        )
      ) {
        return true;
      }
    });

    return foundDiff ? true : false;
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

  useEffect(() => {
    const progressing = () => {
      if (audioState === 'play') {
        updateProgress();
      }

      if (hasBufferChanged()) {
        updateBuffer();
      }
    };
    if (audioState === 'unloaded') {
      return;
    }
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
    db: db,
  };
};

export default useAudio;
