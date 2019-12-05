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
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
class CommentPopupBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.text = "";
        this.handleComment = this.handleComment.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.state = {};
        this.props.commentEventDispatcher.addEventListener(commentEvent => {
            this.onCommentEvent(commentEvent);
        });
    }
    onCommentEvent(commentInputEvent) {
        const point = commentInputEvent.point;
        document.getElementById('comment-anchor').style.cssText
            = `position: absolute; top: ${point.y}px; left: ${point.x}px;`;
        this.setState({
            commentInputEvent
        });
    }
    handleComment() {
        this.props.onComment({
            text: this.text,
            type: 'text',
            annotationDescriptor: this.state.commentInputEvent.annotationDescriptor,
            pageNum: this.state.commentInputEvent.pageNum
        });
    }
    onTextAreaChange(event) {
        const textArea = event.currentTarget;
        this.text = textArea.value;
    }
    render() {
        return (React.createElement("div", { id: "comment-popup-box", className: "shadow" },
            React.createElement(PopoverBody_1.default, null,
                React.createElement("div", null,
                    React.createElement("textarea", { onChange: this.onTextAreaChange })),
                React.createElement("div", null,
                    React.createElement(Button_1.default, { size: "sm", color: "primary", className: "mt-2", onClick: this.handleComment }, "Comment")))));
    }
}
exports.CommentPopupBar = CommentPopupBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudFBvcHVwQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29tbWVudFBvcHVwQmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUVBQTJDO0FBRTNDLDZFQUFxRDtBQU1yRCxNQUFhLGVBQWdCLFNBQVEsS0FBSyxDQUFDLFNBQXVDO0lBSTlFLFlBQVksS0FBMkIsRUFBRSxPQUFZO1FBQ2pELEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIbEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUt0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLGNBQWMsQ0FBQyxpQkFBb0M7UUFFdkQsTUFBTSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBRXRDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTztjQUNsRCw0QkFBNEIsS0FBSyxDQUFDLENBQUMsYUFBYSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLGlCQUFpQjtTQUNwQixDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU8sYUFBYTtRQUVqQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsTUFBTTtZQUNaLG9CQUFvQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWtCLENBQUMsb0JBQW9CO1lBQ3hFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFrQixDQUFDLE9BQU87U0FDakQsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxhQUFvQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxFQUFFLEVBQUMsbUJBQW1CLEVBQUMsU0FBUyxFQUFDLFFBQVE7WUFJMUMsb0JBQUMscUJBQVc7Z0JBRVI7b0JBQ0ksa0NBQVUsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBYSxDQUNwRDtnQkFFTjtvQkFDSSxvQkFBQyxnQkFBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxjQUVyRSxDQUNQLENBRUksQ0FFWixDQUNULENBQUM7SUFFTixDQUFDO0NBRUo7QUEzRUQsMENBMkVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAncmVhY3RzdHJhcC9saWIvUG9wb3Zlcic7XG5pbXBvcnQgUG9wb3ZlckJvZHkgZnJvbSAncmVhY3RzdHJhcC9saWIvUG9wb3ZlckJvZHknO1xuaW1wb3J0IFBvcG92ZXJIZWFkZXIgZnJvbSAncmVhY3RzdHJhcC9saWIvUG9wb3ZlckhlYWRlcic7XG5pbXBvcnQge0NvbW1lbnRJbnB1dEV2ZW50fSBmcm9tICcuL0NvbW1lbnRJbnB1dEV2ZW50JztcbmltcG9ydCB7SUV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vLi4vcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7T25Db21tZW50SGFuZGxlcn0gZnJvbSAnLi9Db21tZW50UG9wdXBCb3hlcyc7XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50UG9wdXBCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q29tbWVudFBvcHVwQmFyUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IENvbW1lbnRQb3B1cEJhclByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ29tbWVudCA9IHRoaXMuaGFuZGxlQ29tbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVGV4dEFyZWFDaGFuZ2UgPSB0aGlzLm9uVGV4dEFyZWFDaGFuZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucHJvcHMuY29tbWVudEV2ZW50RGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKGNvbW1lbnRFdmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tbWVudEV2ZW50KGNvbW1lbnRFdmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvbW1lbnRFdmVudChjb21tZW50SW5wdXRFdmVudDogQ29tbWVudElucHV0RXZlbnQpIHtcblxuICAgICAgICBjb25zdCBwb2ludCA9IGNvbW1lbnRJbnB1dEV2ZW50LnBvaW50O1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWFuY2hvcicpIS5zdHlsZS5jc3NUZXh0XG4gICAgICAgICAgICA9IGBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogJHtwb2ludC55fXB4OyBsZWZ0OiAke3BvaW50Lnh9cHg7YDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbW1lbnRJbnB1dEV2ZW50XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVDb21tZW50KCkge1xuXG4gICAgICAgIHRoaXMucHJvcHMub25Db21tZW50KHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGFubm90YXRpb25EZXNjcmlwdG9yOiB0aGlzLnN0YXRlLmNvbW1lbnRJbnB1dEV2ZW50IS5hbm5vdGF0aW9uRGVzY3JpcHRvcixcbiAgICAgICAgICAgIHBhZ2VOdW06IHRoaXMuc3RhdGUuY29tbWVudElucHV0RXZlbnQhLnBhZ2VOdW1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVGV4dEFyZWFDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRleHRBcmVhID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0QXJlYS52YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb21tZW50LXBvcHVwLWJveFwiIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuXG4gICAgICAgICAgICAgICAgey8qPFBvcG92ZXJIZWFkZXI+QWRkIENvbW1lbnQ8L1BvcG92ZXJIZWFkZXI+Ki99XG5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17dGhpcy5vblRleHRBcmVhQ2hhbmdlfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJtdC0yXCIgb25DbGljaz17dGhpcy5oYW5kbGVDb21tZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXJCb2R5PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lbnRQb3B1cEJhckNhbGxiYWNrcyB7XG4gICAgb25Db21tZW50OiBPbkNvbW1lbnRIYW5kbGVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lbnRQb3B1cEJhclByb3BzIGV4dGVuZHMgQ29tbWVudFBvcHVwQmFyQ2FsbGJhY2tzIHtcbiAgICBjb21tZW50RXZlbnREaXNwYXRjaGVyOiBJRXZlbnREaXNwYXRjaGVyPENvbW1lbnRJbnB1dEV2ZW50Pjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbiAgICBjb21tZW50SW5wdXRFdmVudD86IENvbW1lbnRJbnB1dEV2ZW50O1xuXG59XG4iXX0=