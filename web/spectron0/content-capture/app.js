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
const ContentCaptureApp_1 = require("../../js/capture/renderer/ContentCaptureApp");
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(void 0, void 0, void 0, function* () {
    let contentCaptureApp = new ContentCaptureApp_1.ContentCaptureApp();
    yield contentCaptureApp.start();
    console.log("App loaded now!!");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUZBQThFO0FBQzlFLHFFQUFnRTtBQUVoRSxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO0lBRTVCLElBQUksaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0lBRWhELE1BQU0saUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRXBDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRlbnRDYXB0dXJlQXBwfSBmcm9tICcuLi8uLi9qcy9jYXB0dXJlL3JlbmRlcmVyL0NvbnRlbnRDYXB0dXJlQXBwJztcbmltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgbGV0IGNvbnRlbnRDYXB0dXJlQXBwID0gbmV3IENvbnRlbnRDYXB0dXJlQXBwKCk7XG5cbiAgICBhd2FpdCBjb250ZW50Q2FwdHVyZUFwcC5zdGFydCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJBcHAgbG9hZGVkIG5vdyEhXCIpO1xuXG59KTtcbiJdfQ==