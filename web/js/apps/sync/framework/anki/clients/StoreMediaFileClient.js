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
class StoreMediaFileClient {
    execute(filename, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                action: "storeMediaFile",
                version: 6,
                params: {
                    filename, data
                }
            };
            const init = { method: 'POST', body: JSON.stringify(body) };
            yield AnkiConnectFetch_1.AnkiConnectFetch.fetch(init);
        });
    }
    static createMock() {
        const client = TypeMoq.Mock.ofType();
        client.setup(x => x.execute(TypeMoq.It.isAny(), TypeMoq.It.isAny())).returns(() => Promise.resolve());
        return client.object;
    }
}
exports.StoreMediaFileClient = StoreMediaFileClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmVNZWRpYUZpbGVDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdG9yZU1lZGlhRmlsZUNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQsaURBQW1DO0FBK0JuQyxNQUFhLG9CQUFvQjtJQUVoQixPQUFPLENBQUMsUUFBZ0IsRUFBRSxJQUFZOztZQUUvQyxNQUFNLElBQUksR0FBRztnQkFDVCxNQUFNLEVBQUUsZ0JBQWdCO2dCQUN4QixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUU7b0JBQ0osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2FBQ0osQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBRTVELE1BQU0sbUNBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLENBQUM7S0FBQTtJQUtNLE1BQU0sQ0FBQyxVQUFVO1FBQ3BCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUF5QixDQUFDO1FBQzVELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RHLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7QUEzQkQsb0RBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmtpQ29ubmVjdEZldGNofSBmcm9tICcuLi9BbmtpQ29ubmVjdEZldGNoJztcbmltcG9ydCAqIGFzIFR5cGVNb3EgZnJvbSBcInR5cGVtb3FcIjtcbmltcG9ydCB7Tm90ZURlc2NyaXB0b3J9IGZyb20gJy4uL05vdGVEZXNjcmlwdG9yJztcblxuLyoqXG4gKlxuICogc3RvcmVNZWRpYUZpbGVcbiAqXG4gKiBTdG9yZXMgYSBmaWxlIHdpdGggdGhlIHNwZWNpZmllZCBiYXNlNjQtZW5jb2RlZCBjb250ZW50cyBpbnNpZGUgdGhlIG1lZGlhIGZvbGRlci4gVG8gcHJldmVudCBBbmtpIGZyb20gcmVtb3ZpbmcgZmlsZXMgbm90IHVzZWQgYnkgYW55IGNhcmRzIChlLmcuIGZvciBjb25maWd1cmF0aW9uIGZpbGVzKSwgcHJlZml4IHRoZSBmaWxlbmFtZSB3aXRoIGFuIHVuZGVyc2NvcmUuIFRoZXNlIGZpbGVzIGFyZSBzdGlsbCBzeW5jaHJvbml6ZWQgdG8gQW5raVdlYi5cbiAqXG4gKiBTYW1wbGUgcmVxdWVzdDpcbiAqXG4gKiB7XG4gKiAgICBcImFjdGlvblwiOiBcInN0b3JlTWVkaWFGaWxlXCIsXG4gKiAgICBcInZlcnNpb25cIjogNixcbiAqICAgIFwicGFyYW1zXCI6IHtcbiAqICAgICAgICBcImZpbGVuYW1lXCI6IFwiX2hlbGxvLnR4dFwiLFxuICogICAgICAgIFwiZGF0YVwiOiBcIlNHVnNiRzhzSUhkdmNteGtJUT09XCJcbiAqICAgIH1cbiAqIH1cbiAqIFNhbXBsZSByZXN1bHQ6XG4gKlxuICoge1xuICogICAgXCJyZXN1bHRcIjogbnVsbCxcbiAqICAgIFwiZXJyb3JcIjogbnVsbFxuICp9XG4gKiBDb250ZW50IG9mIF9oZWxsby50eHQ6XG4gKlxuICogSGVsbG8gd29ybGQhXG4gKlxuICogKlxuICovXG5leHBvcnQgY2xhc3MgU3RvcmVNZWRpYUZpbGVDbGllbnQgaW1wbGVtZW50cyBJU3RvcmVNZWRpYUZpbGVDbGllbnQge1xuXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGUoZmlsZW5hbWU6IHN0cmluZywgZGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJzdG9yZU1lZGlhRmlsZVwiLFxuICAgICAgICAgICAgdmVyc2lvbjogNixcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGZpbGVuYW1lLCBkYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW5pdCA9IHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH07XG5cbiAgICAgICAgYXdhaXQgQW5raUNvbm5lY3RGZXRjaC5mZXRjaChpbml0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG1vY2sgdGhhdCByZXR1cm5zIHRoZSBnaXZlbiByZXN1bHQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVNb2NrKCkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBUeXBlTW9xLk1vY2sub2ZUeXBlPElTdG9yZU1lZGlhRmlsZUNsaWVudD4oKTtcbiAgICAgICAgY2xpZW50LnNldHVwKHggPT4geC5leGVjdXRlKFR5cGVNb3EuSXQuaXNBbnkoKSwgVHlwZU1vcS5JdC5pc0FueSgpKSkucmV0dXJucygoKSA9PiBQcm9taXNlLnJlc29sdmUoKSk7XG4gICAgICAgIHJldHVybiBjbGllbnQub2JqZWN0O1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yZU1lZGlhRmlsZUNsaWVudCB7XG5cbiAgICBleGVjdXRlKGZpbGVuYW1lOiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUZpbGUge1xuXG4gICAgcmVhZG9ubHkgZmlsZW5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEJhc2U2NCBiaW5hcnkgZGF0YSBmb3IgdGhlIG1lZGlhLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGE6IHN0cmluZztcblxufVxuIl19