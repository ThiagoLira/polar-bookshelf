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
class UpdateNoteFieldsClient {
    execute(updateNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "updateNoteFields",
                version: 6,
                params: {
                    note: updateNote
                }
            };
            const init = { method: 'POST', body: JSON.stringify(body) };
            yield AnkiConnectFetch_1.AnkiConnectFetch.fetch(init);
        });
    }
    static createMock() {
        const client = TypeMoq.Mock.ofType();
        client.setup(x => x.execute(TypeMoq.It.isAny())).returns(() => Promise.resolve());
        return client.object;
    }
}
exports.UpdateNoteFieldsClient = UpdateNoteFieldsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlTm90ZUZpZWxkc0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVwZGF0ZU5vdGVGaWVsZHNDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELGlEQUFtQztBQTRCbkMsTUFBYSxzQkFBc0I7SUFFbEIsT0FBTyxDQUFDLFVBQXNCOztZQUV2QyxNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsa0JBQWtCO2dCQUMxQixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUU7b0JBQ0osSUFBSSxFQUFFLFVBQVU7aUJBQ25CO2FBQ0osQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBRTVELE1BQU0sbUNBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLENBQUM7S0FBQTtJQUtNLE1BQU0sQ0FBQyxVQUFVO1FBQ3BCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUEyQixDQUFDO1FBQzlELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNsRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztDQUVKO0FBM0JELHdEQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5raUNvbm5lY3RGZXRjaH0gZnJvbSAnLi4vQW5raUNvbm5lY3RGZXRjaCc7XG5pbXBvcnQgKiBhcyBUeXBlTW9xIGZyb20gXCJ0eXBlbW9xXCI7XG5cbi8qKlxuICpcbiAqIE1vZGlmeSB0aGUgZmllbGRzIG9mIGFuIGV4aXN0IG5vdGUuXG4gKlxuICogU2FtcGxlIHJlcXVlc3Q6XG4gKlxuICoge1xuICogICAgXCJhY3Rpb25cIjogXCJ1cGRhdGVOb3RlRmllbGRzXCIsXG4gKiAgICBcInZlcnNpb25cIjogNixcbiAqICAgIFwicGFyYW1zXCI6IHtcbiAqICAgICAgICBcIm5vdGVcIjoge1xuICogICAgICAgICAgICBcImlkXCI6IDE1MTQ1NDc1NDcwMzAsXG4gKiAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAqICAgICAgICAgICAgICAgIFwiRnJvbnRcIjogXCJuZXcgZnJvbnQgY29udGVudFwiLFxuICogICAgICAgICAgICAgICAgXCJCYWNrXCI6IFwibmV3IGJhY2sgY29udGVudFwiXG4gKiAgICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICB9XG4gKn1cbiAqIFNhbXBsZSByZXN1bHQ6XG4gKlxuICoge1xuICogICAgXCJyZXN1bHRcIjogbnVsbCxcbiAqICAgIFwiZXJyb3JcIjogbnVsbFxuICp9XG4gKi9cbmV4cG9ydCBjbGFzcyBVcGRhdGVOb3RlRmllbGRzQ2xpZW50IGltcGxlbWVudHMgSVVwZGF0ZU5vdGVGaWVsZHNDbGllbnQge1xuXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUodXBkYXRlTm90ZTogVXBkYXRlTm90ZSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwidXBkYXRlTm90ZUZpZWxkc1wiLFxuICAgICAgICAgICAgdmVyc2lvbjogNixcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG5vdGU6IHVwZGF0ZU5vdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0ID0geyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfTtcblxuICAgICAgICBhd2FpdCBBbmtpQ29ubmVjdEZldGNoLmZldGNoKGluaXQpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbW9jayB0aGF0IHJldHVybnMgdGhlIGdpdmVuIHJlc3VsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU1vY2soKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IFR5cGVNb3EuTW9jay5vZlR5cGU8SVVwZGF0ZU5vdGVGaWVsZHNDbGllbnQ+KCk7XG4gICAgICAgIGNsaWVudC5zZXR1cCh4ID0+IHguZXhlY3V0ZShUeXBlTW9xLkl0LmlzQW55KCkpKS5yZXR1cm5zKCgpID0+IFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5vYmplY3Q7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVwZGF0ZU5vdGVGaWVsZHNDbGllbnQge1xuXG4gICAgZXhlY3V0ZSh1cGRhdGVOb3RlOiBVcGRhdGVOb3RlKTogUHJvbWlzZTx2b2lkPjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZU5vdGUge1xuXG4gICAgcmVhZG9ubHkgaWQ6IG51bWJlcjtcbiAgICByZWFkb25seSBmaWVsZHM6IHtbbmFtZTogc3RyaW5nXTogc3RyaW5nfTtcblxufVxuIl19