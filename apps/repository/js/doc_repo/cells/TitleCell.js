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
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
class TitleCell extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !Dictionaries_1.Dictionaries.equals(this.props, nextProps, ['id', 'title']);
    }
    render() {
        return (React.createElement("div", { id: this.props.id },
            React.createElement("div", null, this.props.title)));
    }
}
exports.TitleCell = TitleCell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGl0bGVDZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGl0bGVDZWxsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IscUVBQWdFO0FBRWhFLE1BQWEsU0FBVSxTQUFRLEtBQUssQ0FBQyxTQUFpQjtJQUUzQyxxQkFBcUIsQ0FBQyxTQUEyQixFQUFFLFNBQXdCLEVBQUUsV0FBZ0I7UUFDaEcsT0FBTyxDQUFFLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBQUMsNkJBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixpQ0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBTyxDQUMzQixDQUNULENBQUM7SUFFTixDQUFDO0NBRUo7QUFmRCw4QkFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0RpY3Rpb25hcmllc1wiO1xuXG5leHBvcnQgY2xhc3MgVGl0bGVDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuXG4gICAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IFJlYWRvbmx5PElQcm9wcz4sIG5leHRTdGF0ZTogUmVhZG9ubHk8YW55PiwgbmV4dENvbnRleHQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISBEaWN0aW9uYXJpZXMuZXF1YWxzKHRoaXMucHJvcHMsIG5leHRQcm9wcywgWydpZCcsICd0aXRsZSddKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcbn1cbiJdfQ==