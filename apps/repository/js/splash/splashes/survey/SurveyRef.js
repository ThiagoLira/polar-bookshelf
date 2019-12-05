"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const ConditionalPrioritizedComponentRef_1 = require("../ConditionalPrioritizedComponentRef");
const Survey_1 = require("./Survey");
class SurveyRef extends ConditionalPrioritizedComponentRef_1.ConditionalPrioritizedComponentRef {
    constructor() {
        super('survey', 30, 'active');
        this.id = 'survey';
    }
    create() {
        return React.createElement(Survey_1.Survey, { settingKey: this.settingKey });
    }
}
exports.SurveyRef = SurveyRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VydmV5UmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3VydmV5UmVmLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsOEZBQXlGO0FBQ3pGLHFDQUFnQztBQUVoQyxNQUFhLFNBQVUsU0FBUSx1RUFBa0M7SUFJN0Q7UUFDSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUhsQixPQUFFLEdBQUcsUUFBUSxDQUFDO0lBSTlCLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxvQkFBQyxlQUFNLElBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztJQUNsRCxDQUFDO0NBRUo7QUFaRCw4QkFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZn0gZnJvbSAnLi4vQ29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZic7XG5pbXBvcnQge1N1cnZleX0gZnJvbSAnLi9TdXJ2ZXknO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UmVmIGV4dGVuZHMgQ29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZiB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQgPSAnc3VydmV5JztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc3VydmV5JywgMzAsICdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIDxTdXJ2ZXkgc2V0dGluZ0tleT17dGhpcy5zZXR0aW5nS2V5fS8+O1xuICAgIH1cblxufVxuIl19