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
const Platforms_1 = require("polar-shared/src/util/Platforms");
const Styles = {
    parent: {
        display: 'inline-block'
    },
    child: {
        display: 'inline-block',
        verticalAlign: 'middle',
        userSelect: 'none'
    },
    textLogo: {
        paddingLeft: '5px',
        fontWeight: 'bold',
        fontSize: '20px',
        userSelect: 'none',
        textDecoration: 'none'
    }
};
class NavLogo extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const createLink = () => {
            if (Platforms_1.Platforms.isMobile()) {
                return '/#annotations';
            }
            else {
                return '/';
            }
        };
        const link = createLink();
        const NavLink = (props) => {
            return React.createElement(react_router_dom_1.Link, { to: { pathname: link, hash: '#' } }, props.children);
        };
        return (React.createElement("div", { style: Styles.parent },
            React.createElement("div", { style: Styles.child },
                React.createElement(NavLink, null,
                    React.createElement("img", { src: "/apps/repository/img/icon.svg", height: "25", alt: "Polar" }))),
            React.createElement("div", { style: Styles.child },
                React.createElement("div", { className: "", style: Styles.textLogo }, "POLAR"))));
    }
}
exports.NavLogo = NavLogo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2TG9nby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5hdkxvZ28udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQix1REFBc0M7QUFDdEMsK0RBQTBEO0FBRTFELE1BQU0sTUFBTSxHQUFjO0lBQ3RCLE1BQU0sRUFBRTtRQUNKLE9BQU8sRUFBRSxjQUFjO0tBQzFCO0lBRUQsS0FBSyxFQUFFO1FBQ0gsT0FBTyxFQUFFLGNBQWM7UUFDdkIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsVUFBVSxFQUFFLE1BQU07S0FDckI7SUFFRCxRQUFRLEVBQUU7UUFDTixXQUFXLEVBQUUsS0FBSztRQUNsQixVQUFVLEVBQUUsTUFBTTtRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixVQUFVLEVBQUUsTUFBTTtRQUNsQixjQUFjLEVBQUUsTUFBTTtLQUN6QjtDQUVKLENBQUM7QUFJRixNQUFhLE9BQVEsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFNUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO1lBRXBCLElBQUkscUJBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDdEIsT0FBTyxlQUFlLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0gsT0FBTyxHQUFHLENBQUM7YUFDZDtRQUVMLENBQUMsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLFVBQVUsRUFBRSxDQUFDO1FBRTFCLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDM0IsT0FBTyxvQkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxJQUN2QyxLQUFLLENBQUMsUUFBUSxDQUNaLENBQUE7UUFDWCxDQUFDLENBQUM7UUFFRixPQUFPLENBQ0gsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDcEIsb0JBQUMsT0FBTztvQkFDSiw2QkFBSyxHQUFHLEVBQUMsK0JBQStCLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxHQUFFLENBQzVELENBQ1I7WUFFTiw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7Z0JBQ3BCLDZCQUFLLFNBQVMsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLFlBQWEsQ0FDbkQsQ0FDSixDQUNULENBQUM7SUFFTixDQUFDO0NBRUo7QUExQ0QsMEJBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtQbGF0Zm9ybXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvUGxhdGZvcm1zXCI7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuICAgIHBhcmVudDoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH0sXG5cbiAgICBjaGlsZDoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICAgIH0sXG5cbiAgICB0ZXh0TG9nbzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzVweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gICAgfVxuXG59O1xuXG4vKipcbiAqL1xuZXhwb3J0IGNsYXNzIE5hdkxvZ28gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlTGluayA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKFBsYXRmb3Jtcy5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvI2Fubm90YXRpb25zJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBjcmVhdGVMaW5rKCk7XG5cbiAgICAgICAgY29uc3QgTmF2TGluayA9IChwcm9wczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPExpbmsgdG89e3twYXRobmFtZTogbGluaywgaGFzaDogJyMnfX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMucGFyZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuY2hpbGR9PlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2FwcHMvcmVwb3NpdG9yeS9pbWcvaWNvbi5zdmdcIiBoZWlnaHQ9XCIyNVwiIGFsdD1cIlBvbGFyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuY2hpbGR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXtTdHlsZXMudGV4dExvZ299PlBPTEFSPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19