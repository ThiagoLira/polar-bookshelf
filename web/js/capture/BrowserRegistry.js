"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Browser_1 = require("polar-content-capture/src/capture/Browser");
const BrowserRegistry = {
    DESKTOP_850: new Browser_1.Browser({
        name: "DESKTOP_850",
        title: "Desktop",
        type: 'desktop',
        description: "Chrome 66",
        userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
        inactive: false,
        deviceEmulation: {
            screenPosition: "desktop",
            screenSize: {
                width: 850,
                height: 768
            },
            viewSize: {
                width: 850,
                height: 786
            },
            viewPosition: { x: 0, y: 0 },
            deviceScaleFactor: 0,
            scale: 1
        }
    }),
    DESKTOP_1024: new Browser_1.Browser({
        name: "DESKTOP_1024",
        title: "Desktop",
        type: 'desktop',
        description: "Chrome 66",
        userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
        inactive: false,
        deviceEmulation: {
            screenPosition: "desktop",
            screenSize: {
                width: 1024,
                height: 768
            },
            viewSize: {
                width: 1024,
                height: 786
            },
            viewPosition: { x: 0, y: 0 },
            deviceScaleFactor: 0,
            scale: 1
        }
    }),
    DESKTOP_1280: new Browser_1.Browser({
        name: "DESKTOP_1280",
        title: "Desktop",
        type: 'desktop',
        description: "Chrome 66",
        userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
        inactive: false,
        deviceEmulation: {
            screenPosition: "desktop",
            screenSize: {
                width: 1280,
                height: 1024
            },
            viewSize: {
                width: 1280,
                height: 1024
            },
            viewPosition: { x: 0, y: 0 },
            deviceScaleFactor: 0,
            scale: 1
        }
    }),
    DESKTOP_1920: new Browser_1.Browser({
        name: "DESKTOP_1920",
        title: "Desktop",
        type: 'desktop',
        description: "Chrome 66",
        userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
        inactive: false,
        deviceEmulation: {
            screenPosition: "desktop",
            screenSize: {
                width: 1920,
                height: 1280
            },
            viewSize: {
                width: 1920,
                height: 1280
            },
            viewPosition: { x: 0, y: 0 },
            deviceScaleFactor: 0,
            scale: 1
        }
    }),
    MOBILE_GALAXY_S8: new Browser_1.Browser({
        name: "MOBILE_GALAXY_S8",
        title: "Galaxy S8",
        type: 'phone',
        description: "Galaxy S8 mobile device (stock)",
        userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Mobile Safari/537.36",
        inactive: false,
        deviceEmulation: {
            screenPosition: "mobile",
            screenSize: {
                width: 412,
                height: 846
            },
            viewSize: {
                width: 412,
                height: 846
            },
            viewPosition: { x: 0, y: 0 },
            deviceScaleFactor: 0,
            scale: 1
        }
    }),
    MOBILE_GALAXY_S8_WITH_CHROME_66: new Browser_1.Browser({
        name: "MOBILE_GALAXY_S8_WITH_CHROME_66",
        title: "Galaxy S8",
        type: 'phone',
        description: "Galaxy S8 mobile device but with Chrome 66",
        userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Mobile Safari/537.36",
        inactive: true,
        deviceEmulation: {
            screenPosition: "mobile",
            screenSize: {
                width: 412,
                height: 846
            },
            viewSize: {
                width: 412,
                height: 846
            },
            viewPosition: { x: 0, y: 0 },
            deviceScaleFactor: 0,
            scale: 1
        }
    }),
    MOBILE_GALAXY_S8_WITH_CHROME_66_WIDTH_700: new Browser_1.Browser({
        name: "MOBILE_GALAXY_S8_WITH_CHROME_66_WIDTH_700",
        title: "Galaxy S8",
        type: 'phone',
        description: "Galaxy S8 mobile device running Chrome 66 but with width at 700",
        userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Mobile Safari/537.36",
        inactive: true,
        deviceEmulation: {
            screenPosition: "mobile",
            screenSize: {
                width: 700,
                height: 905
            },
            viewSize: {
                width: 700,
                height: 905
            },
            viewPosition: { x: 0, y: 0 },
            deviceScaleFactor: 0,
            scale: 1
        }
    }),
    MOBILE_GALAXY_S8_WITH_CHROME_66_WIDTH_750: new Browser_1.Browser({
        name: "MOBILE_GALAXY_S8_WITH_CHROME_66_WIDTH_750",
        title: "Galaxy S8",
        type: 'phone',
        description: "Galaxy S8 mobile device running Chrome 66 but with width at 750",
        userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Mobile Safari/537.36",
        inactive: true,
        deviceEmulation: {
            screenPosition: "mobile",
            screenSize: {
                width: 750,
                height: 970
            },
            viewSize: {
                width: 750,
                height: 970
            },
            viewPosition: { x: 0, y: 0 },
            deviceScaleFactor: 0,
            scale: 1
        }
    }),
    CHROME_66: new Browser_1.Browser({
        name: "CHROME_66",
        title: "Chrome 66",
        type: 'desktop',
        description: "Chrome 66",
        userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
        inactive: true,
        deviceEmulation: {
            screenPosition: "desktop",
            screenSize: {
                width: 1024,
                height: 768
            },
            viewSize: {
                width: 1024,
                height: 786
            },
            viewPosition: { x: 0, y: 0 },
            deviceScaleFactor: 0,
            scale: 1
        }
    }),
};
BrowserRegistry.DEFAULT = BrowserRegistry.MOBILE_GALAXY_S8_WITH_CHROME_66_WIDTH_750;
exports.default = BrowserRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlclJlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJvd3NlclJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsdUVBQWtFO0FBT2xFLE1BQU0sZUFBZSxHQUE4QjtJQU8vQyxXQUFXLEVBQUUsSUFBSSxpQkFBTyxDQUFDO1FBRXJCLElBQUksRUFBRSxhQUFhO1FBQ25CLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxTQUFTO1FBQ2YsV0FBVyxFQUFFLFdBQVc7UUFDeEIsU0FBUyxFQUFFLDJHQUEyRztRQUN0SCxRQUFRLEVBQUUsS0FBSztRQUVmLGVBQWUsRUFBRTtZQUNiLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLFVBQVUsRUFBRTtnQkFDUixLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRzthQUNkO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2FBQ2Q7WUFDRCxZQUFZLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7WUFDMUIsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQztTQUVYO0tBRUosQ0FBQztJQUVGLFlBQVksRUFBRSxJQUFJLGlCQUFPLENBQUM7UUFFdEIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLFNBQVM7UUFDZixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsMkdBQTJHO1FBQ3RILFFBQVEsRUFBRSxLQUFLO1FBRWYsZUFBZSxFQUFFO1lBQ2IsY0FBYyxFQUFFLFNBQVM7WUFDekIsVUFBVSxFQUFFO2dCQUNSLEtBQUssRUFBRSxJQUFJO2dCQUNYLE1BQU0sRUFBRSxHQUFHO2FBQ2Q7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLEdBQUc7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LENBQUMsRUFBQztZQUMxQixpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDO1NBRVg7S0FFSixDQUFDO0lBRUYsU0FBUyxFQUFFLElBQUksaUJBQU8sQ0FBQztRQUVuQixJQUFJLEVBQUUsV0FBVztRQUNqQixLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFNBQVMsRUFBRSwyR0FBMkc7UUFDdEgsUUFBUSxFQUFFLElBQUk7UUFFZCxlQUFlLEVBQUU7WUFDYixjQUFjLEVBQUUsU0FBUztZQUN6QixVQUFVLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLEdBQUc7YUFDZDtZQUNELFFBQVEsRUFBRTtnQkFDTixLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsR0FBRzthQUNkO1lBQ0QsWUFBWSxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDO1lBQzFCLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUM7U0FFWDtLQUVKLENBQUM7Q0FFTCxDQUFDO0FBR0YsZUFBZSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMseUNBQXlDLENBQUM7QUFNcEYsa0JBQWUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEJhc2ljIHN0cnVjdHVyZSBmb3IgZGVmaW5pbmdcbiAqXG4gKi9cbmltcG9ydCB7QnJvd3Nlcn0gZnJvbSAncG9sYXItY29udGVudC1jYXB0dXJlL3NyYy9jYXB0dXJlL0Jyb3dzZXInO1xuXG4vLyBFbGVjdHJvbiAzLjAgdXNlcyBDaHJvbWUgNjYgYnkgZGVmYXVsdC4gIFZlcnNpb24gNjkgaXMgdGhlIGxhdGVzdCBjaXJjYSBPY3QgMjUgMjAxOFxuXG4vLyBUT0RPOiBjbGVhbiB0aGlzIHVwLiAgdGhlcmUgaXMgYSBsb3Qgb2YgY29kZSBkdXBsaWNhdGlvbiBoZXJlIHdoZW4gd2UncmVcbi8vIG9ubHkgYWRkaW5nIDEgb3IgMiBmaWVsZHMgbGlrZSB3aWR0aCBhbmQgaGVpZ2h0LlxuXG5jb25zdCBCcm93c2VyUmVnaXN0cnk6IHtbbmFtZTogc3RyaW5nXTogQnJvd3Nlcn0gPSB7XG5cbiAgICAvLyBTdG9jayBFbGVjdHJvbiBVQSBpczpcbiAgICAvL1xuICAgIC8vIE1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgcG9sYXItYm9va3NoZWxmLzEuMC4wLWJldGExMyBDaHJvbWUvNjEuMC4zMTYzLjEwMCBFbGVjdHJvbi8yLjAuMiBTYWZhcmkvNTM3LjM2XG4gICAgLy8gTW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjYuMC4zMzU5LjE4MSBFbGVjdHJvbi8zLjAuMC1iZXRhLjUgU2FmYXJpLzUzNy4zNlxuXG4gICAgREVTS1RPUF84NTA6IG5ldyBCcm93c2VyKHtcblxuICAgICAgICBuYW1lOiBcIkRFU0tUT1BfODUwXCIsXG4gICAgICAgIHRpdGxlOiBcIkRlc2t0b3BcIixcbiAgICAgICAgdHlwZTogJ2Rlc2t0b3AnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaHJvbWUgNjZcIixcbiAgICAgICAgdXNlckFnZW50OiBcIk1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzY2LjAuMzM1OS4xODEgU2FmYXJpLzUzNy4zNlwiLFxuICAgICAgICBpbmFjdGl2ZTogZmFsc2UsXG5cbiAgICAgICAgZGV2aWNlRW11bGF0aW9uOiB7XG4gICAgICAgICAgICBzY3JlZW5Qb3NpdGlvbjogXCJkZXNrdG9wXCIsXG4gICAgICAgICAgICBzY3JlZW5TaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1MCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdTaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1MCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc4NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdQb3NpdGlvbjoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgZGV2aWNlU2NhbGVGYWN0b3I6IDAsXG4gICAgICAgICAgICBzY2FsZTogMVxuXG4gICAgICAgIH1cblxuICAgIH0pLFxuXG4gICAgREVTS1RPUF8xMDI0OiBuZXcgQnJvd3Nlcih7XG5cbiAgICAgICAgbmFtZTogXCJERVNLVE9QXzEwMjRcIixcbiAgICAgICAgdGl0bGU6IFwiRGVza3RvcFwiLFxuICAgICAgICB0eXBlOiAnZGVza3RvcCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNocm9tZSA2NlwiLFxuICAgICAgICB1c2VyQWdlbnQ6IFwiTW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjYuMC4zMzU5LjE4MSBTYWZhcmkvNTM3LjM2XCIsXG4gICAgICAgIGluYWN0aXZlOiBmYWxzZSxcblxuICAgICAgICBkZXZpY2VFbXVsYXRpb246IHtcbiAgICAgICAgICAgIHNjcmVlblBvc2l0aW9uOiBcImRlc2t0b3BcIixcbiAgICAgICAgICAgIHNjcmVlblNpemU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAyNCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2OFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdTaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMjQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3ODZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3UG9zaXRpb246IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIGRldmljZVNjYWxlRmFjdG9yOiAwLFxuICAgICAgICAgICAgc2NhbGU6IDFcblxuICAgICAgICB9XG5cbiAgICB9KSxcblxuICAgIERFU0tUT1BfMTI4MDogbmV3IEJyb3dzZXIoe1xuXG4gICAgICAgIG5hbWU6IFwiREVTS1RPUF8xMjgwXCIsXG4gICAgICAgIHRpdGxlOiBcIkRlc2t0b3BcIixcbiAgICAgICAgdHlwZTogJ2Rlc2t0b3AnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaHJvbWUgNjZcIixcbiAgICAgICAgdXNlckFnZW50OiBcIk1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzY2LjAuMzM1OS4xODEgU2FmYXJpLzUzNy4zNlwiLFxuICAgICAgICBpbmFjdGl2ZTogZmFsc2UsXG5cbiAgICAgICAgZGV2aWNlRW11bGF0aW9uOiB7XG4gICAgICAgICAgICBzY3JlZW5Qb3NpdGlvbjogXCJkZXNrdG9wXCIsXG4gICAgICAgICAgICBzY3JlZW5TaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyODAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDI0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlld1NpemU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTI4MCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMjRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3UG9zaXRpb246IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIGRldmljZVNjYWxlRmFjdG9yOiAwLFxuICAgICAgICAgICAgc2NhbGU6IDFcblxuICAgICAgICB9XG5cbiAgICB9KSxcblxuICAgIERFU0tUT1BfMTkyMDogbmV3IEJyb3dzZXIoe1xuXG4gICAgICAgIG5hbWU6IFwiREVTS1RPUF8xOTIwXCIsXG4gICAgICAgIHRpdGxlOiBcIkRlc2t0b3BcIixcbiAgICAgICAgdHlwZTogJ2Rlc2t0b3AnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaHJvbWUgNjZcIixcbiAgICAgICAgdXNlckFnZW50OiBcIk1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzY2LjAuMzM1OS4xODEgU2FmYXJpLzUzNy4zNlwiLFxuICAgICAgICBpbmFjdGl2ZTogZmFsc2UsXG5cbiAgICAgICAgZGV2aWNlRW11bGF0aW9uOiB7XG4gICAgICAgICAgICBzY3JlZW5Qb3NpdGlvbjogXCJkZXNrdG9wXCIsXG4gICAgICAgICAgICBzY3JlZW5TaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE5MjAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjgwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlld1NpemU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTkyMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3UG9zaXRpb246IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIGRldmljZVNjYWxlRmFjdG9yOiAwLFxuICAgICAgICAgICAgc2NhbGU6IDFcblxuICAgICAgICB9XG5cbiAgICB9KSxcblxuICAgIE1PQklMRV9HQUxBWFlfUzg6IG5ldyBCcm93c2VyKHtcblxuICAgICAgICBuYW1lOiBcIk1PQklMRV9HQUxBWFlfUzhcIixcbiAgICAgICAgdGl0bGU6IFwiR2FsYXh5IFM4XCIsXG4gICAgICAgIHR5cGU6ICdwaG9uZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdhbGF4eSBTOCBtb2JpbGUgZGV2aWNlIChzdG9jaylcIixcbiAgICAgICAgdXNlckFnZW50OiBcIk1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA4LjAuMDsgU00tRzk1NVUgQnVpbGQvUjE2TlcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS82Ni4wLjMzNTkuMTgxIE1vYmlsZSBTYWZhcmkvNTM3LjM2XCIsXG4gICAgICAgIGluYWN0aXZlOiBmYWxzZSxcblxuICAgICAgICBkZXZpY2VFbXVsYXRpb246IHtcbiAgICAgICAgICAgIHNjcmVlblBvc2l0aW9uOiBcIm1vYmlsZVwiLFxuICAgICAgICAgICAgc2NyZWVuU2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MTIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4NDZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3U2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MTIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4NDZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3UG9zaXRpb246IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIGRldmljZVNjYWxlRmFjdG9yOiAwLFxuICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfVxuXG4gICAgfSksXG5cbiAgICBNT0JJTEVfR0FMQVhZX1M4X1dJVEhfQ0hST01FXzY2OiBuZXcgQnJvd3Nlcih7XG5cbiAgICAgICAgbmFtZTogXCJNT0JJTEVfR0FMQVhZX1M4X1dJVEhfQ0hST01FXzY2XCIsXG4gICAgICAgIHRpdGxlOiBcIkdhbGF4eSBTOFwiLFxuICAgICAgICB0eXBlOiAncGhvbmUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHYWxheHkgUzggbW9iaWxlIGRldmljZSBidXQgd2l0aCBDaHJvbWUgNjZcIixcbiAgICAgICAgdXNlckFnZW50OiBcIk1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA4LjAuMDsgU00tRzk1NVUgQnVpbGQvUjE2TlcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS82Ni4wLjMzNTkuMTgxIE1vYmlsZSBTYWZhcmkvNTM3LjM2XCIsXG4gICAgICAgIGluYWN0aXZlOiB0cnVlLFxuXG4gICAgICAgIGRldmljZUVtdWxhdGlvbjoge1xuICAgICAgICAgICAgc2NyZWVuUG9zaXRpb246IFwibW9iaWxlXCIsXG4gICAgICAgICAgICBzY3JlZW5TaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQxMixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDg0NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdTaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQxMixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDg0NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdQb3NpdGlvbjoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgZGV2aWNlU2NhbGVGYWN0b3I6IDAsXG4gICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9XG5cbiAgICB9KSxcblxuXG4gICAgTU9CSUxFX0dBTEFYWV9TOF9XSVRIX0NIUk9NRV82Nl9XSURUSF83MDA6IG5ldyBCcm93c2VyKHtcblxuICAgICAgICBuYW1lOiBcIk1PQklMRV9HQUxBWFlfUzhfV0lUSF9DSFJPTUVfNjZfV0lEVEhfNzAwXCIsXG4gICAgICAgIHRpdGxlOiBcIkdhbGF4eSBTOFwiLFxuICAgICAgICB0eXBlOiAncGhvbmUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHYWxheHkgUzggbW9iaWxlIGRldmljZSBydW5uaW5nIENocm9tZSA2NiBidXQgd2l0aCB3aWR0aCBhdCA3MDBcIixcbiAgICAgICAgdXNlckFnZW50OiBcIk1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA4LjAuMDsgU00tRzk1NVUgQnVpbGQvUjE2TlcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS82Ni4wLjMzNTkuMTgxIE1vYmlsZSBTYWZhcmkvNTM3LjM2XCIsXG4gICAgICAgIGluYWN0aXZlOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSBFbGVjdHJvbi5QYXJhbWV0ZXJzXG4gICAgICAgICAqL1xuICAgICAgICBkZXZpY2VFbXVsYXRpb246IHtcbiAgICAgICAgICAgIHNjcmVlblBvc2l0aW9uOiBcIm1vYmlsZVwiLFxuICAgICAgICAgICAgc2NyZWVuU2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MDVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3U2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MDVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3UG9zaXRpb246IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIGRldmljZVNjYWxlRmFjdG9yOiAwLFxuICAgICAgICAgICAgc2NhbGU6IDFcblxuICAgICAgICB9XG5cbiAgICB9KSxcblxuICAgIE1PQklMRV9HQUxBWFlfUzhfV0lUSF9DSFJPTUVfNjZfV0lEVEhfNzUwOiBuZXcgQnJvd3Nlcih7XG5cbiAgICAgICAgbmFtZTogXCJNT0JJTEVfR0FMQVhZX1M4X1dJVEhfQ0hST01FXzY2X1dJRFRIXzc1MFwiLFxuICAgICAgICB0aXRsZTogXCJHYWxheHkgUzhcIixcbiAgICAgICAgdHlwZTogJ3Bob25lJyxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR2FsYXh5IFM4IG1vYmlsZSBkZXZpY2UgcnVubmluZyBDaHJvbWUgNjYgYnV0IHdpdGggd2lkdGggYXQgNzUwXCIsXG4gICAgICAgIHVzZXJBZ2VudDogXCJNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgOC4wLjA7IFNNLUc5NTVVIEJ1aWxkL1IxNk5XKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjYuMC4zMzU5LjE4MSBNb2JpbGUgU2FmYXJpLzUzNy4zNlwiLFxuICAgICAgICBpbmFjdGl2ZTogdHJ1ZSxcblxuICAgICAgICBkZXZpY2VFbXVsYXRpb246IHtcbiAgICAgICAgICAgIHNjcmVlblBvc2l0aW9uOiBcIm1vYmlsZVwiLFxuICAgICAgICAgICAgc2NyZWVuU2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5NzBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3U2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5NzBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3UG9zaXRpb246IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIGRldmljZVNjYWxlRmFjdG9yOiAwLFxuICAgICAgICAgICAgc2NhbGU6IDFcblxuICAgICAgICB9XG5cbiAgICB9KSxcblxuICAgIENIUk9NRV82NjogbmV3IEJyb3dzZXIoe1xuXG4gICAgICAgIG5hbWU6IFwiQ0hST01FXzY2XCIsXG4gICAgICAgIHRpdGxlOiBcIkNocm9tZSA2NlwiLFxuICAgICAgICB0eXBlOiAnZGVza3RvcCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNocm9tZSA2NlwiLFxuICAgICAgICB1c2VyQWdlbnQ6IFwiTW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjYuMC4zMzU5LjE4MSBTYWZhcmkvNTM3LjM2XCIsXG4gICAgICAgIGluYWN0aXZlOiB0cnVlLFxuXG4gICAgICAgIGRldmljZUVtdWxhdGlvbjoge1xuICAgICAgICAgICAgc2NyZWVuUG9zaXRpb246IFwiZGVza3RvcFwiLFxuICAgICAgICAgICAgc2NyZWVuU2l6ZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDI0LFxuICAgICAgICAgICAgICAgIGhlaWdodDogNzY4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlld1NpemU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAyNCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc4NlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdQb3NpdGlvbjoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgZGV2aWNlU2NhbGVGYWN0b3I6IDAsXG4gICAgICAgICAgICBzY2FsZTogMVxuXG4gICAgICAgIH1cblxuICAgIH0pLFxuXG59O1xuXG4vLyBzZXR1cCBhIGRlZmF1bHQgYnJvd3Nlci4uLlxuQnJvd3NlclJlZ2lzdHJ5LkRFRkFVTFQgPSBCcm93c2VyUmVnaXN0cnkuTU9CSUxFX0dBTEFYWV9TOF9XSVRIX0NIUk9NRV82Nl9XSURUSF83NTA7XG5cbi8vIEJyb3dzZXJSZWdpc3RyeS5ERUZBVUxUID0gQnJvd3NlclJlZ2lzdHJ5Lk1PQklMRV9HQUxBWFlfUzg7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyUmVnaXN0cnk7XG4iXX0=