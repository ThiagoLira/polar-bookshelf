"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const SPECTRON_SHOW = 'SPECTRON_SHOW';
const offscreen = process_1.default.env.SPECTRON_OFFSCREEN === 'true';
const show = !offscreen;
console.log("Running with spectron config: ", { offscreen, show });
class SpectronBrowserWindowOptions {
    static create() {
        return {
            backgroundColor: '#FFF',
            show,
            webPreferences: {
                webSecurity: false,
                nodeIntegration: true,
                partition: "persist:spectron",
                webviewTag: true,
                offscreen
            }
        };
    }
}
exports.SpectronBrowserWindowOptions = SpectronBrowserWindowOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxzREFBOEI7QUFFOUIsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBRXRDLE1BQU0sU0FBUyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixLQUFLLE1BQU0sQ0FBQztBQUM1RCxNQUFNLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7QUFFakUsTUFBYSw0QkFBNEI7SUFFOUIsTUFBTSxDQUFDLE1BQU07UUFTaEIsT0FBTztZQUVILGVBQWUsRUFBRSxNQUFNO1lBUXZCLElBQUk7WUFFSixjQUFjLEVBQUU7Z0JBQ1osV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsU0FBUzthQUNaO1NBRUosQ0FBQztJQUVOLENBQUM7Q0FFSjtBQW5DRCxvRUFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucyA9IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnM7XG5cbmltcG9ydCBwcm9jZXNzIGZyb20gJ3Byb2Nlc3MnO1xuXG5jb25zdCBTUEVDVFJPTl9TSE9XID0gJ1NQRUNUUk9OX1NIT1cnO1xuXG5jb25zdCBvZmZzY3JlZW4gPSBwcm9jZXNzLmVudi5TUEVDVFJPTl9PRkZTQ1JFRU4gPT09ICd0cnVlJztcbmNvbnN0IHNob3cgPSAhb2Zmc2NyZWVuO1xuXG5jb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aCBzcGVjdHJvbiBjb25maWc6IFwiLCB7b2Zmc2NyZWVuLCBzaG93fSk7XG5cbmV4cG9ydCBjbGFzcyBTcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IEJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnMge1xuXG4gICAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIHdlIHNob3VsZCBzaG93IHRoZSB3aW5kb3cgYnkgZGVmYXVsdC4gTm9ybWFsbHlcbiAgICAgICAgLy8gc2hvd2luZyB0aGUgd2luZG93IGlzIHJlYWxseSBhbm5veWluZyB3aGVuIGRldmVsb3BpbmcgbG9jYWxseSBidXRcbiAgICAgICAgLy8gZm9yIGRlYnVnIHB1cnBvc2VzIGl0J3MgbmljZSB0byBhY3R1YWxseSBzaG93IHRoZW0uXG5cbiAgICAgICAgLy8gTk9UIHNob3dpbmcgYnkgZGVmYXVsdCBiZWNhdXNlIG9uIHdpbmRvd3MsIGFuZCBvdGhlciBwbGF0Zm9ybXMsIHRoZVxuICAgICAgICAvLyBwcm9jcyBhcmUgb2Z0ZW4gc3R1Y2sgc28gSSBuZWVkIHRvIGZpZ3VyZSB0aGF0IHBhcnQgb3V0LlxuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxuXG4gICAgICAgICAgICAvLyBOT1RFOiB0aGUgZGVmYXVsdCB3aWR0aCBhbmQgaGVpZ2h0IHNob3VsZG4ndCBiZSBjaGFuZ2VkIGhlcmUgYXMgaXQgY2FuXG4gICAgICAgICAgICAvLyBicmVhayB1bml0IHRlc3RzLlxuXG4gICAgICAgICAgICAvLyB3aWR0aDogMTAwMCxcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwMCxcblxuICAgICAgICAgICAgc2hvdyxcblxuICAgICAgICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgICAgICAgICB3ZWJTZWN1cml0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhcnRpdGlvbjogXCJwZXJzaXN0OnNwZWN0cm9uXCIsXG4gICAgICAgICAgICAgICAgd2Vidmlld1RhZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvZmZzY3JlZW5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG4iXX0=