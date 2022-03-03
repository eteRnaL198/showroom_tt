const toTime = (num: number): string => {
  const hourNum = (num / 60 | 0);
  const minNum = (num % 60);
  const hourNumAmpm = (hourNum >= 24) ? hourNum - 24 : hourNum;
  const hourString = (hourNumAmpm >= 10) ? hourNumAmpm.toString() : `0${hourNumAmpm.toString()}`;
  const minString = (minNum >= 10) ? minNum.toString() : `0${minNum.toString()}`;
  return `${hourString}:${minString}`;
}

export default toTime;