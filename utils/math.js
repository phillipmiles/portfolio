// Takes a float value between 0 and value2 and converts that into a percentage value between
// 0 and 1 rounded to two decimal places.
export const getValueAsPercentage = (value1, value2, decimals = 2) => {
  const percentage = (value1 / value2) * 100;
  const rounderedProgress = roundDecimalTo(percentage, decimals);

  return rounderedProgress;
};

export const roundDecimalTo = (value, decimals) => {
  const decimalDigits = Math.pow(10, decimals);

  return Math.round(value * decimalDigits) / decimalDigits;
};
