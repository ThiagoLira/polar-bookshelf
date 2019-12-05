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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const AnkiConnectFetch_1 = require("../AnkiConnectFetch");
const TypeMoq = __importStar(require("typemoq"));
class ModelNamesClient {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "modelNames",
                version: 6,
            };
            const init = { method: 'POST', body: JSON.stringify(body) };
            return yield AnkiConnectFetch_1.AnkiConnectFetch.fetch(init);
        });
    }
    static createMock(result) {
        const client = TypeMoq.Mock.ofType();
        client.setup(x => x.execute()).returns(() => Promise.resolve(result));
        return client.object;
    }
}
exports.ModelNamesClient = ModelNamesClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxOYW1lc0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vZGVsTmFtZXNDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELGlEQUFtQztBQW9CbkMsTUFBYSxnQkFBZ0I7SUFFWixPQUFPOztZQUVoQixNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsT0FBTyxFQUFFLENBQUM7YUFDYixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsT0FBa0IsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekQsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFnQjtRQUNyQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBcUIsQ0FBQztRQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztDQUVKO0FBeEJELDRDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5raUNvbm5lY3RGZXRjaH0gZnJvbSAnLi4vQW5raUNvbm5lY3RGZXRjaCc7XG5pbXBvcnQgKiBhcyBUeXBlTW9xIGZyb20gXCJ0eXBlbW9xXCI7XG5cbi8qXG4gIG1vZGVsTmFtZXNcblxuIEdldHMgdGhlIGNvbXBsZXRlIGxpc3Qgb2YgbW9kZWwgbmFtZXMgZm9yIHRoZSBjdXJyZW50IHVzZXIuXG5cbiBTYW1wbGUgcmVxdWVzdDpcblxuIHtcbiAgICBcImFjdGlvblwiOiBcIm1vZGVsTmFtZXNcIixcbiAgICBcInZlcnNpb25cIjogNlxufVxuIFNhbXBsZSByZXN1bHQ6XG5cbiB7XG4gICAgXCJyZXN1bHRcIjogW1wiQmFzaWNcIiwgXCJCYXNpYyAoYW5kIHJldmVyc2VkIGNhcmQpXCJdLFxuICAgIFwiZXJyb3JcIjogbnVsbFxufVxuICovXG5leHBvcnQgY2xhc3MgTW9kZWxOYW1lc0NsaWVudCBpbXBsZW1lbnRzIElNb2RlbE5hbWVzQ2xpZW50IHtcblxuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlKCk6IFByb21pc2U8c3RyaW5nW10+IHtcblxuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcIm1vZGVsTmFtZXNcIixcbiAgICAgICAgICAgIHZlcnNpb246IDYsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW5pdCA9IHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG5cbiAgICAgICAgcmV0dXJuIDxzdHJpbmdbXT4gYXdhaXQgQW5raUNvbm5lY3RGZXRjaC5mZXRjaChpbml0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGhhdCByZXR1cm5zIHRoZSBnaXZlbiByZXN1bHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrKHJlc3VsdDogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gVHlwZU1vcS5Nb2NrLm9mVHlwZTxJTW9kZWxOYW1lc0NsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKCkpLnJldHVybnMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm9iamVjdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTW9kZWxOYW1lc0NsaWVudCB7XG5cbiAgICBleGVjdXRlKCk6IFByb21pc2U8c3RyaW5nW10+O1xuXG59XG4iXX0=