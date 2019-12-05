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
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const TakeExtendedSurveyButton_1 = require("./TakeExtendedSurveyButton");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
class Suggestions extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.value = "";
        this.onDone = this.onDone.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            completed: false
        };
    }
    render() {
        const Description = () => {
            if (this.props.description) {
                return React.createElement("p", null, this.props.description);
            }
            else {
                return React.createElement("div", null);
            }
        };
        const Form = () => {
            return React.createElement("div", { style: {
                    width: '600px',
                    position: 'fixed',
                    right: 25,
                    bottom: 25,
                    zIndex: 9999,
                }, className: "border rounded shadow bg-white p-3" },
                React.createElement("h3", null, this.props.title),
                React.createElement("div", { className: "ml-auto mr-auto" },
                    React.createElement(Description, null)),
                React.createElement(Input_1.default, { type: "textarea", onChange: event => this.value = event.target.value, style: { height: '8em' } }),
                React.createElement("div", { className: "mt-2", style: { display: 'flex' } },
                    React.createElement("div", { className: "ml-auto" },
                        React.createElement(TakeExtendedSurveyButton_1.TakeExtendedSurveyButton, null),
                        React.createElement(Button_1.default, { size: "md", color: "secondary", onClick: () => this.onCancel() }, "Cancel"),
                        React.createElement(Button_1.default, { size: "md", color: "primary", className: "ml-1", onClick: () => this.onDone() }, "Send Feedback"))));
        };
        if (this.state.completed) {
            return React.createElement("div", null);
        }
        else {
            return React.createElement(Form, null);
        }
    }
    onCancel() {
        if (!this.props.noEvent) {
            RendererAnalytics_1.RendererAnalytics.event({
                category: this.props.category,
                action: 'cancel-suggestion',
            });
        }
        this.markCompleted();
    }
    onDone() {
        if (!this.props.noEvent) {
            RendererAnalytics_1.RendererAnalytics.event({
                category: this.props.category,
                action: 'sent-suggestion',
            });
        }
        this.markCompleted();
        if (this.props.onDone) {
            this.props.onDone(this.value);
        }
    }
    markCompleted() {
        this.setState({
            completed: true
        });
    }
}
exports.Suggestions = Suggestions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VnZ2VzdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdWdnZXN0aW9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG1FQUEyQztBQUMzQyxpRUFBeUM7QUFDekMseUVBQW9FO0FBQ3BFLGtFQUE2RDtBQUU3RCxNQUFhLFdBQVksU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFJNUQsWUFBWSxLQUFVLEVBQUUsT0FBWTtRQUNoQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSGxCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFLdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFFckIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtnQkFDeEIsT0FBTywrQkFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBSyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNILE9BQU8sZ0NBQVcsQ0FBQzthQUN0QjtRQUVMLENBQUMsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUVkLE9BQU8sNkJBQUssS0FBSyxFQUFFO29CQUNILEtBQUssRUFBRSxPQUFPO29CQUNkLFFBQVEsRUFBRSxPQUFPO29CQUNqQixLQUFLLEVBQUUsRUFBRTtvQkFDVCxNQUFNLEVBQUUsRUFBRTtvQkFDVixNQUFNLEVBQUUsSUFBSTtpQkFDZixFQUNELFNBQVMsRUFBQyxvQ0FBb0M7Z0JBRXRELGdDQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFNO2dCQUUzQiw2QkFBSyxTQUFTLEVBQUMsaUJBQWlCO29CQUM1QixvQkFBQyxXQUFXLE9BQUUsQ0FDWjtnQkFFTixvQkFBQyxlQUFLLElBQUMsSUFBSSxFQUFDLFVBQVUsRUFDZixRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUNsRCxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLEdBQUc7Z0JBRWhDLDZCQUFLLFNBQVMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztvQkFFMUMsNkJBQUssU0FBUyxFQUFDLFNBQVM7d0JBRXBCLG9CQUFDLG1EQUF3QixPQUFFO3dCQUUzQixvQkFBQyxnQkFBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQ1QsS0FBSyxFQUFDLFdBQVcsRUFDakIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBaUI7d0JBRXZELG9CQUFDLGdCQUFNLElBQUMsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUMsU0FBUyxFQUNmLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUF3QixDQUUxRCxDQUVKLENBRUosQ0FBQztRQUVYLENBQUMsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxnQ0FBTSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxPQUFPLG9CQUFDLElBQUksT0FBRSxDQUFDO1NBQ2xCO0lBRUwsQ0FBQztJQUVPLFFBQVE7UUFFWixJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFFdEIscUNBQWlCLENBQUMsS0FBSyxDQUFDO2dCQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUM3QixNQUFNLEVBQUUsbUJBQW1CO2FBQzlCLENBQUMsQ0FBQztTQUVOO1FBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXpCLENBQUM7SUFFTyxNQUFNO1FBRVYsSUFBSSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBRXRCLHFDQUFpQixDQUFDLEtBQUssQ0FBQztnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDN0IsTUFBTSxFQUFFLGlCQUFpQjthQUM1QixDQUFDLENBQUM7U0FFTjtRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUVMLENBQUM7SUFFTyxhQUFhO1FBRWpCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUExSEQsa0NBMEhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IElucHV0IGZyb20gJ3JlYWN0c3RyYXAvbGliL0lucHV0JztcbmltcG9ydCB7VGFrZUV4dGVuZGVkU3VydmV5QnV0dG9ufSBmcm9tICcuL1Rha2VFeHRlbmRlZFN1cnZleUJ1dHRvbic7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5cbmV4cG9ydCBjbGFzcyBTdWdnZXN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkRvbmUgPSB0aGlzLm9uRG9uZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2FuY2VsID0gdGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IERlc2NyaXB0aW9uID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiA8cD57dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn08L3A+O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBGb3JtID0gKCkgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNjAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBzaGFkb3cgYmctd2hpdGUgcC0zXCI+XG5cbiAgICAgICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnOGVtJ319Lz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWtlRXh0ZW5kZWRTdXJ2ZXlCdXR0b24vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkNhbmNlbCgpfT5DYW5jZWw8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkRvbmUoKX0+U2VuZCBGZWVkYmFjazwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PjtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8Rm9ybS8+O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FuY2VsKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMucHJvcHMubm9FdmVudCkge1xuXG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMucHJvcHMuY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnY2FuY2VsLXN1Z2dlc3Rpb24nLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFya0NvbXBsZXRlZCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvbmUoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5wcm9wcy5ub0V2ZW50KSB7XG5cbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5wcm9wcy5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdzZW50LXN1Z2dlc3Rpb24nLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFya0NvbXBsZXRlZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uRG9uZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRvbmUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgbWFya0NvbXBsZXRlZCgpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbXBsZXRlZDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBjYXRlZ29yeTogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogRG9uJ3Qgc2VuZCB0aGUgZXZlbnQgb24gZm9ybSBzdWJtaXNzaW9uLiAgSnVzdCBmb3IgdGVzdGluZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBub0V2ZW50PzogYm9vbGVhbjtcblxuICAgIHJlYWRvbmx5IG9uRG9uZT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IGNvbXBsZXRlZDogYm9vbGVhbjtcbn1cblxuIl19