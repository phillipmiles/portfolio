import {
  useReducer,
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { calcLevels } from './useAudioFuncs';
import { toPercent } from '../utils/math';
import { getTimeString } from '../utils/time';

// https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode
const createMediaElementSource = (mediaElement: HTMLMediaElement) => {
  const context = new AudioContext();
  const audioSourceNode = context.createMediaElementSource(mediaElement);
  audioSourceNode.connect(context.destination);

  return audioSourceNode;
};

const useAudio = (mediaElement) => {
  const [audioState, setAudioState] = useState('unconnected');
  const [audioProgress, setAudioProgress] = useState(0);
  const [currentAudioTimeString, setCurrentAudioTimeString] = useState('0:00');
  const [audioSourceNode, setAudioSourceNode] =
    useState<MediaElementAudioSourceNode>();

  const connectAudio = () => {
    setAudioSourceNode(createMediaElementSource(mediaElement.current));
    setAudioState('connected');
  };

  const playAudio = () => {
    mediaElement.current.play();
    setAudioState('playing');
  };

  const pauseAudio = () => {
    mediaElement.current.pause();
    setAudioState('paused');
  };

  const updateProgress = useCallback(() => {
    const progress = toPercent(
      mediaElement.current.currentTime,
      mediaElement.current.duration
    );

    setAudioProgress(progress);

    setCurrentAudioTimeString(getTimeString(mediaElement.current.currentTime));
  }, [mediaElement]);

  // const updateProgress = useCallback(() => {
  //   const progress = toPercent(audioContext?.currentTime, buffer?.duration);
  //   setProgress(progress);

  //   // setCurrentTimeString(getTimeString(audioObject.current.currentTime));
  // }, [audioContext?.currentTime, buffer?.duration]);

  useEffect(() => {
    const progressing = () => {
      if (audioState === 'playing') updateProgress();

      // if (hasBufferChanged()) {
      // updateBuffer();
      // }
    };

    if (audioState !== 'playing') return;
    const timeout = setInterval(progressing, 200);

    return () => {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [audioState, updateProgress]);

  return {
    audioSourceNode,
    connectAudio,
    playAudio,
    pauseAudio,
    audioState,
    audioProgress,
    audioDuration: mediaElement.current?.duration,
    currentAudioTime: mediaElement.current?.currentTime,
    currentAudioTimeString,
  };
};

export default useAudio;
