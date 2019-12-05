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
const ContentCaptureController_1 = require("./ContentCaptureController");
class ContentCaptureApp {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Starting content capture app...");
            const contentCaptureController = new ContentCaptureController_1.ContentCaptureController();
            contentCaptureController.start();
        });
    }
}
exports.ContentCaptureApp = ContentCaptureApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudENhcHR1cmVBcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250ZW50Q2FwdHVyZUFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlFQUFvRTtBQUVwRSxNQUFhLGlCQUFpQjtJQUViLEtBQUs7O1lBRWQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBRS9DLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSxtREFBd0IsRUFBRSxDQUFDO1lBQ2hFLHdCQUF3QixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJDLENBQUM7S0FBQTtDQUVKO0FBWEQsOENBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRlbnRDYXB0dXJlQ29udHJvbGxlcn0gZnJvbSBcIi4vQ29udGVudENhcHR1cmVDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDb250ZW50Q2FwdHVyZUFwcCB7XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBjb250ZW50IGNhcHR1cmUgYXBwLi4uXCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDYXB0dXJlQ29udHJvbGxlciA9IG5ldyBDb250ZW50Q2FwdHVyZUNvbnRyb2xsZXIoKTtcbiAgICAgICAgY29udGVudENhcHR1cmVDb250cm9sbGVyLnN0YXJ0KCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==