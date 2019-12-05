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
const VerticalAlign_1 = require("../../../../web/js/ui/util/VerticalAlign");
const LeftRightSplit_1 = require("../../../../web/js/ui/left_right_split/LeftRightSplit");
const GroupJoinButton_1 = require("./GroupJoinButton");
const react_router_dom_1 = require("react-router-dom");
class GroupCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { group } = this.props;
        return (React.createElement("div", { className: "border-top border-left border-right p-2" },
            React.createElement(LeftRightSplit_1.LeftRightSplit, { left: React.createElement("div", { style: { display: 'flex' } },
                    React.createElement(VerticalAlign_1.VerticalAlign, null,
                        React.createElement(react_router_dom_1.Link, { className: "text-lg", to: { pathname: '/group/' + group.name } }, group.name))), right: React.createElement(GroupJoinButton_1.GroupJoinButton, { name: group.name }) }),
            React.createElement("p", null, group.description),
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement(VerticalAlign_1.VerticalAlign, null,
                    React.createElement("i", { className: "fa fa-users mr-1 text-muted", "aria-hidden": "true" })),
                React.createElement(VerticalAlign_1.VerticalAlign, null,
                    group.nrMembers,
                    " members"))));
    }
}
exports.GroupCard = GroupCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBDYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFHL0IsNEVBQXVFO0FBQ3ZFLDBGQUFxRjtBQUNyRix1REFBa0Q7QUFDbEQsdURBQXNDO0FBRXRDLE1BQWEsU0FBVSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUUxRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUMsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUzQixPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLHlDQUF5QztZQUVwRCxvQkFBQywrQkFBYyxJQUFDLElBQUksRUFBRSw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDO29CQUUvQixvQkFBQyw2QkFBYTt3QkFFVixvQkFBQyx1QkFBSSxJQUFDLFNBQVMsRUFBQyxTQUFTLEVBQ25CLEVBQUUsRUFBRSxFQUFDLFFBQVEsRUFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUssRUFBQyxJQUV4QyxLQUFLLENBQUMsSUFBSSxDQUVSLENBRUssQ0FFZCxFQUNOLEtBQUssRUFBRSxvQkFBQyxpQ0FBZSxJQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSyxHQUFHLEdBQUc7WUFFL0QsK0JBQ0ssS0FBSyxDQUFDLFdBQVcsQ0FDbEI7WUFFSiw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDO2dCQUV6QixvQkFBQyw2QkFBYTtvQkFDViwyQkFBRyxTQUFTLEVBQUMsNkJBQTZCLGlCQUFhLE1BQU0sR0FBSyxDQUN0RDtnQkFFaEIsb0JBQUMsNkJBQWE7b0JBQ1QsS0FBSyxDQUFDLFNBQVM7K0JBQ0osQ0FHZCxDQUVKLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXBERCw4QkFvREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBzXCI7XG5pbXBvcnQge1ZlcnRpY2FsQWxpZ259IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvdWkvdXRpbC9WZXJ0aWNhbEFsaWduXCI7XG5pbXBvcnQge0xlZnRSaWdodFNwbGl0fSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2xlZnRfcmlnaHRfc3BsaXQvTGVmdFJpZ2h0U3BsaXRcIjtcbmltcG9ydCB7R3JvdXBKb2luQnV0dG9ufSBmcm9tIFwiLi9Hcm91cEpvaW5CdXR0b25cIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHtncm91cH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItbGVmdCBib3JkZXItcmlnaHQgcC0yXCI+XG5cbiAgICAgICAgICAgICAgICA8TGVmdFJpZ2h0U3BsaXQgbGVmdD17PGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVydGljYWxBbGlnbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInRleHQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXt7cGF0aG5hbWU6ICcvZ3JvdXAvJyArIGdyb3VwLm5hbWUhfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwLm5hbWV9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmVydGljYWxBbGlnbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0PXs8R3JvdXBKb2luQnV0dG9uIG5hbWU9e2dyb3VwLm5hbWUhfS8+fS8+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAge2dyb3VwLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cblxuICAgICAgICAgICAgICAgICAgICA8VmVydGljYWxBbGlnbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJzIG1yLTEgdGV4dC1tdXRlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9WZXJ0aWNhbEFsaWduPlxuXG4gICAgICAgICAgICAgICAgICAgIDxWZXJ0aWNhbEFsaWduPlxuICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwLm5yTWVtYmVyc30gbWVtYmVyc1xuICAgICAgICAgICAgICAgICAgICA8L1ZlcnRpY2FsQWxpZ24+XG5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgZ3JvdXA6IEdyb3VwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=