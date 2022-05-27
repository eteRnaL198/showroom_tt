"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduledNotification = void 0;
/* eslint-disable */
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const functions = require("firebase-functions");
// import LineClient from "./utility/line-client";
// import TimeUtil from "./utility/time-util";
(0, app_1.initializeApp)({
    apiKey: "AIzaSyAFP9YokNoBG2jUDgfhxqafwjN8f0mlKw4",
    authDomain: "showroom-timetable.firebaseapp.com",
    projectId: "showroom-timetable",
    storageBucket: "showroom-timetable.appspot.com",
    messagingSenderId: "481684736446",
    appId: "1:481684736446:web:f62faf99b5243f0b8291ef"
});
const db = (0, firestore_1.getFirestore)();
exports.scheduledNotification = functions.pubsub.schedule('0 6 * * *').timeZone('Asia/Tokyo').onRun(() => {
    (async () => {
        const today = "2022-03-20";
        const now = "12:30";
        const docRef = (0, firestore_1.doc)(db, today, now);
        try {
            const docSnap = await (0, firestore_1.getDoc)(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                console.log(data);
                if (data.type === "collect") {
                    // line.send("星集めの時間だよ！")
                    console.log("星集めの時間だよ！");
                }
                else if (data.type === "discard") {
                    // line.send("捨て星の時間だよ！")
                    console.log("捨て星の時間だよ！");
                }
                else {
                    console.log("invalid type");
                }
            }
            else {
                console.log("Notification is not needed");
            }
        }
        catch (e) {
            throw e;
        }
    })();
    // const line = new LineClient(
    //   "shs3qPU5K2gu76tWnmv7yy6cDNv3h4g5FN+B9gfFkSVdUO3I7I1NMTyxAwtZwLKrVlwM4TClbpC15JtK91ntNRotreMN19NAf/fov9ZfTQuLisuunYIQbsd6f7Eeifl1lbas7uRdPn6BK7gdTEYVegdB04t89/1O/w1cDnyilFU=",
    //   "c9a9906403973bc53e5742374a43f509"
    // )
    // line.send("おはよう！")
    console.log("hello");
});
//# sourceMappingURL=index.js.map