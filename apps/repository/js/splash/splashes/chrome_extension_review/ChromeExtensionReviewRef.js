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
const ChromeExtensionReview_1 = require("./ChromeExtensionReview");
const ID = 'chrome-extension-review';
class ChromeExtensionReviewRef extends ConditionalPrioritizedComponentRef_1.ConditionalPrioritizedComponentRef {
    constructor() {
        super(ID, 30, 'active');
        this.id = ID;
    }
    create() {
        return React.createElement(ChromeExtensionReview_1.ChromeExtensionReview, { settingKey: this.settingKey });
    }
}
exports.ChromeExtensionReviewRef = ChromeExtensionReviewRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hyb21lRXh0ZW5zaW9uUmV2aWV3UmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hyb21lRXh0ZW5zaW9uUmV2aWV3UmVmLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsOEZBQXlGO0FBQ3pGLG1FQUE4RDtBQUU5RCxNQUFNLEVBQUUsR0FBRyx5QkFBeUIsQ0FBQztBQUVyQyxNQUFhLHdCQUF5QixTQUFRLHVFQUFrQztJQUk1RTtRQUNJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBSFosT0FBRSxHQUFHLEVBQUUsQ0FBQztJQUl4QixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sb0JBQUMsNkNBQXFCLElBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztJQUNqRSxDQUFDO0NBRUo7QUFaRCw0REFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZn0gZnJvbSAnLi4vQ29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZic7XG5pbXBvcnQge0Nocm9tZUV4dGVuc2lvblJldmlld30gZnJvbSAnLi9DaHJvbWVFeHRlbnNpb25SZXZpZXcnO1xuXG5jb25zdCBJRCA9ICdjaHJvbWUtZXh0ZW5zaW9uLXJldmlldyc7XG5cbmV4cG9ydCBjbGFzcyBDaHJvbWVFeHRlbnNpb25SZXZpZXdSZWYgZXh0ZW5kcyBDb25kaXRpb25hbFByaW9yaXRpemVkQ29tcG9uZW50UmVmIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZCA9IElEO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKElELCAzMCwgJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gPENocm9tZUV4dGVuc2lvblJldmlldyBzZXR0aW5nS2V5PXt0aGlzLnNldHRpbmdLZXl9Lz47XG4gICAgfVxuXG59XG4iXX0=