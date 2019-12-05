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
const Results_1 = require("polar-shared/src/util/Results");
const ResolvablePromise_1 = require("../../../util/ResolvablePromise");
class WebDriverTestResultReaderLocal {
    constructor(app) {
        this.app = app;
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new ResolvablePromise_1.ResolvablePromise();
            const poll = () => __awaiter(this, void 0, void 0, function* () {
                const result = yield this.app.client.executeAsync((done) => {
                    const windowResult = window.SPECTRON_TEST_RESULT;
                    if (windowResult !== null && windowResult !== undefined) {
                        done(windowResult);
                        return;
                    }
                    done(undefined);
                });
                if (result.value !== null && result.value !== undefined) {
                    promise.resolve(Results_1.Results.create(result).get());
                }
                else {
                    setTimeout(poll, 150);
                }
            });
            setTimeout(poll, 0);
            return promise;
        });
    }
}
exports.WebDriverTestResultReaderLocal = WebDriverTestResultReaderLocal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlckxvY2FsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlckxvY2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsMkRBQXNEO0FBRXRELHVFQUFrRTtBQUtsRSxNQUFhLDhCQUE4QjtJQUl2QyxZQUFZLEdBQWlCO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFWSxJQUFJOztZQUViLE1BQU0sT0FBTyxHQUFHLElBQUkscUNBQWlCLEVBQUssQ0FBQztZQUUzQyxNQUFNLElBQUksR0FBRyxHQUFTLEVBQUU7Z0JBRXBCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBd0IsRUFBRyxFQUFFO29CQUk1RSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7b0JBRWpELElBQUksWUFBWSxLQUFLLElBQUksSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO3dCQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ25CLE9BQU87cUJBQ1Y7b0JBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVwQixDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO29CQUNyRCxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ3BEO3FCQUFNO29CQUNILFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3pCO1lBRUwsQ0FBQyxDQUFBLENBQUM7WUFFRixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXBCLE9BQU8sT0FBTyxDQUFDO1FBRW5CLENBQUM7S0FBQTtDQUVKO0FBM0NELHdFQTJDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtUZXN0UmVzdWx0UmVhZGVyfSBmcm9tICcuLi9UZXN0UmVzdWx0UmVhZGVyJztcbmltcG9ydCB7UmVzdWx0c30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1Jlc3VsdHMnO1xuaW1wb3J0IHtUQXBwbGljYXRpb259IGZyb20gJy4uLy4uL1NwZWN0cm9uJztcbmltcG9ydCB7UmVzb2x2YWJsZVByb21pc2V9IGZyb20gJy4uLy4uLy4uL3V0aWwvUmVzb2x2YWJsZVByb21pc2UnO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuLy8gZGlmZmVyZW50IGltcGxlbWVudGF0aW9uIG9mIHJlYWRpbmcgdmFsdWVzIHdoZXJlIHRoZSBwb2xsaW5nIGlzIGRvbmUgbG9jYWxcbmV4cG9ydCBjbGFzcyBXZWJEcml2ZXJUZXN0UmVzdWx0UmVhZGVyTG9jYWwgaW1wbGVtZW50cyBUZXN0UmVzdWx0UmVhZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXBwOiBUQXBwbGljYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IFRBcHBsaWNhdGlvbikge1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVhZDxUPigpOiBQcm9taXNlPFQ+IHtcblxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFJlc29sdmFibGVQcm9taXNlPFQ+KCk7XG5cbiAgICAgICAgY29uc3QgcG9sbCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hcHAuY2xpZW50LmV4ZWN1dGVBc3luYygoZG9uZTogKHZhbDogYW55KSA9PiB2b2lkICkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBmdW5jdGlvbiBpcyBleGVjdXRpbmcgaW4gdGhlIGJyb3dzZXJcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdpbmRvd1Jlc3VsdCA9IHdpbmRvdy5TUEVDVFJPTl9URVNUX1JFU1VMVDtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dSZXN1bHQgIT09IG51bGwgJiYgd2luZG93UmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh3aW5kb3dSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9uZSh1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSAhPT0gbnVsbCAmJiByZXN1bHQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShSZXN1bHRzLmNyZWF0ZTxUPihyZXN1bHQpLmdldCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChwb2xsLCAxNTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0VGltZW91dChwb2xsLCAwKTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcblxuICAgIH1cblxufVxuIl19