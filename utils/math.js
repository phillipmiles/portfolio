// Takes a float value between 0 and value2 and converts that into a percentage value between
// 0 and 1 rounded to two decimal places.
export const toPercent = (value1, value2, decimals) => {
  const percentage = (value1 / value2) * 100;

  if (decimals) {
    return roundDecimalTo(percentage, decimals);
  } else {
    return percentage;
  }
};

export const roundDecimalTo = (value, decimals) => {
  const decimalDigits = Math.pow(10, decimals);

  return Math.round(value * decimalDigits) / decimalDigits;
};

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
