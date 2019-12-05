"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Messenger_1 = require("../electron/messenger/Messenger");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class AnnotationSidebarClient {
    static toggleAnnotationSidebar() {
        Messenger_1.Messenger.postMessage({
            message: {
                type: 'toggle-annotation-sidebar',
            }
        }).catch(err => log.error("Could not post message", err));
    }
}
exports.AnnotationSidebarClient = AnnotationSidebarClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblNpZGViYXJDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uU2lkZWJhckNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsdUJBQXVCO0lBRXpCLE1BQU0sQ0FBQyx1QkFBdUI7UUFFakMscUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDbEIsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSwyQkFBMkI7YUFDcEM7U0FDSixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTlELENBQUM7Q0FFSjtBQVpELDBEQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXNzZW5nZXJ9IGZyb20gJy4uL2VsZWN0cm9uL21lc3Nlbmdlci9NZXNzZW5nZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25TaWRlYmFyQ2xpZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgdG9nZ2xlQW5ub3RhdGlvblNpZGViYXIoKSB7XG5cbiAgICAgICAgTWVzc2VuZ2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndG9nZ2xlLWFubm90YXRpb24tc2lkZWJhcicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgcG9zdCBtZXNzYWdlXCIsIGVycikpO1xuXG4gICAgfVxuXG59XG4iXX0=