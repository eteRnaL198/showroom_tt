import { calculate } from "../utility/index";

(() => {
  console.log("25分枠");
  const [collectTime, discardTime] = calculate("10:00", "10:25");
  const result = (collectTime === "8:15" && discardTime === "9:15");
  if (result) {
    console.log("Pass");
  } else {
    console.log(`Fail collectTime: ${collectTime}, discardTime: ${discardTime}`);
  }
})();

(() => {
  console.log("24分枠");
  const [collectTime, discardTime] = calculate("10:00", "10:24");
  const result = (collectTime === "8:10" && discardTime === "9:10");
  if (result) {
    console.log("Pass");
  } else {
    console.log(`Fail collectTime: ${collectTime}, discardTime: ${discardTime}`);
  }
})();

(() => {
  console.log("日を跨ぐ");
  const [collectTime, discardTime] = calculate("23:58", "00:28");
  const result = (collectTime === "22:13" && discardTime === "23:13");
  if (result) {
    console.log("Pass");
  } else {
    console.log(`Fail collectTime: ${collectTime}, discardTime: ${discardTime}`);
  }
})();