var index_1 = require("./index");
var calculateNextStreamingTime = function (start, end) {
    var startNum = index_1.parseTime(start);
    var endNum = index_1.parseTime(end);
    var interval = (endNum >= startNum) ? endNum - startNum : endNum + 24 * 60 - startNum;
    // 前の配信開始+ {15分|10分} + 3時間
    var nextStartNum = (interval >= 25) ? startNum + 15 + 60 * 3 : startNum + 10 + 60 * 3;
    var nextEndNum = nextStartNum + interval;
    var nextStartTime = index_1.toTime(nextStartNum);
    var nextEndTime = index_1.toTime(nextEndNum);
    return [nextStartTime, nextEndTime];
};
exports["default"] = calculateNextStreamingTime;
