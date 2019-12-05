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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Latch_1 = require("polar-shared/src/util/Latch");
class WebDriverTestResultReader {
    constructor(app) {
        this.app = app;
    }
    read2() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.app.client.executeAsync((done) => {
                function poll() {
                    if (window.SPECTRON_TEST_RESULT !== null &&
                        window.SPECTRON_TEST_RESULT !== undefined) {
                        done(window.SPECTRON_TEST_RESULT);
                        return;
                    }
                    setTimeout(poll, 250);
                }
                poll();
            });
            return Results_1.Results.create(result).get();
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const latch = new Latch_1.Latch();
            const poll = () => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.app.client.executeAsync((done) => {
                    if (window.SPECTRON_TEST_RESULT !== null &&
                        window.SPECTRON_TEST_RESULT !== undefined) {
                        done(window.SPECTRON_TEST_RESULT);
                        return;
                    }
                    done(null);
                });
                const result = Results_1.Results.create(response).get();
                if (Preconditions_1.isPresent(result)) {
                    latch.resolve(result);
                }
                else {
                    setTimeout(() => {
                        poll().catch(err => latch.reject(err));
                    }, 250);
                }
            });
            poll().catch(err => latch.reject(err));
            return latch.get();
        });
    }
}
exports.WebDriverTestResultReader = WebDriverTestResultReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViRHJpdmVyVGVzdFJlc3VsdFJlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYkRyaXZlclRlc3RSZXN1bHRSZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSwyREFBc0Q7QUFFdEQsa0VBQXlEO0FBQ3pELHVEQUFrRDtBQUlsRCxNQUFhLHlCQUF5QjtJQUlsQyxZQUFZLEdBQWlCO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFWSxLQUFLOztZQUVkLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBd0IsRUFBRyxFQUFFO2dCQUU1RSxTQUFTLElBQUk7b0JBRVQsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEtBQUssSUFBSTt3QkFDcEMsTUFBTSxDQUFDLG9CQUFvQixLQUFLLFNBQVMsRUFBRTt3QkFFM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3dCQUNsQyxPQUFPO3FCQUVWO29CQUVELFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsSUFBSSxFQUFFLENBQUM7WUFFWCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8saUJBQU8sQ0FBQyxNQUFNLENBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFM0MsQ0FBQztLQUFBO0lBRVksSUFBSTs7WUFFYixNQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBSyxDQUFDO1lBRTdCLE1BQU0sSUFBSSxHQUFHLEdBQVMsRUFBRTtnQkFFcEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUF3QixFQUFFLEVBQUU7b0JBRTdFLElBQUksTUFBTSxDQUFDLG9CQUFvQixLQUFLLElBQUk7d0JBQ3BDLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxTQUFTLEVBQUU7d0JBRTNDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDbEMsT0FBTztxQkFFVjtvQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWYsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUksUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRWpELElBQUkseUJBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDekI7cUJBQU07b0JBQ0gsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDWixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDWDtZQUVMLENBQUMsQ0FBQSxDQUFDO1lBRUYsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXZDLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXZCLENBQUM7S0FBQTtDQUVKO0FBdkVELDhEQXVFQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtUZXN0UmVzdWx0UmVhZGVyfSBmcm9tICcuLi9UZXN0UmVzdWx0UmVhZGVyJztcbmltcG9ydCB7UmVzdWx0c30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1Jlc3VsdHMnO1xuaW1wb3J0IHtUQXBwbGljYXRpb259IGZyb20gJy4uLy4uL1NwZWN0cm9uJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9MYXRjaFwiO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuZXhwb3J0IGNsYXNzIFdlYkRyaXZlclRlc3RSZXN1bHRSZWFkZXIgaW1wbGVtZW50cyBUZXN0UmVzdWx0UmVhZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXBwOiBUQXBwbGljYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IFRBcHBsaWNhdGlvbikge1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVhZDI8VD4oKTogUHJvbWlzZTxUPiB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hcHAuY2xpZW50LmV4ZWN1dGVBc3luYygoZG9uZTogKHZhbDogYW55KSA9PiB2b2lkICkgPT4ge1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBwb2xsKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5TUEVDVFJPTl9URVNUX1JFU1VMVCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuU1BFQ1RST05fVEVTVF9SRVNVTFQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGRvbmUod2luZG93LlNQRUNUUk9OX1RFU1RfUkVTVUxUKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChwb2xsLCAyNTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2xsKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFJlc3VsdHMuY3JlYXRlPFQ+KHJlc3VsdCkuZ2V0KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVhZDxUPigpOiBQcm9taXNlPFQ+IHtcblxuICAgICAgICBjb25zdCBsYXRjaCA9IG5ldyBMYXRjaDxUPigpO1xuXG4gICAgICAgIGNvbnN0IHBvbGwgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5hcHAuY2xpZW50LmV4ZWN1dGVBc3luYygoZG9uZTogKHZhbDogYW55KSA9PiB2b2lkKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LlNQRUNUUk9OX1RFU1RfUkVTVUxUICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5TUEVDVFJPTl9URVNUX1JFU1VMVCAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9uZSh3aW5kb3cuU1BFQ1RST05fVEVTVF9SRVNVTFQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb25lKG51bGwpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gUmVzdWx0cy5jcmVhdGU8VD4ocmVzcG9uc2UpLmdldCgpO1xuXG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICBsYXRjaC5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwb2xsKCkuY2F0Y2goZXJyID0+IGxhdGNoLnJlamVjdChlcnIpKTtcbiAgICAgICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcG9sbCgpLmNhdGNoKGVyciA9PiBsYXRjaC5yZWplY3QoZXJyKSk7XG5cbiAgICAgICAgcmV0dXJuIGxhdGNoLmdldCgpO1xuXG4gICAgfVxuXG59XG4iXX0=