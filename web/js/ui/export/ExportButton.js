"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const electron_1 = require("electron");
const AppRuntime_1 = require("../../AppRuntime");
class ExportButton extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.doExport = this.doExport.bind(this);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(reactstrap_1.UncontrolledDropdown, { direction: "down", hidden: AppRuntime_1.AppRuntime.isBrowser(), className: "mt-auto mb-auto", size: "md" },
                react_1.default.createElement(reactstrap_1.DropdownToggle, { color: "secondary", caret: true },
                    react_1.default.createElement("i", { className: "fas fa-file-export", style: { marginRight: '5px' } })),
                react_1.default.createElement(reactstrap_1.DropdownMenu, { className: "shadow" },
                    react_1.default.createElement(reactstrap_1.DropdownItem, { onClick: () => this.doExport('markdown') }, "Markdown"),
                    react_1.default.createElement(reactstrap_1.DropdownItem, { onClick: () => this.doExport('json') }, "JSON")))));
    }
    toExtension(format) {
        switch (format) {
            case 'markdown':
                return 'md';
            case 'html':
                return 'html';
            case 'json':
                return 'json';
        }
    }
    doExport(format) {
        const ext = this.toExtension(format);
        const opts = {
            title: "Export to " + format,
            filters: [
                { extensions: [ext], name: format }
            ]
        };
        electron_1.remote.dialog.showSaveDialog(opts, (path) => {
            if (path && this.props.onExport) {
                this.props.onExport(path, format);
            }
        });
    }
}
exports.ExportButton = ExportButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwb3J0QnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXhwb3J0QnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiwyQ0FBNEY7QUFFNUYsdUNBQWdDO0FBQ2hDLGlEQUE0QztBQUU1QyxNQUFhLFlBQWEsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFN0QsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFN0MsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBQ0g7WUFFSSw4QkFBQyxpQ0FBb0IsSUFBQyxTQUFTLEVBQUMsTUFBTSxFQUNoQixNQUFNLEVBQUUsdUJBQVUsQ0FBQyxTQUFTLEVBQUUsRUFDOUIsU0FBUyxFQUFDLGlCQUFpQixFQUMzQixJQUFJLEVBQUMsSUFBSTtnQkFFM0IsOEJBQUMsMkJBQWMsSUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLEtBQUs7b0JBRW5DLHFDQUFHLFNBQVMsRUFBQyxvQkFBb0IsRUFBQyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FFckQ7Z0JBRWpCLDhCQUFDLHlCQUFZLElBQUMsU0FBUyxFQUFDLFFBQVE7b0JBQzVCLDhCQUFDLHlCQUFZLElBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGVBQXlCO29CQUMvRSw4QkFBQyx5QkFBWSxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFxQixDQUM1RCxDQUVJLENBRXJCLENBRVQsQ0FBQztJQUVOLENBQUM7SUFFTyxXQUFXLENBQUMsTUFBb0I7UUFFcEMsUUFBUSxNQUFNLEVBQUU7WUFDWixLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxJQUFJLENBQUM7WUFDaEIsS0FBSyxNQUFNO2dCQUNQLE9BQU8sTUFBTSxDQUFDO1lBQ2xCLEtBQUssTUFBTTtnQkFDUCxPQUFPLE1BQU0sQ0FBQztTQUNyQjtJQUVMLENBQUM7SUFFTyxRQUFRLENBQUMsTUFBb0I7UUFFakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxNQUFNLElBQUksR0FBK0I7WUFFckMsS0FBSyxFQUFFLFlBQVksR0FBRyxNQUFNO1lBQzVCLE9BQU8sRUFBRTtnQkFDTCxFQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7YUFDcEM7U0FFSixDQUFDO1FBRUYsaUJBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLElBQWEsRUFBRSxFQUFFO1lBRWpELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDckM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQTFFRCxvQ0EwRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEcm9wZG93bkl0ZW0sIERyb3Bkb3duTWVudSwgRHJvcGRvd25Ub2dnbGUsIFVuY29udHJvbGxlZERyb3Bkb3dufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7RXhwb3J0Rm9ybWF0fSBmcm9tICcuLi8uLi9tZXRhZGF0YS9leHBvcnRlci9FeHBvcnRlcnMnO1xuaW1wb3J0IHtyZW1vdGV9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vLi4vQXBwUnVudGltZSc7XG5cbmV4cG9ydCBjbGFzcyBFeHBvcnRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuZG9FeHBvcnQgPSB0aGlzLmRvRXhwb3J0LmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duIGRpcmVjdGlvbj1cImRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e0FwcFJ1bnRpbWUuaXNCcm93c2VyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjb2xvcj1cInNlY29uZGFyeVwiIGNhcmV0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZmlsZS1leHBvcnRcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5kb0V4cG9ydCgnbWFya2Rvd24nKX0+TWFya2Rvd248L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5kb0V4cG9ydCgnanNvbicpfT5KU09OPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuXG4gICAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9FeHRlbnNpb24oZm9ybWF0OiBFeHBvcnRGb3JtYXQpIHtcblxuICAgICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICAgICAgY2FzZSAnbWFya2Rvd24nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnbWQnO1xuICAgICAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnanNvbic7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgZG9FeHBvcnQoZm9ybWF0OiBFeHBvcnRGb3JtYXQpIHtcblxuICAgICAgICBjb25zdCBleHQgPSB0aGlzLnRvRXh0ZW5zaW9uKGZvcm1hdCk7XG5cbiAgICAgICAgY29uc3Qgb3B0czogRWxlY3Ryb24uU2F2ZURpYWxvZ09wdGlvbnMgPSB7XG5cbiAgICAgICAgICAgIHRpdGxlOiBcIkV4cG9ydCB0byBcIiArIGZvcm1hdCxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgICAgICB7ZXh0ZW5zaW9uczogW2V4dF0sIG5hbWU6IGZvcm1hdH1cbiAgICAgICAgICAgIF1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHJlbW90ZS5kaWFsb2cuc2hvd1NhdmVEaWFsb2cob3B0cywgKHBhdGg/OiBzdHJpbmcpID0+IHtcblxuICAgICAgICAgICAgaWYgKHBhdGggJiYgdGhpcy5wcm9wcy5vbkV4cG9ydCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25FeHBvcnQocGF0aCwgZm9ybWF0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBvbkV4cG9ydD86IChwYXRoOiBzdHJpbmcsIGZvcm1hdDogRXhwb3J0Rm9ybWF0KSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuIl19