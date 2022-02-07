var index_1 = require("./index");
var calculateStarTime = function (start, end) {
    var startNum = index_1.parseTime(start);
    var endNum = index_1.parseTime(end);
    var discardNum = (function () {
        var interval = (endNum >= startNum) ? endNum - startNum : endNum + 24 * 60 - startNum;
        if (interval >= 25) {
            // 25分以上の枠は配信開始15分後に制限解除
            var tmp = startNum + 15 - 60;
            return (tmp >= 0) ? tmp : tmp + 24 * 60;
        }
        else if (interval > 10) {
            // それ以下の枠は配信開始10分後に制限解除
            var tmp = startNum + 10 - 60;
            return (tmp >= 0) ? tmp : tmp + 24 * 60;
        }
        else {
            return -1;
        }
    })();
    var collectNum = (discardNum - 60 >= 0) ? discardNum - 60 : discardNum - 60 + 24 * 60;
    var discardTime = index_1.toTime(discardNum);
    var collectTime = index_1.toTime(collectNum);
    return [collectTime, discardTime];
};
exports["default"] = calculateStarTime;
