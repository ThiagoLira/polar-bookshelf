"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class LogLevels {
    static fromName(name) {
        const result = LogLevel_1.LogLevel[name];
        if (!result) {
            throw new Error("Invalid name: " + name);
        }
        return result;
    }
}
exports.LogLevels = LogLevels;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nTGV2ZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9nTGV2ZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQW9DO0FBRXBDLE1BQWEsU0FBUztJQUVYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBWTtRQUUvQixNQUFNLE1BQU0sR0FBVSxtQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBRSxNQUFNLEVBQUU7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztDQUVKO0FBZEQsOEJBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ0xldmVsfSBmcm9tICcuL0xvZ0xldmVsJztcblxuZXhwb3J0IGNsYXNzIExvZ0xldmVscyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21OYW1lKG5hbWU6IHN0cmluZyk6IExvZ0xldmVsIHtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSAoPGFueT4gTG9nTGV2ZWwpW25hbWVdO1xuXG4gICAgICAgIGlmICghIHJlc3VsdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBuYW1lOiBcIiArIG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuIl19