"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const Logger_1 = require("polar-shared/src/logger/Logger");
const TestResult_1 = require("./renderer/TestResult");
const IPCMessage_1 = require("../../ipc/handler/IPCMessage");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const log = Logger_1.Logger.create();
class TestResultService {
    start() {
        Preconditions_1.Preconditions.assertPresent(electron_1.ipcRenderer, "No ipcRenderer");
        electron_1.ipcRenderer.on('test-result', (event, data) => {
            const ipcMessage = IPCMessage_1.IPCMessage.create(data);
            if (ipcMessage.type === "write") {
                this.onWrite(ipcMessage);
            }
            if (ipcMessage.type === "ping") {
                this.onPing(event, ipcMessage);
            }
        });
        electron_1.ipcRenderer.send("test-result", { type: "started" });
    }
    onPing(event, ipcMessage) {
        const pongMessage = new IPCMessage_1.IPCMessage("pong", true);
        event.sender.send(ipcMessage.computeResponseChannel(), pongMessage);
    }
    onWrite(data) {
        if (!Optional_1.Optional.present(TestResult_1.TestResult.get())) {
            const ipcMessage = IPCMessage_1.IPCMessage.create(data);
            if (Optional_1.Optional.present(ipcMessage.value)) {
                TestResult_1.TestResult.set(ipcMessage.value);
                log.info("Received test result: " + JSON.stringify(TestResult_1.TestResult.get()));
            }
            else if (data.err) {
            }
            else {
                log.error("Given neither result nor err: ", data);
            }
        }
        else {
            log.error("Existing test results already defined.: " + data.value);
        }
    }
}
exports.TestResultService = TestResultService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFJlc3VsdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0UmVzdWx0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFxQztBQUNyQywyREFBc0Q7QUFDdEQsc0RBQWlEO0FBQ2pELDZEQUF3RDtBQUN4RCxnRUFBMkQ7QUFDM0Qsa0VBQTZEO0FBRzdELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQVE1QixNQUFhLGlCQUFpQjtJQUtuQixLQUFLO1FBRVIsNkJBQWEsQ0FBQyxhQUFhLENBQUMsc0JBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTNELHNCQUFXLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQXFCLEVBQUUsSUFBUyxFQUFFLEVBQUU7WUFFL0QsTUFBTSxVQUFVLEdBQUcsdUJBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFM0MsSUFBSSxVQUFVLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM3QjtZQUVELElBQUksVUFBVSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ2xDO1FBR0wsQ0FBQyxDQUFDLENBQUM7UUFHSCxzQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUV6RCxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQXFCLEVBQUUsVUFBMkI7UUFFNUQsTUFBTSxXQUFXLEdBQUcsSUFBSSx1QkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVM7UUFFcEIsSUFBSSxDQUFFLG1CQUFRLENBQUMsT0FBTyxDQUFDLHVCQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUV0QyxNQUFNLFVBQVUsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUzQyxJQUFJLG1CQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFFcEMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVqQyxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFFekU7aUJBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2FBRXBCO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckQ7U0FFSjthQUFNO1lBRUgsR0FBRyxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEU7SUFFTCxDQUFDO0NBR0o7QUEvREQsOENBK0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNSZW5kZXJlcn0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7VGVzdFJlc3VsdH0gZnJvbSAnLi9yZW5kZXJlci9UZXN0UmVzdWx0JztcbmltcG9ydCB7SVBDTWVzc2FnZX0gZnJvbSAnLi4vLi4vaXBjL2hhbmRsZXIvSVBDTWVzc2FnZSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHthcHB9IGZyb20gJ2VsZWN0cm9uJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5cbi8qKlxuICogU2VydmljZSB0byBrZWVwIHRoZSByZXN1bHQgb2YgYSB0ZXN0IHJlc3VsdCB3aXRoaW5cbiAqXG4gKiBAUmVuZGVyZXJDb250ZXh0IFRoaXMgc2hvdWxkIGJlIHJ1biBpbiB0aGUgcmVuZGVyZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXN0UmVzdWx0U2VydmljZSB7XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgc2VydmljZSBieSBsaXN0ZW5pbmcgdG8gbWVzc2FnZXMgcG9zdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoaXBjUmVuZGVyZXIsIFwiTm8gaXBjUmVuZGVyZXJcIik7XG5cbiAgICAgICAgaXBjUmVuZGVyZXIub24oJ3Rlc3QtcmVzdWx0JywgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgZGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlwY01lc3NhZ2UgPSBJUENNZXNzYWdlLmNyZWF0ZShkYXRhKTtcblxuICAgICAgICAgICAgaWYgKGlwY01lc3NhZ2UudHlwZSA9PT0gXCJ3cml0ZVwiKSB7XG4gICAgICAgICAgICAgICAgIHRoaXMub25Xcml0ZShpcGNNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlwY01lc3NhZ2UudHlwZSA9PT0gXCJwaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGluZyhldmVudCwgaXBjTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0ZWxsIGV2ZXJ5b25lIHdlJ3ZlIHN0YXJ0ZWQgbm93XG4gICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoXCJ0ZXN0LXJlc3VsdFwiLCB7IHR5cGU6IFwic3RhcnRlZFwiIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uUGluZyhldmVudDogRWxlY3Ryb24uRXZlbnQsIGlwY01lc3NhZ2U6IElQQ01lc3NhZ2U8YW55Pikge1xuXG4gICAgICAgIGNvbnN0IHBvbmdNZXNzYWdlID0gbmV3IElQQ01lc3NhZ2UoXCJwb25nXCIsIHRydWUpO1xuXG4gICAgICAgIGV2ZW50LnNlbmRlci5zZW5kKGlwY01lc3NhZ2UuY29tcHV0ZVJlc3BvbnNlQ2hhbm5lbCgpLCBwb25nTWVzc2FnZSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Xcml0ZShkYXRhOiBhbnkpIHtcblxuICAgICAgICBpZiAoISBPcHRpb25hbC5wcmVzZW50KFRlc3RSZXN1bHQuZ2V0KCkpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlwY01lc3NhZ2UgPSBJUENNZXNzYWdlLmNyZWF0ZShkYXRhKTtcblxuICAgICAgICAgICAgaWYgKE9wdGlvbmFsLnByZXNlbnQoaXBjTWVzc2FnZS52YWx1ZSkpIHtcblxuICAgICAgICAgICAgICAgIFRlc3RSZXN1bHQuc2V0KGlwY01lc3NhZ2UudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJSZWNlaXZlZCB0ZXN0IHJlc3VsdDogXCIgKyBKU09OLnN0cmluZ2lmeShUZXN0UmVzdWx0LmdldCgpKSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5lcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiByaWdodCBub3cgd2UgZG8gbm90IHNldCB0aGUgZXJyLi4uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIkdpdmVuIG5laXRoZXIgcmVzdWx0IG5vciBlcnI6IFwiLCBkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVE9ETyBjb25zaWRlciB0ZWxsaW5nIHRoZSBzZW5kZXIuXG4gICAgICAgICAgICBsb2cuZXJyb3IoXCJFeGlzdGluZyB0ZXN0IHJlc3VsdHMgYWxyZWFkeSBkZWZpbmVkLjogXCIgKyBkYXRhLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cbiJdfQ==