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
const Messenger_1 = require("../electron/messenger/Messenger");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class ContextMenuMessages {
    static postContextMenuMessage(name, triggerEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("postContextMenuMessage: " + name);
            yield Messenger_1.Messenger.postMessage({
                message: {
                    type: name,
                    point: triggerEvent.point,
                    points: triggerEvent.points,
                    pageNum: triggerEvent.pageNum,
                    matchingSelectors: triggerEvent.matchingSelectors,
                    docDescriptor: triggerEvent.docDescriptor
                }
            });
        });
    }
}
exports.ContextMenuMessages = ContextMenuMessages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGV4dE1lbnVNZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRleHRNZW51TWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBRXRELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLG1CQUFtQjtJQUVyQixNQUFNLENBQU8sc0JBQXNCLENBQUMsSUFBWSxFQUFFLFlBQTBCOztZQUUvRSxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxDQUFDO1lBUTVDLE1BQU0scUJBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRTtvQkFDTCxJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUs7b0JBQ3pCLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTTtvQkFDM0IsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO29CQUM3QixpQkFBaUIsRUFBRSxZQUFZLENBQUMsaUJBQWlCO29CQUNqRCxhQUFhLEVBQUUsWUFBWSxDQUFDLGFBQWE7aUJBQzVDO2FBQ0osQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0NBRUo7QUF6QkQsa0RBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUcmlnZ2VyRXZlbnR9IGZyb20gJy4vVHJpZ2dlckV2ZW50JztcbmltcG9ydCB7TWVzc2VuZ2VyfSBmcm9tICcuLi9lbGVjdHJvbi9tZXNzZW5nZXIvTWVzc2VuZ2VyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudU1lc3NhZ2VzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcG9zdENvbnRleHRNZW51TWVzc2FnZShuYW1lOiBzdHJpbmcsIHRyaWdnZXJFdmVudDogVHJpZ2dlckV2ZW50KSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJwb3N0Q29udGV4dE1lbnVNZXNzYWdlOiBcIiArIG5hbWUpO1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIHVzZSBpdHMgb3duIHR5cGUgb2YgQ29udGV4dE1lbnVNZXNzYWdlIHdpdGggdGhlXG4gICAgICAgIC8vIENvbnRleHRNZW51TG9jYXRpb24gYW5kIGEgdHlwZSBmaWVsZC5cblxuICAgICAgICAvLyBUT0RPOiBqdXN0IHNlbmQgdGhlIGZ1bGwgVHJpZ2dlckV2ZW50IGJ1dCByZW5hbWUgaXQgdG9cbiAgICAgICAgLy8gQ29udGV4dE1lbnVTZWxlY3RlZEV2ZW50IG9yIHNvbWV0aGluZyBhbG9uZyB0aG9zZSBsaW5lcy5cblxuICAgICAgICBhd2FpdCBNZXNzZW5nZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgICAgICAgICAgcG9pbnQ6IHRyaWdnZXJFdmVudC5wb2ludCxcbiAgICAgICAgICAgICAgICBwb2ludHM6IHRyaWdnZXJFdmVudC5wb2ludHMsXG4gICAgICAgICAgICAgICAgcGFnZU51bTogdHJpZ2dlckV2ZW50LnBhZ2VOdW0sXG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdTZWxlY3RvcnM6IHRyaWdnZXJFdmVudC5tYXRjaGluZ1NlbGVjdG9ycyxcbiAgICAgICAgICAgICAgICBkb2NEZXNjcmlwdG9yOiB0cmlnZ2VyRXZlbnQuZG9jRGVzY3JpcHRvclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19