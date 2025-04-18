import { useState, useEffect } from 'react';

const useAudioLevel = (src: string) => {
  const [array, setArray] = useState([]);

  // Calculates RMS
  const calcLevel = (buffer: Float32Array, pos: number, winSize: number) => {
    for (var rms, sum = 0, v, i = pos - winSize; i <= pos; i++) {
      v = i < 0 ? 0 : buffer[i];
      sum += v * v;
    }

    rms = Math.sqrt(sum / winSize);

    return rms === 0 ? 0 : 20 * Math.log10(rms);
  };

  const getLevels = (buffer: AudioBuffer) => {
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

  const loadAudio = async () => {
    const context = new AudioContext();
    const offlineContext = new OfflineAudioContext(2, 44100 * 40, 44100);
    let preTime;
    let postTime;
    // Load audio track, decode it and calculate levels.
    await fetch(src)
      .then((response) => response.arrayBuffer())
      .then((downloadedBuffer) => context.decodeAudioData(downloadedBuffer))
      .then((decodedBuffer) => {
        setArray(getLevels(decodedBuffer));

        preTime = new Date();
        const source = new AudioBufferSourceNode(context, {
          buffer: decodedBuffer,
        });

        postTime = new Date();
        const diff = (postTime.getTime() - preTime.getTime()) / 1000;
        console.log(diff);
        // source.connect(offlineContext.destination);

        // console.log(source);
        // return source.start();
      })
      .then((derp) => {
        return offlineContext.startRendering();
      })
      .then((renderedBuffer) => {
        console.log('Rendering completed successfully.');

        // play.disabled = false;
        // const song = new AudioBufferSourceNode(audioContext, {
        //   buffer: renderedBuffer,
        // });
        // song.connect(audioContext.destination);
        // setAudioState('play');

        // song.start();
      })
      .catch((err) => {
        console.error(`Error encountered: ${err}`);
      });
  };

  useEffect(() => {
    loadAudio();
  }, [src]);

  return array;
};

export default useAudioLevel;
