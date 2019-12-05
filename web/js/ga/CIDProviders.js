"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const CIDProvider_1 = require("./CIDProvider");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const log = Logger_1.Logger.create();
class CIDProviders {
    static getInstance() {
        if (electron_1.remote) {
            return electron_1.remote.getGlobal('cidProvider');
        }
        else {
            return Optional_1.Optional.of(window.localStorage.getItem('cidProvider'))
                .map(value => new CIDProvider_1.CIDProvider(value))
                .getOrNull();
        }
    }
    static setInstance(provider) {
        if (electron_1.remote) {
            Preconditions_1.Preconditions.assertPresent(provider, "provider");
            if (!Preconditions_1.isPresent(electron_1.remote.getGlobal('cidProvider'))) {
                log.warn("No global cid provider in remote");
                return;
            }
            electron_1.remote.getGlobal('cidProvider').value = provider.get();
        }
        else {
            const value = provider.get();
            if (value) {
                window.localStorage.setItem('cidProvider', value);
            }
        }
    }
}
exports.CIDProviders = CIDProviders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0lEUHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ0lEUHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQWdDO0FBQ2hDLCtDQUEwQztBQUMxQywyREFBc0Q7QUFDdEQsa0VBQXdFO0FBQ3hFLGdFQUEyRDtBQUczRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLFdBQVc7UUFFckIsSUFBSSxpQkFBTSxFQUFFO1lBQ1IsT0FBTyxpQkFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDekQsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUVMLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQXFCO1FBRTNDLElBQUksaUJBQU0sRUFBRTtZQUVSLDZCQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUUseUJBQVMsQ0FBQyxpQkFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO2dCQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7Z0JBSTdDLE9BQU87YUFDVjtZQUVELGlCQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FFMUQ7YUFBTTtZQUVILE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUU3QixJQUFJLEtBQUssRUFBRTtnQkFDUCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDckQ7U0FFSjtJQUVMLENBQUM7Q0FFSjtBQTFDRCxvQ0EwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlbW90ZX0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtDSURQcm92aWRlcn0gZnJvbSAnLi9DSURQcm92aWRlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7aXNQcmVzZW50LCBQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7UHJvdmlkZXJzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvdmlkZXJzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEBFbGVjdHJvblJlbmRlcmVyQ29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgQ0lEUHJvdmlkZXJzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQ0lEUHJvdmlkZXIgfCBudWxsIHtcblxuICAgICAgICBpZiAocmVtb3RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVtb3RlLmdldEdsb2JhbCgnY2lkUHJvdmlkZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpZFByb3ZpZGVyJykpXG4gICAgICAgICAgICAgICAgLm1hcCh2YWx1ZSA9PiBuZXcgQ0lEUHJvdmlkZXIodmFsdWUpKVxuICAgICAgICAgICAgICAgIC5nZXRPck51bGwoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXRJbnN0YW5jZShwcm92aWRlcjogQ0lEUHJvdmlkZXIpIHtcblxuICAgICAgICBpZiAocmVtb3RlKSB7XG5cbiAgICAgICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChwcm92aWRlciwgXCJwcm92aWRlclwiKTtcblxuICAgICAgICAgICAgaWYgKCEgaXNQcmVzZW50KHJlbW90ZS5nZXRHbG9iYWwoJ2NpZFByb3ZpZGVyJykpKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm4oXCJObyBnbG9iYWwgY2lkIHByb3ZpZGVyIGluIHJlbW90ZVwiKTtcbiAgICAgICAgICAgICAgICAvLyBub3RlIHRoYXQgd2UgY2FuJ3QgdHJhY2sgYW55dGhpbmcgYXQgdGhpcyBwb2ludCBidXQgd2UgbWlnaHRcbiAgICAgICAgICAgICAgICAvLyBiZSBpbiBhIHRlc3RpbmcgZnJhbWV3b3JrIHdoaWNoIGhhc24ndCBkZWZpbmVkIHRoZSB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgd2l0aGluIG1haW4uXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW1vdGUuZ2V0R2xvYmFsKCdjaWRQcm92aWRlcicpLnZhbHVlID0gcHJvdmlkZXIuZ2V0KCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwcm92aWRlci5nZXQoKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaWRQcm92aWRlcicsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==