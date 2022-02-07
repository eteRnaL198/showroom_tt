import { calculateStarTime, calculateNextStreamingTime, parseTime, toTime } from "../utility/index";

let passCnt = 0;
let failCnt = 0;

(() => {
  console.log("25分枠");
  const [collectTime, discardTime] = calculateStarTime("10:00", "10:25");
  const result = (collectTime === "08:15" && discardTime === "09:15");
  if (result) {
    passCnt++;
    console.log("Pass");
  } else {
    failCnt++;
    console.log(`Fail collectTime: ${collectTime}, discardTime: ${discardTime}`);
  }
})();

(() => {
  console.log("24分枠");
  const [collectTime, discardTime] = calculateStarTime("10:00", "10:24");
  const result = (collectTime === "08:10" && discardTime === "09:10");
  if (result) {
    passCnt++;
    console.log("Pass");
  } else {
    failCnt++;
    console.log(`Fail collectTime: ${collectTime}, discardTime: ${discardTime}`);
  }
})();

(() => {
  console.log("日を跨ぐ");
  const [collectTime, discardTime] = calculateStarTime("23:58", "00:28");
  const result = (collectTime === "22:13" && discardTime === "23:13");
  if (result) {
    passCnt++;
    console.log("Pass");
  } else {
    failCnt++;
    console.log(`Fail collectTime: ${collectTime}, discardTime: ${discardTime}`);
  }
})();

(() => {
  console.log("配信時間 10分以下で不正とする");
  const [collectTime, discardTime] = calculateStarTime("23:00", "23:10");
  const result = (collectTime.length === 5 && collectTime.length === 5);
  if (result) {
    passCnt++;
    console.log("Pass");
  } else {
    failCnt++;
    console.log(`Fail collectTime: ${collectTime}, discardTime: ${discardTime}`);
  }
})();

(() => {
  console.log("次の配信時間");
  const [nextStartTime, nextEndTime] = calculateNextStreamingTime("10:00", "10:30");
  const result = (nextStartTime === "13:15" && nextEndTime === "13:45");
  if (result) {
    passCnt++;
    console.log("Pass");
  } else {
    failCnt++;
    console.log(`Fail nextStartTime: ${nextStartTime}, nextEndTime: ${nextEndTime}`);
  }
})();

(() => {
  console.log("時間表示 二桁");
  const [nextStartTime, nextEndTime] = calculateNextStreamingTime("04:52", "5:00");
  const result = (nextStartTime === "08:02" && nextEndTime === "08:10");
  if (result) {
    passCnt++;
    console.log("Pass");
  } else {
    failCnt++;
    console.log(`Fail nextStartTime: ${nextStartTime}, nextEndTime: ${nextEndTime}`);
  }
})();

(() => {
  console.log("12時間表記");
  const time24 = "27:00"
  const timeNum = parseTime(time24);
  const result = (toTime(timeNum) === "03:00");
  if (result) {
    passCnt++;
    console.log("Pass");
  } else {
    failCnt++;
    console.log(`toTime${toTime(timeNum)}`);
  }
})();

(() => {
  console.log("深夜帯");
  const [collectTime, discardTime] = calculateStarTime("00:10", "00:30");
  const result = (collectTime === "22:20" && discardTime === "23:20");
  if (result) {
    passCnt++;
    console.log("Pass");
  } else {
    failCnt++;
    console.log(`Fail collectTime: ${collectTime}, discardTime: ${discardTime}`);
  }
})();

(() => {
  console.log(`Pass: ${passCnt}, Fail: ${failCnt}`);
})();