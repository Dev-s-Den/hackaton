
const calculateTime = (time) => {
  const today = new Date();
  const date2 = new Date(time);
  const timeRemaining =
    (date2.getTime() - today.getTime()) / (1000 * 3600 * 24);
  if (timeRemaining !== 0) {
    if (timeRemaining !== 1) {
      return `${timeRemaining.toFixed()} days remaining`;
    }
    return `${timeRemaining.toFixed()} day remaining`;
  }
  return `0 days remaining`;
};

export { calculateTime }