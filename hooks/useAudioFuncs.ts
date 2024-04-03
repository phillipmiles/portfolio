// Calculates RMS
export const calcLevel = (
  buffer: Float32Array,
  pos: number,
  winSize: number
) => {
  for (var rms, sum = 0, v, i = pos - winSize; i <= pos; i++) {
    v = i < 0 ? 0 : buffer[i];
    sum += v * v;
  }

  rms = Math.sqrt(sum / winSize);

  return rms === 0 ? 0 : 20 * Math.log10(rms);
};

export const calcLevels = (buffer: AudioBuffer) => {
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

export const fetchAudioLevels = async (src: string) => {
  const context = new AudioContext();

  const response = await fetch(src);
  const downloadedBuffer = await response.arrayBuffer();
  const decodedBuffer = await context.decodeAudioData(downloadedBuffer);

  return calcLevels(decodedBuffer);
};
