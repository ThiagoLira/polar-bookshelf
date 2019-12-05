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
const IFrames_1 = require("../../util/dom/IFrames");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocumentReadyStates_1 = require("../../util/dom/DocumentReadyStates");
const log = Logger_1.Logger.create();
class IFrameWatcher {
    constructor(iframe, callback) {
        this.iframe = Preconditions_1.Preconditions.assertNotNull(iframe, "iframe");
        this.callback = Preconditions_1.Preconditions.assertNotNull(callback, "callback");
    }
    start() {
        this.execute()
            .catch(err => log.error("Failed watching for iframe: ", err));
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Waiting for iframe to load...");
            log.debug("Waiting for content document...");
            yield IFrames_1.IFrames.waitForContentDocument(this.iframe);
            log.debug("Waiting for 'complete'");
            yield DocumentReadyStates_1.DocumentReadyStates.waitFor(this.iframe.contentDocument, 'complete');
            log.debug("Waiting for iframe to load...done");
            this.callback();
        });
    }
}
exports.IFrameWatcher = IFrameWatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUZyYW1lV2F0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklGcmFtZVdhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxrRUFBNkQ7QUFDN0Qsb0RBQStDO0FBQy9DLDJEQUFzRDtBQUN0RCw0RUFBdUU7QUFFdkUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsYUFBYTtJQUt0QixZQUFZLE1BQXlCLEVBQUUsUUFBb0I7UUFFdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFdEUsQ0FBQztJQUVNLEtBQUs7UUFFUixJQUFJLENBQUMsT0FBTyxFQUFFO2FBQ1QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFBO0lBRXRFLENBQUM7SUFFYSxPQUFPOztZQUVqQixHQUFHLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFFM0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQzdDLE1BQU0saUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbEQsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBRXBDLE1BQU0seUNBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUU1RSxHQUFHLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXBCLENBQUM7S0FBQTtDQUVKO0FBcENELHNDQW9DQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXNzdW1lcyB0aGF0IHlvdSBoYXZlIHRyaWVkIHRvIGNoYW5nZSB0aGUgVVJMIGZvciBhbiBpZnJhbWUgYW5kIHdhdGNoZXMgZm9yXG4gKiBpdCB0byBzdGFydCBsb2FkaW5nIHByb3Blcmx5LlxuICovXG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0lGcmFtZXN9IGZyb20gJy4uLy4uL3V0aWwvZG9tL0lGcmFtZXMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY3VtZW50UmVhZHlTdGF0ZXN9IGZyb20gJy4uLy4uL3V0aWwvZG9tL0RvY3VtZW50UmVhZHlTdGF0ZXMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBJRnJhbWVXYXRjaGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcblxuICAgICAgICB0aGlzLmlmcmFtZSA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChpZnJhbWUsIFwiaWZyYW1lXCIpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGNhbGxiYWNrLCBcImNhbGxiYWNrXCIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkZhaWxlZCB3YXRjaGluZyBmb3IgaWZyYW1lOiBcIiwgZXJyICkpXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGV4ZWN1dGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiV2FpdGluZyBmb3IgaWZyYW1lIHRvIGxvYWQuLi5cIik7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiV2FpdGluZyBmb3IgY29udGVudCBkb2N1bWVudC4uLlwiKTtcbiAgICAgICAgYXdhaXQgSUZyYW1lcy53YWl0Rm9yQ29udGVudERvY3VtZW50KHRoaXMuaWZyYW1lKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJXYWl0aW5nIGZvciAnY29tcGxldGUnXCIpO1xuXG4gICAgICAgIGF3YWl0IERvY3VtZW50UmVhZHlTdGF0ZXMud2FpdEZvcih0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQhLCAnY29tcGxldGUnKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJXYWl0aW5nIGZvciBpZnJhbWUgdG8gbG9hZC4uLmRvbmVcIik7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xuXG4gICAgfVxuXG59XG4iXX0=