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
const reactstrap_1 = require("reactstrap");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class URLBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    render() {
        return (React.createElement(reactstrap_1.Input, { autoFocus: true, id: "url-bar", className: "px-2 mx-1", name: "url", onKeyPress: (event) => this.onKeyPress(event) }));
    }
    onKeyPress(event) {
        if (event.which === 13) {
            const url = event.target.value;
            log.info("Loading URL" + url);
            this.onLoadURL(url);
        }
    }
    onLoadURL(url) {
        if (this.props.onLoadURL) {
            this.props.onLoadURL(url);
        }
    }
}
exports.URLBar = URLBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVVJMQmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkNBQWlDO0FBQ2pDLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxNQUFPLFNBQVEsS0FBSyxDQUFDLFNBQXVCO0lBRXJELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLGtCQUFLLElBQUMsU0FBUyxRQUNULEVBQUUsRUFBQyxTQUFTLEVBQ1osU0FBUyxFQUFDLFdBQVcsRUFDckIsSUFBSSxFQUFDLEtBQUssRUFDVixVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUksQ0FFM0QsQ0FBQztJQUVOLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBNEM7UUFFM0QsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNwQixNQUFNLEdBQUcsR0FBSSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUM7WUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUV2QjtJQUVMLENBQUM7SUFFTyxTQUFTLENBQUMsR0FBVztRQUV6QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBRUwsQ0FBQztDQUVKO0FBeENELHdCQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SW5wdXR9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFVSTEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IHRoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPElucHV0IGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgIGlkPVwidXJsLWJhclwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBteC0xXCJcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMub25LZXlQcmVzcyhldmVudCl9IC8+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25LZXlQcmVzcyhldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIkxvYWRpbmcgVVJMXCIgKyB1cmwpO1xuICAgICAgICAgICAgdGhpcy5vbkxvYWRVUkwodXJsKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9hZFVSTCh1cmw6IHN0cmluZykge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uTG9hZFVSTCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxvYWRVUkwodXJsKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG5cbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIG5lZWQgdG8gbG9hZCBhIFVSTCB0aGF0IHRoZSBuYXZiYXIgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgb25Mb2FkVVJMPzogKHVybDogc3RyaW5nKSA9PiB2b2lkO1xuXG59XG4iXX0=