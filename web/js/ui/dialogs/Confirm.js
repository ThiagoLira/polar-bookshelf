"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const DialogContainer_1 = require("./DialogContainer");
const NullCollapse_1 = require("../null_collapse/NullCollapse");
class Styles {
}
Styles.title = {
    fontSize: "20px",
    fontWeight: "bold"
};
Styles.subtitle = {};
Styles.button = {
    fontWeight: "bold"
};
class Confirm extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.onConfirm = this.onConfirm.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    render() {
        const opts = {
            buttonColor: 'primary',
            titlebarClassName: 'bg-dark'
        };
        const { type } = this.props;
        if (type) {
            opts.buttonColor = type;
            opts.titlebarClassName = 'bg-' + type;
        }
        return (react_1.default.createElement(DialogContainer_1.DialogContainer, { open: true },
            react_1.default.createElement("div", { onKeyDown: (event) => this.onKeyDown(event), style: { minWidth: '350px' } },
                react_1.default.createElement("div", { className: "w-100 p-1 pl-2 pr-2 " + opts.titlebarClassName, style: Styles.title }, this.props.title),
                react_1.default.createElement("div", { className: "w-100 p-1 m-1 text-grey900 text-xl", style: Styles.subtitle }, this.props.subtitle),
                react_1.default.createElement("div", { className: "text-right m-1 pb-1" },
                    react_1.default.createElement(NullCollapse_1.NullCollapse, { open: !this.props.noCancel },
                        react_1.default.createElement(reactstrap_1.Button, { color: "secondary", style: Styles.button, size: "lg", className: "m-1", onClick: () => this.onCancel() }, "Cancel")),
                    react_1.default.createElement(reactstrap_1.Button, { color: opts.buttonColor, style: Styles.button, size: "lg", className: "m-1", onClick: () => this.onConfirm() }, "Confirm")))));
    }
    onKeyDown(event) {
        if (event.key === "Escape") {
            this.onCancel();
        }
    }
    onConfirm() {
        this.props.onConfirm();
    }
    onCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }
}
exports.Confirm = Confirm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbmZpcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLDJDQUFrQztBQUNsQyx1REFBa0Q7QUFDbEQsZ0VBQTJEO0FBRzNELE1BQU0sTUFBTTs7QUFFTSxZQUFLLEdBQXdCO0lBQ3ZDLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFVBQVUsRUFBRSxNQUFNO0NBQ3JCLENBQUM7QUFFWSxlQUFRLEdBQXdCLEVBQzdDLENBQUM7QUFFWSxhQUFNLEdBQXdCO0lBQ3hDLFVBQVUsRUFBRSxNQUFNO0NBQ3JCLENBQUM7QUFJTixNQUFhLE9BQVEsU0FBUSxlQUFLLENBQUMsYUFBNkI7SUFFNUQsWUFBWSxLQUFVO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxJQUFJLEdBQUc7WUFDVCxXQUFXLEVBQUUsU0FBUztZQUN0QixpQkFBaUIsRUFBRSxTQUFTO1NBQy9CLENBQUM7UUFFRixNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUxQixJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxDQUVILDhCQUFDLGlDQUFlLElBQUMsSUFBSSxFQUFFLElBQUk7WUFFdkIsdUNBQUssU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUMzQyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFDO2dCQUUzQix1Q0FBSyxTQUFTLEVBQUUsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUMxRCxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFFbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBRWY7Z0JBRU4sdUNBQUssU0FBUyxFQUFDLG9DQUFvQyxFQUM5QyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsSUFFdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWxCO2dCQUVOLHVDQUFLLFNBQVMsRUFBQyxxQkFBcUI7b0JBRWhDLDhCQUFDLDJCQUFZLElBQUMsSUFBSSxFQUFFLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO3dCQUVyQyw4QkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBQyxXQUFXLEVBQ2pCLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUNwQixJQUFJLEVBQUMsSUFBSSxFQUNULFNBQVMsRUFBQyxLQUFLLEVBQ2YsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBaUIsQ0FFNUM7b0JBRWYsOEJBQUMsbUJBQU0sSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFDdkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQ3BCLElBQUksRUFBQyxJQUFJLEVBQ1QsU0FBUyxFQUFDLEtBQUssRUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFrQixDQUV2RCxDQUVKLENBRVEsQ0FFckIsQ0FBQztJQUVOLENBQUM7SUFFTyxTQUFTLENBQUMsS0FBdUM7UUFFckQsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFFTCxDQUFDO0lBRU8sU0FBUztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLFFBQVE7UUFFWixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekI7SUFFTCxDQUFDO0NBRUo7QUE5RkQsMEJBOEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7RGlhbG9nQ29udGFpbmVyfSBmcm9tICcuL0RpYWxvZ0NvbnRhaW5lcic7XG5pbXBvcnQge051bGxDb2xsYXBzZX0gZnJvbSAnLi4vbnVsbF9jb2xsYXBzZS9OdWxsQ29sbGFwc2UnO1xuaW1wb3J0IHtDb25maXJtUHJvcHN9IGZyb20gXCIuL0RpYWxvZ3NcIjtcblxuY2xhc3MgU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgdGl0bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBzdWJ0aXRsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBidXR0b246IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgfTtcblxufVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMub25Db25maXJtID0gdGhpcy5vbkNvbmZpcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNhbmNlbCA9IHRoaXMub25DYW5jZWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgYnV0dG9uQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgIHRpdGxlYmFyQ2xhc3NOYW1lOiAnYmctZGFyaydcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB7dHlwZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICBvcHRzLmJ1dHRvbkNvbG9yID0gdHlwZTtcbiAgICAgICAgICAgIG9wdHMudGl0bGViYXJDbGFzc05hbWUgPSAnYmctJyArIHR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8RGlhbG9nQ29udGFpbmVyIG9wZW49e3RydWV9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBvbktleURvd249eyhldmVudCkgPT4gdGhpcy5vbktleURvd24oZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5XaWR0aDogJzM1MHB4J319PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInctMTAwIHAtMSBwbC0yIHByLTIgXCIgKyBvcHRzLnRpdGxlYmFyQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtTdHlsZXMudGl0bGV9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHAtMSBtLTEgdGV4dC1ncmV5OTAwIHRleHQteGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtTdHlsZXMuc3VidGl0bGV9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdWJ0aXRsZX1cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgbS0xIHBiLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bGxDb2xsYXBzZSBvcGVuPXshIHRoaXMucHJvcHMubm9DYW5jZWx9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17U3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkNhbmNlbCgpfT5DYW5jZWw8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OdWxsQ29sbGFwc2U+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9e29wdHMuYnV0dG9uQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtTdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ29uZmlybSgpfT5Db25maXJtPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9EaWFsb2dDb250YWluZXI+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50Pikge1xuXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIHRoaXMub25DYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvbmZpcm0oKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db25maXJtKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbmNlbCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBDb25maXJtUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19