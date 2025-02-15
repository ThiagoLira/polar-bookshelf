"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Image_1 = require("./Image");
class Screenshot extends Image_1.Image {
    constructor(opts) {
        super(opts);
        this.id = opts.id;
        this.created = opts.created;
        this.init(opts);
    }
    validate() {
        super.validate();
        Preconditions_1.Preconditions.assertPresent(this.id, "id");
        Preconditions_1.Preconditions.assertPresent(this.created, "created");
    }
}
exports.Screenshot = Screenshot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuc2hvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNjcmVlbnNob3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBNkQ7QUFDN0QsbUNBQThCO0FBSTlCLE1BQWEsVUFBVyxTQUFRLGFBQUs7SUFNakMsWUFBWSxJQUFTO1FBRWpCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixDQUFDO0lBRU0sUUFBUTtRQUVYLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFekQsQ0FBQztDQUVKO0FBMUJELGdDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7SW1hZ2V9IGZyb20gJy4vSW1hZ2UnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtJU2NyZWVuc2hvdH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNjcmVlbnNob3RcIjtcblxuZXhwb3J0IGNsYXNzIFNjcmVlbnNob3QgZXh0ZW5kcyBJbWFnZSBpbXBsZW1lbnRzIElTY3JlZW5zaG90IHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gICAgcHVibGljIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Iob3B0czogYW55KSB7XG5cbiAgICAgICAgc3VwZXIob3B0cyk7XG5cbiAgICAgICAgdGhpcy5pZCA9IG9wdHMuaWQ7XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IG9wdHMuY3JlYXRlZDtcblxuICAgICAgICB0aGlzLmluaXQob3B0cyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoKSB7XG5cbiAgICAgICAgc3VwZXIudmFsaWRhdGUoKTtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQodGhpcy5pZCwgXCJpZFwiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHRoaXMuY3JlYXRlZCwgXCJjcmVhdGVkXCIpO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==