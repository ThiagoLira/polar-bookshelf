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
class CreateDeckClient {
    execute(deck) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "createDeck",
                version: 6,
                params: {
                    deck
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
exports.CreateDeckClient = CreateDeckClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRGVja0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZURlY2tDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELGlEQUFtQztBQXVCbkMsTUFBYSxnQkFBZ0I7SUFFWixPQUFPLENBQUMsSUFBWTs7WUFFN0IsTUFBTSxJQUFJLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE1BQU0sRUFBRTtvQkFDSixJQUFJO2lCQUNQO2FBQ0osQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBRTVELE9BQWdCLE1BQU0sbUNBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZELENBQUM7S0FBQTtJQUtNLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBYztRQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBcUIsQ0FBQztRQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7QUEzQkQsNENBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuLi9BbmtpQ29ubmVjdEZldGNoJztcbmltcG9ydCAqIGFzIFR5cGVNb3EgZnJvbSBcInR5cGVtb3FcIjtcblxuLyoqXG4gQ3JlYXRlIGEgbmV3IGVtcHR5IGRlY2suIFdpbGwgbm90IG92ZXJ3cml0ZSBhIGRlY2sgdGhhdCBleGlzdHMgd2l0aCB0aGUgc2FtZVxuIG5hbWUuXG5cbiBTYW1wbGUgcmVxdWVzdDpcblxuIHtcbiAgICBcImFjdGlvblwiOiBcImNyZWF0ZURlY2tcIixcbiAgICBcInZlcnNpb25cIjogNixcbiAgICBcInBhcmFtc1wiOiB7XG4gICAgXCJkZWNrXCI6IFwiSmFwYW5lc2U6OlRva3lvXCJcbn1cbn1cbiBTYW1wbGUgcmVzdWx0OlxuXG4ge1xuICAgIFwicmVzdWx0XCI6IDE1MTkzMjM3NDI3MjEsXG4gICAgXCJlcnJvclwiOiBudWxsXG59XG5cbiAqL1xuZXhwb3J0IGNsYXNzIENyZWF0ZURlY2tDbGllbnQgaW1wbGVtZW50cyBJQ3JlYXRlRGVja0NsaWVudCB7XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZShkZWNrOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwiY3JlYXRlRGVja1wiLFxuICAgICAgICAgICAgdmVyc2lvbjogNixcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGRlY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0ID0geyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfTtcblxuICAgICAgICByZXR1cm4gPG51bWJlcj4gYXdhaXQgQW5raUNvbm5lY3RGZXRjaC5mZXRjaChpbml0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGhhdCByZXR1cm5zIHRoZSBnaXZlbiByZXN1bHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrKHJlc3VsdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IFR5cGVNb3EuTW9jay5vZlR5cGU8SUNyZWF0ZURlY2tDbGllbnQ+KCk7XG4gICAgICAgIGNsaWVudC5zZXR1cCh4ID0+IHguZXhlY3V0ZShUeXBlTW9xLkl0LmlzQW55KCkpKS5yZXR1cm5zKCgpID0+IFByb21pc2UucmVzb2x2ZShyZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5vYmplY3Q7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNyZWF0ZURlY2tDbGllbnQge1xuXG4gICAgZXhlY3V0ZShkZWNrOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj47XG5cbn1cblxuIl19