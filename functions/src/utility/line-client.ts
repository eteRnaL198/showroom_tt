import * as functions from "firebase-functions";
const line = require("@line/bot-sdk");

export default class LineClient {
  private client: any

  constructor(private accessToken: string, private secret: string) {
    this.client = new line.Client({
      channelAccessToken: this.accessToken,
      channelSecret: this.secret
    })
  }

  send(message: string) {
    functions.https.onRequest(async () => {
      try {
        await this.client.broadcast({
          type: "text",
          text: message,
        });
      } catch (e) {
        throw e;
      }
    })
  }

}