const toTime = (num: number): string => {
  const hour = (num / 60 | 0).toString();
  const min = (num % 60).toString();
  return (min.length === 2) ? `${hour}:${min}` : `${hour}:0${min}`;
}

export default toTime;