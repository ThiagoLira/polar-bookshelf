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
const Logger_1 = require("polar-shared/src/logger/Logger");
const electron_1 = require("electron");
const Functions_1 = require("polar-shared/src/util/Functions");
const TestResult_1 = require("../renderer/TestResult");
const log = Logger_1.Logger.create();
class MainTestResultWriter {
    constructor(mainWindow) {
        this.mainWindow = mainWindow;
    }
    write(result) {
        return __awaiter(this, void 0, void 0, function* () {
            if (result === null || result === undefined) {
                throw new Error("No result given!");
            }
            log.info("Writing test result: ", result);
            const browserWindows = electron_1.BrowserWindow.getAllWindows();
            for (const browserWindow of browserWindows) {
                const script = Functions_1.Functions.toScript(TestResult_1.TestResult.set, result);
                yield browserWindow.webContents.executeJavaScript(script);
            }
        });
    }
}
exports.MainTestResultWriter = MainTestResultWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblRlc3RSZXN1bHRXcml0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWluVGVzdFJlc3VsdFdyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCx1Q0FBdUM7QUFFdkMsK0RBQTBEO0FBQzFELHVEQUFrRDtBQUVsRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxvQkFBb0I7SUFLN0IsWUFBWSxVQUFrQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRVksS0FBSyxDQUFDLE1BQVc7O1lBRTFCLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDdkM7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRTFDLE1BQU0sY0FBYyxHQUFHLHdCQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFckQsS0FBSyxNQUFNLGFBQWEsSUFBSSxjQUFjLEVBQUU7Z0JBRXhDLE1BQU0sTUFBTSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUUxRCxNQUFNLGFBQWEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7YUFFN0Q7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQTdCRCxvREE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge1Rlc3RSZXN1bHRXcml0ZXJ9IGZyb20gJy4uL1Rlc3RSZXN1bHRXcml0ZXInO1xuaW1wb3J0IHtGdW5jdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtUZXN0UmVzdWx0fSBmcm9tICcuLi9yZW5kZXJlci9UZXN0UmVzdWx0JztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFdyaXRlIGRhdGEgZnJvbSB0aGUgbWFpbiBFbGVjdHJvbiBwcm9jZXNzLlxuICovXG5leHBvcnQgY2xhc3MgTWFpblRlc3RSZXN1bHRXcml0ZXIgaW1wbGVtZW50cyBUZXN0UmVzdWx0V3JpdGVyIHtcblxuICAgIHByaXZhdGUgbWFpbldpbmRvdzogRWxlY3Ryb24uQnJvd3NlcldpbmRvdztcblxuXG4gICAgY29uc3RydWN0b3IobWFpbldpbmRvdzogRWxlY3Ryb24uQnJvd3NlcldpbmRvdykge1xuICAgICAgICB0aGlzLm1haW5XaW5kb3cgPSBtYWluV2luZG93O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShyZXN1bHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3VsdCBnaXZlbiFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhcIldyaXRpbmcgdGVzdCByZXN1bHQ6IFwiLCByZXN1bHQpO1xuXG4gICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3dzID0gQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBicm93c2VyV2luZG93IG9mIGJyb3dzZXJXaW5kb3dzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IEZ1bmN0aW9ucy50b1NjcmlwdChUZXN0UmVzdWx0LnNldCwgcmVzdWx0KTtcblxuICAgICAgICAgICAgYXdhaXQgYnJvd3NlcldpbmRvdy53ZWJDb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChzY3JpcHQpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19