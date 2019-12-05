"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const ToasterMessages_1 = require("./ToasterMessages");
const Toaster_1 = require("./Toaster");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class ToasterService {
    start() {
        if (electron_1.ipcRenderer) {
            electron_1.ipcRenderer.on(ToasterMessages_1.ToasterMessages.CHANNEL, (event, toasterMessage) => {
                switch (toasterMessage.type) {
                    case Toaster_1.ToasterMessageType.SUCCESS:
                        Toaster_1.Toaster.success(toasterMessage.message, toasterMessage.title, toasterMessage.options);
                        break;
                    case Toaster_1.ToasterMessageType.INFO:
                        Toaster_1.Toaster.info(toasterMessage.message, toasterMessage.title, toasterMessage.options);
                        break;
                    case Toaster_1.ToasterMessageType.WARNING:
                        Toaster_1.Toaster.warning(toasterMessage.message, toasterMessage.title, toasterMessage.options);
                        break;
                    case Toaster_1.ToasterMessageType.ERROR:
                        Toaster_1.Toaster.error(toasterMessage.message, toasterMessage.title, toasterMessage.options);
                        break;
                }
            });
        }
        log.info("started");
    }
}
exports.ToasterService = ToasterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUb2FzdGVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFxQztBQUVyQyx1REFBa0Q7QUFDbEQsdUNBQXNEO0FBQ3RELDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBYSxjQUFjO0lBRWhCLEtBQUs7UUFFUixJQUFJLHNCQUFXLEVBQUU7WUFFYixzQkFBVyxDQUFDLEVBQUUsQ0FBQyxpQ0FBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQTRCLEVBQzVCLGNBQThCLEVBQUUsRUFBRTtnQkFFdkUsUUFBUSxjQUFjLENBQUMsSUFBSSxFQUFFO29CQUN6QixLQUFLLDRCQUFrQixDQUFDLE9BQU87d0JBQzNCLGlCQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3RGLE1BQU07b0JBQ1YsS0FBSyw0QkFBa0IsQ0FBQyxJQUFJO3dCQUN4QixpQkFBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuRixNQUFNO29CQUNWLEtBQUssNEJBQWtCLENBQUMsT0FBTzt3QkFDM0IsaUJBQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdEYsTUFBTTtvQkFDVixLQUFLLDRCQUFrQixDQUFDLEtBQUs7d0JBQ3pCLGlCQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3BGLE1BQU07aUJBQ2I7WUFFTCxDQUFDLENBQUMsQ0FBQztTQUVOO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV4QixDQUFDO0NBRUo7QUFoQ0Qsd0NBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNSZW5kZXJlcn0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge1RvYXN0ZXJNZXNzYWdlfSBmcm9tICcuL1RvYXN0ZXJNZXNzYWdlJztcbmltcG9ydCB7VG9hc3Rlck1lc3NhZ2VzfSBmcm9tICcuL1RvYXN0ZXJNZXNzYWdlcyc7XG5pbXBvcnQge1RvYXN0ZXJNZXNzYWdlVHlwZSwgVG9hc3Rlcn0gZnJvbSAnLi9Ub2FzdGVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cblxuLyoqXG4gKiBTaW1wbGUgYXBwIHRoYXQgY2FuIGRpc3BsYXkgdG9hc3RlciBub3RpZmljYXRpb25zIHNlbnQgdmlhIGJyb2FkY2FzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFRvYXN0ZXJTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAoaXBjUmVuZGVyZXIpIHtcblxuICAgICAgICAgICAgaXBjUmVuZGVyZXIub24oVG9hc3Rlck1lc3NhZ2VzLkNIQU5ORUwsIChldmVudDogRWxlY3Ryb24uRXZlbnRFbWl0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyTWVzc2FnZTogVG9hc3Rlck1lc3NhZ2UpID0+IHtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9hc3Rlck1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFRvYXN0ZXJNZXNzYWdlVHlwZS5TVUNDRVNTOlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3Rlci5zdWNjZXNzKHRvYXN0ZXJNZXNzYWdlLm1lc3NhZ2UsIHRvYXN0ZXJNZXNzYWdlLnRpdGxlLCB0b2FzdGVyTWVzc2FnZS5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFRvYXN0ZXJNZXNzYWdlVHlwZS5JTkZPOlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3Rlci5pbmZvKHRvYXN0ZXJNZXNzYWdlLm1lc3NhZ2UsIHRvYXN0ZXJNZXNzYWdlLnRpdGxlLCB0b2FzdGVyTWVzc2FnZS5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFRvYXN0ZXJNZXNzYWdlVHlwZS5XQVJOSU5HOlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3Rlci53YXJuaW5nKHRvYXN0ZXJNZXNzYWdlLm1lc3NhZ2UsIHRvYXN0ZXJNZXNzYWdlLnRpdGxlLCB0b2FzdGVyTWVzc2FnZS5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFRvYXN0ZXJNZXNzYWdlVHlwZS5FUlJPUjpcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IodG9hc3Rlck1lc3NhZ2UubWVzc2FnZSwgdG9hc3Rlck1lc3NhZ2UudGl0bGUsIHRvYXN0ZXJNZXNzYWdlLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbG9nLmluZm8oXCJzdGFydGVkXCIpO1xuXG4gICAgfVxuXG59XG4iXX0=