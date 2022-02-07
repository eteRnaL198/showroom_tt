const toTime = (num: number): string => {
  const hourNum = (num / 60 | 0);
  const minNum = (num % 60);
  const hourString = (hourNum >= 10) ? hourNum.toString() : `0${hourNum.toString()}`;
  const minString = (minNum >= 10) ? minNum.toString() : `0${minNum.toString()}`;
  return `${hourString}:${minString}`;
}

export default toTime;