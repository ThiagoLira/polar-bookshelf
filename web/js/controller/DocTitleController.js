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
const Logger_1 = require("polar-shared/src/logger/Logger");
const Toaster_1 = require("../ui/toaster/Toaster");
const Strings_1 = require("polar-shared/src/util/Strings");
const log = Logger_1.Logger.create();
class DocTitleController {
    constructor(model) {
        this.model = model;
    }
    start() {
        this.listenForTitle();
    }
    listenForDocumentLoad() {
        this.model.registerListenerForDocumentLoaded((event) => __awaiter(this, void 0, void 0, function* () {
            yield this.onDocumentLoaded(event);
        }));
    }
    listenForTitle() {
        const inputElement = document.querySelector("#set-title input");
        inputElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                log.info("Updating document metadata now");
                this.doUpdateTitle();
                this.hideTitlePrompt();
            }
        });
    }
    onDocumentLoaded(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Strings_1.Strings.empty(event.docMeta.docInfo.title)) {
                this.triggerTitlePrompt();
            }
        });
    }
    doUpdateTitle() {
        const inputElement = document.querySelector("#set-title input");
        const title = inputElement.value;
        log.info("Setting title to: " + title);
        this.model.docMeta.docInfo.title = title;
        Toaster_1.Toaster.success("Document title successfully updated");
    }
    triggerTitlePrompt() {
        log.info("Triggering title prompt");
        this.showTitlePrompt();
    }
    hideTitlePrompt() {
        $('#set-title').hide();
    }
    showTitlePrompt() {
        $('#set-title').show();
    }
}
exports.DocTitleController = DocTitleController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jVGl0bGVDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jVGl0bGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUM5QywyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsa0JBQWtCO0lBSTNCLFlBQVksS0FBWTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sS0FBSztRQUdSLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUsxQixDQUFDO0lBRU8scUJBQXFCO1FBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtZQUN2RCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLGNBQWM7UUFJbEIsTUFBTSxZQUFZLEdBQWlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUUsQ0FBQztRQUMvRSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBb0IsRUFBRSxFQUFFO1lBRTlELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDMUI7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFYSxnQkFBZ0IsQ0FBQyxLQUEwQjs7WUFFckQsSUFBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDN0I7UUFFTCxDQUFDO0tBQUE7SUFFTyxhQUFhO1FBRWpCLE1BQU0sWUFBWSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFFLENBQUM7UUFFcEYsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUVqQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRXpDLGlCQUFPLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFFM0QsQ0FBQztJQUVPLGtCQUFrQjtRQUV0QixHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRTNCLENBQUM7SUFFTyxlQUFlO1FBQ25CLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRU8sZUFBZTtRQUNuQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUVKO0FBakZELGdEQWlGQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSGFuZGxlcyBhdHRhY2hpbmcgZXZlbnRzIHRvIHRoZSB0aXRsZSBVSSBhbmQgcHJvbXB0aW5nIGZvciBuZXcgdGl0bGVzLlxuICovXG5pbXBvcnQge0RvY3VtZW50TG9hZGVkRXZlbnQsIE1vZGVsfSBmcm9tICcuLi9tb2RlbC9Nb2RlbCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vdWkvdG9hc3Rlci9Ub2FzdGVyJztcbmltcG9ydCB7U3RyaW5nc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIERvY1RpdGxlQ29udHJvbGxlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIC8vIHRoaXMubGlzdGVuRm9yRG9jdW1lbnRMb2FkKCk7XG4gICAgICAgIHRoaXMubGlzdGVuRm9yVGl0bGUoKTtcblxuICAgICAgICAvLyBUT0RPIGxpc3RlbiB0byBwYXN0ZSBzbyB0aGF0IGlmIHRoZXkgcGFzdGUgXFxuIHNvIHdlIGVzY2FwZSBpdC4uLlxuICAgICAgICAvLyBJIHRoaW5rIHdlIGNhbiBkbyB0aGlzIGlmIHdlIGxpc3RlbiB0byAnY2hhbmdlJyBub3QgJ2tleWRvd24nLlxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5Gb3JEb2N1bWVudExvYWQoKSB7XG5cbiAgICAgICAgdGhpcy5tb2RlbC5yZWdpc3Rlckxpc3RlbmVyRm9yRG9jdW1lbnRMb2FkZWQoYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkRvY3VtZW50TG9hZGVkKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkZvclRpdGxlKCkge1xuXG4gICAgICAgIC8vIGJpbmQgdG8ga2V5RG93biBzbyBJIGNhbiBsaXN0ZW4gZm9yIGVudGVyIHRvIGNoYW5nZSB0aGUgdGl0bGVcblxuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0LXRpdGxlIGlucHV0XCIpITtcbiAgICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYoIGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiVXBkYXRpbmcgZG9jdW1lbnQgbWV0YWRhdGEgbm93XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9VcGRhdGVUaXRsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRpdGxlUHJvbXB0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uRG9jdW1lbnRMb2FkZWQoZXZlbnQ6IERvY3VtZW50TG9hZGVkRXZlbnQpIHtcblxuICAgICAgICBpZihTdHJpbmdzLmVtcHR5KGV2ZW50LmRvY01ldGEuZG9jSW5mby50aXRsZSkpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclRpdGxlUHJvbXB0KCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgZG9VcGRhdGVUaXRsZSgpIHtcblxuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXQtdGl0bGUgaW5wdXRcIikhO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gaW5wdXRFbGVtZW50LnZhbHVlO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiU2V0dGluZyB0aXRsZSB0bzogXCIgKyB0aXRsZSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbC5kb2NNZXRhLmRvY0luZm8udGl0bGUgPSB0aXRsZTtcblxuICAgICAgICBUb2FzdGVyLnN1Y2Nlc3MoXCJEb2N1bWVudCB0aXRsZSBzdWNjZXNzZnVsbHkgdXBkYXRlZFwiKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdHJpZ2dlclRpdGxlUHJvbXB0KCkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiVHJpZ2dlcmluZyB0aXRsZSBwcm9tcHRcIik7XG4gICAgICAgIHRoaXMuc2hvd1RpdGxlUHJvbXB0KCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGVUaXRsZVByb21wdCgpIHtcbiAgICAgICAgJCgnI3NldC10aXRsZScpLmhpZGUoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1RpdGxlUHJvbXB0KCkge1xuICAgICAgICAkKCcjc2V0LXRpdGxlJykuc2hvdygpO1xuICAgIH1cblxufVxuIl19