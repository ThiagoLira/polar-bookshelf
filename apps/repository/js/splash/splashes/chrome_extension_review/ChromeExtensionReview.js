"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Splash_1 = require("../../Splash");
const EmbeddedImages_1 = require("../../../splash2/whats_new/EmbeddedImages");
const SplitLayout_1 = require("../../../../../../web/js/ui/split_layout/SplitLayout");
const EventTrackedLink_1 = require("../components/EventTrackedLink");
const SplitLayoutRight_1 = require("../../../../../../web/js/ui/split_layout/SplitLayoutRight");
const LINK = 'https://chrome.google.com/webstore/detail/save-to-polar/jkfdkjomocoaljglgddnmhcbolldcafd/';
const EVENT_CATEGORY = 'splash-chrome-extension-review';
class ChromeExtensionReview extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement(Splash_1.Splash, { settingKey: this.props.settingKey },
            react_1.default.createElement(SplitLayout_1.SplitLayout, null,
                react_1.default.createElement(SplitLayout_1.SplitLayoutLeft, null,
                    react_1.default.createElement("h2", null, "Rate our Chrome Extension?"),
                    react_1.default.createElement("p", { className: "h5" },
                        "Could you please take ",
                        react_1.default.createElement("b", null, "1 minute"),
                        " to rate our Chrome Extension?"),
                    react_1.default.createElement("p", { className: "h5" }, "These ratings greatly help other users discover Polar."),
                    react_1.default.createElement("p", { className: "text-center mt-4" },
                        react_1.default.createElement(EventTrackedLink_1.EventTrackedLink, { eventCategory: EVENT_CATEGORY, eventAction: 'clicked-cta', href: LINK }, "Review Polar Chrome Extension")),
                    react_1.default.createElement("p", { className: "text-center text-muted" },
                        "Just select ",
                        react_1.default.createElement("i", null, "Reviews"),
                        " then click ",
                        react_1.default.createElement("i", null, "Write a Review"),
                        " on the review page.")),
                react_1.default.createElement(SplitLayoutRight_1.SplitLayoutRight, null,
                    react_1.default.createElement("div", { className: "text-center m-2" },
                        react_1.default.createElement("div", { className: "img-shadow" },
                            react_1.default.createElement(EventTrackedLink_1.EventTrackedLink, { className: "", eventCategory: 'splash-chrome-extension-review', eventAction: 'clicked-image', href: LINK },
                                react_1.default.createElement("img", { style: { maxHeight: '250px' }, src: EmbeddedImages_1.EmbeddedImages.CHROME_LOGO }))))))));
    }
}
exports.ChromeExtensionReview = ChromeExtensionReview;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hyb21lRXh0ZW5zaW9uUmV2aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hyb21lRXh0ZW5zaW9uUmV2aWV3LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQix5Q0FBb0M7QUFDcEMsOEVBQXlFO0FBQ3pFLHNGQUFrRztBQUNsRyxxRUFBZ0U7QUFDaEUsZ0dBQTJGO0FBRTNGLE1BQU0sSUFBSSxHQUFHLDJGQUEyRixDQUFDO0FBQ3pHLE1BQU0sY0FBYyxHQUFHLGdDQUFnQyxDQUFDO0FBRXhELE1BQWEscUJBQXNCLFNBQVEsZUFBSyxDQUFDLFNBQXlCO0lBRXRFLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVNLE1BQU07UUFDVCxPQUFPLENBRUgsOEJBQUMsZUFBTSxJQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFFckMsOEJBQUMseUJBQVc7Z0JBRVIsOEJBQUMsNkJBQWU7b0JBRVosdUVBQW1DO29CQUVuQyxxQ0FBRyxTQUFTLEVBQUMsSUFBSTs7d0JBQ1Msb0RBQWU7eURBRXJDO29CQUVKLHFDQUFHLFNBQVMsRUFBQyxJQUFJLDZEQUViO29CQUVKLHFDQUFHLFNBQVMsRUFBQyxrQkFBa0I7d0JBRTNCLDhCQUFDLG1DQUFnQixJQUFDLGFBQWEsRUFBRSxjQUFjLEVBQzdCLFdBQVcsRUFBQyxhQUFhLEVBQ3pCLElBQUksRUFBRSxJQUFJLG9DQUVULENBRW5CO29CQUVKLHFDQUFHLFNBQVMsRUFBQyx3QkFBd0I7O3dCQUNyQixtREFBYzs7d0JBQVksMERBQXFCOytDQUMzRCxDQUVVO2dCQUVsQiw4QkFBQyxtQ0FBZ0I7b0JBRWIsdUNBQUssU0FBUyxFQUFDLGlCQUFpQjt3QkFFNUIsdUNBQUssU0FBUyxFQUFDLFlBQVk7NEJBRXZCLDhCQUFDLG1DQUFnQixJQUFDLFNBQVMsRUFBQyxFQUFFLEVBQ1osYUFBYSxFQUFDLGdDQUFnQyxFQUM5QyxXQUFXLEVBQUMsZUFBZSxFQUMzQixJQUFJLEVBQUUsSUFBSTtnQ0FFeEIsdUNBQUssS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQyxFQUFFLEdBQUcsRUFBRSwrQkFBYyxDQUFDLFdBQVcsR0FBRyxDQUVyRCxDQUVqQixDQUVKLENBRVMsQ0FFVCxDQUVULENBRVosQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXRFRCxzREFzRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3BsYXNofSBmcm9tICcuLi8uLi9TcGxhc2gnO1xuaW1wb3J0IHtFbWJlZGRlZEltYWdlc30gZnJvbSAnLi4vLi4vLi4vc3BsYXNoMi93aGF0c19uZXcvRW1iZWRkZWRJbWFnZXMnO1xuaW1wb3J0IHtTcGxpdExheW91dCwgU3BsaXRMYXlvdXRMZWZ0fSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvc3BsaXRfbGF5b3V0L1NwbGl0TGF5b3V0JztcbmltcG9ydCB7RXZlbnRUcmFja2VkTGlua30gZnJvbSAnLi4vY29tcG9uZW50cy9FdmVudFRyYWNrZWRMaW5rJztcbmltcG9ydCB7U3BsaXRMYXlvdXRSaWdodH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3NwbGl0X2xheW91dC9TcGxpdExheW91dFJpZ2h0JztcblxuY29uc3QgTElOSyA9ICdodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9zYXZlLXRvLXBvbGFyL2prZmRram9tb2NvYWxqZ2xnZGRubWhjYm9sbGRjYWZkLyc7XG5jb25zdCBFVkVOVF9DQVRFR09SWSA9ICdzcGxhc2gtY2hyb21lLWV4dGVuc2lvbi1yZXZpZXcnO1xuXG5leHBvcnQgY2xhc3MgQ2hyb21lRXh0ZW5zaW9uUmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8U3BsYXNoIHNldHRpbmdLZXk9e3RoaXMucHJvcHMuc2V0dGluZ0tleX0+XG5cbiAgICAgICAgICAgICAgICA8U3BsaXRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0TGF5b3V0TGVmdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJhdGUgb3VyIENocm9tZSBFeHRlbnNpb24/PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3VsZCB5b3UgcGxlYXNlIHRha2UgPGI+MSBtaW51dGU8L2I+IHRvIHJhdGUgb3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hyb21lIEV4dGVuc2lvbj9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVzZSByYXRpbmdzIGdyZWF0bHkgaGVscCBvdGhlciB1c2VycyBkaXNjb3ZlciBQb2xhci5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50VHJhY2tlZExpbmsgZXZlbnRDYXRlZ29yeT17RVZFTlRfQ0FURUdPUll9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRBY3Rpb249J2NsaWNrZWQtY3RhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e0xJTkt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXZpZXcgUG9sYXIgQ2hyb21lIEV4dGVuc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRXZlbnRUcmFja2VkTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCBzZWxlY3QgPGk+UmV2aWV3czwvaT4gdGhlbiBjbGljayA8aT5Xcml0ZSBhIFJldmlldzwvaT4gb24gdGhlIHJldmlldyBwYWdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvU3BsaXRMYXlvdXRMZWZ0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTcGxpdExheW91dFJpZ2h0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG0tMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctc2hhZG93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50VHJhY2tlZExpbmsgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRDYXRlZ29yeT0nc3BsYXNoLWNocm9tZS1leHRlbnNpb24tcmV2aWV3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEFjdGlvbj0nY2xpY2tlZC1pbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17TElOS30+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3ttYXhIZWlnaHQ6ICcyNTBweCd9fSBzcmM9e0VtYmVkZGVkSW1hZ2VzLkNIUk9NRV9MT0dPfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FdmVudFRyYWNrZWRMaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvU3BsaXRMYXlvdXRSaWdodD5cblxuICAgICAgICAgICAgICAgIDwvU3BsaXRMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3BsYXNoPlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHNldHRpbmdLZXk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbiJdfQ==