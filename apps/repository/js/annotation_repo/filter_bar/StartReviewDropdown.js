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
const ICON_STYLE = {
    width: '20px'
};
class StartReviewDropdown extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.UncontrolledDropdown, { size: "md", direction: "down", id: "start-review-dropdown" },
            React.createElement(reactstrap_1.DropdownToggle, { size: "md", style: { fontWeight: 'bold' }, color: "success", caret: true },
                React.createElement("i", { className: "fas fa-graduation-cap mr-1" }),
                " Start Review"),
            React.createElement(reactstrap_1.DropdownMenu, null,
                React.createElement(reactstrap_1.DropdownItem, { size: "sm", onClick: this.props.onReading },
                    React.createElement("i", { className: "fas fa-book-reader", style: ICON_STYLE }),
                    " Reading"),
                React.createElement(reactstrap_1.DropdownItem, { size: "sm", onClick: this.props.onFlashcards },
                    React.createElement("i", { className: "fas fa-bolt", style: ICON_STYLE }),
                    " Flashcards"))));
    }
}
exports.StartReviewDropdown = StartReviewDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhcnRSZXZpZXdEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0YXJ0UmV2aWV3RHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBNEY7QUFFNUYsTUFBTSxVQUFVLEdBQXdCO0lBQ3BDLEtBQUssRUFBRSxNQUFNO0NBQ2hCLENBQUM7QUFFRixNQUFhLG1CQUFvQixTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUV4RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsaUNBQW9CLElBQUMsSUFBSSxFQUFDLElBQUksRUFDVCxTQUFTLEVBQUMsTUFBTSxFQUNoQixFQUFFLEVBQUMsdUJBQXVCO1lBRTVDLG9CQUFDLDJCQUFjLElBQUMsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLEVBQzNCLEtBQUssRUFBQyxTQUFTLEVBQUMsS0FBSztnQkFFakMsMkJBQUcsU0FBUyxFQUFDLDRCQUE0QixHQUFFO2dDQUU5QjtZQUVqQixvQkFBQyx5QkFBWTtnQkFFVCxvQkFBQyx5QkFBWSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztvQkFDdkMsMkJBQUcsU0FBUyxFQUFDLG9CQUFvQixFQUFDLEtBQUssRUFBRSxVQUFVLEdBQUc7K0JBQzNDO2dCQUdmLG9CQUFDLHlCQUFZLElBQUMsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO29CQUMxQywyQkFBRyxTQUFTLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBRSxVQUFVLEdBQUc7a0NBQ3BDLENBRUosQ0FFSSxDQUUxQixDQUFDO0lBRU4sQ0FBQztDQUdKO0FBNUNELGtEQTRDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RHJvcGRvd25JdGVtLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duVG9nZ2xlLCBVbmNvbnRyb2xsZWREcm9wZG93bn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY29uc3QgSUNPTl9TVFlMRTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICB3aWR0aDogJzIwcHgnXG59O1xuXG5leHBvcnQgY2xhc3MgU3RhcnRSZXZpZXdEcm9wZG93biBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YXJ0LXJldmlldy1kcm9wZG93blwiPlxuXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCIgY2FyZXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdyYWR1YXRpb24tY2FwIG1yLTFcIi8+IFN0YXJ0IFJldmlld1xuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25SZWFkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rLXJlYWRlclwiIHN0eWxlPXtJQ09OX1NUWUxFfS8+IFJlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG5cblxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkZsYXNoY2FyZHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvbHRcIiBzdHlsZT17SUNPTl9TVFlMRX0vPiBGbGFzaGNhcmRzXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG5cbiAgICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBvblJlYWRpbmc6ICgpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25GbGFzaGNhcmRzOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19