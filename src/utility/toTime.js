var toTime = function (num) {
    var hourNum = (num / 60 | 0);
    var minNum = (num % 60);
    var hourString = (hourNum >= 10) ? hourNum.toString() : "0" + hourNum.toString();
    var minString = (minNum >= 10) ? minNum.toString() : "0" + minNum.toString();
    return hourString + ":" + minString;
};
exports["default"] = toTime;
