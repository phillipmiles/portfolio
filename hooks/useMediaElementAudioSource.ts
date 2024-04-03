import {
  useReducer,
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';

// https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode
const useMediaElementAudioSource = (mediaElement: HTMLMediaElement) => {
  const [audioSourceNode, setAudioSourceNode] = useState<AudioContext>();

  const loadAudio = () => {
    const context = new AudioContext();
    const audioSourceNode = context.createMediaElementSource(mediaElement);
    audioSourceNode.connect(context.destination);

    mediaElement.play();
    // if (playButton.dataset.playing === 'false') {
    //   audioRef.current.play();
    //   playButton.dataset.playing = 'true';
    // } else if (playButton.dataset.playing === 'true') {
    //   audioRef.current.pause();
    //   playButton.dataset.playing = 'false';
    // }

    // const response = await fetch(src);
    // const downloadedBuffer = await response.arrayBuffer();
    // const decodedBuffer = await context.decodeAudioData(downloadedBuffer);

    // setLevels(calcLevels(decodedBuffer));

    // setBuffer(decodedBuffer);

    // setAudioState('loaded');
    setAudioSourceNode(audioSourceNode);
  };

  return audioSourceNode;
};

export default useMediaElementAudioSource;
