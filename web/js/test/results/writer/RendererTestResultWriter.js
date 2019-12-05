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
const TestResult_1 = require("../renderer/TestResult");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const log = Logger_1.Logger.create();
class RendererTestResultWriter {
    write(result) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Got result from renderer: " + result);
            if (!Preconditions_1.isPresent(result)) {
                throw new Error("No result given!");
            }
            TestResult_1.TestResult.set(result);
        });
    }
}
exports.RendererTestResultWriter = RendererTestResultWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyZXJUZXN0UmVzdWx0V3JpdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVuZGVyZXJUZXN0UmVzdWx0V3JpdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsdURBQWtEO0FBQ2xELDJEQUFzRDtBQUN0RCxrRUFBeUQ7QUFFekQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsd0JBQXdCO0lBRXBCLEtBQUssQ0FBQyxNQUFXOztZQUUxQixHQUFHLENBQUMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBRWhELElBQUksQ0FBQyx5QkFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDdkM7WUFFRCx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixDQUFDO0tBQUE7Q0FFSjtBQWRELDREQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXN0UmVzdWx0V3JpdGVyfSBmcm9tICcuLi9UZXN0UmVzdWx0V3JpdGVyJztcbmltcG9ydCB7VGVzdFJlc3VsdH0gZnJvbSAnLi4vcmVuZGVyZXIvVGVzdFJlc3VsdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogV3JpdGUgZGF0YSBmcm9tIHRoZSBtYWluIEVsZWN0cm9uIHByb2Nlc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW5kZXJlclRlc3RSZXN1bHRXcml0ZXIgaW1wbGVtZW50cyBUZXN0UmVzdWx0V3JpdGVyIHtcblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShyZXN1bHQ6IGFueSkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiR290IHJlc3VsdCBmcm9tIHJlbmRlcmVyOiBcIiArIHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKCFpc1ByZXNlbnQocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzdWx0IGdpdmVuIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFRlc3RSZXN1bHQuc2V0KHJlc3VsdCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==