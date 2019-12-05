"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
class AnkiFields {
    static normalize(fields) {
        const result = {};
        Dictionaries_1.Dictionaries.forDict(fields, (key, value) => {
            key = key.charAt(0).toUpperCase() + key.substr(1);
            result[key] = value;
        });
        return result;
    }
}
exports.AnkiFields = AnkiFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raUZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFua2lGaWVsZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFBZ0U7QUFFaEUsTUFBYSxVQUFVO0lBRVosTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFpQjtRQUVyQyxNQUFNLE1BQU0sR0FBYyxFQUFFLENBQUM7UUFFN0IsMkJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQWZELGdDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9EaWN0aW9uYXJpZXMnO1xuXG5leHBvcnQgY2xhc3MgQW5raUZpZWxkcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIG5vcm1hbGl6ZShmaWVsZHM6IEZpZWxkc01hcCkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogRmllbGRzTWFwID0ge307XG5cbiAgICAgICAgRGljdGlvbmFyaWVzLmZvckRpY3QoZmllbGRzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAga2V5ID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIEZpZWxkc01hcCB7W2tleTogc3RyaW5nXTogc3RyaW5nfVxuIl19