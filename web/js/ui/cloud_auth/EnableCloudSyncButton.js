"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const Logger_1 = require("polar-shared/src/logger/Logger");
const SimpleTooltip_1 = require("../tooltip/SimpleTooltip");
const log = Logger_1.Logger.create();
class EnableCloudSyncButton extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(reactstrap_1.Button, { id: "enable-cloud-sync", color: "primary", size: "md", onClick: () => this.props.onClick() },
                react_1.default.createElement("i", { className: "fas fa-sign-in-alt", style: { marginRight: '5px' } }),
                react_1.default.createElement("span", { className: "d-none-mobile" }, "Login")),
            react_1.default.createElement(SimpleTooltip_1.SimpleTooltip, { target: "enable-cloud-sync" }, "Cloud sync enables synchronizing your repository across multiple computers.  Files are distributed in real time and always up to date.")));
    }
}
exports.EnableCloudSyncButton = EnableCloudSyncButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5hYmxlQ2xvdWRTeW5jQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRW5hYmxlQ2xvdWRTeW5jQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQiwyQ0FBMEg7QUFNMUgsMkRBQXNEO0FBUXRELDREQUF1RDtBQUd2RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxxQkFBc0IsU0FBUSxlQUFLLENBQUMsYUFBNkI7SUFFMUUsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQixDQUFDO0lBRU0sTUFBTTtRQUVMLE9BQU8sQ0FDSDtZQUVJLDhCQUFDLG1CQUFNLElBQUMsRUFBRSxFQUFDLG1CQUFtQixFQUN0QixLQUFLLEVBQUMsU0FBUyxFQUNmLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUV2QyxxQ0FBRyxTQUFTLEVBQUMsb0JBQW9CLEVBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLEtBQUssRUFBQyxHQUFHO2dCQUVoRSx3Q0FBTSxTQUFTLEVBQUMsZUFBZSxZQUFhLENBRXZDO1lBRVQsOEJBQUMsNkJBQWEsSUFBQyxNQUFNLEVBQUMsbUJBQW1CLDZJQUl6QixDQUVkLENBQ1QsQ0FBQztJQUVWLENBQUM7Q0FFSjtBQWxDRCxzREFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBQb3BvdmVyLCBQb3BvdmVyQm9keSwgVW5jb250cm9sbGVkRHJvcGRvd24sIERyb3Bkb3duVG9nZ2xlLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbX0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcyc7XG5pbXBvcnQge0Nsb3VkTG9naW5Nb2RhbH0gZnJvbSAnLi9DbG91ZExvZ2luTW9kYWwnO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7RmlyZWJhc2VVSUF1dGh9IGZyb20gJy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlVUlBdXRoJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7Q2xvdWRTeW5jT3ZlcnZpZXdNb2RhbH0gZnJvbSAnLi9DbG91ZFN5bmNPdmVydmlld01vZGFsJztcbmltcG9ydCB7Q2xvdWRTeW5jQ29uZmlndXJlZE1vZGFsfSBmcm9tICcuL0Nsb3VkU3luY0NvbmZpZ3VyZWRNb2RhbCc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQge05hdn0gZnJvbSAnLi4vdXRpbC9OYXYnO1xuaW1wb3J0IHtJbnZpdGVVc2Vyc01vZGFsfSBmcm9tICcuL0ludml0ZVVzZXJzTW9kYWwnO1xuaW1wb3J0IHtJbnZpdGF0aW9uc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0ludml0YXRpb25zJztcbmltcG9ydCB7U2ltcGxlVG9vbHRpcH0gZnJvbSAnLi4vdG9vbHRpcC9TaW1wbGVUb29sdGlwJztcbmltcG9ydCB7VVJMc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1VSTHMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBFbmFibGVDbG91ZFN5bmNCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiZW5hYmxlLWNsb3VkLXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLWluLWFsdFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnfX0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUtbW9iaWxlXCI+TG9naW48L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNpbXBsZVRvb2x0aXAgdGFyZ2V0PVwiZW5hYmxlLWNsb3VkLXN5bmNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3VkIHN5bmMgZW5hYmxlcyBzeW5jaHJvbml6aW5nIHlvdXIgcmVwb3NpdG9yeSBhY3Jvc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlIGNvbXB1dGVycy4gIEZpbGVzIGFyZSBkaXN0cmlidXRlZCBpbiByZWFsIHRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBhbHdheXMgdXAgdG8gZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgPC9TaW1wbGVUb29sdGlwPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuIl19