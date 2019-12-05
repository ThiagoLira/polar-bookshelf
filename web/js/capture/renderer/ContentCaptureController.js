"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContentCapture_1 = require("polar-content-capture/src/capture/ContentCapture");
const Logger_1 = require("polar-shared/src/logger/Logger");
const electron_1 = require("electron");
const log = Logger_1.Logger.create();
class ContentCaptureController {
    start() {
        log.info("IPC listener added for content-capture at: " + new Date().toISOString());
        electron_1.ipcRenderer.on('content-capture', (event, data) => {
            if (data.type === "request") {
                this.onContentCaptureRequest();
            }
        });
        electron_1.ipcRenderer.send('content-capture', { type: "started" });
    }
    onContentCaptureRequest() {
        log.info("Received content capture request.");
        try {
            const captured = ContentCapture_1.ContentCapture.captureHTML();
            log.info("Content captured successfully.  Sending response...");
            electron_1.ipcRenderer.send("content-capture", {
                type: "response",
                result: captured
            });
            log.info("Content captured successfully.  Sending response... done");
        }
        catch (e) {
            log.error("Could not capture HTML: ", e);
            electron_1.ipcRenderer.send("content-capture", {
                type: "response",
                err: e.message
            });
        }
    }
}
exports.ContentCaptureController = ContentCaptureController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudENhcHR1cmVDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29udGVudENhcHR1cmVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUZBQWdGO0FBQ2hGLDJEQUFzRDtBQUN0RCx1Q0FBK0M7QUFFL0MsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBTTVCLE1BQWEsd0JBQXdCO0lBTWpDLEtBQUs7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUVuRixzQkFBVyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQVUsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUV4RCxJQUFHLElBQUksQ0FBQyxJQUFJLEtBQU0sU0FBUyxFQUFFO2dCQUN6QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUNsQztRQUVMLENBQUMsQ0FBQyxDQUFDO1FBR0gsc0JBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUUzRCxDQUFDO0lBRUQsdUJBQXVCO1FBRW5CLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUU5QyxJQUFJO1lBRUEsTUFBTSxRQUFRLEdBQUcsK0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUU5QyxHQUFHLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7WUFFaEUsc0JBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2hDLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsUUFBUTthQUNuQixDQUFDLENBQUM7WUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLDBEQUEwRCxDQUFDLENBQUM7U0FFeEU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUVSLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFekMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2hDLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU87YUFDakIsQ0FBQyxDQUFDO1NBRU47SUFFTCxDQUFDO0NBRUo7QUFyREQsNERBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250ZW50Q2FwdHVyZX0gZnJvbSAncG9sYXItY29udGVudC1jYXB0dXJlL3NyYy9jYXB0dXJlL0NvbnRlbnRDYXB0dXJlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IGVsZWN0cm9uLCB7aXBjUmVuZGVyZXJ9IGZyb20gJ2VsZWN0cm9uJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIENvbnRyb2xsZXIgdGhhdCBpbnRlcmNlcHRzIGV2ZW50cyBmcm9tIHRoZSBtYWluIEVsZWN0cm9uIHByb2Nlc3MsIHRyaWdnZXJzXG4gKiBhIGNhcHR1cmUsIHRoZW4gcmV0dXJucyB0aGUgcmVzdWx0cyB0byB0aGUgY2FsbGVyIHZpYSBhIG1lc3NhZ2UgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZW50Q2FwdHVyZUNvbnRyb2xsZXIge1xuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIGNvbnRlbnQgY2FwdHVyZSBzeXN0ZW0gd2hpY2ggaW52b2x2ZXMgbGlzdGVuaW5nIHRvIElQQyBtZXNzYWdlc1xuICAgICAqIGZvciB0cmlnZ2VyaW5nIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICBzdGFydCgpOiB2b2lkIHtcblxuICAgICAgICBsb2cuaW5mbyhcIklQQyBsaXN0ZW5lciBhZGRlZCBmb3IgY29udGVudC1jYXB0dXJlIGF0OiBcIiArIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XG5cbiAgICAgICAgaXBjUmVuZGVyZXIub24oJ2NvbnRlbnQtY2FwdHVyZScsIChldmVudDogYW55LCBkYXRhOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09PSAgXCJyZXF1ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29udGVudENhcHR1cmVSZXF1ZXN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGVsbCBldmVyeW9uZSB0aGF0IHdlJ3ZlIHN0YXJ0ZWQgcHJvcGVybHkuXG4gICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoJ2NvbnRlbnQtY2FwdHVyZScsIHt0eXBlOiBcInN0YXJ0ZWRcIn0pO1xuXG4gICAgfVxuXG4gICAgb25Db250ZW50Q2FwdHVyZVJlcXVlc3QoKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJSZWNlaXZlZCBjb250ZW50IGNhcHR1cmUgcmVxdWVzdC5cIik7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgY2FwdHVyZWQgPSBDb250ZW50Q2FwdHVyZS5jYXB0dXJlSFRNTCgpO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkNvbnRlbnQgY2FwdHVyZWQgc3VjY2Vzc2Z1bGx5LiAgU2VuZGluZyByZXNwb25zZS4uLlwiKTtcblxuICAgICAgICAgICAgaXBjUmVuZGVyZXIuc2VuZChcImNvbnRlbnQtY2FwdHVyZVwiLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZXNwb25zZVwiLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogY2FwdHVyZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkNvbnRlbnQgY2FwdHVyZWQgc3VjY2Vzc2Z1bGx5LiAgU2VuZGluZyByZXNwb25zZS4uLiBkb25lXCIpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICAgICAgbG9nLmVycm9yKFwiQ291bGQgbm90IGNhcHR1cmUgSFRNTDogXCIsIGUpO1xuXG4gICAgICAgICAgICBpcGNSZW5kZXJlci5zZW5kKFwiY29udGVudC1jYXB0dXJlXCIsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlc3BvbnNlXCIsXG4gICAgICAgICAgICAgICAgZXJyOiBlLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19