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
const electron_1 = require("electron");
const TestResultService_1 = require("./results/TestResultService");
const RendererTestResultWriter_1 = require("./results/writer/RendererTestResultWriter");
class SpectronRenderer {
    static setup() {
        new TestResultService_1.TestResultService().start();
    }
    static start(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            SpectronRenderer.setup();
            const state = new SpectronRendererState();
            const result = yield callback(state);
            electron_1.ipcRenderer.send('spectron-renderer-started', true);
            return result;
        });
    }
    static run(callback) {
        this.start(callback)
            .catch(err => console.error(err));
    }
}
exports.SpectronRenderer = SpectronRenderer;
class SpectronRendererState {
    get testResultWriter() {
        return new RendererTestResultWriter_1.RendererTestResultWriter();
    }
}
exports.SpectronRendererState = SpectronRendererState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25SZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwZWN0cm9uUmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBcUM7QUFDckMsbUVBQThEO0FBQzlELHdGQUFtRjtBQUVuRixNQUFhLGdCQUFnQjtJQUVsQixNQUFNLENBQUMsS0FBSztRQUNmLElBQUkscUNBQWlCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU0sTUFBTSxDQUFPLEtBQUssQ0FBQyxRQUFxQjs7WUFDM0MsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1lBRTFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXJDLHNCQUFXLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXBELE9BQU8sTUFBTSxDQUFDO1FBRWxCLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBcUI7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDZixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUVKO0FBdkJELDRDQXVCQztBQU9ELE1BQWEscUJBQXFCO0lBRTlCLElBQUksZ0JBQWdCO1FBQ2hCLE9BQU8sSUFBSSxtREFBd0IsRUFBRSxDQUFDO0lBQzFDLENBQUM7Q0FFSjtBQU5ELHNEQU1DIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge2lwY1JlbmRlcmVyfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1Rlc3RSZXN1bHRTZXJ2aWNlfSBmcm9tICcuL3Jlc3VsdHMvVGVzdFJlc3VsdFNlcnZpY2UnO1xuaW1wb3J0IHtSZW5kZXJlclRlc3RSZXN1bHRXcml0ZXJ9IGZyb20gJy4vcmVzdWx0cy93cml0ZXIvUmVuZGVyZXJUZXN0UmVzdWx0V3JpdGVyJztcblxuZXhwb3J0IGNsYXNzIFNwZWN0cm9uUmVuZGVyZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cCgpIHtcbiAgICAgICAgbmV3IFRlc3RSZXN1bHRTZXJ2aWNlKCkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHN0YXJ0KGNhbGxiYWNrOiBSdW5DYWxsYmFjayk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIFNwZWN0cm9uUmVuZGVyZXIuc2V0dXAoKTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgU3BlY3Ryb25SZW5kZXJlclN0YXRlKCk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsbGJhY2soc3RhdGUpO1xuXG4gICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoJ3NwZWN0cm9uLXJlbmRlcmVyLXN0YXJ0ZWQnLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBydW4oY2FsbGJhY2s6IFJ1bkNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoY2FsbGJhY2spXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnVuQ2FsbGJhY2sge1xuICAgIChzdGF0ZTogU3BlY3Ryb25SZW5kZXJlclN0YXRlKTogUHJvbWlzZTxhbnk+O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBTcGVjdHJvblJlbmRlcmVyU3RhdGUge1xuXG4gICAgZ2V0IHRlc3RSZXN1bHRXcml0ZXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXJUZXN0UmVzdWx0V3JpdGVyKCk7XG4gICAgfVxuXG59XG4iXX0=