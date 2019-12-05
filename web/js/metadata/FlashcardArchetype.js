"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Objects_1 = require("polar-shared/src/util/Objects");
class FlashcardArchetype {
    constructor(opts) {
        opts = Objects_1.Objects.defaults(opts, {
            description: "",
        });
        this.id = Preconditions_1.Preconditions.assertNotNull(opts.id, "id");
        this.name = Preconditions_1.Preconditions.assertNotNull(opts.name, "name");
        this.description = opts.description;
        this.fields = opts.fields;
    }
}
exports.FlashcardArchetype = FlashcardArchetype;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkQXJjaGV0eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmxhc2hjYXJkQXJjaGV0eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQTZEO0FBQzdELDJEQUFzRDtBQVF0RCxNQUFhLGtCQUFrQjtJQW1CM0IsWUFBWSxJQUFTO1FBRWpCLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDMUIsV0FBVyxFQUFFLEVBQUU7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEVBQUUsR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxJQUFJLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTlCLENBQUM7Q0FFSjtBQW5DRCxnREFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge09iamVjdHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvT2JqZWN0c1wiO1xuXG4vKipcbiAqIEEgZGVmaW5lZCBhcmNoZXR5cGUgZm9yIGNyZWF0aW5nIGEgZmxhc2hjYXJkLiAgVGhlc2UgcHJvdmlkZSBhIGNvbGxlY3Rpb24gb2ZcbiAqIGRlZmluZWQgZmllbGRzIHRoYXQgY2FuIGdldCBtYXBwZWQgdG8geW91ciBjYXJkIHN5c3RlbS5cbiAqXG4gKiBAdHlwZSB7Rmxhc2hjYXJkQXJjaGV0eXBlfVxuICovXG5leHBvcnQgY2xhc3MgRmxhc2hjYXJkQXJjaGV0eXBlIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1bmlxdWUgSUQgb2YgdGhpcyBhcmNoZXR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGFyY2hldHlwZSBmb3IgZGlzcGxheWluZyB0byBhIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoaXMgYXJjaGV0eXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGZpZWxkczoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzOiBhbnkpIHtcblxuICAgICAgICBvcHRzID0gT2JqZWN0cy5kZWZhdWx0cyhvcHRzLCB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pZCA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChvcHRzLmlkLCBcImlkXCIpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChvcHRzLm5hbWUsIFwibmFtZVwiKTtcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gb3B0cy5kZXNjcmlwdGlvbjtcblxuICAgICAgICB0aGlzLmZpZWxkcyA9IG9wdHMuZmllbGRzO1xuXG4gICAgfVxuXG59XG4iXX0=