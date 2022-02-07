var toTime = function (num) {
    var hour = (num / 60 | 0).toString();
    var min = (num % 60).toString();
    return hour + ":" + min;
};
exports["default"] = toTime;
