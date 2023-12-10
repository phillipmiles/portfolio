class RandomNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    return true;
    // const channels = outputs[0];
    // var input = evt.inputBuffer.getChannelData(0),
    //   len = input.length,
    //   total = (i = 0),
    //   rms;
    // while (i < len) total += Math.abs(input[i++]);
    // rms = Math.sqrt(total / len);
    // meter.style.width = rms * 100 + '%';

    //     for (var i = 0; i < _buffer.length; i = i + 2)
    // {
    //     double sample = BitConverter.ToInt16(_buffer, i) / 32768.0;
    //     sum += (sample * sample);
    // }

    // var rms = Math.sqrt(sum / (_buffer.length / 2));
    // var decibel = 20 * (Math.log(rms) / Math.log(10));
    // const output = outputs[0];
    // output.forEach((channel) => {
    //   for (let i = 0; i < channel.length; i++) {
    //     channel[i] = Math.random() * 2 - 1;
    //   }
    // });
    // return true;
  }
}

registerProcessor('random-noise-processor', RandomNoiseProcessor);
