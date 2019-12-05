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
const SimpleTooltipEx_1 = require("../../ui/tooltip/SimpleTooltipEx");
class AddContentButtonOverlay extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "", style: {
                position: 'fixed',
                top: '70px',
                right: '60px',
                zIndex: 100
            } },
            React.createElement(SimpleTooltipEx_1.SimpleTooltipEx, { text: "Add document to your Polar repository.", style: {
                    fontSize: '14px'
                }, show: 0, placement: "left" },
                React.createElement(Button_1.default, { id: "add-content-overlay", direction: "down", style: {
                        fontWeight: 'bold',
                        fontSize: '16px',
                        fontFamily: 'sans-serif'
                    }, color: "success", className: "btn-lg shadow", onClick: () => this.props.onClick(), size: "lg" },
                    React.createElement("i", { className: "fas fa-plus", style: { marginRight: '5px' } }),
                    " Add to Polar"))));
    }
}
exports.AddContentButtonOverlay = AddContentButtonOverlay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ29udGVudEJ1dHRvbk92ZXJsYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBZGRDb250ZW50QnV0dG9uT3ZlcmxheS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLG1FQUEyQztBQUMzQyxzRUFBaUU7QUFFakUsTUFBYSx1QkFBeUIsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFN0UsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBSVQsT0FBTyxDQUVILDZCQUFLLFNBQVMsRUFBQyxFQUFFLEVBQ1osS0FBSyxFQUFFO2dCQUNILFFBQVEsRUFBRSxPQUFPO2dCQUNqQixHQUFHLEVBQUUsTUFBTTtnQkFDWCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsR0FBRzthQUNkO1lBRUYsb0JBQUMsaUNBQWUsSUFBQyxJQUFJLEVBQUMsd0NBQXdDLEVBQzdDLEtBQUssRUFBRTtvQkFDSCxRQUFRLEVBQUUsTUFBTTtpQkFDbkIsRUFDRCxJQUFJLEVBQUUsQ0FBQyxFQUNQLFNBQVMsRUFBQyxNQUFNO2dCQUU3QixvQkFBQyxnQkFBTSxJQUFDLEVBQUUsRUFBQyxxQkFBcUIsRUFDeEIsU0FBUyxFQUFDLE1BQU0sRUFDaEIsS0FBSyxFQUFFO3dCQUNILFVBQVUsRUFBRSxNQUFNO3dCQUNsQixRQUFRLEVBQUUsTUFBTTt3QkFDaEIsVUFBVSxFQUFFLFlBQVk7cUJBQzNCLEVBQ0QsS0FBSyxFQUFDLFNBQVMsRUFDZixTQUFTLEVBQUMsZUFBZSxFQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFDbkMsSUFBSSxFQUFDLElBQUk7b0JBRWIsMkJBQUcsU0FBUyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLEdBQU07b0NBRXZELENBRUssQ0FFaEIsQ0FFVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBbkRELDBEQW1EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2ltcGxlVG9vbHRpcH0gZnJvbSAnLi4vLi4vdWkvdG9vbHRpcC9TaW1wbGVUb29sdGlwJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7U2ltcGxlVG9vbHRpcEV4fSBmcm9tICcuLi8uLi91aS90b29sdGlwL1NpbXBsZVRvb2x0aXBFeCc7XG5cbmV4cG9ydCBjbGFzcyBBZGRDb250ZW50QnV0dG9uT3ZlcmxheSAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gVE9ETzogQWRkIFJlbmRlcmVyQW5hbHl0aWNzIGZvciB3aGVuIHRoaXMgaXMgbG9hZGVkIC4uLiBhbmQgYWRkZWQuLi5cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICAgICAgIHRvcDogJzcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICc2MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwXG4gICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPFNpbXBsZVRvb2x0aXBFeCB0ZXh0PVwiQWRkIGRvY3VtZW50IHRvIHlvdXIgUG9sYXIgcmVwb3NpdG9yeS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIiA+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImFkZC1jb250ZW50LW92ZXJsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1sZyBzaGFkb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnfX0+PC9pPiBBZGQgdG8gUG9sYXJcblxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvU2ltcGxlVG9vbHRpcEV4PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuIl19