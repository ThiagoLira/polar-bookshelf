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
const AlternativeToReview_1 = require("./AlternativeToReview");
const ID = 'alternative-to-review';
class AlternativeToReviewRef extends ConditionalPrioritizedComponentRef_1.ConditionalPrioritizedComponentRef {
    constructor() {
        super(ID, 20, 'active');
        this.id = ID;
    }
    create() {
        return React.createElement(AlternativeToReview_1.AlternativeToReview, { settingKey: this.settingKey });
    }
}
exports.AlternativeToReviewRef = AlternativeToReviewRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWx0ZXJuYXRpdmVUb1Jldmlld1JlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFsdGVybmF0aXZlVG9SZXZpZXdSZWYudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw4RkFBeUY7QUFDekYsK0RBQTBEO0FBRTFELE1BQU0sRUFBRSxHQUFHLHVCQUF1QixDQUFDO0FBRW5DLE1BQWEsc0JBQXVCLFNBQVEsdUVBQWtDO0lBSTFFO1FBQ0ksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFIWixPQUFFLEdBQUcsRUFBRSxDQUFDO0lBSXhCLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxvQkFBQyx5Q0FBbUIsSUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO0lBQy9ELENBQUM7Q0FFSjtBQVpELHdEQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDb25kaXRpb25hbFByaW9yaXRpemVkQ29tcG9uZW50UmVmfSBmcm9tICcuLi9Db25kaXRpb25hbFByaW9yaXRpemVkQ29tcG9uZW50UmVmJztcbmltcG9ydCB7QWx0ZXJuYXRpdmVUb1Jldmlld30gZnJvbSAnLi9BbHRlcm5hdGl2ZVRvUmV2aWV3JztcblxuY29uc3QgSUQgPSAnYWx0ZXJuYXRpdmUtdG8tcmV2aWV3JztcblxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlVG9SZXZpZXdSZWYgZXh0ZW5kcyBDb25kaXRpb25hbFByaW9yaXRpemVkQ29tcG9uZW50UmVmIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZCA9IElEO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKElELCAyMCwgJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gPEFsdGVybmF0aXZlVG9SZXZpZXcgc2V0dGluZ0tleT17dGhpcy5zZXR0aW5nS2V5fS8+O1xuICAgIH1cblxufVxuIl19