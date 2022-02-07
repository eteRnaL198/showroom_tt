var toTime = function (num) {
    var hourNum = (num / 60 | 0);
    var minNum = (num % 60);
    var hourNumAmpm = (hourNum >= 24) ? hourNum - 24 : hourNum;
    var hourString = (hourNumAmpm >= 10) ? hourNumAmpm.toString() : "0" + hourNumAmpm.toString();
    var minString = (minNum >= 10) ? minNum.toString() : "0" + minNum.toString();
    return hourString + ":" + minString;
};
exports["default"] = toTime;
