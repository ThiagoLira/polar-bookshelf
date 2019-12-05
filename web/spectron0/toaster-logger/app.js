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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const chai_1 = require("chai");
const dom_testing_library_1 = require("dom-testing-library");
const ToasterLogger_1 = require("../../js/logger/ToasterLogger");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    const toasterLogger = new ToasterLogger_1.ToasterLogger();
    toasterLogger.error("Something bad", new Error("it broke"));
    yield dom_testing_library_1.wait(() => {
        return chai_1.assert.notEqual(document.querySelector('#toast-container'), null);
    });
    console.log("Got the container");
    yield dom_testing_library_1.wait(() => {
        const toastMessage = document.querySelector('.toast-message');
        chai_1.assert.notEqual(toastMessage, null);
        chai_1.assert.equal(toastMessage.textContent, 'An internal error has occurred.');
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBRWhFLCtCQUE0QjtBQUM1Qiw2REFBeUM7QUFDekMsaUVBQTREO0FBRTVELG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUVwRCxNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztJQUMxQyxhQUFhLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRTVELE1BQU0sMEJBQUksQ0FBQyxHQUFHLEVBQUU7UUFDWixPQUFPLGFBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRWpDLE1BQU0sMEJBQUksQ0FBQyxHQUFHLEVBQUU7UUFFWixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFhLENBQUMsV0FBVyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7SUFFL0UsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHt3YWl0fSBmcm9tICdkb20tdGVzdGluZy1saWJyYXJ5JztcbmltcG9ydCB7VG9hc3RlckxvZ2dlcn0gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL1RvYXN0ZXJMb2dnZXInO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoc3RhdGUpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoaW4gU3BlY3Ryb25SZW5kZXJlciBub3cuXCIpO1xuXG4gICAgY29uc3QgdG9hc3RlckxvZ2dlciA9IG5ldyBUb2FzdGVyTG9nZ2VyKCk7XG4gICAgdG9hc3RlckxvZ2dlci5lcnJvcihcIlNvbWV0aGluZyBiYWRcIiwgbmV3IEVycm9yKFwiaXQgYnJva2VcIikpO1xuXG4gICAgYXdhaXQgd2FpdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBhc3NlcnQubm90RXF1YWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvYXN0LWNvbnRhaW5lcicpLCBudWxsKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiR290IHRoZSBjb250YWluZXJcIik7XG5cbiAgICBhd2FpdCB3YWl0KCgpID0+IHtcblxuICAgICAgICBjb25zdCB0b2FzdE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtbWVzc2FnZScpO1xuXG4gICAgICAgIGFzc2VydC5ub3RFcXVhbCh0b2FzdE1lc3NhZ2UsIG51bGwpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCh0b2FzdE1lc3NhZ2UhLnRleHRDb250ZW50LCAnQW4gaW50ZXJuYWwgZXJyb3IgaGFzIG9jY3VycmVkLicpO1xuXG4gICAgfSk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==