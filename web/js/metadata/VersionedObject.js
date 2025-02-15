"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SerializedObject_1 = require("./SerializedObject");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class VersionedObject extends SerializedObject_1.SerializedObject {
    constructor(template) {
        super(template);
        this.id = template.id;
        this.guid = template.guid;
        this.created = template.created;
        this.lastUpdated = template.lastUpdated;
        this.author = template.author;
        this.init(template);
    }
    setup() {
        super.setup();
        if (!this.lastUpdated && this.created) {
            this.lastUpdated = this.created;
        }
    }
    validate() {
        super.validate();
        this.created = Preconditions_1.Preconditions.assertPresent(this.created);
        this.lastUpdated = Preconditions_1.Preconditions.assertPresent(this.lastUpdated);
        Preconditions_1.Preconditions.assertNotNull(this.id, "id");
        Preconditions_1.Preconditions.assertNotNull(this.created, "created");
    }
}
exports.VersionedObject = VersionedObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyc2lvbmVkT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmVyc2lvbmVkT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EseURBQW9EO0FBQ3BELGtFQUE2RDtBQUs3RCxNQUFzQixlQUFnQixTQUFRLG1DQUFnQjtJQWMxRCxZQUFzQixRQUF5QjtRQUUzQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFFTSxLQUFLO1FBRVIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDbkM7SUFFTCxDQUFDO0lBRU0sUUFBUTtRQUVYLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsT0FBTyxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVqRSw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFekQsQ0FBQztDQUVKO0FBbERELDBDQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0aG9yfSBmcm9tICcuL0F1dGhvcic7XG5pbXBvcnQge1NlcmlhbGl6ZWRPYmplY3R9IGZyb20gJy4vU2VyaWFsaXplZE9iamVjdCc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge1JlZn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9SZWZzJztcbmltcG9ydCB7SVZlcnNpb25lZE9iamVjdH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVZlcnNpb25lZE9iamVjdFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmVyc2lvbmVkT2JqZWN0IGV4dGVuZHMgU2VyaWFsaXplZE9iamVjdCBpbXBsZW1lbnRzIElWZXJzaW9uZWRPYmplY3Qge1xuXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ3VpZDogc3RyaW5nO1xuXG4gICAgcHVibGljIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5nO1xuXG4gICAgcHVibGljIGxhc3RVcGRhdGVkOiBJU09EYXRlVGltZVN0cmluZztcblxuICAgIHB1YmxpYyBhdXRob3I/OiBBdXRob3I7XG5cbiAgICBwdWJsaWMgcmVmPzogUmVmO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHRlbXBsYXRlOiBWZXJzaW9uZWRPYmplY3QpIHtcblxuICAgICAgICBzdXBlcih0ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5pZCA9IHRlbXBsYXRlLmlkO1xuICAgICAgICB0aGlzLmd1aWQgPSB0ZW1wbGF0ZS5ndWlkO1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSB0ZW1wbGF0ZS5jcmVhdGVkO1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGVkID0gdGVtcGxhdGUubGFzdFVwZGF0ZWQ7XG4gICAgICAgIHRoaXMuYXV0aG9yID0gdGVtcGxhdGUuYXV0aG9yO1xuXG4gICAgICAgIHRoaXMuaW5pdCh0ZW1wbGF0ZSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0dXAoKSB7XG5cbiAgICAgICAgc3VwZXIuc2V0dXAoKTtcblxuICAgICAgICBpZiAoIXRoaXMubGFzdFVwZGF0ZWQgJiYgdGhpcy5jcmVhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGVkID0gdGhpcy5jcmVhdGVkO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoKSB7XG5cbiAgICAgICAgc3VwZXIudmFsaWRhdGUoKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQodGhpcy5jcmVhdGVkKTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlZCA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudCh0aGlzLmxhc3RVcGRhdGVkKTtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwodGhpcy5pZCwgXCJpZFwiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHRoaXMuY3JlYXRlZCwgXCJjcmVhdGVkXCIpO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==