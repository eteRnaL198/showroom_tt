import { parseTime, toTime } from "./index";

const calculateStarTime = (start: string, end: string): string[] => {
  const startNum = parseTime(start);
  const endNum = parseTime(end);
  const discardNum = (() => {
    const interval = (endNum >= startNum) ? endNum - startNum : endNum + 24*60 - startNum;
    if (interval >= 25) {
      // 25分以上の枠は配信開始15分後に制限解除
      const longInterval = startNum + 15 - 60;
      return (longInterval >= 0) ? longInterval : longInterval + 24*60;
    } else if (interval > 10) {
      // それ以下の枠は配信開始10分後に制限解除
      const shortInterval =  startNum + 10 - 60; 
      return (shortInterval >= 0) ? shortInterval: shortInterval + 24*60;
    } else {
      return -1;
    }
  })();
  const collectNum = (discardNum - 60 >= 0) ? discardNum - 60 : discardNum - 60 + 24*60;
  const discardTime = toTime(discardNum);
  const collectTime = toTime(collectNum);

  return [collectTime, discardTime];
}

export default calculateStarTime;