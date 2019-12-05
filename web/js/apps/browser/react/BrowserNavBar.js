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
const reactstrap_1 = require("reactstrap");
const Navbar_1 = __importDefault(require("reactstrap/lib/Navbar"));
const BrowserConfigurationInputGroup_1 = require("./BrowserConfigurationInputGroup");
const CaptureButton_1 = require("./CaptureButton");
const URLBar_1 = require("./URLBar");
const RefreshButton_1 = require("./RefreshButton");
class BrowserNavBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loadedURL: false
        };
    }
    componentDidMount() {
        this.props.navigationReactor.addEventListener(event => {
            if (event.type === 'did-start-loading') {
                this.setState({
                    loadedURL: true
                });
            }
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Navbar_1.default, { light: true, expand: "md", className: "p-2 border-bottom link-navbar" },
                React.createElement(reactstrap_1.InputGroup, { size: "sm", className: "" },
                    React.createElement(RefreshButton_1.RefreshButton, { navigationReactor: this.props.navigationReactor, onReload: this.props.onReload }),
                    React.createElement(URLBar_1.URLBar, { onLoadURL: url => this.onLoadURL(url) }),
                    React.createElement(CaptureButton_1.CaptureButton, { disabled: !this.state.loadedURL, onTriggerCapture: this.props.onTriggerCapture }),
                    React.createElement(BrowserConfigurationInputGroup_1.BrowserConfigurationInputGroup, { onBrowserChanged: this.props.onBrowserChanged })))));
    }
    onLoadURL(url) {
        this.setState({
            loadedURL: true
        });
        if (this.props.onLoadURL) {
            this.props.onLoadURL(url);
        }
    }
}
exports.BrowserNavBar = BrowserNavBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3Nlck5hdkJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJOYXZCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBK0Q7QUFDL0QsbUVBQTJDO0FBQzNDLHFGQUFnRjtBQUNoRixtREFBOEM7QUFDOUMscUNBQWdDO0FBR2hDLG1EQUE4QztBQUU5QyxNQUFhLGFBQWMsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFOUQsWUFBWSxLQUFhLEVBQUUsT0FBZTtRQUN0QyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDO0lBRU4sQ0FBQztJQUdNLGlCQUFpQjtRQUVwQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRWxELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDVixTQUFTLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFDO2FBQ047UUFFTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUVIO1lBRUksb0JBQUMsZ0JBQU0sSUFBQyxLQUFLLFFBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsK0JBQStCO2dCQUUvRCxvQkFBQyx1QkFBVSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLEVBQUU7b0JBRTlCLG9CQUFDLDZCQUFhLElBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFDL0MsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHO29CQUUvQyxvQkFBQyxlQUFNLElBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRztvQkFFaEQsb0JBQUMsNkJBQWEsSUFBQyxRQUFRLEVBQUUsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDaEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRztvQkFFL0Qsb0JBQUMsK0RBQThCLElBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBSSxDQUV4RSxDQUVSLENBRVAsQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFXO1FBRXpCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBRUwsQ0FBQztDQUVKO0FBakVELHNDQWlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBJbnB1dEdyb3VwLCBJbnB1dEdyb3VwQWRkb259IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdHN0cmFwL2xpYi9OYXZiYXInO1xuaW1wb3J0IHtCcm93c2VyQ29uZmlndXJhdGlvbklucHV0R3JvdXB9IGZyb20gJy4vQnJvd3NlckNvbmZpZ3VyYXRpb25JbnB1dEdyb3VwJztcbmltcG9ydCB7Q2FwdHVyZUJ1dHRvbn0gZnJvbSAnLi9DYXB0dXJlQnV0dG9uJztcbmltcG9ydCB7VVJMQmFyfSBmcm9tICcuL1VSTEJhcic7XG5pbXBvcnQge0lTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtOYXZpZ2F0aW9uRXZlbnRUeXBlLCBOYXZpZ2F0aW9uRXZlbnR9IGZyb20gJy4uL0Jyb3dzZXJBcHAnO1xuaW1wb3J0IHtSZWZyZXNoQnV0dG9ufSBmcm9tICcuL1JlZnJlc2hCdXR0b24nO1xuXG5leHBvcnQgY2xhc3MgQnJvd3Nlck5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogSVN0YXRlKSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGVkVVJMOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0aW9uUmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdkaWQtc3RhcnQtbG9hZGluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkVVJMOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPE5hdmJhciBsaWdodCBleHBhbmQ9XCJtZFwiIGNsYXNzTmFtZT1cInAtMiBib3JkZXItYm90dG9tIGxpbmstbmF2YmFyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWZyZXNoQnV0dG9uIG5hdmlnYXRpb25SZWFjdG9yPXt0aGlzLnByb3BzLm5hdmlnYXRpb25SZWFjdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ9e3RoaXMucHJvcHMub25SZWxvYWR9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFVSTEJhciBvbkxvYWRVUkw9e3VybCA9PiB0aGlzLm9uTG9hZFVSTCh1cmwpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXB0dXJlQnV0dG9uIGRpc2FibGVkPXshIHRoaXMuc3RhdGUubG9hZGVkVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UcmlnZ2VyQ2FwdHVyZT17dGhpcy5wcm9wcy5vblRyaWdnZXJDYXB0dXJlfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcm93c2VyQ29uZmlndXJhdGlvbklucHV0R3JvdXAgb25Ccm93c2VyQ2hhbmdlZD17dGhpcy5wcm9wcy5vbkJyb3dzZXJDaGFuZ2VkfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cblxuICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9hZFVSTCh1cmw6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGVkVVJMOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTG9hZFVSTCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxvYWRVUkwodXJsKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIGxvYWRlZFVSTDogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBuZWVkIHRvIGxvYWQgYSBVUkwgdGhhdCB0aGUgbmF2YmFyIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIG9uTG9hZFVSTD86ICh1cmw6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvblRyaWdnZXJDYXB0dXJlPzogKCkgPT4gdm9pZDtcbiAgICBvbkJyb3dzZXJDaGFuZ2VkPzogKGJyb3dzZXJOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgbmF2aWdhdGlvblJlYWN0b3I6IElTaW1wbGVSZWFjdG9yPE5hdmlnYXRpb25FdmVudD47XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgcmVsb2FkIGJ1dHRvbiB3YXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvblJlbG9hZDogKCkgPT4gdm9pZDtcblxufVxuIl19