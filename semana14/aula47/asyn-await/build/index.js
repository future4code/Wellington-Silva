"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/';
function main() {
    try {
        function getSubscribers() {
            return __awaiter(this, void 0, void 0, function* () {
                const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
                return users.data.map((res) => {
                    return {
                        id: res.id,
                        name: res.name,
                        email: res.email,
                    };
                });
            });
        }
        function createNews(title, content, date) {
            return __awaiter(this, void 0, void 0, function* () {
                axios_1.default.put(`${baseUrl}/news`, {
                    title: "Novidade a caminho",
                    content: "Labenu: uma nova escola de programação",
                    date: 1590522289000,
                });
            });
        }
        const sendNotifications = (users, message) => __awaiter(this, void 0, void 0, function* () {
            const promiseArray = [];
            for (const user of users) {
                yield axios_1.default.post(`${baseUrl}/notifications/send`, {
                    subscribeId: user.id,
                    message: message,
                });
            }
            console.log("All notifications send");
        });
        const sendNotifications2 = (users, message) => __awaiter(this, void 0, void 0, function* () {
            const promiseArray = [];
            for (const user of users) {
                promiseArray.push(axios_1.default.post(`${baseUrl}/notifications/send`, {
                    subscriberId: user.id,
                    message: message,
                }));
            }
            yield Promise.all(promiseArray);
        });
        const createSubscriber = (name, email) => __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default.post(`${baseUrl}/subscribes`, {
                name,
                email
            });
        });
        const createAndSendNotifications = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield createNews("Batman a caminho", "Batem palmas para entrar na batcaverna", 1590522289000);
                const users = yield getSubscribers();
                yield sendNotifications(users, "Testando mensagens");
            }
            catch (err) {
                console.log("err: ", err.message);
            }
        });
        const getAllNotifications = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield getSubscribers();
            const notificationPromises = [];
            for (const user of users) {
                notificationPromises.push(axios_1.default.get(`${baseUrl}/subscribers/${user.id}/notifications/all`));
            }
            const result = yield Promise.all(notificationPromises);
            const dataFromResult = result.map((res) => res.data);
            return dataFromResult;
        });
    }
    catch (err) {
        console.log(err);
    }
}
main();
//# sourceMappingURL=index.js.map