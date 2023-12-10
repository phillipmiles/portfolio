const amplitude = 0.2;

// function getSinWave(time, frequency) {
//   return amplitude * Math.sin(frequency * Math.PI * 2 * time);
// }

function getSinWave(frequency, time) {
  console.log(time);
  return 0.5 * Math.sin(frequency * 2 * Math.PI * time);
}

function getTriangleWave(frequency, time) {
  return Math.asin(Math.sin(frequency * 2 * Math.PI * time));
}

function getSawWave(frequency, time) {
  return 2 * (frequency * Math.PI * (time % (1 / frequency)) - 1);
}

class DecibalsProcessor extends AudioWorkletProcessor {
  #index = 0;

  static parameterDescriptors = [
    {
      name: 'sampleRate',
      defaultValue: 48000,
    },
    {
      name: 'frequency',
      defaultValue: 220,
    },
    {
      name: 'type',
      defaultValue: 0,
    },
  ];

  process(inputs, outputs, parameters) {
    const output = outputs[0];

    output.forEach((channel) => {
      console.log(inputs, parameters);
      for (let i = 0; i < channel.length; i++) {
        //channel is a buffer
        channel[i] = getTriangleWave(
          parameters.frequency[0],
          this.#index / parameters.sampleRate[0]
        );
        this.#index++;
      }
    });
    return true;
    // console.log(inputs);
    // this.port.postMessage('hekk');
    // const output = outputs[0];
    // output.forEach((channel) => {
    //   for (let i = 0; i < channel.length; i++) {
    //     channel[i] = Math.random() * 2 - 1;
    //   }
    // });
    return true;
  }
}

registerProcessor('decibals', DecibalsProcessor);
