const calculate = (start: string, end: string): string[] => {
  const parseTime = (char: string): number => { // 10:15 →615
    const [hour, min] = char.split(':').map(elm => parseInt(elm))
    return hour * 60 + min;
  }
  const toTime = (num: number): string => {
    const hour = (num / 60).toString();
    const min = (num % 60).toString();
    return `${hour}:${min}`;
  }

  const startNum = parseTime(start);
  const endNum = parseTime(end);
  const collectNum = (endNum - startNum >= 25) ? 
    startNum + 15 - 60 : startNum + 10 - 60;
  const collectTime = toTime(collectNum);
  const discardTime = toTime(collectNum - 60);

  return [collectTime, discardTime];
}

export default calculate;