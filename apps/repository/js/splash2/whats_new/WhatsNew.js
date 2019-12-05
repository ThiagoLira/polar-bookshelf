"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LifecycleToggle_1 = require("../../../../../web/js/ui/util/LifecycleToggle");
const LifecycleEvents_1 = require("../../../../../web/js/ui/util/LifecycleEvents");
const Version_1 = require("polar-shared/src/util/Version");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class WhatsNew {
    static isBlocked() {
        return !LifecycleToggle_1.LifecycleToggle.isMarked(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
    }
    static shouldShow() {
        const version = Version_1.Version.get();
        const prevVersion = LifecycleToggle_1.LifecycleToggle.get(LifecycleEvents_1.LifecycleEvents.WHATS_NEW_VERSION)
            .getOrElse(version);
        log.debug("Comparing versions: ", { version, prevVersion });
        return prevVersion !== version;
    }
    static doShow() {
        const isBlocked = this.isBlocked();
        const shouldShow = this.shouldShow();
        log.debug("doShow history: ", { isBlocked, shouldShow });
        return !isBlocked && shouldShow;
    }
    static markShown() {
        const version = Version_1.Version.get();
        log.debug("Marking version shown: " + version);
        LifecycleToggle_1.LifecycleToggle.set(LifecycleEvents_1.LifecycleEvents.WHATS_NEW_VERSION, version);
    }
}
exports.WhatsNew = WhatsNew;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNOZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXaGF0c05ldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1GQUE4RTtBQUM5RSxtRkFBOEU7QUFDOUUsMkRBQXNEO0FBQ3RELDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxRQUFRO0lBS1QsTUFBTSxDQUFDLFNBQVM7UUFDcEIsT0FBTyxDQUFFLGlDQUFlLENBQUMsUUFBUSxDQUFDLGlDQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUtPLE1BQU0sQ0FBQyxVQUFVO1FBRXJCLE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFJOUIsTUFBTSxXQUFXLEdBQ2IsaUNBQWUsQ0FBQyxHQUFHLENBQUMsaUNBQWUsQ0FBQyxpQkFBaUIsQ0FBQzthQUNqRCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1FBRzFELE9BQU8sV0FBVyxLQUFLLE9BQU8sQ0FBQztJQUVuQyxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU07UUFFaEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVyQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFFdkQsT0FBTyxDQUFFLFNBQVMsSUFBSSxVQUFVLENBQUM7SUFDckMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBRW5CLE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUUvQyxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxpQ0FBZSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXBFLENBQUM7Q0FFSjtBQWpERCw0QkFpREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpZmVjeWNsZVRvZ2dsZX0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3V0aWwvTGlmZWN5Y2xlVG9nZ2xlJztcbmltcG9ydCB7TGlmZWN5Y2xlRXZlbnRzfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvdXRpbC9MaWZlY3ljbGVFdmVudHMnO1xuaW1wb3J0IHtWZXJzaW9ufSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVmVyc2lvbic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgV2hhdHNOZXcge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgd2UncmUgYmxvY2tlZCBieSBhbm90aGVyIGV2ZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGlzQmxvY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuICEgTGlmZWN5Y2xlVG9nZ2xlLmlzTWFya2VkKExpZmVjeWNsZUV2ZW50cy5UT1VSX1RFUk1JTkFURUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoaXMgc2hvdWxkIGJlIHNob3duIHVuZGVyIGlkZWFsIGNpcmN1bXN0YW5jZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBzaG91bGRTaG93KCk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSBWZXJzaW9uLmdldCgpO1xuXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgd2Ugc2V0IHRoZSBwcmV2VmVyc2lvbiB0byB0aGUgY3VycmVudCB2ZXJzaW9uIHNvIG9uIHRoZVxuICAgICAgICAvLyBpbml0aWFsIGluc3RhbGwgd2UgZG9uJ3QgZ2V0IGEgd2hhdHMgbmV3IGRpYWxvZyBib3guXG4gICAgICAgIGNvbnN0IHByZXZWZXJzaW9uID1cbiAgICAgICAgICAgIExpZmVjeWNsZVRvZ2dsZS5nZXQoTGlmZWN5Y2xlRXZlbnRzLldIQVRTX05FV19WRVJTSU9OKVxuICAgICAgICAgICAgICAgIC5nZXRPckVsc2UodmVyc2lvbik7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiQ29tcGFyaW5nIHZlcnNpb25zOiBcIiwge3ZlcnNpb24sIHByZXZWZXJzaW9ufSk7XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBuZWVkcyBzZW12ZXIuLi4gZnJvbSBXaGF0c05ld0NvbXBvbmVudCAod2hpY2ggaXMgbm93IGRlcHJlY2F0ZWQpXG4gICAgICAgIHJldHVybiBwcmV2VmVyc2lvbiAhPT0gdmVyc2lvbjtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZG9TaG93KCk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IGlzQmxvY2tlZCA9IHRoaXMuaXNCbG9ja2VkKCk7XG4gICAgICAgIGNvbnN0IHNob3VsZFNob3cgPSB0aGlzLnNob3VsZFNob3coKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJkb1Nob3cgaGlzdG9yeTogXCIsIHtpc0Jsb2NrZWQsIHNob3VsZFNob3d9KTtcblxuICAgICAgICByZXR1cm4gISBpc0Jsb2NrZWQgJiYgc2hvdWxkU2hvdztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcmtTaG93bigpIHtcblxuICAgICAgICBjb25zdCB2ZXJzaW9uID0gVmVyc2lvbi5nZXQoKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJNYXJraW5nIHZlcnNpb24gc2hvd246IFwiICsgdmVyc2lvbik7XG5cbiAgICAgICAgTGlmZWN5Y2xlVG9nZ2xlLnNldChMaWZlY3ljbGVFdmVudHMuV0hBVFNfTkVXX1ZFUlNJT04sIHZlcnNpb24pO1xuXG4gICAgfVxuXG59XG4iXX0=