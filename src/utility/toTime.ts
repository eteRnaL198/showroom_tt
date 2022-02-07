const toTime = (num: number): string => {
  const hour = (num / 60 | 0).toString();
  const min = (num % 60).toString();
  return `${hour}:${min}`;
}

export default toTime;