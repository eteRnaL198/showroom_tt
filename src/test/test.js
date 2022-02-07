var index_1 = require("../utility/index");
(function () {
    console.log("25分枠");
    var _a = index_1.calculateStarTime("10:00", "10:25"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "8:15" && discardTime === "9:15");
    if (result) {
        console.log("Pass");
    }
    else {
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("24分枠");
    var _a = index_1.calculateStarTime("10:00", "10:24"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "8:10" && discardTime === "9:10");
    if (result) {
        console.log("Pass");
    }
    else {
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("日を跨ぐ");
    var _a = index_1.calculateStarTime("23:58", "00:28"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "22:13" && discardTime === "23:13");
    if (result) {
        console.log("Pass");
    }
    else {
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("不正な時間");
    var _a = index_1.calculateStarTime("23:00", "23:00"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "-1:-1");
    if (result) {
        console.log("Pass");
    }
    else {
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("次の配信時間");
    var _a = index_1.calculateNextStreamingTime("10:00", "10:30"), nextStartTime = _a[0], nextEndTime = _a[1];
    var result = (nextStartTime === "13:15" && nextEndTime === "13:45");
    if (result) {
        console.log("Pass");
    }
    else {
        console.log("Fail nextStartTime: " + nextStartTime + ", nextEndTime: " + nextEndTime);
    }
})();
