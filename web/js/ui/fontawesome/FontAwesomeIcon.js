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
class FontAwesomeIcon extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const style = {
            width: '20px',
            marginLeft: '0.3rem',
            marginRight: '0.3rem'
        };
        if (this.props.name) {
            return React.createElement("i", { className: this.props.name, style: style });
        }
        else {
            return React.createElement("span", { style: style });
        }
    }
}
exports.FontAwesomeIcon = FontAwesomeIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9udEF3ZXNvbWVJY29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRm9udEF3ZXNvbWVJY29uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsTUFBYSxlQUFnQixTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUVwRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEtBQUssR0FBRztZQUNWLEtBQUssRUFBRSxNQUFNO1lBQ2IsVUFBVSxFQUFFLFFBQVE7WUFDcEIsV0FBVyxFQUFFLFFBQVE7U0FDeEIsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDakIsT0FBTywyQkFBRyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDO1NBQ3pEO2FBQU07WUFDSCxPQUFPLDhCQUFNLEtBQUssRUFBRSxLQUFLLEdBQVMsQ0FBQTtTQUNyQztJQUdMLENBQUM7Q0FFSjtBQXZCRCwwQ0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBGb250QXdlc29tZUljb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzAuM3JlbScsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuM3JlbSdcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gPGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLm5hbWV9IHN0eWxlPXtzdHlsZX0vPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBzdHlsZT17c3R5bGV9Pjwvc3Bhbj5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGZvbnQgYXdlc29tZSBpY29uIHRvIHVzZS4gIElmIG5vbiBpcyBzcGVjaWZpZWQganVzdCBhIGJsYW5rIHNwYWNlciBpY29uIGlzIHVzZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==