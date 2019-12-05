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
class AddNoteClient {
    execute(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "addNote",
                version: 6,
                params: {
                    note
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
exports.AddNoteClient = AddNoteClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkTm90ZUNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFkZE5vdGVDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELGlEQUFtQztBQXFEbkMsTUFBYSxhQUFhO0lBRVQsT0FBTyxDQUFDLElBQW9COztZQUVyQyxNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsU0FBUztnQkFDakIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxFQUFFO29CQUNKLElBQUk7aUJBQ1A7YUFDSixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFNUQsT0FBZ0IsTUFBTSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkQsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFjO1FBQ25DLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFrQixDQUFDO1FBQ3JELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjtBQTNCRCxzQ0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fua2lDb25uZWN0RmV0Y2h9IGZyb20gJy4uL0Fua2lDb25uZWN0RmV0Y2gnO1xuaW1wb3J0ICogYXMgVHlwZU1vcSBmcm9tIFwidHlwZW1vcVwiO1xuaW1wb3J0IHtOb3RlRGVzY3JpcHRvcn0gZnJvbSAnLi4vTm90ZURlc2NyaXB0b3InO1xuXG4vKipcbiAqIGFkZE5vdGVcbiAqXG4gKiBDcmVhdGVzIGEgbm90ZSB1c2luZyB0aGUgZ2l2ZW4gZGVjayBhbmQgbW9kZWwsIHdpdGggdGhlIHByb3ZpZGVkIGZpZWxkIHZhbHVlc1xuICogYW5kIHRhZ3MuIFJldHVybnMgdGhlIGlkZW50aWZpZXIgb2YgdGhlIGNyZWF0ZWQgbm90ZSBjcmVhdGVkIG9uIHN1Y2Nlc3MsIGFuZFxuICogbnVsbCBvbiBmYWlsdXJlLlxuICpcbiAqIEFua2lDb25uZWN0IGNhbiBkb3dubG9hZCBhdWRpbyBmaWxlcyBhbmQgZW1iZWQgdGhlbSBpbiBuZXdseSBjcmVhdGVkIG5vdGVzLlxuICogVGhlIGNvcnJlc3BvbmRpbmcgYXVkaW8gbm90ZSBtZW1iZXIgaXMgb3B0aW9uYWwgYW5kIGNhbiBiZSBvbWl0dGVkLiBJZiB5b3VcbiAqIGNob29zZSB0byBpbmNsdWRlIGl0LCB0aGUgdXJsIGFuZCBmaWxlbmFtZSBmaWVsZHMgbXVzdCBiZSBhbHNvIGRlZmluZWQuIFRoZVxuICogc2tpcEhhc2ggZmllbGQgY2FuIGJlIG9wdGlvbmFsbHkgcHJvdmlkZWQgdG8gc2tpcCB0aGUgaW5jbHVzaW9uIG9mIGRvd25sb2FkZWRcbiAqIGZpbGVzIHdpdGggYW4gTUQ1IGhhc2ggdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhpcyBpcyB1c2VmdWwgZm9yXG4gKiBhdm9pZGluZyB0aGUgc2F2aW5nIG9mIGVycm9yIHBhZ2VzIGFuZCBzdHViIGZpbGVzLiBUaGUgZmllbGRzIG1lbWJlciBpcyBhXG4gKiBsaXN0IG9mIGZpZWxkcyB0aGF0IHNob3VsZCBwbGF5IGF1ZGlvIHdoZW4gdGhlIGNhcmQgaXMgZGlzcGxheWVkIGluIEFua2kuXG4gKlxuICogU2FtcGxlIHJlcXVlc3Q6XG4gKlxuICoge1xuICogICAgXCJhY3Rpb25cIjogXCJhZGROb3RlXCIsXG4gKiAgICBcInZlcnNpb25cIjogNixcbiAqICAgIFwicGFyYW1zXCI6IHtcbiAqICAgICAgICBcIm5vdGVcIjoge1xuICogICAgICAgICAgICBcImRlY2tOYW1lXCI6IFwiRGVmYXVsdFwiLFxuICogICAgICAgICAgICBcIm1vZGVsTmFtZVwiOiBcIkJhc2ljXCIsXG4gKiAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAqICAgICAgICAgICAgICAgIFwiRnJvbnRcIjogXCJmcm9udCBjb250ZW50XCIsXG4gKiAgICAgICAgICAgICAgICBcIkJhY2tcIjogXCJiYWNrIGNvbnRlbnRcIlxuICogICAgICAgICAgICB9LFxuICogICAgICAgICAgICBcInRhZ3NcIjogW1xuICogICAgICAgICAgICAgICAgXCJ5b21pY2hhblwiXG4gKiAgICAgICAgICAgIF0sXG4gKiAgICAgICAgICAgIFwiYXVkaW9cIjoge1xuICogICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2Fzc2V0cy5sYW5ndWFnZXBvZDEwMS5jb20vZGljdGlvbmFyeS9qYXBhbmVzZS9hdWRpb21wMy5waHA/a2Fuamk954yrJmthbmE944Gt44GTXCIsXG4gKiAgICAgICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwieW9taWNoYW5f44Gt44GTX+eMqy5tcDNcIixcbiAqICAgICAgICAgICAgICAgIFwic2tpcEhhc2hcIjogXCI3ZTJjMmY5NTRlZjYwNTEzNzNiYTkxNmYwMDAxNjhkY1wiLFxuICogICAgICAgICAgICAgICAgXCJmaWVsZHNcIjogW1xuICogICAgICAgICAgICAgICAgICAgIFwiRnJvbnRcIlxuICogICAgICAgICAgICAgICAgXVxuICogICAgICAgICAgICB9XG4gKiAgICAgICAgfVxuICogICAgfVxuICp9XG4gKlxuICpcbiAqIHtcbiAqICAgIFwicmVzdWx0XCI6IDE0OTYxOTgzOTU3MDcsXG4gKiAgICBcImVycm9yXCI6IG51bGxcbiAqIH1cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBBZGROb3RlQ2xpZW50IGltcGxlbWVudHMgSUFkZE5vdGVDbGllbnQge1xuXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUobm90ZTogTm90ZURlc2NyaXB0b3IpOiBQcm9taXNlPG51bWJlcj4ge1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwiYWRkTm90ZVwiLFxuICAgICAgICAgICAgdmVyc2lvbjogNixcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG5vdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbml0ID0geyBtZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSkgfTtcblxuICAgICAgICByZXR1cm4gPG51bWJlcj4gYXdhaXQgQW5raUNvbm5lY3RGZXRjaC5mZXRjaChpbml0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGhhdCByZXR1cm5zIHRoZSBnaXZlbiByZXN1bHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrKHJlc3VsdDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IFR5cGVNb3EuTW9jay5vZlR5cGU8SUFkZE5vdGVDbGllbnQ+KCk7XG4gICAgICAgIGNsaWVudC5zZXR1cCh4ID0+IHguZXhlY3V0ZShUeXBlTW9xLkl0LmlzQW55KCkpKS5yZXR1cm5zKCgpID0+IFByb21pc2UucmVzb2x2ZShyZXN1bHQpKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5vYmplY3Q7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFkZE5vdGVDbGllbnQge1xuXG4gICAgZXhlY3V0ZShub3RlczogTm90ZURlc2NyaXB0b3IpOiBQcm9taXNlPG51bWJlcj47XG5cbn1cbiJdfQ==