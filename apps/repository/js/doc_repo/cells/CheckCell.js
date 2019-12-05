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
const reactstrap_1 = require("reactstrap");
const Functions_1 = require("polar-shared/src/util/Functions");
const Arrays_1 = require("polar-shared/src/util/Arrays");
class CheckCell extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.viewIndex !== nextProps.viewIndex) {
            return true;
        }
        return !Arrays_1.Arrays.equal(this.props.selected, nextProps.selected);
    }
    render() {
        const { selected, viewIndex, selectRow } = this.props;
        return (React.createElement("div", { style: { lineHeight: '1em' } },
            React.createElement(reactstrap_1.Input, { checked: selected.includes(viewIndex), style: {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    margin: 'auto',
                    position: 'relative',
                    top: '2px',
                    width: '16px',
                    height: '16px',
                }, className: "m-auto", onChange: Functions_1.NULL_FUNCTION, onClick: (event) => selectRow(viewIndex, event.nativeEvent, 'checkbox'), type: "checkbox" })));
    }
}
exports.CheckCell = CheckCell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tDZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hlY2tDZWxsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkNBQWlDO0FBQ2pDLCtEQUE4RDtBQUU5RCx5REFBb0Q7QUFFcEQsTUFBYSxTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQWlCO0lBRTNDLHFCQUFxQixDQUFDLFNBQTJCLEVBQUUsU0FBd0IsRUFBRSxXQUFnQjtRQUVoRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sQ0FBRSxlQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVuRSxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFcEQsT0FBTyxDQUFDLDZCQUFLLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUM7WUFFL0Isb0JBQUMsa0JBQUssSUFBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDckMsS0FBSyxFQUFFO29CQUNILFVBQVUsRUFBRSxNQUFNO29CQUNsQixXQUFXLEVBQUUsTUFBTTtvQkFDbkIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLEdBQUcsRUFBRSxLQUFLO29CQUNWLEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRSxNQUFNO2lCQUNqQixFQUNELFNBQVMsRUFBQyxRQUFRLEVBQ2xCLFFBQVEsRUFBRSx5QkFBYSxFQUN2QixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsRUFDdkUsSUFBSSxFQUFDLFVBQVUsR0FBRSxDQUl0QixDQUNULENBQUM7SUFFTixDQUFDO0NBRUo7QUF4Q0QsOEJBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnNcIjtcbmltcG9ydCB7U2VsZWN0Um93VHlwZX0gZnJvbSBcIi4uL0RvY1JlcG9TY3JlZW5cIjtcbmltcG9ydCB7QXJyYXlzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0FycmF5c1wiO1xuXG5leHBvcnQgY2xhc3MgQ2hlY2tDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuXG4gICAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IFJlYWRvbmx5PElQcm9wcz4sIG5leHRTdGF0ZTogUmVhZG9ubHk8YW55PiwgbmV4dENvbnRleHQ6IGFueSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpZXdJbmRleCAhPT0gbmV4dFByb3BzLnZpZXdJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISBBcnJheXMuZXF1YWwodGhpcy5wcm9wcy5zZWxlY3RlZCwgbmV4dFByb3BzLnNlbGVjdGVkKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge3NlbGVjdGVkLCB2aWV3SW5kZXgsIHNlbGVjdFJvd30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBzdHlsZT17e2xpbmVIZWlnaHQ6ICcxZW0nfX0+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXQgY2hlY2tlZD17c2VsZWN0ZWQuaW5jbHVkZXModmlld0luZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e05VTExfRlVOQ1RJT059XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gc2VsZWN0Um93KHZpZXdJbmRleCwgZXZlbnQubmF0aXZlRXZlbnQsICdjaGVja2JveCcpfVxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIi8+XG5cbiAgICAgICAgICAgICAgICB7Lyo8aSBjbGFzc05hbWU9XCJmYXIgZmEtc3F1YXJlXCI+PC9pPiovfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSB2aWV3SW5kZXg6IG51bWJlcjtcbiAgICByZWFkb25seSBzZWxlY3RlZDogUmVhZG9ubHlBcnJheTxudW1iZXI+O1xuICAgIHJlYWRvbmx5IHNlbGVjdFJvdzogKHNlbGVjdGVkSWR4OiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50LCB0eXBlOiBTZWxlY3RSb3dUeXBlKSA9PiB2b2lkO1xuXG59XG4iXX0=