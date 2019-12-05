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
class TakeExtendedSurvey extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onDone = this.onDone.bind(this);
        this.state = {
            completed: false
        };
    }
    render() {
        return (React.createElement("div", { className: "text-center mt-2" },
            React.createElement("div", { className: "text-center mt-2" },
                React.createElement(Button_1.default, { color: "link", size: "sm", onClick: () => this.onDone() }, "Take Extended Survey"))));
    }
    onDone() {
        Nav_1.Nav.openLinkWithNewTab(Survey_1.SURVEY_LINK);
    }
}
exports.TakeExtendedSurvey = TakeExtendedSurvey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFrZUV4dGVuZGVkU3VydmV5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGFrZUV4dGVuZGVkU3VydmV5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUVBQTJDO0FBQzNDLHFDQUFnQztBQUNoQyx5RkFBeUY7QUFFekYsTUFBYSxrQkFBbUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFbkUsWUFBWSxLQUFVLEVBQUUsT0FBWTtRQUNoQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCO1lBRTdCLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0I7Z0JBQzdCLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLDJCQUErQixDQUN4RixDQUVKLENBQUMsQ0FBQztJQUVoQixDQUFDO0lBRU8sTUFBTTtRQUVWLFNBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBVyxDQUFDLENBQUM7SUFFeEMsQ0FBQztDQUVKO0FBaENELGdEQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7TmF2fSBmcm9tICcuLi91dGlsL05hdic7XG5pbXBvcnQge1NVUlZFWV9MSU5LfSBmcm9tICcuLi8uLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvc3BsYXNoL3NwbGFzaGVzL3N1cnZleS9TdXJ2ZXknO1xuXG5leHBvcnQgY2xhc3MgVGFrZUV4dGVuZGVkU3VydmV5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub25Eb25lID0gdGhpcy5vbkRvbmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpbmtcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRG9uZSgpfT5UYWtlIEV4dGVuZGVkIFN1cnZleTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj4pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvbmUoKSB7XG5cbiAgICAgICAgTmF2Lm9wZW5MaW5rV2l0aE5ld1RhYihTVVJWRVlfTElOSyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuIl19