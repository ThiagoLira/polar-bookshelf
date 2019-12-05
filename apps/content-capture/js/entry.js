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
const ContentCaptureApp_1 = require("../../../web/js/capture/renderer/ContentCaptureApp");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Logging_1 = require("../../../web/js/logger/Logging");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        let contentCaptureApp = new ContentCaptureApp_1.ContentCaptureApp();
        yield contentCaptureApp.start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDBGQUFxRjtBQUNyRiwyREFBc0Q7QUFDdEQsNERBQXVEO0FBRXZELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixTQUFlLEtBQUs7O1FBRWhCLE1BQU0saUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyQixJQUFJLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztRQUNoRCxNQUFNLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXBDLENBQUM7Q0FBQTtBQUVELEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGVudENhcHR1cmVBcHB9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9jYXB0dXJlL3JlbmRlcmVyL0NvbnRlbnRDYXB0dXJlQXBwJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtMb2dnaW5nfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dpbmcnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gICAgYXdhaXQgTG9nZ2luZy5pbml0KCk7XG5cbiAgICBsZXQgY29udGVudENhcHR1cmVBcHAgPSBuZXcgQ29udGVudENhcHR1cmVBcHAoKTtcbiAgICBhd2FpdCBjb250ZW50Q2FwdHVyZUFwcC5zdGFydCgpO1xuXG59XG5cbnN0YXJ0KCkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBzdGFydCBhcHA6IFwiLCBlcnIpKTtcbiJdfQ==