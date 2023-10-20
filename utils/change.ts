const calcIncrement = (
  startNumber: number,
  endNumber: number,
  duration: number,
  millisecondsSinceLastUpdate: number
) => {
  const delta = endNumber - startNumber;
  return (delta / duration) * millisecondsSinceLastUpdate;
};

export const incrementNumberTo = (
  startNumber: number,
  endNumber: number,
  duration: number,
  incrementCallback: Function,
  currentNumber: number,
  lastTime: Date,
  updateSpeed: number,
  endCallback: Function
) => {
  const notCancelled = incrementCallback(currentNumber);

  if (currentNumber < endNumber && notCancelled) {
    const newTime = new Date();
    const millisecondsSinceLastUpdate = newTime.getTime() - lastTime.getTime();

    const increment = calcIncrement(
      startNumber,
      endNumber,
      duration,
      millisecondsSinceLastUpdate
    );

    const newNumber =
      currentNumber + increment > endNumber
        ? endNumber
        : currentNumber + increment;

    // Delay a bit before calling the function again for performance reasons
    setTimeout(function () {
      console.log('sdgs');
      incrementNumberTo(
        startNumber,
        endNumber,
        duration,
        incrementCallback,
        newNumber,
        newTime,
        updateSpeed,
        endCallback
      );
    }, updateSpeed);
  } else {
    endCallback(endNumber);
  }
};
