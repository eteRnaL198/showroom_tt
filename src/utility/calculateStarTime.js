var index_1 = require("./index");
var calculateStarTime = function (start, end) {
    var startNum = index_1.parseTime(start);
    var endNum = index_1.parseTime(end);
    var discardNum = (function () {
        var interval = (endNum >= startNum) ? endNum - startNum : endNum + 24 * 60 - startNum;
        if (interval >= 25) {
            return startNum + 15 - 60;
        }
        else if (interval > 0) {
            return startNum + 10 - 60;
        }
        else {
            return -1;
        }
    })();
    var discardTime = index_1.toTime(discardNum);
    var collectTime = index_1.toTime(discardNum - 60);
    return [collectTime, discardTime];
};
exports["default"] = calculateStarTime;
