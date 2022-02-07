import { parseTime, toTime } from "./index";

const calculateStarTime = (start: string, end: string): string[] => {
  const startNum = parseTime(start);
  const endNum = parseTime(end);
  const discardNum = (() => {
    const interval = (endNum >= startNum) ? endNum - startNum : endNum + 24*60 - startNum;
    if (interval >= 25) {
      return startNum + 15 - 60;  
    } else if (interval > 0) {
      return startNum + 10 - 60;
    } else {
      return -1;
    }
  })();
  const discardTime = toTime(discardNum);
  const collectTime = toTime(discardNum - 60);

  return [collectTime, discardTime];
}

export default calculateStarTime;