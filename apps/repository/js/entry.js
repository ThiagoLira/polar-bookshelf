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
const RepositoryApp_1 = require("../../../web/js/apps/repository/RepositoryApp");
const Logging_1 = require("../../../web/js/logger/Logging");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Logging_1.Logging.init();
        yield new RepositoryApp_1.RepositoryApp().start();
    });
}
start()
    .catch(err => log.error("Could not start repository app: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnRyeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxpRkFBNEU7QUFDNUUsNERBQXVEO0FBQ3ZELDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsU0FBZSxLQUFLOztRQUVoQixNQUFNLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckIsTUFBTSxJQUFJLDZCQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUV0QyxDQUFDO0NBQUE7QUFFRCxLQUFLLEVBQUU7S0FDRixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JlcG9zaXRvcnlBcHB9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9hcHBzL3JlcG9zaXRvcnkvUmVwb3NpdG9yeUFwcCc7XG5pbXBvcnQge0xvZ2dpbmd9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9sb2dnZXIvTG9nZ2luZyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgIGF3YWl0IExvZ2dpbmcuaW5pdCgpO1xuXG4gICAgYXdhaXQgbmV3IFJlcG9zaXRvcnlBcHAoKS5zdGFydCgpO1xuXG59XG5cbnN0YXJ0KClcbiAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBzdGFydCByZXBvc2l0b3J5IGFwcDogXCIsIGVycikpO1xuIl19