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
class Column extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column'
            } }, this.props.children));
    }
}
exports.Column = Column;
Column.Main = class extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: "react-column-main", style: { flexGrow: 1, overflow: 'auto' } }, this.props.children));
    }
};
Column.Header = class extends React.PureComponent {
    render() {
        return (React.createElement("div", { style: {} }, this.props.children));
    }
};
Column.Footer = class extends React.PureComponent {
    render() {
        return (React.createElement("div", { style: {} }, this.props.children));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sdW1uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29sdW1uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsTUFBYSxNQUFPLFNBQVEsS0FBSyxDQUFDLGFBQTBCO0lBRXhELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxLQUFLLEVBQUU7Z0JBQ0gsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsYUFBYSxFQUFFLFFBQVE7YUFDMUIsSUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFbEIsQ0FDVCxDQUFDO0lBQ04sQ0FBQzs7QUFuQkwsd0JBK0RDO0FBMUNVLFdBQUksR0FBRyxLQUFNLFNBQVEsS0FBSyxDQUFDLGFBQXVCO0lBRTlDLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLG1CQUFtQixFQUFDLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxJQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDbEIsQ0FDVCxDQUFDO0lBQ04sQ0FBQztDQUVKLENBQUM7QUFFSyxhQUFNLEdBQUcsS0FBTSxTQUFRLEtBQUssQ0FBQyxhQUF1QjtJQUVoRCxNQUFNO1FBRVQsT0FBTyxDQUVILDZCQUFLLEtBQUssRUFBRSxFQUFFLElBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2xCLENBQ1QsQ0FBQztJQUNOLENBQUM7Q0FFSixDQUFDO0FBRUssYUFBTSxHQUFHLEtBQU0sU0FBUSxLQUFLLENBQUMsYUFBdUI7SUFFaEQsTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxLQUFLLEVBQUUsRUFBRSxJQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNsQixDQUNULENBQUM7SUFDTixDQUFDO0NBRUosQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIENvbHVtbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgTWFpbiA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxhbnksIGFueT57XG5cbiAgICAgICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY29sdW1uLW1haW5cIiBzdHlsZT17e2ZsZXhHcm93OiAxLCBvdmVyZmxvdzogJ2F1dG8nfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHN0YXRpYyBIZWFkZXIgPSBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8YW55LCBhbnk+e1xuXG4gICAgICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHN0YXRpYyBGb290ZXIgPSBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8YW55LCBhbnk+e1xuXG4gICAgICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxufVxuIl19