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
class DeckNamesAndIdsClient {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "deckNamesAndIds",
                version: 6
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
exports.DeckNamesAndIdsClient = DeckNamesAndIdsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVja05hbWVzQW5kSWRzQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVja05hbWVzQW5kSWRzQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCxpREFBbUM7QUFFbkMsTUFBYSxxQkFBcUI7SUFFakIsT0FBTzs7WUFFaEIsTUFBTSxJQUFJLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsT0FBTyxFQUFFLENBQUM7YUFDYixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsT0FBeUIsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEUsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUF1QjtRQUM1QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBMEIsQ0FBQztRQUM3RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztDQUVKO0FBeEJELHNEQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5raUNvbm5lY3RGZXRjaH0gZnJvbSAnLi4vQW5raUNvbm5lY3RGZXRjaCc7XG5pbXBvcnQgKiBhcyBUeXBlTW9xIGZyb20gXCJ0eXBlbW9xXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWNrTmFtZXNBbmRJZHNDbGllbnQgaW1wbGVtZW50cyBJRGVja05hbWVzQW5kSWRzQ2xpZW50IHtcblxuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlKCk6IFByb21pc2U8RGVja05hbWVzQW5kSWRzPiB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJkZWNrTmFtZXNBbmRJZHNcIixcbiAgICAgICAgICAgIHZlcnNpb246IDZcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0ID0geyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfTtcblxuICAgICAgICByZXR1cm4gPERlY2tOYW1lc0FuZElkcz4gYXdhaXQgQW5raUNvbm5lY3RGZXRjaC5mZXRjaChpbml0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGhhdCByZXR1cm5zIHRoZSBnaXZlbiByZXN1bHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrKHJlc3VsdDogRGVja05hbWVzQW5kSWRzKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IFR5cGVNb3EuTW9jay5vZlR5cGU8SURlY2tOYW1lc0FuZElkc0NsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKCkpLnJldHVybnMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm9iamVjdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWNrTmFtZXNBbmRJZHMge1tkZWNrOiBzdHJpbmddOiBudW1iZXJ9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURlY2tOYW1lc0FuZElkc0NsaWVudCB7XG5cbiAgICBleGVjdXRlKCk6IFByb21pc2U8RGVja05hbWVzQW5kSWRzPjtcblxufVxuIl19