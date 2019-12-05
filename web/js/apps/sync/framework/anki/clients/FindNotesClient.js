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
class FindNotesClient {
    execute(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "findNotes",
                version: 6,
                params: {
                    query
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
exports.FindNotesClient = FindNotesClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluZE5vdGVzQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmluZE5vdGVzQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCxpREFBbUM7QUF3Qm5DLE1BQWEsZUFBZTtJQUVYLE9BQU8sQ0FBQyxLQUFhOztZQUU5QixNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsV0FBVztnQkFDbkIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxFQUFFO29CQUNKLEtBQUs7aUJBQ1I7YUFDSixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsT0FBa0IsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekQsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFnQjtRQUNyQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBb0IsQ0FBQztRQUN2RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7QUEzQkQsMENBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuLi9BbmtpQ29ubmVjdEZldGNoJztcbmltcG9ydCAqIGFzIFR5cGVNb3EgZnJvbSBcInR5cGVtb3FcIjtcblxuLyoqXG5maW5kTm90ZXNcblxuUmV0dXJucyBhbiBhcnJheSBvZiBub3RlIElEcyBmb3IgYSBnaXZlbiBxdWVyeS4gU2FtZSBxdWVyeSBzeW50YXggYXMgZ3VpQnJvd3NlLlxuXG5TYW1wbGUgcmVxdWVzdDpcblxue1xuICAgIFwiYWN0aW9uXCI6IFwiZmluZE5vdGVzXCIsXG4gICAgXCJ2ZXJzaW9uXCI6IDYsXG4gICAgXCJwYXJhbXNcIjoge1xuICAgIFwicXVlcnlcIjogXCJkZWNrOmN1cnJlbnRcIlxufVxufVxuIFNhbXBsZSByZXN1bHQ6XG5cbiB7XG4gICAgXCJyZXN1bHRcIjogWzE0ODM5NTkyODk4MTcsIDE0ODM5NTkyOTE2OTVdLFxuICAgIFwiZXJyb3JcIjogbnVsbFxufVxuXG4gKi9cbmV4cG9ydCBjbGFzcyBGaW5kTm90ZXNDbGllbnQgaW1wbGVtZW50cyBJRmluZE5vdGVzQ2xpZW50IHtcblxuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcltdPiB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJmaW5kTm90ZXNcIixcbiAgICAgICAgICAgIHZlcnNpb246IDYsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGluaXQgPSB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9O1xuXG4gICAgICAgIHJldHVybiA8bnVtYmVyW10+IGF3YWl0IEFua2lDb25uZWN0RmV0Y2guZmV0Y2goaW5pdCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBtb2NrIHRoYXQgcmV0dXJucyB0aGUgZ2l2ZW4gcmVzdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlTW9jayhyZXN1bHQ6IG51bWJlcltdKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IFR5cGVNb3EuTW9jay5vZlR5cGU8SUZpbmROb3Rlc0NsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKFR5cGVNb3EuSXQuaXNBbnkoKSkpLnJldHVybnMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm9iamVjdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmluZE5vdGVzQ2xpZW50IHtcblxuICAgIGV4ZWN1dGUocXVlcnk6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyW10+O1xuXG59XG4iXX0=