"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Platforms_1 = require("polar-shared/src/util/Platforms");
const log = Logger_1.Logger.create();
class Styles {
}
Styles.notice = {
    position: 'fixed',
    width: '450px',
    bottom: '10px',
    right: '15px',
    zIndex: 999999,
    backgroundColor: '#ced4da',
    whiteSpace: 'initial'
};
Styles.intro = {
    fontWeight: 'bold',
    fontSize: '22px',
    margin: '5px 0px 10px 0px'
};
class GDPRNotice extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onAccept = this.onAccept.bind(this);
        this.state = {
            disabled: window.localStorage.getItem('gdpr-accepted') === 'true'
        };
    }
    render() {
        const display = this.state.disabled ? 'none' : 'block';
        if (Platforms_1.Platforms.isMobile()) {
            return react_1.default.createElement("div", null);
        }
        return (react_1.default.createElement("div", { id: "gdpr-notice", style: { display } },
            react_1.default.createElement("div", { className: "p-3 m-2 rounded", style: Styles.notice },
                react_1.default.createElement("div", { className: "pt-1 pb-1" },
                    react_1.default.createElement("div", { style: Styles.intro }, "We use cookies to track your usage."),
                    react_1.default.createElement("p", null, "We use cookies to track your usage and to determine which features are used to improve the quality of Polar."),
                    react_1.default.createElement("p", null, "Additionally, we track application errors which helps us find bugs and to prioritize which issues to fix."),
                    react_1.default.createElement("p", null, "This data is sent to 3rd parties which provide the infrastructure necessary to provide the analytics services needed to analyze and store the data."),
                    react_1.default.createElement("p", null, "We avoid sending personally identifiable information at all times."),
                    react_1.default.createElement("div", { style: Styles.intro }, "Cloud storage and privacy."),
                    react_1.default.createElement("p", null, "When using Polar cloud sync we store your data in the cloud and authentication / authorization is controlled by the auth provider you select."),
                    react_1.default.createElement("p", null, "We do not sell your private data.  Your private data is yours and we're not interested in selling, monetizing, or distributing it to 3rd parties except when necessary to provide data storage services.")),
                react_1.default.createElement("div", { className: "text-right" },
                    react_1.default.createElement(Button_1.default, { color: "primary", onClick: () => this.onAccept() }, "Accept")))));
    }
    onAccept() {
        window.localStorage.setItem('gdpr-accepted', 'true');
        this.setState({
            disabled: true
        });
    }
}
exports.GDPRNotice = GDPRNotice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR0RQUk5vdGljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdEUFJOb3RpY2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBTzFCLDJEQUFzRDtBQUN0RCxtRUFBMkM7QUFDM0MsK0RBQTBEO0FBRTFELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU07O0FBRU0sYUFBTSxHQUF3QjtJQUV4QyxRQUFRLEVBQUUsT0FBTztJQUNqQixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLGVBQWUsRUFBRSxTQUFTO0lBQzFCLFVBQVUsRUFBRSxTQUFTO0NBRXhCLENBQUM7QUFFWSxZQUFLLEdBQXdCO0lBRXZDLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLE1BQU0sRUFBRSxrQkFBa0I7Q0FFN0IsQ0FBQztBQUlOLE1BQWEsVUFBVyxTQUFRLGVBQUssQ0FBQyxTQUFzQjtJQUV4RCxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLE1BQU07U0FDcEUsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRXZELElBQUkscUJBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUV0QixPQUFPLDBDQUFNLENBQUM7U0FDakI7UUFFRCxPQUFPLENBRUgsdUNBQUssRUFBRSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUM7WUFFbEMsdUNBQUssU0FBUyxFQUFDLGlCQUFpQixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFFakQsdUNBQUssU0FBUyxFQUFDLFdBQVc7b0JBRXRCLHVDQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSywwQ0FFbEI7b0JBRU4sd0pBR0k7b0JBRUoscUpBR0k7b0JBRUosK0xBSUk7b0JBRUosOEdBR0k7b0JBRUosdUNBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLGlDQUVsQjtvQkFFTix5TEFJSTtvQkFFSixvUEFLSSxDQUVGO2dCQUVOLHVDQUFLLFNBQVMsRUFBQyxZQUFZO29CQUV2Qiw4QkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBaUIsQ0FFckUsQ0FFSixDQUVKLENBRVQsQ0FBQztJQUNOLENBQUM7SUFFTyxRQUFRO1FBRVosTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUFqR0QsZ0NBaUdDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0lTdHlsZU1hcH0gZnJvbSAnLi4vLi4vcmVhY3QvSVN0eWxlTWFwJztcbmltcG9ydCB7UHJvZ3Jlc3N9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtSZWFjdG9yfSBmcm9tICcuLi8uLi9yZWFjdG9yL1JlYWN0b3InO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJ3JlYWN0c3RyYXAvbGliL0NvbGxhcHNlJztcbmltcG9ydCB7SUV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vLi4vcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7RXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi4vLi4vcmVhY3Rvci9FdmVudExpc3RlbmVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtQbGF0Zm9ybXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvUGxhdGZvcm1zXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY2xhc3MgU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgbm90aWNlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB3aWR0aDogJzQ1MHB4JyxcbiAgICAgICAgYm90dG9tOiAnMTBweCcsXG4gICAgICAgIHJpZ2h0OiAnMTVweCcsXG4gICAgICAgIHpJbmRleDogOTk5OTk5LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjY2VkNGRhJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ2luaXRpYWwnXG5cbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnRybzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgICAgIG1hcmdpbjogJzVweCAwcHggMTBweCAwcHgnXG5cbiAgICB9O1xuXG59XG5cbmV4cG9ydCBjbGFzcyBHRFBSTm90aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLm9uQWNjZXB0ID0gdGhpcy5vbkFjY2VwdC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkaXNhYmxlZDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnZHByLWFjY2VwdGVkJykgPT09ICd0cnVlJ1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNhYmxlZCA/ICdub25lJyA6ICdibG9jayc7XG5cbiAgICAgICAgaWYgKFBsYXRmb3Jtcy5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAvLyBkb2Vzbid0IGRpc3BsYXkgcHJvcGVybHkgb24gbW9iaWxlLlxuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJnZHByLW5vdGljZVwiIHN0eWxlPXt7ZGlzcGxheX19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgbS0yIHJvdW5kZWRcIiBzdHlsZT17U3R5bGVzLm5vdGljZX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xIHBiLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLmludHJvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSB1c2UgY29va2llcyB0byB0cmFjayB5b3VyIHVzYWdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHVzZSBjb29raWVzIHRvIHRyYWNrIHlvdXIgdXNhZ2UgYW5kIHRvIGRldGVybWluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWNoIGZlYXR1cmVzIGFyZSB1c2VkIHRvIGltcHJvdmUgdGhlIHF1YWxpdHkgb2YgUG9sYXIuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZGl0aW9uYWxseSwgd2UgdHJhY2sgYXBwbGljYXRpb24gZXJyb3JzIHdoaWNoIGhlbHBzIHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZCBidWdzIGFuZCB0byBwcmlvcml0aXplIHdoaWNoIGlzc3VlcyB0byBmaXguXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgZGF0YSBpcyBzZW50IHRvIDNyZCBwYXJ0aWVzIHdoaWNoIHByb3ZpZGUgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mcmFzdHJ1Y3R1cmUgbmVjZXNzYXJ5IHRvIHByb3ZpZGUgdGhlIGFuYWx5dGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VzIG5lZWRlZCB0byBhbmFseXplIGFuZCBzdG9yZSB0aGUgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgYXZvaWQgc2VuZGluZyBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0IGFsbCB0aW1lcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLmludHJvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG91ZCBzdG9yYWdlIGFuZCBwcml2YWN5LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdXNpbmcgUG9sYXIgY2xvdWQgc3luYyB3ZSBzdG9yZSB5b3VyIGRhdGEgaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvdWQgYW5kIGF1dGhlbnRpY2F0aW9uIC8gYXV0aG9yaXphdGlvbiBpcyBjb250cm9sbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnkgdGhlIGF1dGggcHJvdmlkZXIgeW91IHNlbGVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgZG8gbm90IHNlbGwgeW91ciBwcml2YXRlIGRhdGEuICBZb3VyIHByaXZhdGUgZGF0YSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXJzIGFuZCB3ZSdyZSBub3QgaW50ZXJlc3RlZCBpbiBzZWxsaW5nLCBtb25ldGl6aW5nLCBvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RyaWJ1dGluZyBpdCB0byAzcmQgcGFydGllcyBleGNlcHQgd2hlbiBuZWNlc3NhcnkgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlIGRhdGEgc3RvcmFnZSBzZXJ2aWNlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQWNjZXB0KCl9PkFjY2VwdDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkFjY2VwdCgpIHtcblxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dkcHItYWNjZXB0ZWQnLCAndHJ1ZScpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IGRpc2FibGVkOiBib29sZWFuO1xufVxuIl19