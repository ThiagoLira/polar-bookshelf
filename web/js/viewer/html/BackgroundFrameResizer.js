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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const FrameResizer_1 = require("./FrameResizer");
const Functions_1 = require("polar-shared/src/util/Functions");
const log = Logger_1.Logger.create();
const MAX_RESIZES = 25;
const MAX_HEIGHT = 100000;
class BackgroundFrameResizer {
    constructor(parent, host, onResized = Functions_1.NULL_FUNCTION) {
        this.timeoutInterval = 250;
        this.resizes = 0;
        this.parent = Preconditions_1.Preconditions.assertPresent(parent);
        this.host = Preconditions_1.Preconditions.assertPresent(host);
        this.onResized = onResized;
        this.frameResizer = new FrameResizer_1.FrameResizer(parent, host);
    }
    start() {
        this.resizeParentInBackground()
            .catch(err => log.error("Could not resize in background: ", err));
    }
    resizeParentInBackground() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.resizes > MAX_RESIZES) {
                log.info("Hit MAX_RESIZES: " + MAX_RESIZES);
                const height = yield this.doBackgroundResize(true);
                this.onResized(height);
                return;
            }
            const height = yield this.doBackgroundResize(false);
            if (height && height > MAX_HEIGHT) {
                log.info("Hit MAX_HEIGHT: " + MAX_HEIGHT);
                return;
            }
            setTimeout(() => {
                this.resizeParentInBackground()
                    .catch(err => log.error("Unable to resize in background: ", err));
            }, this.timeoutInterval);
        });
    }
    doBackgroundResize(force) {
        return __awaiter(this, void 0, void 0, function* () {
            ++this.resizes;
            return this.frameResizer.resize(force);
        });
    }
}
exports.BackgroundFrameResizer = BackgroundFrameResizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFja2dyb3VuZEZyYW1lUmVzaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhY2tncm91bmRGcmFtZVJlc2l6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsa0VBQTZEO0FBQzdELGlEQUE0QztBQUM1QywrREFBOEQ7QUFFOUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUt2QixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFXMUIsTUFBYSxzQkFBc0I7SUFjL0IsWUFBWSxNQUFtQixFQUNuQixJQUE2QyxFQUM3QyxZQUErQix5QkFBYTtRQVZ2QyxvQkFBZSxHQUFHLEdBQUcsQ0FBQztRQUUvQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBVXhCLElBQUksQ0FBQyxNQUFNLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdkQsQ0FBQztJQUVNLEtBQUs7UUFFUixJQUFJLENBQUMsd0JBQXdCLEVBQUU7YUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTFFLENBQUM7SUFFYSx3QkFBd0I7O1lBRWxDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEVBQUU7Z0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV2QixPQUFPO2FBQ1Y7WUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVwRCxJQUFJLE1BQU0sSUFBSSxNQUFNLEdBQUcsVUFBVSxFQUFFO2dCQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxDQUFDO2dCQUMxQyxPQUFPO2FBQ1Y7WUFFRCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUVaLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtxQkFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTFFLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0IsQ0FBQztLQUFBO0lBU2Esa0JBQWtCLENBQUMsS0FBYzs7WUFFM0MsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRWYsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQyxDQUFDO0tBQUE7Q0FFSjtBQTFFRCx3REEwRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RnJhbWVSZXNpemVyfSBmcm9tICcuL0ZyYW1lUmVzaXplcic7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IE1BWF9SRVNJWkVTID0gMjU7XG5cbi8qKlxuICogU2V0IGEgcmVhc29uYWJsZSBtYXggaGVpZ2h0LiAgMTAwayBpcyBhYm91dCA1MHggcGFnZXMuXG4gKi9cbmNvbnN0IE1BWF9IRUlHSFQgPSAxMDAwMDA7XG5cbi8qKlxuICogTGlzdGVucyB0byB0aGUgbWFpbiBpZnJhbWUgbG9hZCBhbmQgcmVzaXplcyBpdCBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIHRoZVxuICogc2Nyb2xsIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQuXG4gKlxuICogVGhlIGxvYWRlciBwb2xscyB0aGUgY29udGVudCBpZnJhbWUgZXZlcnkgNTBtcyBhbmQgaWYgdGhlIGhlaWdodCBjaGFuZ2VzXG4gKiBhdXRvbWF0aWNhbGx5IHN5bmNocm9uaXplcyBpdCB3aXRoIHRoZSBjb250ZW50IGRvY3VtZW50LiAgVGhlcmUncyByZWFsbHkgbm9cbiAqIHdheSB0byBnZXQgbG9hZGluZyAncHJvZ3Jlc3MnIHNvIHRoZSB0cmljayBpcyB0byBqdXN0IHBvbGwgZmFzdCBlbm91Z2ggdG8gZ2V0XG4gKiB0aGUgZG9jdW1lbnQgc2l6ZSBzbyB0aGF0IHRoZSB1c2VyIG5ldmVyIG5vdGljZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kRnJhbWVSZXNpemVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhvc3Q6IEhUTUxJRnJhbWVFbGVtZW50IHwgRWxlY3Ryb24uV2Vidmlld1RhZztcblxuICAgIC8vIGhvdyBsb25nIGJldHdlZW4gcG9sbGluZyBzaG91bGQgd2Ugd2FpdCB0byBleHBhbmQgdGhlIHNpemUuXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aW1lb3V0SW50ZXJ2YWwgPSAyNTA7XG5cbiAgICBwcml2YXRlIHJlc2l6ZXM6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGZyYW1lUmVzaXplcjogRnJhbWVSZXNpemVyO1xuXG4gICAgcHJpdmF0ZSBvblJlc2l6ZWQ6IE9uUmVzaXplZENhbGxiYWNrO1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICBob3N0OiBIVE1MSUZyYW1lRWxlbWVudCB8IEVsZWN0cm9uLldlYnZpZXdUYWcsXG4gICAgICAgICAgICAgICAgb25SZXNpemVkOiBPblJlc2l6ZWRDYWxsYmFjayA9IE5VTExfRlVOQ1RJT04pIHtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChwYXJlbnQpO1xuICAgICAgICB0aGlzLmhvc3QgPSBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoaG9zdCk7XG4gICAgICAgIHRoaXMub25SZXNpemVkID0gb25SZXNpemVkO1xuXG4gICAgICAgIHRoaXMuZnJhbWVSZXNpemVyID0gbmV3IEZyYW1lUmVzaXplcihwYXJlbnQsIGhvc3QpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMucmVzaXplUGFyZW50SW5CYWNrZ3JvdW5kKClcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IHJlc2l6ZSBpbiBiYWNrZ3JvdW5kOiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJlc2l6ZVBhcmVudEluQmFja2dyb3VuZCgpIHtcblxuICAgICAgICBpZiAodGhpcy5yZXNpemVzID4gTUFYX1JFU0laRVMpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiSGl0IE1BWF9SRVNJWkVTOiBcIiArIE1BWF9SRVNJWkVTKTtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGF3YWl0IHRoaXMuZG9CYWNrZ3JvdW5kUmVzaXplKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZWQoaGVpZ2h0KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gYXdhaXQgdGhpcy5kb0JhY2tncm91bmRSZXNpemUoZmFsc2UpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgJiYgaGVpZ2h0ID4gTUFYX0hFSUdIVCkge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJIaXQgTUFYX0hFSUdIVDogXCIgKyBNQVhfSEVJR0hUKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZVBhcmVudEluQmFja2dyb3VuZCgpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gcmVzaXplIGluIGJhY2tncm91bmQ6IFwiLCBlcnIpKTtcblxuICAgICAgICB9LCB0aGlzLnRpbWVvdXRJbnRlcnZhbCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHRoZSByZXNpemUgbm93LlxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcmNlIFRydWUgd2hlbiB0aGlzIGlzIHRoZSBmaW5hbCByZXNpemUgYmVmb3JlIHRlcm1pbmF0aW5nLiAgVGhpc1xuICAgICAqIHdheSwgaWYgd2UncmUgZG9pbmcgYW55IHNvcnQgb2YgY2FjaGluZyBvciB0aHJvdHRsaW5nIG9mIHJlc2l6ZSwgd2UgY2FuXG4gICAgICoganVzdCBmb3JjZSBpdCBvbmUgbGFzdCB0aW1lLlxuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgZG9CYWNrZ3JvdW5kUmVzaXplKGZvcmNlOiBib29sZWFuKSB7XG5cbiAgICAgICAgKyt0aGlzLnJlc2l6ZXM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhbWVSZXNpemVyLnJlc2l6ZShmb3JjZSk7XG5cbiAgICB9XG5cbn1cblxudHlwZSBPblJlc2l6ZWRDYWxsYmFjayA9IChoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbiJdfQ==