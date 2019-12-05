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
const react_moment_1 = __importDefault(require("react-moment"));
class DateMoment extends React.Component {
    render() {
        return (React.createElement(react_moment_1.default, { style: {}, format: "LL" }, this.props.datetime));
    }
}
exports.DateMoment = DateMoment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZU1vbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGVNb21lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixnRUFBa0M7QUFPbEMsTUFBYSxVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQWlCO0lBRTVDLE1BQU07UUFFVCxPQUFPLENBQ0gsb0JBQUMsc0JBQU0sSUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFJLElBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNmLENBQ1osQ0FBQztJQUVOLENBQUM7Q0FFSjtBQVpELGdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzXCI7XG5cblxuLyoqXG4gKiBEYXRlIG9mIHRoZSBtb21lbnQgKG1vbnRoLCBkYXksIHllYXIpXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRlTW9tZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vbWVudCBzdHlsZT17e319IGZvcm1hdD1cIkxMXCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZXRpbWV9XG4gICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgZGF0ZXRpbWU6IElTT0RhdGVUaW1lU3RyaW5nO1xufVxuIl19