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
const electron_1 = require("electron");
const PostMessageRequest_1 = require("./PostMessageRequest");
const Functions_1 = require("polar-shared/src/util/Functions");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class Messenger {
    static postMessage(postMessageRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            postMessageRequest = new PostMessageRequest_1.PostMessageRequest(postMessageRequest);
            if (typeof window !== 'undefined') {
                yield this.postMessageDirectly(postMessageRequest.message);
                return;
            }
            let targetBrowserWindow = postMessageRequest.window;
            if (!Preconditions_1.isPresent(targetBrowserWindow)) {
                targetBrowserWindow = electron_1.BrowserWindow.getFocusedWindow();
            }
            if (!Preconditions_1.isPresent(targetBrowserWindow)) {
                throw new Error("No target browser window found");
            }
            yield this.postMessageWithElectronBrowserWindow(postMessageRequest.message, targetBrowserWindow);
        });
    }
    static postMessageDirectly(message) {
        return __awaiter(this, void 0, void 0, function* () {
            message = JSON.parse(JSON.stringify(message));
            window.postMessage(message, "*");
        });
    }
    static postMessageWithElectronBrowserWindow(message, browserWindow) {
        return __awaiter(this, void 0, void 0, function* () {
            function postMessageFunction(msg) {
                window.postMessage(msg, "*");
            }
            const script = Functions_1.Functions.functionToScript(postMessageFunction, message);
            yield browserWindow.webContents.executeJavaScript(script);
        });
    }
}
exports.Messenger = Messenger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2VuZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWVzc2VuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLDZEQUF3RDtBQUN4RCwrREFBMEQ7QUFDMUQsa0VBQXlEO0FBY3pELE1BQWEsU0FBUztJQUVYLE1BQU0sQ0FBTyxXQUFXLENBQUMsa0JBQXNDOztZQUVsRSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFaEUsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7Z0JBQy9CLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzRCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztZQUVwRCxJQUFJLENBQUUseUJBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO2dCQUNsQyxtQkFBbUIsR0FBRyx3QkFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDMUQ7WUFFRCxJQUFJLENBQUUseUJBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7YUFDckQ7WUFFRCxNQUFNLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsbUJBQW9CLENBQUMsQ0FBQztRQUV0RyxDQUFDO0tBQUE7SUFLTSxNQUFNLENBQU8sbUJBQW1CLENBQUMsT0FBWTs7WUFFaEQsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRTlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxvQ0FBb0MsQ0FBQyxPQUFZLEVBQUUsYUFBNEI7O1lBRS9GLFNBQVMsbUJBQW1CLENBQUMsR0FBUTtnQkFDakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUVELE1BQU0sTUFBTSxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFeEUsTUFBTSxhQUFhLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlELENBQUM7S0FBQTtDQUVKO0FBL0NELDhCQStDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtQb3N0TWVzc2FnZVJlcXVlc3R9IGZyb20gJy4vUG9zdE1lc3NhZ2VSZXF1ZXN0JztcbmltcG9ydCB7RnVuY3Rpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtCcm93c2VyfSBmcm9tICdwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL2NhcHR1cmUvQnJvd3Nlcic7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogV2luZG93O1xuXG4vKipcbiAqIE1lc3NlbmdlciBpcyBhIGNsYXNzIGZvciB1c2luZyBwb3N0TWVzc2FnZSB3aXRoaW4gdGhlIHJlbmRlcmVyIHRvIGNvbW11bmljYXRlXG4gKiB3aXRoIGFwcHMgdXNpbmcgd2ViIHN0YW5kYXJkcywgYW5kIG5vdCBFbGVjdHJvbiBJUEMuIFRoaXMgbWFrZXMgb3VyIGNvZGVcbiAqIG1vcmUgdGVzdGFibGUgdmlhIHNpbXBsZSBtb2NoYSAvIG5vZGUgYW5kIGRvZXNuJ3QgcmVxdWlyZSBTcGVjdHJvbiB3aGljaFxuICogaXMgbW9yZSBoZWF2eSBhbmQgc2xvd2VyIGZvciB0ZXN0aW5nLlxuICpcbiAqIEl0IGFsc28gbWFrZXMgaXQgbW9yZSBwb3J0YWJsZSB0byB0aGUgd2ViIHNpbmNlIHRoaXMgY29kZSBqdXN0IHVzZXNcbiAqIHBvc3RNZXNzYWdlIHdoaWNoIGlzIHN1cHBvcnRlZCBldmVyeXdoZXJlLlxuICovXG5leHBvcnQgY2xhc3MgTWVzc2VuZ2VyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcG9zdE1lc3NhZ2UocG9zdE1lc3NhZ2VSZXF1ZXN0OiBQb3N0TWVzc2FnZVJlcXVlc3QpIHtcblxuICAgICAgICBwb3N0TWVzc2FnZVJlcXVlc3QgPSBuZXcgUG9zdE1lc3NhZ2VSZXF1ZXN0KHBvc3RNZXNzYWdlUmVxdWVzdCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBvc3RNZXNzYWdlRGlyZWN0bHkocG9zdE1lc3NhZ2VSZXF1ZXN0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhcmdldEJyb3dzZXJXaW5kb3cgPSBwb3N0TWVzc2FnZVJlcXVlc3Qud2luZG93O1xuXG4gICAgICAgIGlmICghIGlzUHJlc2VudCh0YXJnZXRCcm93c2VyV2luZG93KSkge1xuICAgICAgICAgICAgdGFyZ2V0QnJvd3NlcldpbmRvdyA9IEJyb3dzZXJXaW5kb3cuZ2V0Rm9jdXNlZFdpbmRvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KHRhcmdldEJyb3dzZXJXaW5kb3cpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB0YXJnZXQgYnJvd3NlciB3aW5kb3cgZm91bmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLnBvc3RNZXNzYWdlV2l0aEVsZWN0cm9uQnJvd3NlcldpbmRvdyhwb3N0TWVzc2FnZVJlcXVlc3QubWVzc2FnZSwgdGFyZ2V0QnJvd3NlcldpbmRvdyEpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2UncmUgaW4gdGhlIGJyb3dlcnMgc28gd2UgY2FuIGp1c3QgY2FsbCB0aGUgcG9zdE1lc3NhZ2UgZnVuY3Rpb24gZGlyZWN0bHkuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBwb3N0TWVzc2FnZURpcmVjdGx5KG1lc3NhZ2U6IGFueSkge1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIGRvIHRoaXMgSlNPTiBlbmNvZGUvZGVjb2RlIHRyaWNrIHRvIGZvcmNlXG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcblxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSwgXCIqXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcG9zdE1lc3NhZ2VXaXRoRWxlY3Ryb25Ccm93c2VyV2luZG93KG1lc3NhZ2U6IGFueSwgYnJvd3NlcldpbmRvdzogQnJvd3NlcldpbmRvdykge1xuXG4gICAgICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlRnVuY3Rpb24obXNnOiBhbnkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShtc2csIFwiKlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IEZ1bmN0aW9ucy5mdW5jdGlvblRvU2NyaXB0KHBvc3RNZXNzYWdlRnVuY3Rpb24sIG1lc3NhZ2UpO1xuXG4gICAgICAgIGF3YWl0IGJyb3dzZXJXaW5kb3cud2ViQ29udGVudHMuZXhlY3V0ZUphdmFTY3JpcHQoc2NyaXB0KTtcblxuICAgIH1cblxufVxuXG4iXX0=