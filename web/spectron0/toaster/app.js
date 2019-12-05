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
const Toaster_1 = require("../../js/ui/toaster/Toaster");
const chai_1 = require("chai");
const dom_testing_library_1 = require("dom-testing-library");
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    Toaster_1.Toaster.success('hello', 'world');
    yield dom_testing_library_1.wait(() => {
        return chai_1.assert.notEqual(document.querySelector('#toast-container'), null);
    });
    yield dom_testing_library_1.wait(() => {
        const toastTitle = document.querySelector('.toast-title');
        const toastMessage = document.querySelector('.toast-message');
        chai_1.assert.notEqual(toastTitle, null);
        chai_1.assert.notEqual(toastMessage, null);
        chai_1.assert.equal(toastTitle.textContent, 'world');
        chai_1.assert.equal(toastMessage.textContent, 'hello');
    });
    Toaster_1.Toaster.info(`A new version of Polar has been release.  Please upgrade. <a href="http://cnn.com">world</a>`, 'world', {
        requiresAcknowledgment: true,
        positionClass: 'toast-top-full-width'
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBQ2hFLHlEQUFvRDtBQUVwRCwrQkFBNEI7QUFDNUIsNkRBQXlDO0FBRXpDLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUVwRCxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFbEMsTUFBTSwwQkFBSSxDQUFDLEdBQUcsRUFBRTtRQUNaLE9BQU8sYUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFHSCxNQUFNLDBCQUFJLENBQUMsR0FBRyxFQUFFO1FBRVosTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUQsYUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsYUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFXLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLGFBQU0sQ0FBQyxLQUFLLENBQUMsWUFBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVyRCxDQUFDLENBQUMsQ0FBQztJQUVILGlCQUFPLENBQUMsSUFBSSxDQUFDLDhGQUE4RixFQUM5RixPQUFPLEVBQ1A7UUFDSSxzQkFBc0IsRUFBRSxJQUFJO1FBQzVCLGFBQWEsRUFBRSxzQkFBc0I7S0FDeEMsQ0FBQyxDQUFDO0lBRWhCLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi8uLi9qcy91aS90b2FzdGVyL1RvYXN0ZXInO1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge3dhaXR9IGZyb20gJ2RvbS10ZXN0aW5nLWxpYnJhcnknO1xuXG5TcGVjdHJvblJlbmRlcmVyLnJ1bihhc3luYyAoc3RhdGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aGluIFNwZWN0cm9uUmVuZGVyZXIgbm93LlwiKTtcblxuICAgIFRvYXN0ZXIuc3VjY2VzcygnaGVsbG8nLCAnd29ybGQnKTtcblxuICAgIGF3YWl0IHdhaXQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXNzZXJ0Lm5vdEVxdWFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2FzdC1jb250YWluZXInKSwgbnVsbCk7XG4gICAgfSk7XG5cblxuICAgIGF3YWl0IHdhaXQoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRvYXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdG9hc3RNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0LW1lc3NhZ2UnKTtcblxuICAgICAgICBhc3NlcnQubm90RXF1YWwodG9hc3RUaXRsZSwgbnVsbCk7XG4gICAgICAgIGFzc2VydC5ub3RFcXVhbCh0b2FzdE1lc3NhZ2UsIG51bGwpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCh0b2FzdFRpdGxlIS50ZXh0Q29udGVudCwgJ3dvcmxkJyk7XG4gICAgICAgIGFzc2VydC5lcXVhbCh0b2FzdE1lc3NhZ2UhLnRleHRDb250ZW50LCAnaGVsbG8nKTtcblxuICAgIH0pO1xuXG4gICAgVG9hc3Rlci5pbmZvKGBBIG5ldyB2ZXJzaW9uIG9mIFBvbGFyIGhhcyBiZWVuIHJlbGVhc2UuICBQbGVhc2UgdXBncmFkZS4gPGEgaHJlZj1cImh0dHA6Ly9jbm4uY29tXCI+d29ybGQ8L2E+YCxcbiAgICAgICAgICAgICAgICAgJ3dvcmxkJyxcbiAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZXNBY2tub3dsZWRnbWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2xhc3M6ICd0b2FzdC10b3AtZnVsbC13aWR0aCdcbiAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==