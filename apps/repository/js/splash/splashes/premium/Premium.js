"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Splash_1 = require("../../Splash");
const CallToActionLink_1 = require("../components/CallToActionLink");
const PremiumContent_1 = require("./PremiumContent");
class Premium extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Icon = (props) => {
            return (react_1.default.createElement("div", { className: "text-primary m-3" },
                react_1.default.createElement("i", { style: { fontSize: '85px' }, className: props.className })));
        };
        const FeatureTitle = (props) => {
            return (react_1.default.createElement("h4", null,
                react_1.default.createElement("b", null, props.children)));
        };
        const Feature = (props) => {
            return (react_1.default.createElement("div", { className: "text-center ml-auto mr-auto p-1", style: { maxWidth: '33%' } }, props.children));
        };
        const FeatureText = (props) => {
            return (react_1.default.createElement("p", { style: { fontSize: '16px' } }, props.children));
        };
        const PurchaseLink = (props) => {
            return (react_1.default.createElement("div", { className: "ml-auto mr-auto" },
                react_1.default.createElement(CallToActionLink_1.CallToActionLink, { eventCategory: props.eventCategory, href: props.href }, props.children)));
        };
        const AdditionalFeature = (props) => {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("i", { style: { color: '#FF851B' }, className: "fas fa-check-circle" }),
                "\u00A0",
                props.children));
        };
        const settingKey = this.props.settingKey || 'premium';
        return (react_1.default.createElement(Splash_1.Splash, { settingKey: settingKey, disableClose: true, disableDontShowAgain: true },
            react_1.default.createElement(PremiumContent_1.PremiumContent, null)));
    }
}
exports.Premium = Premium;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlbWl1bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByZW1pdW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLHlDQUFvQztBQUdwQyxxRUFBZ0U7QUFDaEUscURBQWdEO0FBRWhELE1BQWEsT0FBUSxTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUV4RCxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUV4QixPQUFPLENBRUgsdUNBQUssU0FBUyxFQUFDLGtCQUFrQjtnQkFDN0IscUNBQUcsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxFQUN6QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsR0FBTSxDQUNqQyxDQUVULENBQUM7UUFFTixDQUFDLENBQUM7UUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBRWhDLE9BQU8sQ0FBQztnQkFFSix5Q0FBSSxLQUFLLENBQUMsUUFBUSxDQUFLLENBRXRCLENBQUMsQ0FBQztRQUVYLENBQUMsQ0FBQztRQUVGLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFFM0IsT0FBTyxDQUFDLHVDQUFLLFNBQVMsRUFBQyxpQ0FBaUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLElBRTVFLEtBQUssQ0FBQyxRQUFRLENBRWIsQ0FBQyxDQUFDO1FBRVosQ0FBQyxDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUUvQixPQUFPLENBQUMscUNBQUcsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxJQUUvQixLQUFLLENBQUMsUUFBUSxDQUVmLENBQUMsQ0FBQztRQUVWLENBQUMsQ0FBQztRQVFGLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBRTlDLE9BQU8sQ0FBQyx1Q0FBSyxTQUFTLEVBQUMsaUJBQWlCO2dCQUVwQyw4QkFBQyxtQ0FBZ0IsSUFBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFDbEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBRTdCLEtBQUssQ0FBQyxRQUFRLENBRUEsQ0FDakIsQ0FBQyxDQUFDO1FBRVosQ0FBQyxDQUFDO1FBRUYsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBRXJDLE9BQU8sQ0FBQztnQkFBSyxxQ0FBRyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDLEVBQUUsU0FBUyxFQUFDLHFCQUFxQixHQUFLOztnQkFDaEUsS0FBSyxDQUFDLFFBQVEsQ0FDbkIsQ0FBQyxDQUFDO1FBRWhCLENBQUMsQ0FBQztRQUVGLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUV0RCxPQUFPLENBRUgsOEJBQUMsZUFBTSxJQUFDLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLFlBQVksRUFBRSxJQUFJLEVBQ2xCLG9CQUFvQixFQUFFLElBQUk7WUFFOUIsOEJBQUMsK0JBQWMsT0FBRSxDQUVaLENBRVosQ0FBQztJQUNOLENBQUM7Q0FFSjtBQTlGRCwwQkE4RkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3BsYXNofSBmcm9tICcuLi8uLi9TcGxhc2gnO1xuaW1wb3J0IHtTcGxpdExheW91dCwgU3BsaXRMYXlvdXRMZWZ0fSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvc3BsaXRfbGF5b3V0L1NwbGl0TGF5b3V0JztcbmltcG9ydCB7U3BsaXRMYXlvdXRSaWdodH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3NwbGl0X2xheW91dC9TcGxpdExheW91dFJpZ2h0JztcbmltcG9ydCB7Q2FsbFRvQWN0aW9uTGlua30gZnJvbSAnLi4vY29tcG9uZW50cy9DYWxsVG9BY3Rpb25MaW5rJztcbmltcG9ydCB7UHJlbWl1bUNvbnRlbnR9IGZyb20gJy4vUHJlbWl1bUNvbnRlbnQnO1xuXG5leHBvcnQgY2xhc3MgUHJlbWl1bSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBJY29uID0gKHByb3BzOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IG0tM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2ZvbnRTaXplOiAnODVweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgRmVhdHVyZVRpdGxlID0gKHByb3BzOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuICg8aDQ+XG5cbiAgICAgICAgICAgICAgICA8Yj57cHJvcHMuY2hpbGRyZW59PC9iPlxuXG4gICAgICAgICAgICA8L2g0Pik7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBGZWF0dXJlID0gKHByb3BzOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1sLWF1dG8gbXItYXV0byBwLTFcIiBzdHlsZT17e21heFdpZHRoOiAnMzMlJ319PlxuXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICA8L2Rpdj4pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgRmVhdHVyZVRleHQgPSAocHJvcHM6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKDxwIHN0eWxlPXt7Zm9udFNpemU6ICcxNnB4J319PlxuXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICA8L3A+KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGludGVyZmFjZSBQdXJjaGFzZUxpbmtQcm9wcyB7XG4gICAgICAgICAgICByZWFkb25seSBldmVudENhdGVnb3J5OiBzdHJpbmc7XG4gICAgICAgICAgICByZWFkb25seSBocmVmOiBzdHJpbmc7XG4gICAgICAgICAgICByZWFkb25seSBjaGlsZHJlbjogYW55O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgUHVyY2hhc2VMaW5rID0gKHByb3BzOiBQdXJjaGFzZUxpbmtQcm9wcykgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvXCI+XG5cbiAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uTGluayBldmVudENhdGVnb3J5PXtwcm9wcy5ldmVudENhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLmhyZWZ9PlxuXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgICAgIDwvQ2FsbFRvQWN0aW9uTGluaz5cbiAgICAgICAgICAgIDwvZGl2Pik7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBBZGRpdGlvbmFsRmVhdHVyZSA9IChwcm9wczogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48aSBzdHlsZT17e2NvbG9yOiAnI0ZGODUxQid9fSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDt7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNldHRpbmdLZXkgPSB0aGlzLnByb3BzLnNldHRpbmdLZXkgfHwgJ3ByZW1pdW0nO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxTcGxhc2ggc2V0dGluZ0tleT17c2V0dGluZ0tleX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsb3NlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRG9udFNob3dBZ2Fpbj17dHJ1ZX0+XG5cbiAgICAgICAgICAgICAgICA8UHJlbWl1bUNvbnRlbnQvPlxuXG4gICAgICAgICAgICA8L1NwbGFzaD5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBzZXR0aW5nS2V5Pzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuIl19