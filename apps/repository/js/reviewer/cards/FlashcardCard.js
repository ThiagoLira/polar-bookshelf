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
const CardBody_1 = require("./CardBody");
const RatingButtons_1 = require("../RatingButtons");
class FlashcardCard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onShowAnswer = this.onShowAnswer.bind(this);
        this.state = {
            side: 'front'
        };
    }
    render() {
        const { taskRep } = this.props;
        const Main = () => {
            switch (this.state.side) {
                case 'front':
                    return this.props.front;
                case 'back':
                    return React.createElement("div", null,
                        this.props.front,
                        React.createElement("div", { className: "m-2" },
                            React.createElement("hr", null)),
                        this.props.back);
            }
        };
        const Buttons = () => {
            switch (this.state.side) {
                case 'front':
                    return React.createElement(reactstrap_1.Button, { color: "primary", size: "md", onClick: () => this.onShowAnswer() }, "Show Answer");
                case 'back':
                    return React.createElement(RatingButtons_1.RatingButtons, { taskRep: taskRep, stage: taskRep.stage, onRating: this.props.onRating });
            }
        };
        return React.createElement(CardBody_1.CardBody, { taskRep: taskRep },
            React.createElement(CardBody_1.CardBody.Main, { taskRep: taskRep },
                React.createElement(Main, null)),
            React.createElement(CardBody_1.CardBody.Footer, { taskRep: taskRep },
                React.createElement(Buttons, null)));
    }
    onShowAnswer() {
        this.setState({ side: 'back' });
    }
}
exports.FlashcardCard = FlashcardCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZsYXNoY2FyZENhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBa0M7QUFDbEMseUNBQW9DO0FBQ3BDLG9EQUErQztBQVEvQyxNQUFhLGFBQWMsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFOUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxPQUFPLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTdCLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUVkLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBRXJCLEtBQUssT0FBTztvQkFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUU1QixLQUFLLE1BQU07b0JBQ1AsT0FBTzt3QkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7d0JBRWpCLDZCQUFLLFNBQVMsRUFBQyxLQUFLOzRCQUNoQiwrQkFBSyxDQUNIO3dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNkLENBQUM7YUFFZDtRQUVMLENBQUMsQ0FBQztRQUVGLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNqQixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUVyQixLQUFLLE9BQU87b0JBQ1IsT0FBTyxvQkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxrQkFFeEMsQ0FBQztnQkFFZCxLQUFLLE1BQU07b0JBQ1AsT0FBTyxvQkFBQyw2QkFBYSxJQUFDLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQTthQUU3RDtRQUNMLENBQUMsQ0FBQztRQUVGLE9BQU8sb0JBQUMsbUJBQVEsSUFBQyxPQUFPLEVBQUUsT0FBTztZQUU3QixvQkFBQyxtQkFBUSxDQUFDLElBQUksSUFBQyxPQUFPLEVBQUUsT0FBTztnQkFDM0Isb0JBQUMsSUFBSSxPQUFFLENBQ0s7WUFFaEIsb0JBQUMsbUJBQVEsQ0FBQyxNQUFNLElBQUMsT0FBTyxFQUFFLE9BQU87Z0JBQzdCLG9CQUFDLE9BQU8sT0FBRSxDQUNJLENBRVgsQ0FBQztJQUVoQixDQUFDO0lBRU8sWUFBWTtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUVKO0FBMUVELHNDQTBFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHtDYXJkQm9keX0gZnJvbSBcIi4vQ2FyZEJvZHlcIjtcbmltcG9ydCB7UmF0aW5nQnV0dG9uc30gZnJvbSBcIi4uL1JhdGluZ0J1dHRvbnNcIjtcbmltcG9ydCB7Rmxhc2hjYXJkVGFza0FjdGlvbn0gZnJvbSBcIi4vRmxhc2hjYXJkVGFza0FjdGlvblwiO1xuaW1wb3J0IHtUYXNrUmVwfSBmcm9tIFwicG9sYXItc3BhY2VkLXJlcGV0aXRpb24vc3JjL3NwYWNlZF9yZXBldGl0aW9uL3NjaGVkdWxlci9TMlBsdXMvVGFza3NDYWxjdWxhdG9yXCI7XG5pbXBvcnQge1JhdGluZ0NhbGxiYWNrfSBmcm9tIFwiLi4vUmV2aWV3ZXJcIjtcblxuLyoqXG4gKiBCYXNpYyBmbGFzaGNhcmQgY29tcG9uZW50IHdoaWNoIGFsbG93cyB1cyB0byBkaXNwbGF5IGFueSB0eXBlIG9mIGNhcmQgYXMgbG9uZyBhcyBpdCBoYXMgYSBmcm9udC9iYWNrIGRlc2lnbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vblNob3dBbnN3ZXIgPSB0aGlzLm9uU2hvd0Fuc3dlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaWRlOiAnZnJvbnQnXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHt0YXNrUmVwfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgTWFpbiA9ICgpID0+IHtcblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLnNpZGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zyb250JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZnJvbnQ7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdiYWNrJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mcm9udH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5iYWNrfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj47XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc2lkZSkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZnJvbnQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2hvd0Fuc3dlcigpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgQW5zd2VyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPjtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2JhY2snOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJhdGluZ0J1dHRvbnMgdGFza1JlcD17dGFza1JlcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlPXt0YXNrUmVwLnN0YWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRpbmc9e3RoaXMucHJvcHMub25SYXRpbmd9Lz5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiA8Q2FyZEJvZHkgdGFza1JlcD17dGFza1JlcH0+XG5cbiAgICAgICAgICAgIDxDYXJkQm9keS5NYWluIHRhc2tSZXA9e3Rhc2tSZXB9PlxuICAgICAgICAgICAgICAgIDxNYWluLz5cbiAgICAgICAgICAgIDwvQ2FyZEJvZHkuTWFpbj5cblxuICAgICAgICAgICAgPENhcmRCb2R5LkZvb3RlciB0YXNrUmVwPXt0YXNrUmVwfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9ucy8+XG4gICAgICAgICAgICA8L0NhcmRCb2R5LkZvb3Rlcj5cblxuICAgICAgICA8L0NhcmRCb2R5PjtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25TaG93QW5zd2VyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaWRlOiAnYmFjayd9KTtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgdHlwZSBGbGFzaGNhcmRTaWRlID0gJ2Zyb250JyB8ICdiYWNrJztcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgdGFza1JlcDogVGFza1JlcDxGbGFzaGNhcmRUYXNrQWN0aW9uPjtcblxuICAgIHJlYWRvbmx5IG9uUmF0aW5nOiBSYXRpbmdDYWxsYmFjazxGbGFzaGNhcmRUYXNrQWN0aW9uPjtcblxuICAgIHJlYWRvbmx5IGZyb250OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PjtcblxuICAgIHJlYWRvbmx5IGJhY2s6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBzaWRlOiBGbGFzaGNhcmRTaWRlO1xufVxuIl19