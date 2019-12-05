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
const FormGroup_1 = __importDefault(require("reactstrap/lib/FormGroup"));
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const Label_1 = __importDefault(require("reactstrap/lib/Label"));
class GroupSearch extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(FormGroup_1.default, null,
                React.createElement(Label_1.default, { for: "searchByTagOrName" }, "Find groups:"),
                React.createElement(Input_1.default, { type: "text", name: "searchByTagOrName", id: "searchByTagOrName", placeholder: "Search by tag or name" }))));
    }
}
exports.GroupSearch = GroupSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBTZWFyY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cFNlYXJjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHlFQUFpRDtBQUNqRCxpRUFBeUM7QUFDekMsaUVBQXlDO0FBRXpDLE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUVoRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUg7WUFFSSxvQkFBQyxtQkFBUztnQkFFTixvQkFBQyxlQUFLLElBQUMsR0FBRyxFQUFDLG1CQUFtQixtQkFBcUI7Z0JBQ25ELG9CQUFDLGVBQUssSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUNYLElBQUksRUFBQyxtQkFBbUIsRUFDeEIsRUFBRSxFQUFDLG1CQUFtQixFQUN0QixXQUFXLEVBQUMsdUJBQXVCLEdBQUcsQ0FFckMsQ0FFVixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUEzQkQsa0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcInJlYWN0c3RyYXAvbGliL0lucHV0XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcInJlYWN0c3RyYXAvbGliL0xhYmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cFNlYXJjaCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwic2VhcmNoQnlUYWdPck5hbWVcIj5GaW5kIGdyb3Vwczo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaEJ5VGFnT3JOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoQnlUYWdPck5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgdGFnIG9yIG5hbWVcIiAvPlxuXG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=