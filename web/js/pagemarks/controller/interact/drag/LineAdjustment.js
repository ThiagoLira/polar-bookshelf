"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rects_1 = require("../../../../Rects");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Objects_1 = require("polar-shared/src/util/Objects");
class LineAdjustment {
    constructor(obj) {
        this.overlapped = obj.overlapped;
        this.start = obj.start;
        this.previous = obj.previous;
        this.snapped = obj.snapped;
        this.delta = obj.delta;
        this.axis = obj.axis;
    }
    adjustRect(primaryRect) {
        const dir = {};
        dir[this.axis] = this.start;
        const absolute = true;
        return Rects_1.Rects.move(primaryRect, dir, absolute);
    }
    static create(opts) {
        Preconditions_1.Preconditions.assertNotNull(opts.start, "start");
        Preconditions_1.Preconditions.assertNotNull(opts.previous, "previous");
        Preconditions_1.Preconditions.assertNotNull(opts.snapped, "snapped");
        Preconditions_1.Preconditions.assertNotNull(opts.axis, "axis");
        opts = Objects_1.Objects.duplicate(opts);
        opts.overlapped = true;
        opts.delta = Math.abs(opts.previous - opts.start);
        return new LineAdjustment(opts);
    }
}
exports.LineAdjustment = LineAdjustment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluZUFkanVzdG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMaW5lQWRqdXN0bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZDQUF3QztBQUN4QyxrRUFBNkQ7QUFDN0QsMkRBQXNEO0FBRXRELE1BQWEsY0FBYztJQXlCdkIsWUFBWSxHQUFRO1FBRWhCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRXpCLENBQUM7SUFNTSxVQUFVLENBQUMsV0FBaUI7UUFFL0IsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUU1QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFdEIsT0FBTyxhQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFbEQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBUztRQUUxQiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkQsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLElBQUksR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEQsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQyxDQUFDO0NBRUo7QUFsRUQsd0NBa0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWN0fSBmcm9tIFwiLi4vLi4vLi4vLi4vUmVjdFwiO1xuaW1wb3J0IHtSZWN0c30gZnJvbSBcIi4uLy4uLy4uLy4uL1JlY3RzXCI7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge09iamVjdHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvT2JqZWN0c1wiO1xuXG5leHBvcnQgY2xhc3MgTGluZUFkanVzdG1lbnQge1xuXG4gICAgcHVibGljIG92ZXJsYXBwZWQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgc3RhcnQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyBwcmV2aW91czogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB3ZSBzbmFwcGVkIGJlZm9yZSBvciBhZnRlciB0aGUgaW50ZXJzZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBzbmFwcGVkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvcG9zZWQgY2hhbmdlIGZvciB0aGlzIGxpbmUuXG4gICAgICovXG4gICAgcHVibGljIGRlbHRhOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FydGVzaWFuIGF4aXMgdGhpcyBsaW5lIHJlcHJlc2VudHMuICBFaXRoZXIgXCJ4XCIgb3IgXCJ5XCIuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gYWRqdXN0IHRoZSByZWN0IHdoZW4gY29tcGxldGUuXG4gICAgICovXG4gICAgcHVibGljIGF4aXM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG9iajogYW55KSB7XG5cbiAgICAgICAgdGhpcy5vdmVybGFwcGVkID0gb2JqLm92ZXJsYXBwZWQ7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBvYmouc3RhcnQ7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSBvYmoucHJldmlvdXM7XG4gICAgICAgIHRoaXMuc25hcHBlZCA9IG9iai5zbmFwcGVkO1xuICAgICAgICB0aGlzLmRlbHRhID0gb2JqLmRlbHRhO1xuICAgICAgICB0aGlzLmF4aXMgPSBvYmouYXhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBhZGp1c3RtZW50IHRvIHRoZSBnaXZlbiByZWN0IGFuZCByZXR1cm4gdGhlIG5ldyByZWN0LlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIGFkanVzdFJlY3QocHJpbWFyeVJlY3Q6IFJlY3QpIHtcblxuICAgICAgICBjb25zdCBkaXI6IGFueSA9IHt9O1xuICAgICAgICBkaXJbdGhpcy5heGlzXSA9IHRoaXMuc3RhcnQ7XG5cbiAgICAgICAgY29uc3QgYWJzb2x1dGUgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBSZWN0cy5tb3ZlKHByaW1hcnlSZWN0LCBkaXIsIGFic29sdXRlKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKG9wdHM6IGFueSkge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChvcHRzLnN0YXJ0LCBcInN0YXJ0XCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwob3B0cy5wcmV2aW91cywgXCJwcmV2aW91c1wiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKG9wdHMuc25hcHBlZCwgXCJzbmFwcGVkXCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwob3B0cy5heGlzLCBcImF4aXNcIik7XG5cbiAgICAgICAgb3B0cyA9IE9iamVjdHMuZHVwbGljYXRlKG9wdHMpO1xuICAgICAgICBvcHRzLm92ZXJsYXBwZWQgPSB0cnVlO1xuICAgICAgICBvcHRzLmRlbHRhID0gTWF0aC5hYnMob3B0cy5wcmV2aW91cyAtIG9wdHMuc3RhcnQpO1xuXG4gICAgICAgIHJldHVybiBuZXcgTGluZUFkanVzdG1lbnQob3B0cyk7XG5cbiAgICB9XG5cbn1cbiJdfQ==