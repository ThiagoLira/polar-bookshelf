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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const electron_1 = require("electron");
electron_1.app.commandLine.appendSwitch('disable-site-isolation-trials');
function defaultWindowFactory() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            backgroundColor: '#FFF',
            show: true,
            webPreferences: {
                webSecurity: false,
                nodeIntegration: true,
                partition: "persist:spectron",
                webviewTag: true,
                offscreen: false,
                disableBlinkFeatures: "SitePerProcess,OriginTrials,OriginTrialsSampleAPI,OriginTrialsSampleAPIDependent,OriginTrialsSampleAPIImplied,OriginTrialsSampleAPIInvalidOS,OriginTrialsSampleAPINavigation"
            }
        };
        console.log("Creating window with options: ", options);
        const mainWindow = new electron_1.BrowserWindow(options);
        yield mainWindow.loadURL('about:blank');
        return mainWindow;
    });
}
SpectronMain2_1.SpectronMain2.create({ windowFactory: defaultWindowFactory }).run((state) => __awaiter(void 0, void 0, void 0, function* () {
    yield state.window.loadURL(`https://kyso.io/KyleOS/nbestimate`, { extraHeaders: "Content-Security-Policy: '*'" });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCx1Q0FBNEM7QUFFNUMsY0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUU5RCxTQUFlLG9CQUFvQjs7UUFFL0IsTUFBTSxPQUFPLEdBQUc7WUFFWixlQUFlLEVBQUUsTUFBTTtZQVF2QixJQUFJLEVBQUUsSUFBSTtZQUVWLGNBQWMsRUFBRTtnQkFDWixXQUFXLEVBQUUsS0FBSztnQkFDbEIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLFNBQVMsRUFBRSxrQkFBa0I7Z0JBQzdCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsb0JBQW9CLEVBQUUsOEtBQThLO2FBQ3ZNO1NBRUosQ0FBQztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdkQsTUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4QyxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0NBQUE7QUFFRCw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFMUUsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxFQUFDLFlBQVksRUFBRSw4QkFBOEIsRUFBQyxDQUFDLENBQUM7SUFNaEgsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge2FwcCwgQnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuXG5hcHAuY29tbWFuZExpbmUuYXBwZW5kU3dpdGNoKCdkaXNhYmxlLXNpdGUtaXNvbGF0aW9uLXRyaWFscycpO1xuXG5hc3luYyBmdW5jdGlvbiBkZWZhdWx0V2luZG93RmFjdG9yeSgpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+IHtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG5cbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXG5cbiAgICAgICAgLy8gTk9URTogdGhlIGRlZmF1bHQgd2lkdGggYW5kIGhlaWdodCBzaG91bGRuJ3QgYmUgY2hhbmdlZCBoZXJlIGFzIGl0IGNhblxuICAgICAgICAvLyBicmVhayB1bml0IHRlc3RzLlxuXG4gICAgICAgIC8vIHdpZHRoOiAxMDAwLFxuICAgICAgICAvLyBoZWlnaHQ6IDEwMDAsXG5cbiAgICAgICAgc2hvdzogdHJ1ZSxcblxuICAgICAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICAgICAgd2ViU2VjdXJpdHk6IGZhbHNlLFxuICAgICAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgcGFydGl0aW9uOiBcInBlcnNpc3Q6c3BlY3Ryb25cIixcbiAgICAgICAgICAgIHdlYnZpZXdUYWc6IHRydWUsXG4gICAgICAgICAgICBvZmZzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZUJsaW5rRmVhdHVyZXM6IFwiU2l0ZVBlclByb2Nlc3MsT3JpZ2luVHJpYWxzLE9yaWdpblRyaWFsc1NhbXBsZUFQSSxPcmlnaW5UcmlhbHNTYW1wbGVBUElEZXBlbmRlbnQsT3JpZ2luVHJpYWxzU2FtcGxlQVBJSW1wbGllZCxPcmlnaW5UcmlhbHNTYW1wbGVBUElJbnZhbGlkT1MsT3JpZ2luVHJpYWxzU2FtcGxlQVBJTmF2aWdhdGlvblwiXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nIHdpbmRvdyB3aXRoIG9wdGlvbnM6IFwiLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyhvcHRpb25zKTtcbiAgICBhd2FpdCBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG5cbiAgICByZXR1cm4gbWFpbldpbmRvdztcbn1cblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoe3dpbmRvd0ZhY3Rvcnk6IGRlZmF1bHRXaW5kb3dGYWN0b3J5fSkucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGF3YWl0IHN0YXRlLndpbmRvdy5sb2FkVVJMKGBodHRwczovL2t5c28uaW8vS3lsZU9TL25iZXN0aW1hdGVgLCB7ZXh0cmFIZWFkZXJzOiBcIkNvbnRlbnQtU2VjdXJpdHktUG9saWN5OiAnKidcIn0pO1xuXG5cbiAgICAvLyBhd2FpdCBzdGF0ZS53aW5kb3cubG9hZFVSTChgaHR0cHM6Ly9nZXRwb2xhcml6ZWQuaW8vY2FwdHVyZS1kZWJ1Zy9pZnJhbWUtMS5odG1sYCwge2V4dHJhSGVhZGVyczogXCJDb250ZW50LVNlY3VyaXR5LVBvbGljeTogJyonXCJ9KTtcbiAgICAvL1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG5cbiJdfQ==