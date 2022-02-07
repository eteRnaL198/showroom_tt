var index_1 = require("../utility/index");
(function () {
    console.log("25分枠");
    var _a = index_1.calculate("10:00", "10:25"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "9:15" && discardTime === "8:15");
    if (result) {
        console.log("Pass");
    }
    else {
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("24分枠");
    var _a = index_1.calculate("10:00", "10:24"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "9:10" && discardTime === "8:10");
    if (result) {
        console.log("Pass");
    }
    else {
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
(function () {
    console.log("日を跨ぐ");
    var _a = index_1.calculate("23:58", "00:28"), collectTime = _a[0], discardTime = _a[1];
    var result = (collectTime === "23:13" && discardTime === "22:13");
    if (result) {
        console.log("Pass");
    }
    else {
        console.log("Fail collectTime: " + collectTime + ", discardTime: " + discardTime);
    }
})();
