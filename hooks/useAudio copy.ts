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

const useAudio = (src, settings) => {
  const [audioContext, setAudioContext] = useState();
  const [source, setSource] = useState();
  const [renderedBuffer, setRenderedBuffer] = useState();
  const audioObject = useRef();
  const [progress, setProgress] = useState(0);
  const [db, setDB] = useState([]);
  const [audioState, setAudioState] = useState('unloaded');
  const [audioLevelsState, setAudioLevelsState] = useState('unloaded');
  const [currentTimeString, setCurrentTimeString] = useState('0:00');
  const [durationTimeString, setDurationTimeString] = useState('0:00');
  const [buffered, setBuffered] = useState<{ start: number; end: number }[]>(
    []
  );
  const analyserArray = useRef();
  const analyser = useRef();
  const [bufferLength, setBufferLength] = useState();
  const [offlineBuffer, setOfflineBuffer] = useState(null);
  const [doOnce, setDoOnce] = useState(false);

  const [levels, setLevels] = useState([]);

  // Calculates RMS
  const calcLevel = (buffer: Float32Array, pos: number, winSize: number) => {
    for (var rms, sum = 0, v, i = pos - winSize; i <= pos; i++) {
      v = i < 0 ? 0 : buffer[i];
      sum += v * v;
    }

    rms = Math.sqrt(sum / winSize);

    return rms === 0 ? 0 : 20 * Math.log10(rms);
  };

  const calcLevels = (buffer: AudioBuffer) => {
    const WIDTH = 400;

    var channel = buffer.getChannelData(0);
    var points = [];

    let max = 0;

    for (var x = 1, i, v; x < WIDTH; x++) {
      i = ((x / WIDTH) * channel.length) | 0;
      v = Math.abs(calcLevel(channel, i, WIDTH));
      if (max < v) {
        max = v;
      }
      points.push(v);
    }

    const adjustedArray = [];
    for (x = 0, v; x < points.length; x++) {
      adjustedArray.push(max - points[x] * 2);
    }

    return adjustedArray;
  };

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
        // audioObject.current.removeEventListener('loadeddata', onLoaded);
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

  const onLoaded = async () => {
    if (!audioObject.current) return;

    setDurationTimeString(getTimeString(audioObject.current.duration));
    setAudioState('loaded');

    // audioObject.current.removeEventListener('loadeddata', onLoaded);
  };

  const offlineLoad = async () => {
    // Load audio track, decode it and calculate levels.
    try {
      const response = await fetch(src);
      const downloadedBuffer = await response.arrayBuffer();
      const decodedBuffer = await audioContext.decodeAudioData(
        downloadedBuffer
      );
      setOfflineBuffer(decodedBuffer);
      return decodedBuffer;
    } catch (err) {
      console.error(`Error encountered: ${err}`);
    }
  };

  const load = async () => {
    let context;
    if (offlineBuffer) {
      // context
    }
    const source = new AudioBufferSourceNode(offlineContext, {
      buffer: decodedBuffer,
    });
    source.connect(offlineContext.destination);
    await source.start();

    console.log(source);
    const renderedBuffer = await offlineContext.startRendering();

    const song = new AudioBufferSourceNode(audioContext, {
      buffer: renderedBuffer,
    });
    song.connect(audioContext.destination);
    setSource(song);
    await song.start();
  };

  const getLevels = async () => {
    if (!offlineLoad) {
      const decodedBuffer = await offlineLoad();
      calcLevels(decodedBuffer);
    }
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

    const playBuffer = () => {
      // source = audioCtx.createBufferSource();
      // source.buffer = buffer;
      // source.connect(audioCtx.destination);
      // source.loop = true;
      // source.start();
    };

    const loadAudio2 = async () => {
      const audioContext2 = new AudioContext();
      setAudioContext(audioContext2);
      const offlineContext = new OfflineAudioContext(2, 44100 * 40, 44100);
      let preTime = new Date();
      let postTime;
      // Load audio track, decode it and calculate levels.
      try {
        const response = await fetch(src);
        const downloadedBuffer = await response.arrayBuffer();
        const decodedBuffer = await audioContext2.decodeAudioData(
          downloadedBuffer
        );

        // ==== THIS PLAYS DA MUSIC!!!!!!
        const sourcetest = audioContext2.createBufferSource();
        sourcetest.buffer = decodedBuffer;
        sourcetest.connect(audioContext2.destination);
        sourcetest.loop = true;
        sourcetest.start(0, 60);

        return;
        // ==== THIS PLAYS DA MUSIC!!!!!!
        const levelsData = calcLevels(decodedBuffer);
        setLevels(levelsData);
        setAudioLevelsState('loaded');
        const source = new AudioBufferSourceNode(offlineContext, {
          buffer: decodedBuffer,
        });
        source.connect(offlineContext.destination);
        await source.start();
        // source.start();

        const renderedBuffer2 = await offlineContext.startRendering();

        setRenderedBuffer(renderedBuffer2);
        const song = new AudioBufferSourceNode(audioContext2, {
          buffer: renderedBuffer2,
        });
        console.log('=======');
        console.log(song);
        setAudioState('play');
        song.connect(audioContext2.destination);
        // Does'nt work beyond 40 Seconds. Seems const offlineContext = new OfflineAudioContext(2, 44100 * 40, 44100); dictats that
        // song.start(audioContext2.currentTime, 39);
        song.start();
        // setSource(song);
        // song.start(100);
        // console.log(song);
      } catch (err) {
        console.error(`Error encountered: ${err}`);
      }

      postTime = new Date();
      const diff = (postTime.getTime() - preTime.getTime()) / 1000;
      console.log(diff);

      onLoaded();
      // play.disabled = false;
      // const song = new AudioBufferSourceNode(audioContext, {
      //   buffer: renderedBuffer,
      // });
      // song.connect(audioContext.destination);
      // setAudioState('play');

      // song.start();
    };
    await loadAudio2();
    // const a = new Audio(src);

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
    // audioObject.current = a;

    setAudioState('loading');
    setAudioLevelsState('loading');

    // a.addEventListener('loadeddata', onLoaded);
  };

  const updatePosition = (seconds) => {
    const node = new AudioBufferSourceNode(audioContext, {
      buffer: renderedBuffer,
    });
    node.connect(audioContext.destination);
    console.log('um');
    node.start(seconds);
  };

  const updateBuffer = async () => {
    // console.log(';bam', source.buffer.length);
    // source.context.suspend();
    // updatePosition(100);
    console.log(audioContext);
    // source.context.suspend();
    // source.context.resume();
    // source.start(100);
    // source.context.currentTime = 1000;
    // console.log(source.buffer.length);
    return;
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

      // if (hasBufferChanged()) {
      updateBuffer();
      // }
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
    // if (!audioObject.current) return;
    // audioObject.current.play();
    audioContext.resume();
    setAudioState('play');
  };

  const pause = () => {
    audioContext.suspend();
    // if (!audioObject.current) return;
    // audioObject.current.pause();
    setAudioState('pause');
  };

  const changeTime = (time) => {
    audioObject.current.currentTime = time;
    updateBuffer();
    updateProgress();
  };

  const loadLevels = () => {
    console.log('LOOOOOADDDD LEVELSSS');
  };

  return {
    a: audioObject.current,
    progress: progress,
    setTime: changeTime,
    buffered: buffered,
    levels: levels,
    currentTimeString: currentTimeString,
    durationTimeString: durationTimeString,
    load: loadAudio,
    loadLevels: loadLevels,
    play: play,
    pause: pause,
    audioState: audioState,
    audioLevelsState: audioState,
    getAnalyserData: getAnalyserData,
    db: db,
  };
};

export default useAudio;
