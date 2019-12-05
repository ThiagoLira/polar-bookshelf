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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("@sentry/electron");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const process_1 = __importDefault(require("process"));
let initialized = false;
let ready = false;
class SentryLogger {
    constructor() {
        this.name = 'sentry-logger';
    }
    notice(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    warn(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    error(msg, ...args) {
        SentryLogger.initWhenNecessary();
        if (ready) {
            args.forEach(arg => {
                if (arg instanceof Error) {
                    electron_1.captureException(arg);
                }
            });
        }
    }
    info(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    verbose(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    debug(msg, ...args) {
        SentryLogger.initWhenNecessary();
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            SentryLogger.initWhenNecessary();
        });
    }
    static isEnabled() {
        if (Preconditions_1.isPresent(process_1.default.env.POLAR_SENTRY_ENABLED)) {
            return process_1.default.env.POLAR_SENTRY_ENABLED === 'true';
        }
        return !Preconditions_1.isPresent(process_1.default.env.SNAP);
    }
    static initWhenNecessary() {
        if (initialized) {
            return;
        }
        try {
            if (SentryLogger.isEnabled()) {
                electron_1.init({
                    dsn: 'https://2e8b8ca6e6bf4bf58d735f2a405ecb20@sentry.io/1273707',
                });
            }
            ready = true;
        }
        catch (e) {
            console.error("Unable to initialize sentry: ", e);
        }
        finally {
            initialized = true;
        }
    }
}
exports.SentryLogger = SentryLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VudHJ5TG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VudHJ5TG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEsK0NBQTBEO0FBQzFELGtFQUF5RDtBQUN6RCxzREFBOEI7QUFPOUIsSUFBSSxXQUFXLEdBQVksS0FBSyxDQUFDO0FBR2pDLElBQUksS0FBSyxHQUFZLEtBQUssQ0FBQztBQUUzQixNQUFhLFlBQVk7SUFBekI7UUFFb0IsU0FBSSxHQUFXLGVBQWUsQ0FBQztJQWdGbkQsQ0FBQztJQTlFVSxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNyQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBRXBDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRWpDLElBQUksS0FBSyxFQUFFO1lBRVAsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFFZixJQUFLLEdBQUcsWUFBWSxLQUFLLEVBQUU7b0JBSXZCLDJCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QjtZQUVMLENBQUMsQ0FBQyxDQUFDO1NBRU47SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRVksSUFBSTs7WUFDYixZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQUMsU0FBUztRQUVuQixJQUFJLHlCQUFTLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUM3QyxPQUFPLGlCQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixLQUFLLE1BQU0sQ0FBQztTQUN0RDtRQUVELE9BQU8sQ0FBRSx5QkFBUyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxNQUFNLENBQUMsaUJBQWlCO1FBRTVCLElBQUksV0FBVyxFQUFFO1lBQ2IsT0FBTztTQUNWO1FBRUQsSUFBSTtZQUVBLElBQUksWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUMxQixlQUFJLENBQUM7b0JBQ0QsR0FBRyxFQUFFLDREQUE0RDtpQkFFcEUsQ0FBQyxDQUFDO2FBQ047WUFFRCxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBRWhCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO2dCQUFTO1lBQ04sV0FBVyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUVMLENBQUM7Q0FFSjtBQWxGRCxvQ0FrRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0lMb2dnZXInO1xuXG5pbXBvcnQgeyBpbml0LCBjYXB0dXJlRXhjZXB0aW9uIH0gZnJvbSAnQHNlbnRyeS9lbGVjdHJvbic7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCBwcm9jZXNzIGZyb20gXCJwcm9jZXNzXCI7XG5cbi8vIFRoaXMgY29uZmlndXJlcyB0aGUgRWxlY3Ryb24gQ3Jhc2hSZXBvcnRlciBmb3IgbmF0aXZlIGFwcCBjcmFzaGVzIGFuZFxuLy8gY2FwdHVyZXMgYW55IHVuY2F1Z2h0IEphdmFTY3JpcHQgZXhjZXB0aW9ucyB1c2luZyB0aGUgSmF2YVNjcmlwdCBTREtzIHVuZGVyXG4vLyB0aGUgaG9vZC4gQmUgc3VyZSB0byBjYWxsIHRoaXMgZnVuY3Rpb24gYXMgZWFybHkgYXMgcG9zc2libGUgaW4gdGhlIG1haW5cbi8vIHByb2Nlc3MgYW5kIGFsbCByZW5kZXJlciBwcm9jZXNzZXMgdG8gYWxzbyBjYXRjaCBlcnJvcnMgZHVyaW5nIHN0YXJ0dXAuXG5cbmxldCBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4vLyB0cnVlIHdoZW4gc2VudHJ5IGlzIHJlYWR5IGZvciBsb2dnaW5nLlxubGV0IHJlYWR5OiBib29sZWFuID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBTZW50cnlMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSAnc2VudHJ5LWxvZ2dlcic7XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBTZW50cnlMb2dnZXIuaW5pdFdoZW5OZWNlc3NhcnkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgU2VudHJ5TG9nZ2VyLmluaXRXaGVuTmVjZXNzYXJ5KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuXG4gICAgICAgIFNlbnRyeUxvZ2dlci5pbml0V2hlbk5lY2Vzc2FyeSgpO1xuXG4gICAgICAgIGlmIChyZWFkeSkge1xuXG4gICAgICAgICAgICBhcmdzLmZvckVhY2goYXJnID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICggYXJnIGluc3RhbmNlb2YgRXJyb3IpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNhcHR1cmVzICdoYW5kbGVzJyBleGNlcHRpb25zIGFzIFNlbnRyeSB3b3VsZG4ndCBhY3R1YWxseVxuICAgICAgICAgICAgICAgICAgICAvLyBjYXB0dXJlIHRoZXNlIGFzIHRoZXkgYXJlbid0IHN1cmZhY2VkIHRvIEVsZWN0cm9uLlxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlRXhjZXB0aW9uKGFyZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIFNlbnRyeUxvZ2dlci5pbml0V2hlbk5lY2Vzc2FyeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJib3NlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBTZW50cnlMb2dnZXIuaW5pdFdoZW5OZWNlc3NhcnkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIFNlbnRyeUxvZ2dlci5pbml0V2hlbk5lY2Vzc2FyeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBTZW50cnlMb2dnZXIuaW5pdFdoZW5OZWNlc3NhcnkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzRW5hYmxlZCgpIHtcblxuICAgICAgICBpZiAoaXNQcmVzZW50KHByb2Nlc3MuZW52LlBPTEFSX1NFTlRSWV9FTkFCTEVEKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LlBPTEFSX1NFTlRSWV9FTkFCTEVEID09PSAndHJ1ZSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISBpc1ByZXNlbnQocHJvY2Vzcy5lbnYuU05BUCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5pdFdoZW5OZWNlc3NhcnkoKSB7XG5cbiAgICAgICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBpZiAoU2VudHJ5TG9nZ2VyLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICAgICAgaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgIGRzbjogJ2h0dHBzOi8vMmU4YjhjYTZlNmJmNGJmNThkNzM1ZjJhNDA1ZWNiMjBAc2VudHJ5LmlvLzEyNzM3MDcnLFxuICAgICAgICAgICAgICAgICAgICAvLyBtb3JlIG9wdGlvbnMuLi5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVhZHkgPSB0cnVlO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSBzZW50cnk6IFwiLCBlKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbiJdfQ==