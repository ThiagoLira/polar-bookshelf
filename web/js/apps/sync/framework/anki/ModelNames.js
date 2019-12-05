"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SetArrays_1 = require("polar-shared/src/util/SetArrays");
class ModelNames {
    static verifyRequired(modelNames) {
        const requiredModelNames = ["Cloze", "Basic"];
        const diff = SetArrays_1.SetArrays.difference(requiredModelNames, modelNames);
        if (diff.length !== 0) {
            const msg = "Missing the following required Anki models (the names " +
                "may be in another language.  Copy them to English card " +
                "names for now): ";
            throw new Error(msg + diff);
        }
    }
}
exports.ModelNames = ModelNames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxOYW1lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vZGVsTmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrREFBMEQ7QUFFMUQsTUFBYSxVQUFVO0lBRVosTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFpQztRQUUxRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTlDLE1BQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRWxFLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFFbkIsTUFBTSxHQUFHLEdBQUcsd0RBQXdEO2dCQUN4RCx5REFBeUQ7Z0JBQ3pELGtCQUFrQixDQUFDO1lBRS9CLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBRS9CO0lBRUwsQ0FBQztDQUVKO0FBcEJELGdDQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kZWxOYW1lc0NsaWVudH0gZnJvbSBcIi4vY2xpZW50cy9Nb2RlbE5hbWVzQ2xpZW50XCI7XG5pbXBvcnQge1NldEFycmF5c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TZXRBcnJheXNcIjtcblxuZXhwb3J0IGNsYXNzIE1vZGVsTmFtZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyB2ZXJpZnlSZXF1aXJlZChtb2RlbE5hbWVzOiBSZWFkb25seUFycmF5PHN0cmluZz4pIHtcblxuICAgICAgICBjb25zdCByZXF1aXJlZE1vZGVsTmFtZXMgPSBbXCJDbG96ZVwiLCBcIkJhc2ljXCJdO1xuXG4gICAgICAgIGNvbnN0IGRpZmYgPSBTZXRBcnJheXMuZGlmZmVyZW5jZShyZXF1aXJlZE1vZGVsTmFtZXMsIG1vZGVsTmFtZXMpO1xuXG4gICAgICAgIGlmIChkaWZmLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBcIk1pc3NpbmcgdGhlIGZvbGxvd2luZyByZXF1aXJlZCBBbmtpIG1vZGVscyAodGhlIG5hbWVzIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWF5IGJlIGluIGFub3RoZXIgbGFuZ3VhZ2UuICBDb3B5IHRoZW0gdG8gRW5nbGlzaCBjYXJkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZXMgZm9yIG5vdyk6IFwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnICsgZGlmZik7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbiJdfQ==