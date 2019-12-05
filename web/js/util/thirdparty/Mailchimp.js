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
const Fetch_1 = require("polar-shared/src/util/Fetch");
const Arrays_1 = require("polar-shared/src/util/Arrays");
class Mailchimp {
    static subscribe(email, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://us-central1-polar-cors.cloudfunctions.net/mailinglist/`;
            const userName = this.parseName(name);
            const data = Object.assign({ email }, userName);
            const body = JSON.stringify(data);
            const init = {
                mode: 'cors',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body
            };
            const response = yield Fetch_1.Fetches.fetch(url, init);
            if (response.status !== 200) {
                throw new Error("Mailchimp failed request: " + response.status + ": " + response.statusText);
            }
        });
    }
    static parseName(name) {
        const nameParts = name.split(" ");
        const firstName = Arrays_1.Arrays.first(nameParts) || "";
        const lastName = Arrays_1.Arrays.last(nameParts) || "";
        return { firstName, lastName };
    }
}
exports.Mailchimp = Mailchimp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbGNoaW1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWFpbGNoaW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQWlFO0FBQ2pFLHlEQUFvRDtBQUVwRCxNQUFhLFNBQVM7SUFFWCxNQUFNLENBQU8sU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUVyRCxNQUFNLEdBQUcsR0FBRyxnRUFBZ0UsQ0FBQztZQUU3RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRDLE1BQU0sSUFBSSxtQkFDTixLQUFLLElBQ0YsUUFBUSxDQUNkLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxDLE1BQU0sSUFBSSxHQUFnQjtnQkFDdEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2dCQUNELElBQUk7YUFDUCxDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVoRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoRztRQUVMLENBQUM7S0FBQTtJQUVPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWTtRQUVqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hELE1BQU0sUUFBUSxHQUFHLGVBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlDLE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLENBQUM7SUFFakMsQ0FBQztDQUVKO0FBM0NELDhCQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmV0Y2hlcywgUmVxdWVzdEluaXR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GZXRjaCc7XG5pbXBvcnQge0FycmF5c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9BcnJheXNcIjtcblxuZXhwb3J0IGNsYXNzIE1haWxjaGltcCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHN1YnNjcmliZShlbWFpbDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1wb2xhci1jb3JzLmNsb3VkZnVuY3Rpb25zLm5ldC9tYWlsaW5nbGlzdC9gO1xuXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gdGhpcy5wYXJzZU5hbWUobmFtZSk7XG5cbiAgICAgICAgY29uc3QgZGF0YTogU3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAuLi51c2VyTmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgICAgICBjb25zdCBpbml0OiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHlcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEZldGNoZXMuZmV0Y2godXJsLCBpbml0KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1haWxjaGltcCBmYWlsZWQgcmVxdWVzdDogXCIgKyByZXNwb25zZS5zdGF0dXMgKyBcIjogXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VOYW1lKG5hbWU6IHN0cmluZyk6IFVzZXJOYW1lIHtcblxuICAgICAgICBjb25zdCBuYW1lUGFydHMgPSBuYW1lLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBBcnJheXMuZmlyc3QobmFtZVBhcnRzKSB8fCBcIlwiO1xuICAgICAgICBjb25zdCBsYXN0TmFtZSA9IEFycmF5cy5sYXN0KG5hbWVQYXJ0cykgfHwgXCJcIjtcblxuICAgICAgICByZXR1cm4ge2ZpcnN0TmFtZSwgbGFzdE5hbWV9O1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBVc2VyTmFtZSB7XG4gICAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN1YnNjcmlwdGlvbiB7XG4gICAgcmVhZG9ubHkgZW1haWw6IHN0cmluZztcbiAgICByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xufVxuIl19