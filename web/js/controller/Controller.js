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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class Controller {
    constructor(model) {
        this.model = Preconditions_1.Preconditions.assertNotNull(model, "model");
    }
    onDocumentLoaded(fingerprint, nrPages, currentlySelectedPageNum, docDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.documentLoaded(fingerprint, nrPages, currentlySelectedPageNum, docDetail);
        });
    }
    createPagemark(pageNum, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Controller sees pagemark created: " + pageNum, options);
            yield this.model.createPagemark(pageNum, options);
        });
    }
    erasePagemarks(pageNum) {
        log.info("Controller sees pagemarks erased: " + pageNum);
        this.model.erasePagemark(pageNum);
    }
    erasePagemark(num) {
        log.info("Controller sees pagemark erased: " + num);
        this.model.erasePagemark(num);
    }
    getCurrentPageElement() {
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxrRUFBNkQ7QUFDN0QsMkRBQXNEO0FBSXRELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFVBQVU7SUFPbkIsWUFBWSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFLWSxnQkFBZ0IsQ0FBQyxXQUFtQixFQUNuQixPQUFlLEVBQ2Ysd0JBQWdDLEVBQ2hDLFNBQWdDOztZQUUxRCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFL0YsQ0FBQztLQUFBO0lBS1ksY0FBYyxDQUFDLE9BQWUsRUFBRSxVQUFlLEVBQUU7O1lBQzFELEdBQUcsQ0FBQyxJQUFJLENBQUMsb0NBQW9DLEdBQUcsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVNLGNBQWMsQ0FBQyxPQUFlO1FBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0NBQW9DLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUtNLGFBQWEsQ0FBQyxHQUFXO1FBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLHFCQUFxQjtJQUU1QixDQUFDO0NBRUo7QUFoREQsZ0NBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY0RldGFpbHN9IGZyb20gJy4uL21ldGFkYXRhL0RvY0RldGFpbHMnO1xuaW1wb3J0IHtEb2NEZXRhaWx9IGZyb20gJy4uL21ldGFkYXRhL0RvY0RldGFpbCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuXG4gICAgcHJvdGVjdGVkIG1vZGVsOiBNb2RlbDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwobW9kZWwsIFwibW9kZWxcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBuZXcgZG9jdW1lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBvbkRvY3VtZW50TG9hZGVkKGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnJQYWdlczogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVNlbGVjdGVkUGFnZU51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0RldGFpbDogRG9jRGV0YWlsIHwgdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5tb2RlbC5kb2N1bWVudExvYWRlZChmaW5nZXJwcmludCwgbnJQYWdlcywgY3VycmVudGx5U2VsZWN0ZWRQYWdlTnVtLCBkb2NEZXRhaWwpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFyayB0aGUgZ2l2ZW4gcGFnZSBudW1iZXIgYXMgcmVhZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlUGFnZW1hcmsocGFnZU51bTogbnVtYmVyLCBvcHRpb25zOiBhbnkgPSB7fSkge1xuICAgICAgICBsb2cuaW5mbyhcIkNvbnRyb2xsZXIgc2VlcyBwYWdlbWFyayBjcmVhdGVkOiBcIiArIHBhZ2VOdW0sIG9wdGlvbnMpO1xuICAgICAgICBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZVBhZ2VtYXJrKHBhZ2VOdW0sIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcmFzZVBhZ2VtYXJrcyhwYWdlTnVtOiBudW1iZXIpIHtcbiAgICAgICAgbG9nLmluZm8oXCJDb250cm9sbGVyIHNlZXMgcGFnZW1hcmtzIGVyYXNlZDogXCIgKyBwYWdlTnVtKTtcbiAgICAgICAgdGhpcy5tb2RlbC5lcmFzZVBhZ2VtYXJrKHBhZ2VOdW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcmsgdGhlIGdpdmVuIHBhZ2UgbnVtYmVyIGFzIHJlYWQuXG4gICAgICovXG4gICAgcHVibGljIGVyYXNlUGFnZW1hcmsobnVtOiBudW1iZXIpIHtcbiAgICAgICAgbG9nLmluZm8oXCJDb250cm9sbGVyIHNlZXMgcGFnZW1hcmsgZXJhc2VkOiBcIiArIG51bSk7XG4gICAgICAgIHRoaXMubW9kZWwuZXJhc2VQYWdlbWFyayhudW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDdXJyZW50UGFnZUVsZW1lbnQoKSB7XG5cbiAgICB9XG5cbn1cbiJdfQ==