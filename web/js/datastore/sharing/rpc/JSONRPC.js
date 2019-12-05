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
const Firebase_1 = require("../../../firebase/Firebase");
const CloudFunctions_1 = require("../../firebase/CloudFunctions");
class JSONRPC {
    static exec(func, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const app = Firebase_1.Firebase.init();
            const user = app.auth().currentUser;
            if (!user) {
                throw new Error("User not authenticated");
            }
            const idToken = yield user.getIdToken();
            const userRequest = {
                idToken,
                request,
            };
            const endpoint = CloudFunctions_1.CloudFunctions.createEndpoint();
            const url = `${endpoint}/${func}`;
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userRequest)
            });
            if (response.status !== 200) {
                throw new JSONRPCError(response, "Unable to handle RPC: " + func);
            }
            return yield response.json();
        });
    }
}
exports.JSONRPC = JSONRPC;
class JSONRPCError extends Error {
    constructor(response, message) {
        super(message);
        this.response = response;
    }
}
exports.JSONRPCError = JSONRPCError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNPTlJQQy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkpTT05SUEMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFFcEQsa0VBQTZEO0FBRTdELE1BQWEsT0FBTztJQUVULE1BQU0sQ0FBTyxJQUFJLENBQU8sSUFBWSxFQUFFLE9BQVU7O1lBRW5ELE1BQU0sR0FBRyxHQUFHLG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUVwQyxJQUFJLENBQUUsSUFBSSxFQUFFO2dCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUM3QztZQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRXhDLE1BQU0sV0FBVyxHQUFtQjtnQkFDaEMsT0FBTztnQkFDUCxPQUFPO2FBQ1YsQ0FBQztZQUVGLE1BQU0sUUFBUSxHQUFHLCtCQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFakQsTUFBTSxHQUFHLEdBQUcsR0FBRyxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7WUFFbEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUM5QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckM7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2FBQUMsQ0FBQyxDQUFDO1lBRXhDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFLHdCQUF3QixHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3JFO1lBRUQsT0FBVyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyQyxDQUFDO0tBQUE7Q0FFSjtBQXJDRCwwQkFxQ0M7QUFFRCxNQUFhLFlBQWEsU0FBUSxLQUFLO0lBRW5DLFlBQTRCLFFBQWtCLEVBQ2xDLE9BQWU7UUFFdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSFMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUs5QyxDQUFDO0NBRUo7QUFURCxvQ0FTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7VXNlclJlcXVlc3R9IGZyb20gJy4uL2RiL1VzZXJSZXF1ZXN0JztcbmltcG9ydCB7Q2xvdWRGdW5jdGlvbnN9IGZyb20gJy4uLy4uL2ZpcmViYXNlL0Nsb3VkRnVuY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIEpTT05SUEMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBleGVjPFIsIFY+KGZ1bmM6IHN0cmluZywgcmVxdWVzdDogUik6IFByb21pc2U8Vj4ge1xuXG4gICAgICAgIGNvbnN0IGFwcCA9IEZpcmViYXNlLmluaXQoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGFwcC5hdXRoKCkuY3VycmVudFVzZXI7XG5cbiAgICAgICAgaWYgKCEgdXNlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlkVG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oKTtcblxuICAgICAgICBjb25zdCB1c2VyUmVxdWVzdDogVXNlclJlcXVlc3Q8Uj4gPSB7XG4gICAgICAgICAgICBpZFRva2VuLFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IENsb3VkRnVuY3Rpb25zLmNyZWF0ZUVuZHBvaW50KCk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gYCR7ZW5kcG9pbnR9LyR7ZnVuY31gO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJSZXF1ZXN0KX0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEpTT05SUENFcnJvcihyZXNwb25zZSwgXCJVbmFibGUgdG8gaGFuZGxlIFJQQzogXCIgKyBmdW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8Vj4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBKU09OUlBDRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcmVzcG9uc2U6IFJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHN0cmluZykge1xuXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgfVxuXG59XG4iXX0=