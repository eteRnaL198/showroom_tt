var index_1 = require("../utility/index");
var passCnt = 0;
var failCnt = 0;
(function () {
    console.log("25分枠");
    var _a = index_1.calculateStarTime("10:00", "10:25"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "08:15" && discardTime === "09:15");
    if (result) {
        passCnt++;
        console.log("Pass");
    }
    else {
        failCnt++;
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("24分枠");
    var _a = index_1.calculateStarTime("10:00", "10:24"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "08:10" && discardTime === "09:10");
    if (result) {
        passCnt++;
        console.log("Pass");
    }
    else {
        failCnt++;
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("日を跨ぐ");
    var _a = index_1.calculateStarTime("23:58", "00:28"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "22:13" && discardTime === "23:13");
    if (result) {
        passCnt++;
        console.log("Pass");
    }
    else {
        failCnt++;
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("不正な時間");
    var _a = index_1.calculateStarTime("23:00", "23:00"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime.length === 7);
    if (result) {
        passCnt++;
        console.log("Pass");
    }
    else {
        failCnt++;
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("次の配信時間");
    var _a = index_1.calculateNextStreamingTime("10:00", "10:30"), nextStartTime = _a[0], nextEndTime = _a[1];
    var result = (nextStartTime === "13:15" && nextEndTime === "13:45");
    if (result) {
        passCnt++;
        console.log("Pass");
    }
    else {
        failCnt++;
        console.log("Fail nextStartTime: " + nextStartTime + ", nextEndTime: " + nextEndTime);
    }
})();
(function () {
    console.log("時間表示 二桁");
    var _a = index_1.calculateNextStreamingTime("04:52", "5:00"), nextStartTime = _a[0], nextEndTime = _a[1];
    var result = (nextStartTime === "08:02" && nextEndTime === "08:10");
    if (result) {
        passCnt++;
        console.log("Pass");
    }
    else {
        failCnt++;
        console.log("Fail nextStartTime: " + nextStartTime + ", nextEndTime: " + nextEndTime);
    }
})();
(function () {
    console.log("12時間表記");
    var time24 = "27:00";
    var timeNum = index_1.parseTime(time24);
    var result = (index_1.toTime(timeNum) === "03:00");
    if (result) {
        passCnt++;
        console.log("Pass");
    }
    else {
        failCnt++;
        console.log("toTime" + index_1.toTime(timeNum));
    }
})();
(function () {
    console.log("深夜帯");
    var _a = index_1.calculateStarTime("00:10", "00:30"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "22:20" && discardTime === "23:20");
    if (result) {
        passCnt++;
        console.log("Pass");
    }
    else {
        failCnt++;
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("Pass: " + passCnt + ", Fail: " + failCnt);
})();
