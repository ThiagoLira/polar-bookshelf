"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Functions_1 = require("polar-shared/src/util/Functions");
const Dialogs_1 = require("../dialogs/Dialogs");
class GroupMemberEntry extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    render() {
        const { member } = this.props;
        return react_1.default.createElement("div", { style: { display: 'flex' } },
            react_1.default.createElement("div", { className: "mt-auto mb-auto", style: {
                    flexGrow: 1,
                } },
                react_1.default.createElement("div", { className: "mt-auto mb-auto" }, member.label)),
            react_1.default.createElement("div", { className: "mt-auto mb-auto" },
                react_1.default.createElement("div", { className: "mt-auto mb-auto", style: {
                        display: 'flex'
                    } },
                    react_1.default.createElement("div", { className: "mt-auto mb-auto" }, member.type),
                    react_1.default.createElement("div", { className: "mt-auto mb-auto ml-1" },
                        react_1.default.createElement(Button_1.default, { color: "light", size: "sm", onClick: () => this.onDelete(member), className: "pl-2 pr-2" },
                            react_1.default.createElement("i", { className: "fas fa-trash" }))))));
    }
    onDelete(member) {
        const opts = {
            title: 'Delete group member?',
            subtitle: 'Are you sure you want to delete this group member?',
            type: 'warning',
            onConfirm: () => this.props.onDelete(member),
            onCancel: Functions_1.NULL_FUNCTION
        };
        Dialogs_1.Dialogs.confirm(opts);
    }
}
exports.GroupMemberEntry = GroupMemberEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBNZW1iZXJFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwTWVtYmVyRW50cnkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBRTFCLG1FQUEyQztBQUMzQywrREFBOEQ7QUFDOUQsZ0RBQXlEO0FBS3pELE1BQWEsZ0JBQWlCLFNBQVEsZUFBSyxDQUFDLFNBQXlCO0lBRWpFLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdDLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFNUIsT0FBTyx1Q0FBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDO1lBRWhDLHVDQUFLLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsS0FBSyxFQUFFO29CQUNILFFBQVEsRUFBRSxDQUFDO2lCQUNkO2dCQUVGLHVDQUFLLFNBQVMsRUFBQyxpQkFBaUIsSUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FDWCxDQUVKO1lBRU4sdUNBQUssU0FBUyxFQUFDLGlCQUFpQjtnQkFFNUIsdUNBQUssU0FBUyxFQUFDLGlCQUFpQixFQUMzQixLQUFLLEVBQUU7d0JBQ0gsT0FBTyxFQUFFLE1BQU07cUJBQ2xCO29CQUVGLHVDQUFLLFNBQVMsRUFBQyxpQkFBaUIsSUFDM0IsTUFBTSxDQUFDLElBQUksQ0FDVjtvQkFFTix1Q0FBSyxTQUFTLEVBQUMsc0JBQXNCO3dCQUVqQyw4QkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxPQUFPLEVBQ2IsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDcEMsU0FBUyxFQUFDLFdBQVc7NEJBRXpCLHFDQUFHLFNBQVMsRUFBQyxjQUFjLEdBQUUsQ0FFeEIsQ0FFUCxDQUVKLENBQ0osQ0FFSixDQUFDO0lBRVgsQ0FBQztJQUVPLFFBQVEsQ0FBQyxNQUFvQjtRQUVqQyxNQUFNLElBQUksR0FBaUI7WUFDdkIsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixRQUFRLEVBQUUsb0RBQW9EO1lBQzlELElBQUksRUFBRSxTQUFTO1lBQ2YsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxRQUFRLEVBQUUseUJBQWE7U0FDMUIsQ0FBQztRQUVGLGlCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLENBQUM7Q0FHSjtBQXhFRCw0Q0F3RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtNZW1iZXJSZWNvcmR9IGZyb20gJy4vR3JvdXBTaGFyaW5nUmVjb3Jkcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtEaWFsb2dzLCBDb25maXJtUHJvcHN9IGZyb20gJy4uL2RpYWxvZ3MvRGlhbG9ncyc7XG5cbi8qKlxuICogQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb20gb25lIG9yIG1vcmUgb2YgdGhlaXIgY29udGFjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91cE1lbWJlckVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLm9uRGVsZXRlID0gdGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIlxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAge21lbWJlci5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG8gbWwtMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRGVsZXRlKG1lbWJlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgcHItMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRlbGV0ZShtZW1iZXI6IE1lbWJlclJlY29yZCkge1xuXG4gICAgICAgIGNvbnN0IG9wdHM6IENvbmZpcm1Qcm9wcyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlIGdyb3VwIG1lbWJlcj8nLFxuICAgICAgICAgICAgc3VidGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZ3JvdXAgbWVtYmVyPycsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMucHJvcHMub25EZWxldGUobWVtYmVyKSxcbiAgICAgICAgICAgIG9uQ2FuY2VsOiBOVUxMX0ZVTkNUSU9OXG4gICAgICAgIH07XG5cbiAgICAgICAgRGlhbG9ncy5jb25maXJtKG9wdHMpO1xuXG4gICAgfVxuXG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgbWVtYmVyOiBNZW1iZXJSZWNvcmQ7XG4gICAgcmVhZG9ubHkgb25EZWxldGU6IChtZW1iZXI6IE1lbWJlclJlY29yZCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=