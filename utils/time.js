// Converts duration from type to milliseconds.
export const toMilliseconds = (duration, type) => {
  if (type === 'years') {
    return duration * 365 * 24 * 60 * 60 * 1000;
  } else if (type === 'weeks') {
    return duration * 7 * 24 * 60 * 60 * 1000;
  } else if (type === 'days') {
    return duration * 24 * 60 * 60 * 1000;
  } else if (type === 'hours') {
    return duration * 60 * 60 * 1000;
  } else if (type === 'minutes') {
    return duration * 60 * 1000;
  } else if (type === 'seconds') {
    return duration * 1000;
  } else if (type === 'milliseconds') {
    return duration;
  } else {
    throw new Error('Unrecognised time deliminator.');
  }
};

// Converts duration from type to seconds.
export const toSeconds = (duration, type) => {
  if (type === 'years') {
    return duration * 365 * 24 * 60 * 60;
  } else if (type === 'weeks') {
    return duration * 7 * 24 * 60 * 60;
  } else if (type === 'days') {
    return duration * 24 * 60 * 60;
  } else if (type === 'hours') {
    return duration * 60 * 60;
  } else if (type === 'minutes') {
    return duration * 60;
  } else if (type === 'seconds') {
    return duration;
  } else if (type === 'milliseconds') {
    return duration / 1000;
  } else {
    throw new Error('Unrecognised time deliminator.');
  }
};

// Converts duration from type to minutes.
export const toMinutes = (duration, type) => {
  if (type === 'years') {
    return duration * 365 * 24 * 60;
  } else if (type === 'weeks') {
    return duration * 7 * 24 * 60;
  } else if (type === 'days') {
    return duration * 24 * 60;
  } else if (type === 'hours') {
    return duration * 60;
  } else if (type === 'minutes') {
    return duration;
  } else if (type === 'seconds') {
    return duration / 60;
  } else if (type === 'milliseconds') {
    return duration / 60 / 1000;
  } else {
    throw new Error('Unrecognised time deliminator.');
  }
};

export const isoDateStringToLabel = (isoDateString) => {
  const date = new Date(isoDateString);
  const todaysDate = new Date();
  const yesterdaysDate = new Date();

  yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);

  if (
    date.getDate() === todaysDate.getDate() &&
    date.getMonth() === todaysDate.getMonth() &&
    date.getFullYear() === todaysDate.getFullYear()
  ) {
    return 'Today';
  } else if (
    date.getDate() === yesterdaysDate.getDate() &&
    date.getMonth() === yesterdaysDate.getMonth() &&
    date.getFullYear() === yesterdaysDate.getFullYear()
  ) {
    return 'Yesterday';
  } else {
    return date.toDateString();
  }
};

export const convertRelativeTimeStringToMilliseconds = (relativeTimeString) => {
  const [numberStr, timeDef, suffix] = relativeTimeString.split(' ');

  if (suffix !== 'ago') return;

  const num = parseInt(numberStr);

  if (
    timeDef === 'sec' ||
    timeDef === 'secs' ||
    timeDef === 'second' ||
    timeDef === 'seconds'
  ) {
    return toMilliseconds(num, 'seconds');
  } else if (
    timeDef === 'min' ||
    timeDef === 'mins' ||
    timeDef === 'minute' ||
    timeDef === 'minutes'
  ) {
    return toMilliseconds(num, 'minutes');
  } else if (timeDef === 'hour' || timeDef === 'hours') {
    return toMilliseconds(num, 'hours');
  } else if (timeDef === 'day' || timeDef === 'days') {
    return toMilliseconds(num, 'days');
  } else if (timeDef === 'week' || timeDef === 'weeks') {
    return toMilliseconds(num, 'weeks');
  } else if (timeDef === 'year' || timeDef === 'years') {
    return toMilliseconds(num, 'years');
  }
};

export const addLeadingZero = (num, size) => {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};

export const timeSince = (firstTime, lastTime, type) => {
  if (type === 'years') {
    throw new Error(`Conversion '${type}' not built yet..`);
  } else if (type === 'weeks') {
    throw new Error(`Conversion '${type}' not built yet..`);
  } else if (type === 'days') {
    throw new Error(`Conversion '${type}' not built yet..`);
  } else if (type === 'hours') {
    throw new Error(`Conversion '${type}' not built yet..`);
  } else if (type === 'minutes') {
    return toMinutes(lastTime - firstTime, 'milliseconds');
  } else if (type === 'seconds') {
    return toSeconds(lastTime - firstTime, 'milliseconds');
  } else if (type === 'milliseconds') {
    return lastTime - firstTime;
  } else {
    throw new Error('Unrecognised time deliminator.');
  }
};

// REPLACE WITH # DAYS AWAY FROM TODAY.
// So it would return 0 if today and -1 if yesterday. then developer can do
//
// if(daysDifference(new Date(), someOtherDate) === -1) {
//   return 'today'
// }

export const daysDifference = (date1, date2) => {
  const timeDiff = date2.getTime() - date1.getTime();

  const daysDiff = timeDiff / (1000 * 3600 * 24);
  return daysDiff;
};

export const timeFunction = async (time = 'seconds', func) => {
  const startTime = Date.now();
  const result = await func();
  const stopTime = Date.now();

  const duration = parseFloat(timeSince(startTime, stopTime, time).toFixed(2));

  return [duration, result];
};

export const getTimeString = (seconds) => {
  if (!seconds) {
    return '0:00';
  }

  const minutes = Math.trunc(toMinutes(seconds, 'seconds'));
  const secondsAbs = parseInt(seconds);
  const secondsConverted = addLeadingZero(secondsAbs % 60, 2);
  return `${minutes}:${secondsConverted}`;
};
