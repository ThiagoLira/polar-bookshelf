"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SerializedObject_1 = require("./SerializedObject");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class Image extends SerializedObject_1.SerializedObject {
    constructor(opts) {
        super(opts);
        this.id = opts.id;
        this.type = opts.type;
        this.src = opts.src;
        this.width = opts.width;
        this.height = opts.height;
        this.rel = opts.rel;
        this.init(opts);
    }
    validate() {
        super.validate();
        Preconditions_1.Preconditions.assertPresent(this.type, "type");
        Preconditions_1.Preconditions.assertPresent(this.src, "src");
    }
}
exports.Image = Image;
var ImageTypes;
(function (ImageTypes) {
    ImageTypes["GIF"] = "image/gif";
    ImageTypes["PNG"] = "image/png";
    ImageTypes["JPEG"] = "image/jpeg";
    ImageTypes["WEBP"] = "image/webp";
    ImageTypes["SVG"] = "image/svg+xml";
})(ImageTypes = exports.ImageTypes || (exports.ImageTypes = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUFvRDtBQUNwRCxrRUFBNkQ7QUFJN0QsTUFBYSxLQUFNLFNBQVEsbUNBQWdCO0lBY3ZDLFlBQVksSUFBWTtRQUVwQixLQUFLLENBQU8sSUFBSSxDQUFDLENBQUM7UUFFbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixDQUFDO0lBR00sUUFBUTtRQUVYLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFakQsQ0FBQztDQUVKO0FBdkNELHNCQXVDQztBQVNELElBQVksVUFNWDtBQU5ELFdBQVksVUFBVTtJQUNsQiwrQkFBaUIsQ0FBQTtJQUNqQiwrQkFBaUIsQ0FBQTtJQUNqQixpQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBbUIsQ0FBQTtJQUNuQixtQ0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBTlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFNckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlcmlhbGl6ZWRPYmplY3R9IGZyb20gJy4vU2VyaWFsaXplZE9iamVjdCc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0lJbWFnZSwgSW1hZ2VUeXBlfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JSW1hZ2VcIjtcbmltcG9ydCB7QmFja2VuZEZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kRmlsZVJlZlwiO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBTZXJpYWxpemVkT2JqZWN0IGltcGxlbWVudHMgSUltYWdlIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6IEltYWdlVHlwZTtcblxuICAgIHB1YmxpYyByZWFkb25seSBzcmM6IEJhY2tlbmRGaWxlUmVmO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHdpZHRoPzogbnVtYmVyO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGhlaWdodD86IG51bWJlcjtcblxuICAgIHB1YmxpYyByZWFkb25seSByZWw/OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzOiBJSW1hZ2UpIHtcblxuICAgICAgICBzdXBlcig8YW55PiBvcHRzKTtcblxuICAgICAgICB0aGlzLmlkID0gb3B0cy5pZDtcbiAgICAgICAgdGhpcy50eXBlID0gb3B0cy50eXBlO1xuICAgICAgICB0aGlzLnNyYyA9IG9wdHMuc3JjO1xuICAgICAgICB0aGlzLndpZHRoID0gb3B0cy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yZWwgPSBvcHRzLnJlbDtcblxuICAgICAgICB0aGlzLmluaXQob3B0cyk7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyB2YWxpZGF0ZSgpOiB2b2lkIHtcblxuICAgICAgICBzdXBlci52YWxpZGF0ZSgpO1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudCh0aGlzLnR5cGUsIFwidHlwZVwiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHRoaXMuc3JjLCBcInNyY1wiKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlT3B0cyB7XG4gICAgcmVhZG9ubHkgd2lkdGg/OiBudW1iZXI7XG4gICAgcmVhZG9ubHkgaGVpZ2h0PzogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHJlbD86IHN0cmluZztcbiAgICByZWFkb25seSB0eXBlPzogSW1hZ2VUeXBlO1xufVxuXG5leHBvcnQgZW51bSBJbWFnZVR5cGVzIHtcbiAgICBHSUYgPSAnaW1hZ2UvZ2lmJyxcbiAgICBQTkcgPSAnaW1hZ2UvcG5nJyxcbiAgICBKUEVHID0gJ2ltYWdlL2pwZWcnLFxuICAgIFdFQlAgPSAnaW1hZ2Uvd2VicCcsXG4gICAgU1ZHID0gJ2ltYWdlL3N2Zyt4bWwnXG59XG5cbiJdfQ==