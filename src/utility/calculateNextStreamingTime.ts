import { parseTime, toTime } from "./index";

const calculateNextStreamingTime = (start: string, end: string): string[] => {
  const startNum = parseTime(start);
  const endNum = parseTime(end);
  const interval = (endNum >= startNum) ? endNum - startNum : endNum + 24*60 - startNum;
  // 前の配信開始+ {15分|10分} + 3時間
  const nextStartNum = (interval >= 25) ? startNum + 15 + 60*3 : startNum + 10 + 60*3;
  const nextEndNum = nextStartNum + interval;
  const nextStartTime = toTime(nextStartNum);
  const nextEndTime = toTime(nextEndNum);
  return [nextStartTime, nextEndTime];
}

export default calculateNextStreamingTime;