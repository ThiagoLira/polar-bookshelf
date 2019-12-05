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
const ReleaseMetadatas_1 = require("polar-release-metadata/src/ReleaseMetadatas");
const Arrays_1 = require("polar-shared/src/util/Arrays");
const DateMoment_1 = require("../../../../../web/js/ui/util/DateMoment");
const releases = ReleaseMetadatas_1.ReleaseMetadatas.get();
class WhatsNewContent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const release = Arrays_1.Arrays.first(releases);
        if (!release) {
            return null;
        }
        const VideoEmbed = () => {
            if (release.video_embed) {
                return React.createElement("div", { className: "embed-responsive embed-responsive-16by9 mt-1 mb-1" },
                    React.createElement("iframe", { className: "embed-responsive-item", width: "560", height: "315", src: release.video_embed, frameBorder: "0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }));
            }
            return null;
        };
        const Announcement = () => {
            return React.createElement("span", { style: { display: 'inline-block' }, className: "bg-attention700 rounded p-1 text-white" }, "ANNOUNCEMENT");
        };
        return (React.createElement("div", null,
            React.createElement(VideoEmbed, null),
            React.createElement("h1", null, release.title),
            React.createElement("div", { className: "mb-1" },
                React.createElement(Announcement, null),
                React.createElement("span", { className: "text-muted ml-1" },
                    React.createElement(DateMoment_1.DateMoment, { datetime: release.date }))),
            React.createElement("div", { className: "text-sm", dangerouslySetInnerHTML: { __html: release.html } })));
    }
}
exports.WhatsNewContent = WhatsNewContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNOZXdDb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV2hhdHNOZXdDb250ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0Isa0ZBQTZFO0FBQzdFLHlEQUFvRDtBQUNwRCx5RUFBb0U7QUFFcEUsTUFBTSxRQUFRLEdBQUcsbUNBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFeEMsTUFBYSxlQUFnQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVoRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLE9BQU8sR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBRSxPQUFPLEVBQUU7WUFFWCxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO1lBRXBCLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFFckIsT0FBTyw2QkFBSyxTQUFTLEVBQUMsbURBQW1EO29CQUVyRSxnQ0FBUSxTQUFTLEVBQUMsdUJBQXVCLEVBQ2pDLEtBQUssRUFBQyxLQUFLLEVBQ1gsTUFBTSxFQUFDLEtBQUssRUFDWixHQUFHLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFDeEIsV0FBVyxFQUFDLEdBQUcsRUFDZixLQUFLLEVBQUMseUVBQXlFLEVBQy9FLGVBQWUsU0FBRSxDQUN2QixDQUFDO2FBRVY7WUFFRCxPQUFPLElBQUksQ0FBQztRQUVoQixDQUFDLENBQUM7UUFFRixNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7WUFDdEIsT0FBTyw4QkFBTSxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFDLEVBQ2hDLFNBQVMsRUFBQyx3Q0FBd0MsbUJBRXhELENBQUM7UUFDWixDQUFDLENBQUM7UUFFRixPQUFPLENBRUg7WUFFSSxvQkFBQyxVQUFVLE9BQUU7WUFFYixnQ0FDSyxPQUFPLENBQUMsS0FBSyxDQUNiO1lBRUwsNkJBQUssU0FBUyxFQUFDLE1BQU07Z0JBQ2pCLG9CQUFDLFlBQVksT0FBRTtnQkFFZiw4QkFBTSxTQUFTLEVBQUMsaUJBQWlCO29CQUM3QixvQkFBQyx1QkFBVSxJQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxHQUFHLENBQ2xDLENBRUw7WUFFTiw2QkFBSyxTQUFTLEVBQUMsU0FBUyxFQUNuQix1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLEdBRTlDLENBRUosQ0FDVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBeEVELDBDQXdFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UmVsZWFzZU1ldGFkYXRhc30gZnJvbSBcInBvbGFyLXJlbGVhc2UtbWV0YWRhdGEvc3JjL1JlbGVhc2VNZXRhZGF0YXNcIjtcbmltcG9ydCB7QXJyYXlzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0FycmF5c1wiO1xuaW1wb3J0IHtEYXRlTW9tZW50fSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3V0aWwvRGF0ZU1vbWVudFwiO1xuXG5jb25zdCByZWxlYXNlcyA9IFJlbGVhc2VNZXRhZGF0YXMuZ2V0KCk7XG5cbmV4cG9ydCBjbGFzcyBXaGF0c05ld0NvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCByZWxlYXNlID0gQXJyYXlzLmZpcnN0KHJlbGVhc2VzKTtcblxuICAgICAgICBpZiAoISByZWxlYXNlKSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgYWxtb3N0IG5ldmVyIGhhcHBlblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBWaWRlb0VtYmVkID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAocmVsZWFzZS52aWRlb19lbWJlZCkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5IG10LTEgbWItMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjU2MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlbGVhc2UudmlkZW9fZW1iZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW4vPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IEFubm91bmNlbWVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1hdHRlbnRpb243MDAgcm91bmRlZCBwLTEgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIEFOTk9VTkNFTUVOVFxuICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPFZpZGVvRW1iZWQvPlxuXG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICB7cmVsZWFzZS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBbm5vdW5jZW1lbnQvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVNb21lbnQgZGF0ZXRpbWU9e3JlbGVhc2UuZGF0ZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcmVsZWFzZS5odG1sfX0+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuIl19