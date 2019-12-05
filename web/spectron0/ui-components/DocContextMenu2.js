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
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
const Functions_1 = require("polar-shared/src/util/Functions");
const AppRuntime_1 = require("../../js/AppRuntime");
const DropdownItem_1 = __importDefault(require("reactstrap/lib/DropdownItem"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
let sequence = 0;
const Styles = {
    DropdownMenu: {
        zIndex: 999,
        fontSize: '14px'
    },
};
class DocContextMenu2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.id = 'doc-context-menu2-' + sequence++;
        this.contextMenuHandlers = react_context_menu_wrapper_1.prepareContextMenuHandlers({ id: this.id });
    }
    render() {
        class ToggleContext {
            toggle() {
            }
        }
        const Context = React.createContext(new ToggleContext());
        return (React.createElement("div", null,
            React.createElement(Context.Provider, { value: new ToggleContext() },
                React.createElement("div", Object.assign({}, this.contextMenuHandlers), this.props.children),
                React.createElement(react_context_menu_wrapper_1.ContextMenuWrapper, { id: this.id },
                    React.createElement("div", { className: "border shadow pt-2 pb-2", style: { backgroundColor: 'var(--white)' } },
                        React.createElement(Button_1.default, { type: "button", role: "menuitem", onClick: () => console.log("set title"), className: "dropdown-item" }, "Set Title"),
                        React.createElement(DropdownItem_1.default, { toggle: false, disabled: false, onClick: () => Functions_1.NULL_FUNCTION }, "Copy Original URL"),
                        React.createElement(DropdownItem_1.default, { disabled: false, hidden: AppRuntime_1.AppRuntime.isBrowser(), onClick: () => Functions_1.NULL_FUNCTION }, "Show File"),
                        React.createElement(DropdownItem_1.default, { disabled: false, hidden: AppRuntime_1.AppRuntime.isBrowser(), onClick: () => Functions_1.NULL_FUNCTION }, "Copy File Path"),
                        React.createElement(DropdownItem_1.default, { disabled: false, onClick: () => Functions_1.NULL_FUNCTION }, "Copy Document ID"),
                        React.createElement(DropdownItem_1.default, { divider: true }),
                        React.createElement(DropdownItem_1.default, { className: "text-danger", onClick: Functions_1.NULL_FUNCTION }, "Delete"))))));
    }
}
exports.DocContextMenu2 = DocContextMenu2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQ29udGV4dE1lbnUyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jQ29udGV4dE1lbnUyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsdUZBSWdEO0FBQ2hELCtEQUE4RDtBQUM5RCxvREFBK0M7QUFFL0MsK0VBQXVEO0FBQ3ZELG1FQUEyQztBQUUzQyxJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQWM7SUFFdEIsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEdBQUc7UUFDWCxRQUFRLEVBQUUsTUFBTTtLQUNuQjtDQUVKLENBQUM7QUFFRixNQUFhLGVBQWdCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBTWhFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsRUFBRSxHQUFHLG9CQUFvQixHQUFHLFFBQVEsRUFBRSxDQUFDO1FBRTVDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyx1REFBMEIsQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUV6RSxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sYUFBYTtZQUNSLE1BQU07WUFFYixDQUFDO1NBQ0o7UUFFRCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQztRQUV6RCxPQUFPLENBRUg7WUFFSSxvQkFBQyxPQUFPLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxJQUFJLGFBQWEsRUFBRTtnQkFHNUMsNkNBQVMsSUFBSSxDQUFDLG1CQUFtQixHQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDbEI7Z0JBRU4sb0JBQUMsK0NBQWtCLElBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUUzQiw2QkFBSyxTQUFTLEVBQUMseUJBQXlCLEVBQ25DLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUM7d0JBRXpDLG9CQUFDLGdCQUFNLElBQUMsSUFBSSxFQUFDLFFBQVEsRUFDYixJQUFJLEVBQUMsVUFBVSxFQUNmLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUN2QyxTQUFTLEVBQUMsZUFBZSxnQkFFeEI7d0JBRVQsb0JBQUMsc0JBQVksSUFBQyxNQUFNLEVBQUUsS0FBSyxFQUNiLFFBQVEsRUFBRSxLQUFLLEVBQ2YsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLHlCQUFhLHdCQUUzQjt3QkFFZixvQkFBQyxzQkFBWSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQ2YsTUFBTSxFQUFFLHVCQUFVLENBQUMsU0FBUyxFQUFFLEVBQzlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyx5QkFBYSxnQkFFM0I7d0JBRWYsb0JBQUMsc0JBQVksSUFBQyxRQUFRLEVBQUUsS0FBSyxFQUNmLE1BQU0sRUFBRSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxFQUM5QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQWEscUJBRTNCO3dCQUVmLG9CQUFDLHNCQUFZLElBQUMsUUFBUSxFQUFFLEtBQUssRUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQWEsdUJBRTNCO3dCQUlmLG9CQUFDLHNCQUFZLElBQUMsT0FBTyxTQUFHO3dCQUV4QixvQkFBQyxzQkFBWSxJQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFFLHlCQUFhLGFBRTdDLENBRWIsQ0FFVyxDQUNGLENBRWpCLENBRVQsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQTFGRCwwQ0EwRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIENvbnRleHRNZW51SGFuZGxlcnMsXG4gICAgQ29udGV4dE1lbnVXcmFwcGVyLFxuICAgIHByZXBhcmVDb250ZXh0TWVudUhhbmRsZXJzXG59IGZyb20gJ0BidXJ0b25hdG9yL3JlYWN0LWNvbnRleHQtbWVudS13cmFwcGVyJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uL2pzL0FwcFJ1bnRpbWUnO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uLy4uL2pzL3JlYWN0L0lTdHlsZU1hcCc7XG5pbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gJ3JlYWN0c3RyYXAvbGliL0Ryb3Bkb3duSXRlbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5cbmxldCBzZXF1ZW5jZTogbnVtYmVyID0gMDtcbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgRHJvcGRvd25NZW51OiB7XG4gICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICBmb250U2l6ZTogJzE0cHgnXG4gICAgfSxcblxufTtcblxuZXhwb3J0IGNsYXNzIERvY0NvbnRleHRNZW51MiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSBjb250ZXh0TWVudUhhbmRsZXJzOiBDb250ZXh0TWVudUhhbmRsZXJzO1xuXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmlkID0gJ2RvYy1jb250ZXh0LW1lbnUyLScgKyBzZXF1ZW5jZSsrO1xuXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVIYW5kbGVycyA9IHByZXBhcmVDb250ZXh0TWVudUhhbmRsZXJzKHtpZDogdGhpcy5pZH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjbGFzcyBUb2dnbGVDb250ZXh0IHtcbiAgICAgICAgICAgIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobmV3IFRvZ2dsZUNvbnRleHQoKSk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtuZXcgVG9nZ2xlQ29udGV4dCgpfT5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5jb250ZXh0TWVudUhhbmRsZXJzfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Q29udGV4dE1lbnVXcmFwcGVyIGlkPXt0aGlzLmlkfT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBzaGFkb3cgcHQtMiBwYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3ZhcigtLXdoaXRlKSd9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJzZXQgdGl0bGVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0IFRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSB0b2dnbGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IE5VTExfRlVOQ1RJT059PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgT3JpZ2luYWwgVVJMXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17QXBwUnVudGltZS5pc0Jyb3dzZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gTlVMTF9GVU5DVElPTn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBGaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17QXBwUnVudGltZS5pc0Jyb3dzZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gTlVMTF9GVU5DVElPTn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weSBGaWxlIFBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gTlVMTF9GVU5DVElPTn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weSBEb2N1bWVudCBJRFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRPRE86IG1heWJlIGxvYWQgb3JpZ2luYWwgVVJMIHRvbz8qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIiBvbkNsaWNrPXtOVUxMX0ZVTkNUSU9OfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9Db250ZXh0TWVudVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5cbiJdfQ==