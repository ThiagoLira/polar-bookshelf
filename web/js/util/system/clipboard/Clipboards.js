"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ElectronClipboard_1 = require("./providers/ElectronClipboard");
const BrowserClipboard_1 = require("./providers/BrowserClipboard");
const NullClipboard_1 = require("./providers/NullClipboard");
class Clipboards {
    static getInstance() {
        if (ElectronClipboard_1.ElectronClipboard.supported()) {
            return new ElectronClipboard_1.ElectronClipboard();
        }
        else if (BrowserClipboard_1.BrowserClipboard.supported()) {
            return new BrowserClipboard_1.BrowserClipboard();
        }
        return new NullClipboard_1.NullClipboard();
    }
}
exports.Clipboards = Clipboards;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpcGJvYXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNsaXBib2FyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxxRUFBZ0U7QUFDaEUsbUVBQThEO0FBQzlELDZEQUF3RDtBQUd4RCxNQUFhLFVBQVU7SUFFWixNQUFNLENBQUMsV0FBVztRQUVyQixJQUFJLHFDQUFpQixDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNyQyxPQUFPLElBQUksbUNBQWdCLEVBQUUsQ0FBQztTQUNqQztRQUVELE9BQU8sSUFBSSw2QkFBYSxFQUFFLENBQUM7SUFFL0IsQ0FBQztDQUVKO0FBZEQsZ0NBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NsaXBib2FyZH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJy4vQ2xpcGJvYXJkJztcbmltcG9ydCB7RWxlY3Ryb25DbGlwYm9hcmR9IGZyb20gJy4vcHJvdmlkZXJzL0VsZWN0cm9uQ2xpcGJvYXJkJztcbmltcG9ydCB7QnJvd3NlckNsaXBib2FyZH0gZnJvbSAnLi9wcm92aWRlcnMvQnJvd3NlckNsaXBib2FyZCc7XG5pbXBvcnQge051bGxDbGlwYm9hcmR9IGZyb20gJy4vcHJvdmlkZXJzL051bGxDbGlwYm9hcmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmRzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQ2xpcGJvYXJkIHtcblxuICAgICAgICBpZiAoRWxlY3Ryb25DbGlwYm9hcmQuc3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRWxlY3Ryb25DbGlwYm9hcmQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChCcm93c2VyQ2xpcGJvYXJkLnN1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJyb3dzZXJDbGlwYm9hcmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTnVsbENsaXBib2FyZCgpO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==