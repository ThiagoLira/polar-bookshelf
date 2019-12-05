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
const GroupDocAddButton_1 = require("./GroupDocAddButton");
const react_moment_1 = __importDefault(require("react-moment"));
const LinkHost_1 = require("./LinkHost");
class GroupDocInfoCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "border-top border-left border-right p-2" },
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", { style: { flexGrow: 1 }, className: "mt-auto mb-auto text-lg" }, this.props.title),
                React.createElement("div", null,
                    React.createElement(GroupDocAddButton_1.GroupDocAddButton, { persistenceLayerProvider: this.props.persistenceLayerProvider, groupID: this.props.groupID, fingerprint: this.props.fingerprint }))),
            React.createElement("div", null, this.props.description),
            React.createElement("div", { style: { display: 'flex' }, className: "mt-2" },
                React.createElement("div", { style: { flexGrow: 1 }, className: "text-grey600" },
                    React.createElement("div", { style: { display: 'flex' } },
                        React.createElement(LinkHost_1.LinkHost, { url: this.props.url }),
                        React.createElement("div", null,
                            React.createElement("b", null, this.props.nrPages),
                            " pages"))),
                React.createElement("div", { className: "text-grey600" },
                    React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", format: "MMM DD YYYY HH:mm A", ago: true, filter: (value) => value.replace(/^an? /g, '1 ') }, this.props.published)))));
    }
}
exports.GroupDocInfoCard = GroupDocInfoCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEb2NJbmZvQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwRG9jSW5mb0NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFHdEQsZ0VBQWtDO0FBQ2xDLHlDQUFvQztBQUVwQyxNQUFhLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVqRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLHlDQUF5QztZQTZCcEQsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztnQkFFekIsNkJBQUssS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBQyxFQUNwQixTQUFTLEVBQUMseUJBQXlCLElBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNmO2dCQUVOO29CQUVJLG9CQUFDLHFDQUFpQixJQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQzdELE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBRXZELENBQ0o7WUFFTixpQ0FDSyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDckI7WUFFTiw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLEVBQUUsU0FBUyxFQUFDLE1BQU07Z0JBRTNDLDZCQUFLLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUMsRUFBRSxTQUFTLEVBQUMsY0FBYztvQkFFL0MsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQzt3QkFFekIsb0JBQUMsbUJBQVEsSUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUc7d0JBRWhDOzRCQUNJLCtCQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFLO3FDQUN6QixDQUVKLENBRUo7Z0JBRU4sNkJBQUssU0FBUyxFQUFDLGNBQWM7b0JBRXpCLG9CQUFDLHNCQUFNLElBQUMsU0FBUyxFQUFFLElBQUksRUFDZixXQUFXLEVBQUMsb0JBQW9CLEVBQ2hDLE1BQU0sRUFBQyxxQkFBcUIsRUFDNUIsR0FBRyxRQUNILE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNoQixDQUVQLENBQ0osQ0FFSixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUE3RkQsNENBNkZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtHcm91cERvY0FkZEJ1dHRvbn0gZnJvbSBcIi4vR3JvdXBEb2NBZGRCdXR0b25cIjtcbmltcG9ydCB7R3JvdXBEb2NJbmZvfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL0dyb3VwRG9jSW5mb3NcIjtcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllclByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyXCI7XG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcbmltcG9ydCB7TGlua0hvc3R9IGZyb20gXCIuL0xpbmtIb3N0XCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cERvY0luZm9DYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdG9wIGJvcmRlci1sZWZ0IGJvcmRlci1yaWdodCBwLTJcIj5cblxuICAgICAgICAgICAgICAgIHsvKjxMZWZ0UmlnaHRTcGxpdCBsZWZ0PXs8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+Ki99XG5cbiAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgIDxWZXJ0aWNhbEFsaWduPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtbGdcIiBocmVmPXsnI2dyb3VwLycgKyB0aGlzLnByb3BzLmlkfT57Z3JvdXAubmFtZX08L2E+Ki99XG4gICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICA8L1ZlcnRpY2FsQWxpZ24+Ki99XG5cbiAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPC9kaXY+fSovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICByaWdodD17PEdyb3VwRG9jQWRkQnV0dG9uIGdyb3VwSUQ9e2dyb3VwLmlkfS8+fS8+Ki99XG5cbiAgICAgICAgICAgICAgICB7Lyo8cD4qL31cbiAgICAgICAgICAgICAgICB7LyogICAge2dyb3VwLmRlc2NyaXB0aW9ufSovfVxuICAgICAgICAgICAgICAgIHsvKjwvcD4qL31cblxuICAgICAgICAgICAgICAgIHsvKjxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT4qL31cblxuICAgICAgICAgICAgICAgIHsvKiAgICA8VmVydGljYWxBbGlnbj4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJzIG1yLTEgdGV4dC1tdXRlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz4qL31cbiAgICAgICAgICAgICAgICB7LyogICAgPC9WZXJ0aWNhbEFsaWduPiovfVxuXG4gICAgICAgICAgICAgICAgey8qICAgIDxWZXJ0aWNhbEFsaWduPiovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAge2dyb3VwLm5yTWVtYmVyc30gbWVtYmVycyovfVxuICAgICAgICAgICAgICAgIHsvKiAgICA8L1ZlcnRpY2FsQWxpZ24+Ki99XG5cbiAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cblxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhHcm93OiAxfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG8gdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cERvY0FkZEJ1dHRvbiBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI9e3RoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSUQ9e3RoaXMucHJvcHMuZ3JvdXBJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5nZXJwcmludD17dGhpcy5wcm9wcy5maW5nZXJwcmludH0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0gY2xhc3NOYW1lPVwibXQtMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4R3JvdzogMX19IGNsYXNzTmFtZT1cInRleHQtZ3JleTYwMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua0hvc3QgdXJsPXt0aGlzLnByb3BzLnVybH0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3RoaXMucHJvcHMubnJQYWdlc308L2I+IHBhZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmV5NjAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnQgd2l0aFRpdGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUZvcm1hdD1cIkQgTU1NIFlZWVkgaGg6TU0gQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIk1NTSBERCBZWVlZIEhIOm1tIEFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXsodmFsdWUpID0+IHZhbHVlLnJlcGxhY2UoL15hbj8gL2csICcxICcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wdWJsaXNoZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vbWVudD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBHcm91cERvY0luZm8ge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogUGVyc2lzdGVuY2VMYXllclByb3ZpZGVyO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==