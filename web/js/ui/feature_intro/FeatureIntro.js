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
const NullCollapse_1 = require("../null_collapse/NullCollapse");
const SplitLayout_1 = require("../split_layout/SplitLayout");
const SplitLayout_2 = require("../split_layout/SplitLayout");
class FeatureIntro extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onDone = this.onDone.bind(this);
        this.state = {
            active: this.isActive()
        };
    }
    render() {
        return React.createElement(NullCollapse_1.NullCollapse, { open: this.state.active },
            React.createElement("div", { className: "border rounded text-muted mt-1 mb-1", style: { backgroundColor: 'lightyellow', fontSize: 'smaller' } },
                React.createElement(SplitLayout_1.SplitLayout, null,
                    React.createElement(SplitLayout_2.SplitLayoutLeft, null,
                        React.createElement("div", { className: "p-1" },
                            React.createElement("span", { className: "text-muted text-xs", onClick: () => this.onDone(), style: { float: 'right', fontSize: '15px', cursor: 'pointer' } },
                                React.createElement("i", { className: "fas fa-times-circle" })),
                            this.props.children)))));
    }
    onDone() {
        this.setState({ active: false });
        this.mark();
    }
    isActive() {
        return localStorage.getItem(this.props.itemName) !== 'inactive';
    }
    mark() {
        localStorage.setItem(this.props.itemName, 'inactive');
    }
}
exports.FeatureIntro = FeatureIntro;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVhdHVyZUludHJvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmVhdHVyZUludHJvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFLL0IsZ0VBQTJEO0FBQzNELDZEQUF3RDtBQUV4RCw2REFBNEQ7QUFHNUQsTUFBYSxZQUFhLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRTdELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtTQUMxQixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLG9CQUFDLDJCQUFZLElBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUV4Qyw2QkFBSyxTQUFTLEVBQUMscUNBQXFDLEVBQy9DLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQztnQkFFN0Qsb0JBQUMseUJBQVc7b0JBRVIsb0JBQUMsNkJBQWU7d0JBQ1osNkJBQUssU0FBUyxFQUFDLEtBQUs7NEJBQ2hCLDhCQUFNLFNBQVMsRUFBQyxvQkFBb0IsRUFDOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFDNUIsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUM7Z0NBQzlELDJCQUFHLFNBQVMsRUFBQyxxQkFBcUIsR0FBSyxDQUNwQzs0QkFFTixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFbEIsQ0FDUSxDQWNSLENBSVosQ0FFSyxDQUFDO0lBRXBCLENBQUM7SUFFTyxNQUFNO1FBRVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVoQixDQUFDO0lBRU8sUUFBUTtRQUNaLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFVBQVUsQ0FBQztJQUNwRSxDQUFDO0lBRU8sSUFBSTtRQUNSLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUVKO0FBekVELG9DQXlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcm9wZG93biwge0Ryb3Bkb3duQnV0dG9uLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudVdyYXBwZXIsIERyb3Bkb3duVG9nZ2xlLCBNZW51SXRlbX0gZnJvbSAnQGJ1cnRvbmF0b3IvcmVhY3QtZHJvcGRvd24nO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7TnVsbENvbGxhcHNlfSBmcm9tICcuLi9udWxsX2NvbGxhcHNlL051bGxDb2xsYXBzZSc7XG5pbXBvcnQge1NwbGl0TGF5b3V0fSBmcm9tICcuLi9zcGxpdF9sYXlvdXQvU3BsaXRMYXlvdXQnO1xuaW1wb3J0IHtTcGxpdEJhckxlZnR9IGZyb20gJy4uLy4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9TcGxpdEJhckxlZnQnO1xuaW1wb3J0IHtTcGxpdExheW91dExlZnR9IGZyb20gJy4uL3NwbGl0X2xheW91dC9TcGxpdExheW91dCc7XG5pbXBvcnQge1NwbGl0TGF5b3V0UmlnaHR9IGZyb20gJy4uL3NwbGl0X2xheW91dC9TcGxpdExheW91dFJpZ2h0JztcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVJbnRybyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uRG9uZSA9IHRoaXMub25Eb25lLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5pc0FjdGl2ZSgpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiA8TnVsbENvbGxhcHNlIG9wZW49e3RoaXMuc3RhdGUuYWN0aXZlfT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCB0ZXh0LW11dGVkIG10LTEgbWItMVwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnbGlnaHR5ZWxsb3cnLCBmb250U2l6ZTogJ3NtYWxsZXInfX0+XG5cbiAgICAgICAgICAgICAgICA8U3BsaXRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0TGF5b3V0TGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRG9uZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCcsIGZvbnRTaXplOiAnMTVweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0TGVmdD5cblxuICAgICAgICAgICAgICAgICAgICB7Lyo8U3BsaXRMYXlvdXRSaWdodCB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwLTEgdGV4dC1yaWdodFwiPiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPEJ1dHRvbiBzaXplPVwic21cIiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwicC0xIHBsLTIgcHItMlwiKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lypmb250U2l6ZT17e2ZvbnRTaXplOiAnc21hbGxlcid9fSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qb25DbGljaz17KCkgPT4gdGhpcy5vbkRvbmUoKX0+T0s8L0J1dHRvbj4qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qPC9TcGxpdExheW91dFJpZ2h0PiovfVxuXG4gICAgICAgICAgICAgICAgPC9TcGxpdExheW91dD5cblxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvTnVsbENvbGxhcHNlPjtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb25lKCkge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogZmFsc2V9KTtcblxuICAgICAgICB0aGlzLm1hcmsoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaXNBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByb3BzLml0ZW1OYW1lKSAhPT0gJ2luYWN0aXZlJztcbiAgICB9XG5cbiAgICBwcml2YXRlIG1hcmsoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucHJvcHMuaXRlbU5hbWUsICdpbmFjdGl2ZScpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBpdGVtTmFtZTogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBhY3RpdmU6IGJvb2xlYW47XG59XG4iXX0=