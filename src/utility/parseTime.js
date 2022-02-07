var parseTime = function (char) {
    var _a = char.split(':').map(function (elm) { return parseInt(elm); }), hour = _a[0], min = _a[1];
    return hour * 60 + min;
};
exports["default"] = parseTime;
