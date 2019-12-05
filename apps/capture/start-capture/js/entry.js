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
const StartCaptureApp_1 = require("../../../../web/js/capture/controller/StartCaptureApp");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Logging_1 = require("../../../../web/js/logger/Logging");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        new StartCaptureApp_1.StartCaptureApp().start();
    });
}
start().catch(err => log.error("Could not start app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJGQUFzRjtBQUN0RiwyREFBc0Q7QUFDdEQsK0RBQTBEO0FBRTFELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixTQUFlLEtBQUs7O1FBRWhCLE1BQU0saUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyQixJQUFJLGlDQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVsQyxDQUFDO0NBQUE7QUFFRCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0YXJ0Q2FwdHVyZUFwcH0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9jYXB0dXJlL2NvbnRyb2xsZXIvU3RhcnRDYXB0dXJlQXBwXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9Mb2dnaW5nJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgIGF3YWl0IExvZ2dpbmcuaW5pdCgpO1xuXG4gICAgbmV3IFN0YXJ0Q2FwdHVyZUFwcCgpLnN0YXJ0KCk7XG5cbn1cblxuc3RhcnQoKS5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IHN0YXJ0IGFwcDogXCIsIGVycikpO1xuIl19