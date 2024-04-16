import { useCallback, useState, useEffect } from 'react';
import { toPercent } from '../utils/math';
import { getTimeString } from '../utils/time';

// Why use a HTMLMediaElement instead of an AudioBufferSourceNode
// ===
// UseAudio makes use of a HTML media element provided to the hook as a property.
// By using a HTML media element we get the beneift of having the audio file
// be streamed in and buffered rather than the entire file needing to be downloaded.

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
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioDurationTimeString, setAudioDurationTimeString] =
    useState('0:00');
  const [audioVolume, setAudioVolume] = useState(1);
  const [audioMuted, setAudioMuted] = useState(false);
  const [audioSourceNode, setAudioSourceNode] =
    useState<MediaElementAudioSourceNode>();

  const updateDuration = useCallback(() => {
    console.log(mediaElement.current.duration);
    setAudioDuration(mediaElement.current.duration);
    setAudioDurationTimeString(getTimeString(mediaElement.current.duration));
  }, [mediaElement]);

  useEffect(() => {
    // WARN: Updating duration here without checking if audio has loaded may throw errors
    // in edge cases. Probably need to use this AND a mix of listeners to know when to
    // set the duration values at the right time.
    updateDuration();
  }, [updateDuration]);

  const connectAudio = useCallback(() => {
    setAudioSourceNode(createMediaElementSource(mediaElement.current));
    setAudioState('connected');
  }, [mediaElement]);

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
  };

  const toggleAudio = () => {
    if (audioState === 'playing') {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const setAudioTime = useCallback(
    (time: number) => {
      mediaElement.current.currentTime = time;
    },
    [mediaElement]
  );

  const setVolume = useCallback(
    (volume: number) => {
      mediaElement.current.volume = volume;
    },
    [mediaElement]
  );

  const muteAudio = useCallback(() => {
    mediaElement.current.muted = true;
  }, [mediaElement]);

  const unmuteAudio = useCallback(() => {
    mediaElement.current.muted = false;
  }, [mediaElement]);

  // Events
  useEffect(() => {
    if (!mediaElement.current) return;

    const onEnded = (event: Event) => {
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

    const onDurationChange = (event: Event) => {
      updateDuration();
    };

    const onVolumeChange = (event: Event) => {
      setAudioVolume(mediaElement.current.volume);
      setAudioMuted(mediaElement.current.muted);
    };

    mediaElement.current.addEventListener('play', onPlay);
    mediaElement.current.addEventListener('pause', onPause);
    mediaElement.current.addEventListener('timeupdate', onTimeUpdate);
    mediaElement.current.addEventListener('ended', onEnded);
    mediaElement.current.addEventListener('durationchange', onDurationChange);
    mediaElement.current.addEventListener('volumechange', onVolumeChange);
  }, [mediaElement, updateProgress, updateDuration]);

  return {
    audioSourceNode,
    connectAudio,
    playAudio,
    pauseAudio,
    toggleAudio,
    muteAudio,
    unmuteAudio,
    setAudioTime,
    setAudioVolume: setVolume,
    audioState,
    audioProgress,
    audioDuration,
    currentAudioTime: mediaElement.current?.currentTime,
    audioVolume,
    audioMuted,
    currentAudioTimeString,
    audioDurationTimeString,
  };
};

export default useAudio;
