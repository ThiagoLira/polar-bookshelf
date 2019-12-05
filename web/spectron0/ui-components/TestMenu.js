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
const react_dropdown_1 = __importStar(require("@burtonator/react-dropdown"));
const Functions_1 = require("polar-shared/src/util/Functions");
class TestMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(react_dropdown_1.default, { open: true, onToggle: Functions_1.NULL_FUNCTION, onSelect: Functions_1.NULL_FUNCTION },
                React.createElement(react_dropdown_1.DropdownMenu, null,
                    React.createElement(react_dropdown_1.MenuItem, { header: true }, "Header"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 1 }, "link"),
                    React.createElement(react_dropdown_1.MenuItem, { divider: true }),
                    React.createElement(react_dropdown_1.MenuItem, { header: true }, "Header"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 2 }, "link"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 3, disabled: true }, "disabled"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 4, title: "link with title" }, "link with title"),
                    React.createElement(react_dropdown_1.MenuItem, { eventKey: 5, active: true, onSelect: (eventKey) => {
                            alert(`Alert from menu item.\neventKey: ${eventKey}`);
                        } }, "link that alerts")))));
    }
}
exports.TestMenu = TestMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXN0TWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZFQUFpSTtBQUNqSSwrREFBOEQ7QUFFOUQsTUFBYSxRQUFTLFNBQVEsS0FBSyxDQUFDLFNBQW1CO0lBRW5ELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUd0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVIO1lBQ0ksb0JBQUMsd0JBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSx5QkFBYSxFQUN2QixRQUFRLEVBQUUseUJBQWE7Z0JBRTdCLG9CQUFDLDZCQUFZO29CQUVULG9CQUFDLHlCQUFRLElBQUMsTUFBTSxtQkFBa0I7b0JBQ2xDLG9CQUFDLHlCQUFRLElBQUMsUUFBUSxFQUFFLENBQUMsV0FBaUI7b0JBQ3RDLG9CQUFDLHlCQUFRLElBQUMsT0FBTyxTQUFHO29CQUNwQixvQkFBQyx5QkFBUSxJQUFDLE1BQU0sbUJBQWtCO29CQUNsQyxvQkFBQyx5QkFBUSxJQUFDLFFBQVEsRUFBRSxDQUFDLFdBQWlCO29CQUN0QyxvQkFBQyx5QkFBUSxJQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxxQkFBb0I7b0JBQ25ELG9CQUFDLHlCQUFRLElBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsaUJBQWlCLHNCQUVuQztvQkFFWCxvQkFBQyx5QkFBUSxJQUFDLFFBQVEsRUFBRSxDQUFDLEVBQ1gsTUFBTSxRQUNOLFFBQVEsRUFBRSxDQUFDLFFBQWdCLEVBQUUsRUFBRTs0QkFDM0IsS0FBSyxDQUFDLG9DQUFvQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUMxRCxDQUFDLHVCQUVBLENBQ0EsQ0FFUixDQUNULENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQS9DRCw0QkErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcGRvd24sIHtEcm9wZG93bkJ1dHRvbiwgRHJvcGRvd25NZW51LCBEcm9wZG93bk1lbnVXcmFwcGVyLCBEcm9wZG93blRvZ2dsZSwgTWVudUl0ZW19IGZyb20gJ0BidXJ0b25hdG9yL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSwgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIG9wZW49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXtOVUxMX0ZVTkNUSU9OfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17TlVMTF9GVU5DVElPTn0+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGhlYWRlcj5IZWFkZXI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXsxfT5saW5rPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaGVhZGVyPkhlYWRlcjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezJ9Pmxpbms8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXszfSBkaXNhYmxlZD5kaXNhYmxlZDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezR9IHRpdGxlPVwibGluayB3aXRoIHRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluayB3aXRoIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhldmVudEtleTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGBBbGVydCBmcm9tIG1lbnUgaXRlbS5cXG5ldmVudEtleTogJHtldmVudEtleX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rIHRoYXQgYWxlcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cblxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19