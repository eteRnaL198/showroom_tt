import { calculate } from "../utility/index";

(() => {
  console.log("25分枠");
  const [collectTime, discardTime] = calculate("10:00", "10:25");
  let result = (collectTime === "9:15" && discardTime === "8:15") ? "Pass" : "Fail";
  console.log(result);
})();

(() => {
  console.log("24分枠");
  const [collectTime, discardTime] = calculate("10:00", "10:24");
  let result = (collectTime === "9:10" && discardTime === "8:10") ? "Pass" : "Fail";
  console.log(result);
})();