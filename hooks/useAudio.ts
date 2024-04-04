import {
  useReducer,
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';
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

  const updateProgress = useCallback(() => {
    const progress = toPercent(
      mediaElement.current.currentTime,
      mediaElement.current.duration
    );

    // Really only using this hook for Audio Progress as a percent and AudioTimeString.
    // Consider moving these out into separate smaller hooks or as utility functions.
    // If I end up attaching an anaylser node to the audio source node
    // this hook might still be useful.
    setAudioProgress(progress);
    setCurrentAudioTimeString(getTimeString(mediaElement.current.currentTime));
  }, [mediaElement]);

  const playAudio = () => {
    mediaElement.current.play();
  };

  const pauseAudio = () => {
    mediaElement.current.pause();
    setAudioState('paused');
  };

  const jumpAudio = useCallback(
    (time: number) => {
      mediaElement.current.currentTime = time;
    },
    [mediaElement]
  );

  // Events
  useEffect(() => {
    const onEnded = (event: Event) => {
      console.log('Fin');
      setAudioState('paused');
    };

    const onPlay = (event: Event) => {
      setAudioState('playing');
    };

    const onPause = (event: Event) => {
      setAudioState('paused');
    };

    const onTimeUpdate = (event: Event) => {
      updateProgress();
    };

    mediaElement.current.addEventListener('play', onPlay);
    mediaElement.current.addEventListener('pause', onPause);
    mediaElement.current.addEventListener('timeupdate', onTimeUpdate);
    mediaElement.current.addEventListener('ended', onEnded);
  }, [mediaElement, updateProgress]);

  return {
    audioSourceNode,
    connectAudio,
    playAudio,
    pauseAudio,
    jumpAudio,
    audioState,
    audioProgress,
    audioDuration: mediaElement.current?.duration,
    currentAudioTime: mediaElement.current?.currentTime,
    currentAudioTimeString,
  };
};

export default useAudio;
