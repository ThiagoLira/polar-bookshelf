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
class AddNotesClient {
    execute(notes) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "addNotes",
                version: 6,
                params: {
                    notes
                }
            };
            const init = { method: 'POST', body: JSON.stringify(body) };
            return yield AnkiConnectFetch_1.AnkiConnectFetch.fetch(init);
        });
    }
    static createMock(result) {
        const client = TypeMoq.Mock.ofType();
        client.setup(x => x.execute(TypeMoq.It.isAny())).returns(() => Promise.resolve(result));
        return client.object;
    }
}
exports.AddNotesClient = AddNotesClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkTm90ZXNDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBZGROb3Rlc0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsaURBQW1DO0FBRW5DLE1BQWEsY0FBYztJQUVWLE9BQU8sQ0FBQyxLQUFhOztZQUU5QixNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxFQUFFO29CQUNKLEtBQUs7aUJBQ1I7YUFDSixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsT0FBa0IsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekQsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFnQjtRQUNyQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBbUIsQ0FBQztRQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7QUEzQkQsd0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuLi9BbmtpQ29ubmVjdEZldGNoJztcbmltcG9ydCAqIGFzIFR5cGVNb3EgZnJvbSBcInR5cGVtb3FcIjtcblxuZXhwb3J0IGNsYXNzIEFkZE5vdGVzQ2xpZW50IGltcGxlbWVudHMgSUFkZE5vdGVzQ2xpZW50IHtcblxuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlKG5vdGVzOiBOb3RlW10pOiBQcm9taXNlPG51bWJlcltdPiB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJhZGROb3Rlc1wiLFxuICAgICAgICAgICAgdmVyc2lvbjogNixcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG5vdGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW5pdCA9IHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG5cbiAgICAgICAgcmV0dXJuIDxudW1iZXJbXT4gYXdhaXQgQW5raUNvbm5lY3RGZXRjaC5mZXRjaChpbml0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGhhdCByZXR1cm5zIHRoZSBnaXZlbiByZXN1bHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrKHJlc3VsdDogbnVtYmVyW10pIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gVHlwZU1vcS5Nb2NrLm9mVHlwZTxJQWRkTm90ZXNDbGllbnQ+KCk7XG4gICAgICAgIGNsaWVudC5zZXR1cCh4ID0+IHguZXhlY3V0ZShUeXBlTW9xLkl0LmlzQW55KCkpKS5yZXR1cm5zKCgpID0+IFByb21pc2UucmVzb2x2ZShyZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5vYmplY3Q7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90ZSB7XG5cbiAgICByZWFkb25seSBkZWNrTmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IG1vZGVsTmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGZpZWxkczoge1tuYW1lOiBzdHJpbmddOiBzdHJpbmd9O1xuICAgIHJlYWRvbmx5IHRhZ3M6IHN0cmluZ1tdO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFkZE5vdGVzQ2xpZW50IHtcblxuICAgIGV4ZWN1dGUobm90ZXM6IE5vdGVbXSk6IFByb21pc2U8bnVtYmVyW10+O1xuXG59XG4iXX0=