"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const functions = require("firebase-functions");
const line = require("@line/bot-sdk");
class LineClient {
    constructor(accessToken, secret) {
        this.accessToken = accessToken;
        this.secret = secret;
        this.client = new line.Client({
            channelAccessToken: this.accessToken,
            channelSecret: this.secret
        });
    }
    send(message) {
        functions.https.onRequest(async () => {
            try {
                await this.client.broadcast({
                    type: "text",
                    text: message,
                });
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = LineClient;
//# sourceMappingURL=line-client.js.map