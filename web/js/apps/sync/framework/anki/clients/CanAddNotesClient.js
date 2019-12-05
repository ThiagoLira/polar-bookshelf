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
class CanAddNotesClient {
    execute(notes) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "canAddNotes",
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
exports.CanAddNotesClient = CanAddNotesClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FuQWRkTm90ZXNDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYW5BZGROb3Rlc0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsaURBQW1DO0FBcUNuQyxNQUFhLGlCQUFpQjtJQUViLE9BQU8sQ0FBQyxLQUFhOztZQUU5QixNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsYUFBYTtnQkFDckIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxFQUFFO29CQUNKLEtBQUs7aUJBQ1I7YUFDSixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsT0FBbUIsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFpQjtRQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBc0IsQ0FBQztRQUN6RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7QUEzQkQsOENBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuLi9BbmtpQ29ubmVjdEZldGNoJztcbmltcG9ydCAqIGFzIFR5cGVNb3EgZnJvbSBcInR5cGVtb3FcIjtcblxuLyoqXG4gKlxuICogY2FuQWRkTm90ZXNcbiAqXG4gKiBBY2NlcHRzIGFuIGFycmF5IG9mIG9iamVjdHMgd2hpY2ggZGVmaW5lIHBhcmFtZXRlcnMgZm9yIGNhbmRpZGF0ZSBub3RlcyAoc2VlIGFkZE5vdGUpIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGJvb2xlYW5zIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIHBhcmFtZXRlcnMgYXQgdGhlIGNvcnJlc3BvbmRpbmcgaW5kZXggY291bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuZXcgbm90ZS5cbiAqXG4gKiBTYW1wbGUgcmVxdWVzdDpcbiAqXG4gKiB7XG4gKiAgICBcImFjdGlvblwiOiBcImNhbkFkZE5vdGVzXCIsXG4gKiAgICBcInZlcnNpb25cIjogNixcbiAqICAgIFwicGFyYW1zXCI6IHtcbiAqICAgICAgICBcIm5vdGVzXCI6IFtcbiAqICAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAgXCJkZWNrTmFtZVwiOiBcIkRlZmF1bHRcIixcbiAqICAgICAgICAgICAgICAgIFwibW9kZWxOYW1lXCI6IFwiQmFzaWNcIixcbiAqICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAqICAgICAgICAgICAgICAgICAgICBcIkZyb250XCI6IFwiZnJvbnQgY29udGVudFwiLFxuICogICAgICAgICAgICAgICAgICAgIFwiQmFja1wiOiBcImJhY2sgY29udGVudFwiXG4gKiAgICAgICAgICAgICAgICB9LFxuICogICAgICAgICAgICAgICAgXCJ0YWdzXCI6IFtcbiAqICAgICAgICAgICAgICAgICAgICBcInlvbWljaGFuXCJcbiAqICAgICAgICAgICAgICAgIF1cbiAqICAgICAgICAgICAgfVxuICogICAgICAgIF1cbiAqICAgIH1cbiAqfVxuICogU2FtcGxlIHJlc3VsdDpcbiAqXG4gKiB7XG4gKiAgICBcInJlc3VsdFwiOiBbdHJ1ZV0sXG4gKiAgICBcImVycm9yXCI6IG51bGxcbiAqfVxuICpcbiAqICovXG5leHBvcnQgY2xhc3MgQ2FuQWRkTm90ZXNDbGllbnQgaW1wbGVtZW50cyBJQ2FuQWRkTm90ZXNDbGllbnQge1xuXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUobm90ZXM6IE5vdGVbXSk6IFByb21pc2U8Ym9vbGVhbltdPiB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJjYW5BZGROb3Rlc1wiLFxuICAgICAgICAgICAgdmVyc2lvbjogNixcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG5vdGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW5pdCA9IHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG5cbiAgICAgICAgcmV0dXJuIDxib29sZWFuW10+IGF3YWl0IEFua2lDb25uZWN0RmV0Y2guZmV0Y2goaW5pdCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBtb2NrIHRoYXQgcmV0dXJucyB0aGUgZ2l2ZW4gcmVzdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlTW9jayhyZXN1bHQ6IGJvb2xlYW5bXSkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBUeXBlTW9xLk1vY2sub2ZUeXBlPElDYW5BZGROb3Rlc0NsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKFR5cGVNb3EuSXQuaXNBbnkoKSkpLnJldHVybnMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkpO1xuICAgICAgICByZXR1cm4gY2xpZW50Lm9iamVjdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RlIHtcblxuICAgIHJlYWRvbmx5IGRlY2tOYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgbW9kZWxOYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZmllbGRzOiB7W25hbWU6IHN0cmluZ106IHN0cmluZ307XG4gICAgcmVhZG9ubHkgdGFnczogc3RyaW5nW107XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2FuQWRkTm90ZXNDbGllbnQge1xuXG4gICAgZXhlY3V0ZShub3RlczogTm90ZVtdKTogUHJvbWlzZTxib29sZWFuW10+O1xuXG59XG4iXX0=