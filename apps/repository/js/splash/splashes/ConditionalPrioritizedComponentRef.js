"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionalSetting_1 = require("../../../../../web/js/ui/util/ConditionalSetting");
const DatastoreOverviewPolicies_1 = require("./DatastoreOverviewPolicies");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class ConditionalPrioritizedComponentRef {
    constructor(settingKey, defaultPriority, userLevel) {
        this.settingKey = settingKey;
        this.defaultPriority = defaultPriority;
        this.userLevel = userLevel;
    }
    priority(datastoreOverview) {
        const conditionalSetting = new ConditionalSetting_1.ConditionalSetting(this.settingKey);
        if (this.userLevel && !DatastoreOverviewPolicies_1.DatastoreOverviewPolicies.isLevel(this.userLevel, datastoreOverview)) {
            log.info("User is not at user level: " + this.userLevel);
            return undefined;
        }
        if (conditionalSetting.get().getOrElse('') === 'do-not-show-again') {
            return undefined;
        }
        if (conditionalSetting.get().getOrElse('') !== '') {
            const val = conditionalSetting.get().getOrElse('');
            if (val.match(/[0-9]+/)) {
                if (Date.now() > parseInt(val)) {
                    return this.defaultPriority;
                }
                else {
                    return undefined;
                }
            }
        }
        return this.defaultPriority;
    }
}
exports.ConditionalPrioritizedComponentRef = ConditionalPrioritizedComponentRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbmRpdGlvbmFsUHJpb3JpdGl6ZWRDb21wb25lbnRSZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RkFBb0Y7QUFHcEYsMkVBQWlGO0FBQ2pGLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBc0Isa0NBQWtDO0lBVXBELFlBQXNCLFVBQWtCLEVBQUUsZUFBdUIsRUFBRSxTQUFxQjtRQUNwRixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU0sUUFBUSxDQUFDLGlCQUFvQztRQUVoRCxNQUFNLGtCQUFrQixHQUFHLElBQUksdUNBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRW5FLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFFLHFEQUF5QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLEVBQUU7WUFDMUYsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekQsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxtQkFBbUIsRUFBRTtZQUNoRSxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUkvQyxNQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkQsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUVyQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0gsT0FBTyxTQUFTLENBQUM7aUJBQ3BCO2FBRUo7U0FFSjtRQUVELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUVoQyxDQUFDO0NBSUo7QUFyREQsZ0ZBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25kaXRpb25hbFNldHRpbmd9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS91dGlsL0NvbmRpdGlvbmFsU2V0dGluZyc7XG5pbXBvcnQge1ByaW9yaXRpemVkQ29tcG9uZW50UmVmfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvcHJpb3JpdGl6ZWQvUHJpb3JpdGl6ZWRDb21wb25lbnRNYW5hZ2VyJztcbmltcG9ydCB7RGF0YXN0b3JlT3ZlcnZpZXd9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlT3ZlcnZpZXdQb2xpY2llcywgVXNlckxldmVsfSBmcm9tICcuL0RhdGFzdG9yZU92ZXJ2aWV3UG9saWNpZXMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbmRpdGlvbmFsUHJpb3JpdGl6ZWRDb21wb25lbnRSZWYgaW1wbGVtZW50cyBQcmlvcml0aXplZENvbXBvbmVudFJlZiB7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgaWQ6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBzZXR0aW5nS2V5OiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGVmYXVsdFByaW9yaXR5OiBudW1iZXI7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdXNlckxldmVsOiBVc2VyTGV2ZWwgfCB1bmRlZmluZWQ7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioc2V0dGluZ0tleTogc3RyaW5nLCBkZWZhdWx0UHJpb3JpdHk6IG51bWJlciwgdXNlckxldmVsPzogVXNlckxldmVsKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ0tleSA9IHNldHRpbmdLZXk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByaW9yaXR5ID0gZGVmYXVsdFByaW9yaXR5O1xuICAgICAgICB0aGlzLnVzZXJMZXZlbCA9IHVzZXJMZXZlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJpb3JpdHkoZGF0YXN0b3JlT3ZlcnZpZXc6IERhdGFzdG9yZU92ZXJ2aWV3KTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCBjb25kaXRpb25hbFNldHRpbmcgPSBuZXcgQ29uZGl0aW9uYWxTZXR0aW5nKHRoaXMuc2V0dGluZ0tleSk7XG5cbiAgICAgICAgaWYgKHRoaXMudXNlckxldmVsICYmICEgRGF0YXN0b3JlT3ZlcnZpZXdQb2xpY2llcy5pc0xldmVsKHRoaXMudXNlckxldmVsLCBkYXRhc3RvcmVPdmVydmlldykpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiVXNlciBpcyBub3QgYXQgdXNlciBsZXZlbDogXCIgKyB0aGlzLnVzZXJMZXZlbCk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbmFsU2V0dGluZy5nZXQoKS5nZXRPckVsc2UoJycpID09PSAnZG8tbm90LXNob3ctYWdhaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbmFsU2V0dGluZy5nZXQoKS5nZXRPckVsc2UoJycpICE9PSAnJykge1xuXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQncyBhbiBpbnRlZ2VyXG5cbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNvbmRpdGlvbmFsU2V0dGluZy5nZXQoKS5nZXRPckVsc2UoJycpO1xuXG4gICAgICAgICAgICBpZiAodmFsLm1hdGNoKC9bMC05XSsvKSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgPiBwYXJzZUludCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmlvcml0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJpb3JpdHk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlKCk6IEpTWC5FbGVtZW50O1xuXG59XG5cblxuXG4iXX0=