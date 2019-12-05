"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Nav_1 = require("../util/Nav");
const Survey_1 = require("../../../../apps/repository/js/splash/splashes/survey/Survey");
class TakeExtendedSurveyButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onDone = this.onDone.bind(this);
        this.state = {
            completed: false
        };
    }
    render() {
        return (React.createElement(Button_1.default, { color: "link", size: "sm", onClick: () => this.onDone() }, "Take Extended Survey"));
    }
    onDone() {
        Nav_1.Nav.openLinkWithNewTab(Survey_1.SURVEY_LINK);
    }
}
exports.TakeExtendedSurveyButton = TakeExtendedSurveyButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFrZUV4dGVuZGVkU3VydmV5QnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGFrZUV4dGVuZGVkU3VydmV5QnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUVBQTJDO0FBQzNDLHFDQUFnQztBQUNoQyx5RkFBeUY7QUFFekYsTUFBYSx3QkFBeUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFekUsWUFBWSxLQUFVLEVBQUUsT0FBWTtRQUNoQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sQ0FDSCxvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSwyQkFBK0IsQ0FDN0YsQ0FBQztJQUVOLENBQUM7SUFFTyxNQUFNO1FBRVYsU0FBRyxDQUFDLGtCQUFrQixDQUFDLG9CQUFXLENBQUMsQ0FBQztJQUV4QyxDQUFDO0NBRUo7QUExQkQsNERBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtOYXZ9IGZyb20gJy4uL3V0aWwvTmF2JztcbmltcG9ydCB7U1VSVkVZX0xJTkt9IGZyb20gJy4uLy4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9zcGxhc2gvc3BsYXNoZXMvc3VydmV5L1N1cnZleSc7XG5cbmV4cG9ydCBjbGFzcyBUYWtlRXh0ZW5kZWRTdXJ2ZXlCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkRvbmUgPSB0aGlzLm9uRG9uZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpbmtcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRG9uZSgpfT5UYWtlIEV4dGVuZGVkIFN1cnZleTwvQnV0dG9uPlxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvbmUoKSB7XG5cbiAgICAgICAgTmF2Lm9wZW5MaW5rV2l0aE5ld1RhYihTVVJWRVlfTElOSyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuIl19