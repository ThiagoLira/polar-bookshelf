"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocalPrefs_1 = require("../../../../web/js/util/LocalPrefs");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class SplashLifecycle {
    static canShow() {
        if (!navigator.onLine) {
            log.debug("Not showing due to not being online");
            return false;
        }
        if (LocalPrefs_1.LocalPrefs.isDelayed(SplashLifecycle.KEY, SplashLifecycle.DELAY)) {
            log.debug("Splash is delayed due to " + SplashLifecycle.KEY);
            return false;
        }
        return true;
    }
    static markShown() {
        LocalPrefs_1.LocalPrefs.markDelayed(this.KEY, SplashLifecycle.DELAY);
    }
    static computeDelay() {
        return LocalPrefs_1.LocalPrefs.computeDelay(this.KEY);
    }
}
exports.SplashLifecycle = SplashLifecycle;
SplashLifecycle.KEY = 'splash-shown';
SplashLifecycle.DELAY = '1d';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsYXNoTGlmZWN5Y2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BsYXNoTGlmZWN5Y2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQThEO0FBQzlELDJEQUFzRDtBQUd0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxlQUFlO0lBS2pCLE1BQU0sQ0FBQyxPQUFPO1FBRWpCLElBQUksQ0FBRSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBRXBCLEdBQUcsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUdqRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksdUJBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEUsR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0QsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVM7UUFDbkIsdUJBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZO1FBQ3RCLE9BQU8sdUJBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O0FBOUJMLDBDQWdDQztBQTlCa0IsbUJBQUcsR0FBRyxjQUFjLENBQUM7QUFDckIscUJBQUssR0FBRyxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvY2FsUHJlZnN9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91dGlsL0xvY2FsUHJlZnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0R1cmF0aW9uTVN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9UaW1lRHVyYXRpb25zJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgU3BsYXNoTGlmZWN5Y2xlIHtcblxuICAgIHByaXZhdGUgc3RhdGljIEtFWSA9ICdzcGxhc2gtc2hvd24nO1xuICAgIHByaXZhdGUgc3RhdGljIERFTEFZID0gJzFkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgY2FuU2hvdygpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAoISBuYXZpZ2F0b3Iub25MaW5lKSB7XG5cbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIk5vdCBzaG93aW5nIGR1ZSB0byBub3QgYmVpbmcgb25saW5lXCIpO1xuICAgICAgICAgICAgLy8gYWxtb3N0IGFsbCB0aGUgc3BsYXNoZXMgKHBvc3NpYmx5IGFsbCBvZiB0aGVtKSByZXF1aXJlIHRoZSB1c2VyXG4gICAgICAgICAgICAvLyB0byBiZSBvbmxpbmVcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChMb2NhbFByZWZzLmlzRGVsYXllZChTcGxhc2hMaWZlY3ljbGUuS0VZLCBTcGxhc2hMaWZlY3ljbGUuREVMQVkpKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTcGxhc2ggaXMgZGVsYXllZCBkdWUgdG8gXCIgKyBTcGxhc2hMaWZlY3ljbGUuS0VZKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXJrU2hvd24oKSB7XG4gICAgICAgIExvY2FsUHJlZnMubWFya0RlbGF5ZWQodGhpcy5LRVksIFNwbGFzaExpZmVjeWNsZS5ERUxBWSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlRGVsYXkoKTogRHVyYXRpb25NUyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiBMb2NhbFByZWZzLmNvbXB1dGVEZWxheSh0aGlzLktFWSk7XG4gICAgfVxuXG59XG4iXX0=