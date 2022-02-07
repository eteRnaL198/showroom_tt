import { calculateStarTime, calculateNextStreamingTime } from "../utility/index";

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
  console.log("不正な時間");
  const [collectTime, discardTime] = calculateStarTime("23:00", "23:00");
  const result = (collectTime.length === 7)
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
  console.log(`Pass: ${passCnt}, Fail: ${failCnt}`);
})();