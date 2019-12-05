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
class RelativeMoment extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "mt-auto mb-auto text-muted" },
            React.createElement(react_moment_1.default, { style: {}, withTitle: true, titleFormat: "D MMM YYYY hh:MM A", fromNow: true }, this.props.datetime)));
    }
}
exports.RelativeMoment = RelativeMoment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRpdmVNb21lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWxhdGl2ZU1vbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLGdFQUFrQztBQU9sQyxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBQyw0QkFBNEI7WUFDdkMsb0JBQUMsc0JBQU0sSUFBQyxLQUFLLEVBQUUsRUFDTixFQUNELFNBQVMsRUFBRSxJQUFJLEVBQ2YsV0FBVyxFQUFDLG9CQUFvQixFQUFDLE9BQU8sVUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FDUCxDQUNULENBQUM7SUFFTixDQUFDO0NBRUo7QUF0QkQsd0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzXCI7XG5cblxuLyoqXG4gKiBBIGdlbmVyaWMgd3JhcHBlciB0aGF0IGRldGVybWluZXMgd2hpY2ggc3ViLWNvbXBvbmVudCB0byByZW5kZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWxhdGl2ZU1vbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvIHRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICA8TW9tZW50IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFRpdGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVGb3JtYXQ9XCJEIE1NTSBZWVlZIGhoOk1NIEFcIiBmcm9tTm93PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRldGltZX1cbiAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBkYXRldGltZTogSVNPRGF0ZVRpbWVTdHJpbmc7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cblxuIl19