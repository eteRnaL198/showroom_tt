/* eslint-disable */
import * as functions from "firebase-functions";
import LineClient from "./utility/line-client";

export const sendMessageToLine = functions.https.onRequest((request, response) => {
  const line = new LineClient(
    "shs3qPU5K2gu76tWnmv7yy6cDNv3h4g5FN+B9gfFkSVdUO3I7I1NMTyxAwtZwLKrVlwM4TClbpC15JtK91ntNRotreMN19NAf/fov9ZfTQuLisuunYIQbsd6f7Eeifl1lbas7uRdPn6BK7gdTEYVegdB04t89/1O/w1cDnyilFU=",
    "c9a9906403973bc53e5742374a43f509"
  )
  line.send("星集めの時間です！")

  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("send message to line");
});

