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
const BrowserWindowRegistry_1 = require("./BrowserWindowRegistry");
const electron_1 = require("electron");
const Messenger_1 = require("../messenger/Messenger");
class BrowserWindowContext {
    static postMessage(tag, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const browserWindowIDs = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged(tag);
            for (const id of browserWindowIDs) {
                const browserWindow = electron_1.BrowserWindow.fromId(id);
                yield Messenger_1.Messenger.postMessageWithElectronBrowserWindow(message, browserWindow);
            }
        });
    }
}
exports.BrowserWindowContext = BrowserWindowContext;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldpbmRvd0NvbnRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCcm93c2VyV2luZG93Q29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1FQUFnRjtBQUNoRix1Q0FBdUM7QUFDdkMsc0RBQWlEO0FBTWpELE1BQWEsb0JBQW9CO0lBRXRCLE1BQU0sQ0FBTyxXQUFXLENBQUksR0FBcUIsRUFBRSxPQUFVOztZQUNoRSxNQUFNLGdCQUFnQixHQUFHLDZDQUFxQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUzRCxLQUFLLE1BQU0sRUFBRSxJQUFJLGdCQUFnQixFQUFFO2dCQUMvQixNQUFNLGFBQWEsR0FBRyx3QkFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0MsTUFBTSxxQkFBUyxDQUFDLG9DQUFvQyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNoRjtRQUVMLENBQUM7S0FBQTtDQUVKO0FBWkQsb0RBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3dSZWdpc3RyeSwgQnJvd3NlcldpbmRvd1RhZ30gZnJvbSAnLi9Ccm93c2VyV2luZG93UmVnaXN0cnknO1xuaW1wb3J0IHtCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge01lc3Nlbmdlcn0gZnJvbSAnLi4vbWVzc2VuZ2VyL01lc3Nlbmdlcic7XG5cbi8qKlxuICogUGFzcyBtZXNzYWdlcyAoY29uc2lzdGVubHkpIHRvIGEgZ2l2ZW4gQnJvd3NlcldpbmRvdyAob3IgQnJvd3NlcldpbmRvd3MpLCBieVxuICogdXNpbmcgdGFncyBhbmQgdGhlIEJyb3dzZXJXaW5kb3dSZWdpc3RlciBhbmQgcG9zdE1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBCcm93c2VyV2luZG93Q29udGV4dCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHBvc3RNZXNzYWdlPFQ+KHRhZzogQnJvd3NlcldpbmRvd1RhZywgbWVzc2FnZTogVCkge1xuICAgICAgICBjb25zdCBicm93c2VyV2luZG93SURzID0gQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LnRhZ2dlZCh0YWcpO1xuXG4gICAgICAgIGZvciAoY29uc3QgaWQgb2YgYnJvd3NlcldpbmRvd0lEcykge1xuICAgICAgICAgICAgY29uc3QgYnJvd3NlcldpbmRvdyA9IEJyb3dzZXJXaW5kb3cuZnJvbUlkKGlkKTtcbiAgICAgICAgICAgIGF3YWl0IE1lc3Nlbmdlci5wb3N0TWVzc2FnZVdpdGhFbGVjdHJvbkJyb3dzZXJXaW5kb3cobWVzc2FnZSwgYnJvd3NlcldpbmRvdyk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19