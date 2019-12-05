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
const chai_1 = require("chai");
const WebDriverTestResultReader_1 = require("./results/reader/WebDriverTestResultReader");
const Concurrently_1 = require("../util/Concurrently");
class SpectronSpec {
    constructor(app) {
        this.app = app;
    }
    waitFor(val) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Concurrently_1.Concurrently.waitForPredicate(() => this.app.client.getWindowCount(), (windowCount) => windowCount >= 1);
            const testResultReader = new WebDriverTestResultReader_1.WebDriverTestResultReader(this.app);
            chai_1.assert.equal(yield testResultReader.read(), val);
            return this;
        });
    }
    static create(app) {
        return new SpectronSpec(app);
    }
    stop() {
        this.app.stop();
    }
}
exports.SpectronSpec = SpectronSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25TcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BlY3Ryb25TcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBRTVCLDBGQUFxRjtBQUNyRix1REFBa0Q7QUFLbEQsTUFBYSxZQUFZO0lBSXJCLFlBQVksR0FBaUI7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVZLE9BQU8sQ0FBQyxHQUFROztZQUd6QixNQUFNLDJCQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQ3RDLENBQUMsV0FBbUIsRUFBRSxFQUFFLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBRSxDQUFDO1lBRWhGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxxREFBeUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakUsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRWpELE9BQU8sSUFBSSxDQUFDO1FBRWhCLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBaUI7UUFDbEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sSUFBSTtRQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUVKO0FBN0JELG9DQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7VEFwcGxpY2F0aW9ufSBmcm9tICcuL1NwZWN0cm9uJztcbmltcG9ydCB7V2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlcn0gZnJvbSAnLi9yZXN1bHRzL3JlYWRlci9XZWJEcml2ZXJUZXN0UmVzdWx0UmVhZGVyJztcbmltcG9ydCB7Q29uY3VycmVudGx5fSBmcm9tICcuLi91dGlsL0NvbmN1cnJlbnRseSc7XG5cbi8qKlxuICogQWxsb3dzIHVzIHRvIGVhc2lseSBhd2FpdCBmb3IgdGhlIHRlc3QgdG8gZmluaXNoLlxuICovXG5leHBvcnQgY2xhc3MgU3BlY3Ryb25TcGVjIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXBwOiBUQXBwbGljYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IFRBcHBsaWNhdGlvbikge1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd2FpdEZvcih2YWw6IGFueSk6IFByb21pc2U8dGhpcz4ge1xuXG4gICAgICAgIC8vIHdhaXQgZm9yIGF0IGxlYXN0IG9uZSB3aW5kb3cgKHdoaWNoIGlzIHRoZSBtYWluIG9uZSB0aGF0IHdpbGwgaG9sZCBvdXIgdmFsdWUpXG4gICAgICAgIGF3YWl0IENvbmN1cnJlbnRseS53YWl0Rm9yUHJlZGljYXRlKCgpID0+IHRoaXMuYXBwLmNsaWVudC5nZXRXaW5kb3dDb3VudCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2luZG93Q291bnQ6IG51bWJlcikgPT4gd2luZG93Q291bnQgPj0gMSApO1xuXG4gICAgICAgIGNvbnN0IHRlc3RSZXN1bHRSZWFkZXIgPSBuZXcgV2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlcih0aGlzLmFwcCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCB0ZXN0UmVzdWx0UmVhZGVyLnJlYWQoKSwgdmFsKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGFwcDogVEFwcGxpY2F0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3BlY3Ryb25TcGVjKGFwcCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuYXBwLnN0b3AoKTtcbiAgICB9XG5cbn1cbiJdfQ==