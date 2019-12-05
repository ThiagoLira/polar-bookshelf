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
const react_router_dom_1 = require("react-router-dom");
const ReactRouterLinks_1 = require("../ReactRouterLinks");
class SimpleTab extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggleHover = this.toggleHover.bind(this);
        this.state = {
            hover: false
        };
    }
    render() {
        const active = ReactRouterLinks_1.ReactRouterLinks.isActive(this.props.target);
        const computeBorderColor = () => {
            if (active) {
                return 'var(--primary600)';
            }
            if (this.state.hover) {
                return 'var(--grey400)';
            }
            return 'transparent';
        };
        const borderColor = computeBorderColor();
        const borderBottom = `3px solid ${borderColor}`;
        const color = active ? 'var(--grey900)' : 'var(--grey700)';
        return (React.createElement("div", { id: this.props.id },
            React.createElement(react_router_dom_1.Link, { to: this.props.target, className: "p-2 ml-1 mr-1", onMouseEnter: () => this.toggleHover(), onMouseLeave: () => this.toggleHover(), style: {
                    color,
                    textDecoration: 'none',
                    borderBottom,
                    userSelect: 'none',
                    whiteSpace: 'nowrap'
                } }, this.props.text)));
    }
    toggleHover() {
        this.setState(Object.assign(Object.assign({}, this.state), { hover: !this.state.hover }));
    }
}
exports.SimpleTab = SimpleTab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlVGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2ltcGxlVGFiLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsdURBQXNDO0FBQ3RDLDBEQUE2RDtBQUU3RCxNQUFhLFNBQVUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFMUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxNQUFNLEdBQUcsbUNBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUQsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7WUFFNUIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsT0FBTyxtQkFBbUIsQ0FBQzthQUM5QjtZQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLE9BQU8sZ0JBQWdCLENBQUM7YUFDM0I7WUFFRCxPQUFPLGFBQWEsQ0FBQztRQUV6QixDQUFDLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxrQkFBa0IsRUFBRSxDQUFDO1FBRXpDLE1BQU0sWUFBWSxHQUFHLGFBQWEsV0FBVyxFQUFFLENBQUM7UUFFaEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7UUFFM0QsT0FBTyxDQUVILDZCQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFbEIsb0JBQUMsdUJBQUksSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3JCLFNBQVMsRUFBQyxlQUFlLEVBQ3pCLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ3RDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ3RDLEtBQUssRUFBRTtvQkFDSCxLQUFLO29CQUNMLGNBQWMsRUFBRSxNQUFNO29CQUN0QixZQUFZO29CQUNaLFVBQVUsRUFBRSxNQUFNO29CQUNsQixVQUFVLEVBQUUsUUFBUTtpQkFDdkIsSUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixDQUVMLENBRVQsQ0FBQztJQUVOLENBQUM7SUFFTyxXQUFXO1FBQ2YsSUFBSSxDQUFDLFFBQVEsaUNBQUssSUFBSSxDQUFDLEtBQUssS0FBRSxLQUFLLEVBQUUsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBRSxDQUFDO0lBQzlELENBQUM7Q0FFSjtBQWpFRCw4QkFpRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1JlYWN0Um91dGVyTGlua3MsIFRhcmdldH0gZnJvbSBcIi4uL1JlYWN0Um91dGVyTGlua3NcIjtcblxuZXhwb3J0IGNsYXNzIFNpbXBsZVRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnRvZ2dsZUhvdmVyID0gdGhpcy50b2dnbGVIb3Zlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBob3ZlcjogZmFsc2VcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlID0gUmVhY3RSb3V0ZXJMaW5rcy5pc0FjdGl2ZSh0aGlzLnByb3BzLnRhcmdldCk7XG5cbiAgICAgICAgY29uc3QgY29tcHV0ZUJvcmRlckNvbG9yID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd2YXIoLS1wcmltYXJ5NjAwKSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd2YXIoLS1ncmV5NDAwKSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYm9yZGVyQ29sb3IgPSBjb21wdXRlQm9yZGVyQ29sb3IoKTtcblxuICAgICAgICBjb25zdCBib3JkZXJCb3R0b20gPSBgM3B4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YDtcblxuICAgICAgICBjb25zdCBjb2xvciA9IGFjdGl2ZSA/ICd2YXIoLS1ncmV5OTAwKScgOiAndmFyKC0tZ3JleTcwMCknO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9PlxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e3RoaXMucHJvcHMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBtbC0xIG1yLTFcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZUhvdmVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBob3ZlcjogISB0aGlzLnN0YXRlLmhvdmVyfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHRhcmdldDogVGFyZ2V0O1xuICAgIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IGhvdmVyOiBib29sZWFuO1xufVxuXG4iXX0=