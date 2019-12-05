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
const log = Logger_1.Logger.create();
class BrowserWindows {
    static toBrowserWindowOptions(browserProfile) {
        const partition = "part-" + Date.now();
        return {
            minWidth: browserProfile.deviceEmulation.screenSize.width,
            minHeight: browserProfile.deviceEmulation.screenSize.height,
            width: browserProfile.deviceEmulation.screenSize.width,
            height: browserProfile.deviceEmulation.screenSize.height,
            show: browserProfile.show,
            enableLargerThanScreen: true,
            webPreferences: {
                nodeIntegration: browserProfile.nodeIntegration,
                defaultEncoding: 'UTF-8',
                webaudio: browserProfile.webaudio,
                offscreen: browserProfile.offscreen,
                webSecurity: false,
                partition,
                webviewTag: true
            }
        };
    }
    static onceReadyToShow(window) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                window.once('ready-to-show', () => {
                    return resolve(window);
                });
            });
        });
    }
}
exports.BrowserWindows = BrowserWindows;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldpbmRvd3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCcm93c2VyV2luZG93cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLDJEQUFzRDtBQUt0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxjQUFjO0lBRWhCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxjQUE4QjtRQUUvRCxNQUFNLFNBQVMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXZDLE9BQU87WUFDSCxRQUFRLEVBQUUsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSztZQUN6RCxTQUFTLEVBQUUsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUMzRCxLQUFLLEVBQUUsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSztZQUN0RCxNQUFNLEVBQUUsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUd4RCxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUk7WUFHekIsc0JBQXNCLEVBQUUsSUFBSTtZQUU1QixjQUFjLEVBQUU7Z0JBTVosZUFBZSxFQUFFLGNBQWMsQ0FBQyxlQUFlO2dCQUUvQyxlQUFlLEVBQUUsT0FBTztnQkFFeEIsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRO2dCQUVqQyxTQUFTLEVBQUUsY0FBYyxDQUFDLFNBQVM7Z0JBV25DLFdBQVcsRUFBRSxLQUFLO2dCQU1sQixTQUFTO2dCQUVULFVBQVUsRUFBRSxJQUFJO2FBRW5CO1NBRUosQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNLENBQU8sZUFBZSxDQUFDLE1BQXFCOztZQUVyRCxPQUFPLElBQUksT0FBTyxDQUFnQixPQUFPLENBQUMsRUFBRTtnQkFFeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO29CQUM5QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtDQUVKO0FBckVELHdDQXFFQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gSW52ZXN0aWdhdGUgdGhpcyBhcyBhIHdheSB0byBhZGp1c3QgdGhlIHNjcmVlbiBzaXplIGF1dG9tYXRpY2FsbHk6XG5cbi8vIHVzZUNvbnRlbnRTaXplIEJvb2xlYW4gKG9wdGlvbmFsKSAtIFRoZSB3aWR0aCBhbmQgaGVpZ2h0IHdvdWxkIGJlIHVzZWQgYXMgd2ViXG4vLyBwYWdlJ3Mgc2l6ZSwgd2hpY2ggbWVhbnMgdGhlIGFjdHVhbCB3aW5kb3cncyBzaXplIHdpbGwgaW5jbHVkZSB3aW5kb3cgZnJhbWUnc1xuLy8gc2l6ZSBhbmQgYmUgc2xpZ2h0bHkgbGFyZ2VyLiBEZWZhdWx0IGlzIGZhbHNlLlxuXG5pbXBvcnQge1Jlc291cmNlUGF0aHN9IGZyb20gJy4uL2VsZWN0cm9uL3dlYnJlc291cmNlL1Jlc291cmNlUGF0aHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0Jyb3dzZXJQcm9maWxlfSBmcm9tICcuL0Jyb3dzZXJQcm9maWxlJztcbmltcG9ydCBCcm93c2VyV2luZG93Q29uc3RydWN0b3JPcHRpb25zID0gRWxlY3Ryb24uQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucztcbmltcG9ydCBCcm93c2VyV2luZG93ID0gRWxlY3Ryb24uQnJvd3NlcldpbmRvdztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlcldpbmRvd3Mge1xuXG4gICAgcHVibGljIHN0YXRpYyB0b0Jyb3dzZXJXaW5kb3dPcHRpb25zKGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZSk6IEJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnMge1xuXG4gICAgICAgIGNvbnN0IHBhcnRpdGlvbiA9IFwicGFydC1cIiArIERhdGUubm93KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pbldpZHRoOiBicm93c2VyUHJvZmlsZS5kZXZpY2VFbXVsYXRpb24uc2NyZWVuU2l6ZS53aWR0aCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogYnJvd3NlclByb2ZpbGUuZGV2aWNlRW11bGF0aW9uLnNjcmVlblNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IGJyb3dzZXJQcm9maWxlLmRldmljZUVtdWxhdGlvbi5zY3JlZW5TaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBicm93c2VyUHJvZmlsZS5kZXZpY2VFbXVsYXRpb24uc2NyZWVuU2l6ZS5oZWlnaHQsXG4gICAgICAgICAgICAvLyBtYXhXaWR0aDogV0lEVEgsXG4gICAgICAgICAgICAvLyBtYXhIZWlnaHQ6IEhFSUdIVCxcbiAgICAgICAgICAgIHNob3c6IGJyb3dzZXJQcm9maWxlLnNob3csXG5cbiAgICAgICAgICAgIC8vIEVuYWJsZSB0aGUgd2luZG93IHRvIGJlIHJlc2l6ZWQgbGFyZ2VyIHRoYW4gc2NyZWVuLiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgICAgICAgICAgZW5hYmxlTGFyZ2VyVGhhblNjcmVlbjogdHJ1ZSxcblxuICAgICAgICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcblxuICAgICAgICAgICAgICAgIC8vIHRoZSBwYXRoIHRvIG91ciBjb250ZW50IGNhcHR1cmUgYnVuZGxlIG5lZWRzIHRvIGJlIGFic29sdXRlXG4gICAgICAgICAgICAgICAgLy8gZm9yIHNvbWUgc3RyYW5nZSByZWFzb24gYW5kIHRoaXMgaXMgcmVxdWlyZWQgYnkgRWxlY3Ryb24uXG4gICAgICAgICAgICAgICAgLy8gcHJlbG9hZCxcblxuICAgICAgICAgICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogYnJvd3NlclByb2ZpbGUubm9kZUludGVncmF0aW9uLFxuXG4gICAgICAgICAgICAgICAgZGVmYXVsdEVuY29kaW5nOiAnVVRGLTgnLFxuXG4gICAgICAgICAgICAgICAgd2ViYXVkaW86IGJyb3dzZXJQcm9maWxlLndlYmF1ZGlvLFxuXG4gICAgICAgICAgICAgICAgb2Zmc2NyZWVuOiBicm93c2VyUHJvZmlsZS5vZmZzY3JlZW4sXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBUaGlzIGlzIG5lZWRlZCBmb3Igbm93IGJlY2F1c2Ugd2UgaGF2ZSB0byBhY2Nlc3MgdGhlIGlmcmFtZVxuICAgICAgICAgICAgICAgICAqIGNvbnRlbnQgZnJvbSB0aGUgZnJhbWUgYW5kIHRoYXQgbWlnaHQgbm90IGJlIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICogb3RoZXJ3aXNlLiBUaGVyZSBpcyBub3QgbmVjZXNzYXJpbHkgYW55dGhpbmcgdG8gc3RlYWwgaGVyZVxuICAgICAgICAgICAgICAgICAqIHlldCBhcyB3ZSdyZSBub3QgdXNpbmcgYW55IHR5cGUgb2YgY29va2llIHNoYXJpbmcgYnV0IHdlXG4gICAgICAgICAgICAgICAgICogbWlnaHQgaW4gdGhlIGZ1dHVyZSBzbyBuZWVkIHRvIGJlIGNhcmVmdWwgaGVyZS4gIEFzIHNvb24gYXNcbiAgICAgICAgICAgICAgICAgKiB3ZSBjYW4gZ2V0IGFjY2VzcyB0byB0aGUgaWZyYW1lIGRvY3VtZW50cyBmcm9tIGVsZWN0cm9uIHdlXG4gICAgICAgICAgICAgICAgICogc2hvdWxkIG1vdmUgdG8gYSBtb3JlIHNlY3VyZSBzb2x1dGlvbi5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB3ZWJTZWN1cml0eTogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBVc2UgYSBzZXNzaW9uIHBlciBjYXB0dXJlIHNvIHRoYXQgd2ViUmVxdWVzdHMgYmV0d2VlbiBjYXB0dXJlXG4gICAgICAgICAgICAgICAgICogaW5zdGFuY2VzIGFyZW4ndCBzaGFyZWQuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgcGFydGl0aW9uLFxuXG4gICAgICAgICAgICAgICAgd2Vidmlld1RhZzogdHJ1ZVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgb25jZVJlYWR5VG9TaG93KHdpbmRvdzogQnJvd3NlcldpbmRvdyk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxCcm93c2VyV2luZG93PihyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgd2luZG93Lm9uY2UoJ3JlYWR5LXRvLXNob3cnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUod2luZG93KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=