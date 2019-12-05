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
const SupportContent_1 = require("./SupportContent");
const FixedNav_1 = require("../FixedNav");
const FixedNav_2 = require("../FixedNav");
const RepoHeader_1 = require("../repo_header/RepoHeader");
class SupportScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(FixedNav_2.FixedNavBody, { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-12 w-100 pt-4" },
                        React.createElement(SupportContent_1.SupportContent, { plan: this.props.plan }))))));
    }
}
exports.SupportScreen = SupportScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcG9ydFNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN1cHBvcnRTY3JlZW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixxREFBZ0Q7QUFDaEQsMENBQXFDO0FBQ3JDLDBDQUF5QztBQUN6QywwREFBcUQ7QUFJckQsTUFBYSxhQUFjLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRTlELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLG1CQUFRLElBQUMsRUFBRSxFQUFDLGdCQUFnQjtZQUV6QjtnQkFFSSxvQkFBQyx1QkFBVSxJQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEdBQUcsQ0FFckU7WUFFVCxvQkFBQyx1QkFBWSxJQUFDLFNBQVMsRUFBQyxpQkFBaUI7Z0JBRXJDLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUVoQiw2QkFBSyxTQUFTLEVBQUMsc0JBQXNCO3dCQUNqQyxvQkFBQywrQkFBYyxJQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUN0QyxDQUNKLENBRUssQ0FFUixDQUVkLENBQUM7SUFDTixDQUFDO0NBRUo7QUF0Q0Qsc0NBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTdXBwb3J0Q29udGVudH0gZnJvbSAnLi9TdXBwb3J0Q29udGVudCc7XG5pbXBvcnQge0ZpeGVkTmF2fSBmcm9tICcuLi9GaXhlZE5hdic7XG5pbXBvcnQge0ZpeGVkTmF2Qm9keX0gZnJvbSAnLi4vRml4ZWROYXYnO1xuaW1wb3J0IHtSZXBvSGVhZGVyfSBmcm9tICcuLi9yZXBvX2hlYWRlci9SZXBvSGVhZGVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtBY2NvdW50UGxhbn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2FjY291bnRzL0FjY291bnQnO1xuXG5leHBvcnQgY2xhc3MgU3VwcG9ydFNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Rml4ZWROYXYgaWQ9XCJkb2MtcmVwb3NpdG9yeVwiPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8UmVwb0hlYWRlciBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0vPlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8Rml4ZWROYXZCb2R5IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIHctMTAwIHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VwcG9ydENvbnRlbnQgcGxhbj17dGhpcy5wcm9wcy5wbGFufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0ZpeGVkTmF2Qm9keT5cblxuICAgICAgICAgICAgPC9GaXhlZE5hdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xuICAgIHJlYWRvbmx5IHBsYW46IEFjY291bnRQbGFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19