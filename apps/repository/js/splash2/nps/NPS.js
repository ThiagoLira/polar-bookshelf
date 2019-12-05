"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const TimeDurations_1 = require("polar-shared/src/util/TimeDurations");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Version_1 = require("polar-shared/src/util/Version");
const LifecycleToggle_1 = require("../../../../../web/js/ui/util/LifecycleToggle");
const LocalPrefs_1 = require("../../../../../web/js/util/LocalPrefs");
const log = Logger_1.Logger.create();
exports.PREF_KEY = 'net-promoter-score';
class NPS {
    constructor(userState) {
        this.userState = userState;
    }
    hasMinimumUsage() {
        const { datastoreCreated } = this.userState;
        if (datastoreCreated) {
            const since = ISODateTimeStrings_1.ISODateTimeStrings.parse(datastoreCreated);
            if (TimeDurations_1.TimeDurations.hasElapsed(since, '1w')) {
                return true;
            }
        }
        return false;
    }
    hasExpired() {
        return !LocalPrefs_1.LocalPrefs.isDelayed(exports.PREF_KEY, '1w');
    }
    shouldShow() {
        const hasMinimumUsage = this.hasMinimumUsage();
        const hasExpired = this.hasExpired();
        return hasMinimumUsage && hasExpired;
    }
    doShow() {
        const shouldShow = this.shouldShow();
        log.debug("doShow history: ", { shouldShow });
        return !shouldShow;
    }
    static markShown() {
        const version = Version_1.Version.get();
        log.debug("Marking version shown: " + version);
        LifecycleToggle_1.LifecycleToggle.set(exports.PREF_KEY, version);
    }
}
exports.NPS = NPS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTlBTLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTlBTLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUZBQWdGO0FBQ2hGLHVFQUFrRTtBQUNsRSwyREFBc0Q7QUFDdEQsMkRBQXNEO0FBQ3RELG1GQUE4RTtBQUU5RSxzRUFBaUU7QUFFakUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWYsUUFBQSxRQUFRLEdBQUcsb0JBQW9CLENBQUM7QUFFN0MsTUFBYSxHQUFHO0lBRVosWUFBNkIsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUVqRCxDQUFDO0lBRU8sZUFBZTtRQUVuQixNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTFDLElBQUksZ0JBQWdCLEVBQUU7WUFFbEIsTUFBTSxLQUFLLEdBQUcsdUNBQWtCLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFekQsSUFBSSw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FFSjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7SUFFTyxVQUFVO1FBQ2QsT0FBTyxDQUFFLHVCQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLFVBQVU7UUFFZCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXJDLE9BQU8sZUFBZSxJQUFJLFVBQVUsQ0FBQztJQUV6QyxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVyQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUU5QyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUztRQUVuQixNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTlCLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFFL0MsaUNBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUzQyxDQUFDO0NBRUo7QUF4REQsa0JBd0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7VGltZUR1cmF0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1RpbWVEdXJhdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1ZlcnNpb259IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9WZXJzaW9uJztcbmltcG9ydCB7TGlmZWN5Y2xlVG9nZ2xlfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvdXRpbC9MaWZlY3ljbGVUb2dnbGUnO1xuaW1wb3J0IHtVc2VyU3RhdGV9IGZyb20gJy4uL1VzZXJTdGF0ZSc7XG5pbXBvcnQge0xvY2FsUHJlZnN9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91dGlsL0xvY2FsUHJlZnMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjb25zdCBQUkVGX0tFWSA9ICduZXQtcHJvbW90ZXItc2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTlBTIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdXNlclN0YXRlOiBVc2VyU3RhdGUpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFzTWluaW11bVVzYWdlKCkge1xuXG4gICAgICAgIGNvbnN0IHtkYXRhc3RvcmVDcmVhdGVkfSA9IHRoaXMudXNlclN0YXRlO1xuXG4gICAgICAgIGlmIChkYXRhc3RvcmVDcmVhdGVkKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNpbmNlID0gSVNPRGF0ZVRpbWVTdHJpbmdzLnBhcnNlKGRhdGFzdG9yZUNyZWF0ZWQpO1xuXG4gICAgICAgICAgICBpZiAoVGltZUR1cmF0aW9ucy5oYXNFbGFwc2VkKHNpbmNlLCAnMXcnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhc0V4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiAhIExvY2FsUHJlZnMuaXNEZWxheWVkKFBSRUZfS0VZLCAnMXcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3VsZFNob3coKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgaGFzTWluaW11bVVzYWdlID0gdGhpcy5oYXNNaW5pbXVtVXNhZ2UoKTtcbiAgICAgICAgY29uc3QgaGFzRXhwaXJlZCA9IHRoaXMuaGFzRXhwaXJlZCgpO1xuXG4gICAgICAgIHJldHVybiBoYXNNaW5pbXVtVXNhZ2UgJiYgaGFzRXhwaXJlZDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBkb1Nob3coKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkU2hvdyA9IHRoaXMuc2hvdWxkU2hvdygpO1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhcImRvU2hvdyBoaXN0b3J5OiBcIiwgeyBzaG91bGRTaG93IH0pO1xuXG4gICAgICAgIHJldHVybiAhc2hvdWxkU2hvdztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcmtTaG93bigpIHtcblxuICAgICAgICBjb25zdCB2ZXJzaW9uID0gVmVyc2lvbi5nZXQoKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJNYXJraW5nIHZlcnNpb24gc2hvd246IFwiICsgdmVyc2lvbik7XG5cbiAgICAgICAgTGlmZWN5Y2xlVG9nZ2xlLnNldChQUkVGX0tFWSwgdmVyc2lvbik7XG5cbiAgICB9XG5cbn1cbiJdfQ==