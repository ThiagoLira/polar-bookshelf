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
class NotesInfoClient {
    execute(notes) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "notesInfo",
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
exports.NotesInfoClient = NotesInfoClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNJbmZvQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTm90ZXNJbmZvQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUVyRCxpREFBbUM7QUFpQ25DLE1BQWEsZUFBZTtJQUVYLE9BQU8sQ0FBQyxLQUFlOztZQUVoQyxNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsV0FBVztnQkFDbkIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxFQUFFO29CQUNKLEtBQUs7aUJBQ1I7YUFDSixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsT0FBb0IsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0QsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFrQjtRQUN2QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBb0IsQ0FBQztRQUN2RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7QUEzQkQsMENBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuLi9BbmtpQ29ubmVjdEZldGNoJztcbmltcG9ydCB7RGVja05hbWVzQW5kSWRzLCBJRGVja05hbWVzQW5kSWRzQ2xpZW50fSBmcm9tICcuL0RlY2tOYW1lc0FuZElkc0NsaWVudCc7XG5pbXBvcnQgKiBhcyBUeXBlTW9xIGZyb20gXCJ0eXBlbW9xXCI7XG5cbi8qKlxuICpcbiAqIFJldHVybnMgYSBsaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyBmb3IgZWFjaCBub3RlIElEIHRoZSBub3RlIGZpZWxkcywgdGFncyxcbiAqIG5vdGUgdHlwZSBhbmQgdGhlIGNhcmRzIGJlbG9uZ2luZyB0byB0aGUgbm90ZS5cbiAqXG4gKiBTYW1wbGUgcmVxdWVzdDpcbiAqXG4gKiB7XG4gKiAgICBcImFjdGlvblwiOiBcIm5vdGVzSW5mb1wiLFxuICogICAgXCJ2ZXJzaW9uXCI6IDYsXG4gKiAgICBcInBhcmFtc1wiOiB7XG4gKiAgICBcIm5vdGVzXCI6IFsxNTAyMjk4MDMzNzUzXVxuICogfVxuICpcbiAqIFNhbXBsZSByZXN1bHQ6XG4gKlxuICoge1xuICogICAgXCJyZXN1bHRcIjogW1xuICogICAge1xuICogICAgICAgIFwibm90ZUlkXCI6MTUwMjI5ODAzMzc1MyxcbiAqICAgICAgICBcIm1vZGVsTmFtZVwiOiBcIkJhc2ljXCIsXG4gKiAgICAgICAgXCJ0YWdzXCI6W1widGFnXCIsXCJhbm90aGVyX3RhZ1wiXSxcbiAqICAgICAgICBcImZpZWxkc1wiOiB7XG4gKiAgICAgICAgICAgIFwiRnJvbnRcIjoge1widmFsdWVcIjogXCJmcm9udCBjb250ZW50XCIsIFwib3JkZXJcIjogMH0sXG4gKiAgICAgICAgICAgIFwiQmFja1wiOiB7XCJ2YWx1ZVwiOiBcImJhY2sgY29udGVudFwiLCBcIm9yZGVyXCI6IDF9XG4gKiAgICAgICAgfVxuICogICAgfVxuICogXSxcbiAqIFwiZXJyb3JcIjogbnVsbFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE5vdGVzSW5mb0NsaWVudCBpbXBsZW1lbnRzIElOb3Rlc0luZm9DbGllbnQge1xuXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUobm90ZXM6IG51bWJlcltdKTogUHJvbWlzZTxOb3RlSW5mb1tdPiB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJub3Rlc0luZm9cIixcbiAgICAgICAgICAgIHZlcnNpb246IDYsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBub3Rlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGluaXQgPSB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSB9O1xuXG4gICAgICAgIHJldHVybiA8Tm90ZUluZm9bXT4gYXdhaXQgQW5raUNvbm5lY3RGZXRjaC5mZXRjaChpbml0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGhhdCByZXR1cm5zIHRoZSBnaXZlbiByZXN1bHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrKHJlc3VsdDogTm90ZUluZm9bXSkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBUeXBlTW9xLk1vY2sub2ZUeXBlPElOb3Rlc0luZm9DbGllbnQ+KCk7XG4gICAgICAgIGNsaWVudC5zZXR1cCh4ID0+IHguZXhlY3V0ZShUeXBlTW9xLkl0LmlzQW55KCkpKS5yZXR1cm5zKCgpID0+IFByb21pc2UucmVzb2x2ZShyZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5vYmplY3Q7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGVzSW5mb0NsaWVudCB7XG5cbiAgICBleGVjdXRlKG5vdGVzOiBudW1iZXJbXSk6IFByb21pc2U8Tm90ZUluZm9bXT47XG5cbn1cblxuaW50ZXJmYWNlIE5vdGVJbmZvIHtcbiAgICBub3RlSWQ6IG51bWJlcjtcbiAgICBtb2RlbE5hbWU6IHN0cmluZztcbiAgICB0YWdzOiBzdHJpbmdbXTtcbiAgICBmaWVsZHM6IHtbbmFtZTogc3RyaW5nXTogRmllbGR9O1xufVxuXG5pbnRlcmZhY2UgRmllbGQge1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgb3JkZXI6IG51bWJlcjtcbn1cblxuIl19