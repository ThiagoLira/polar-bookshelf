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
const ReactDOM = __importStar(require("react-dom"));
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
const BrowserContextMenu_1 = require("./BrowserContextMenu");
class BrowserContextMenus {
    static create() {
        const contextMenuRoot = document.createElement("div");
        contextMenuRoot.id = 'context-menu-root';
        document.body.appendChild(contextMenuRoot);
        const id = 'viewer-context-menu';
        ReactDOM.render(React.createElement(BrowserContextMenu_1.BrowserContextMenu, { id: id }), contextMenuRoot);
    }
    static trigger(triggerEvent, mouseEvent) {
        react_context_menu_wrapper_1.showContextMenu({
            id: "viewer-context-menu",
            data: triggerEvent,
            x: triggerEvent.point.x,
            y: triggerEvent.point.y
        });
    }
}
exports.BrowserContextMenus = BrowserContextMenus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckNvbnRleHRNZW51cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJDb250ZXh0TWVudXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixvREFBc0M7QUFDdEMsdUZBQXVFO0FBRXZFLDZEQUF3RDtBQUV4RCxNQUFhLG1CQUFtQjtJQUVyQixNQUFNLENBQUMsTUFBTTtRQUVoQixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELGVBQWUsQ0FBQyxFQUFFLEdBQUcsbUJBQW1CLENBQUM7UUFFekMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFM0MsTUFBTSxFQUFFLEdBQUcscUJBQXFCLENBQUM7UUFFakMsUUFBUSxDQUFDLE1BQU0sQ0FFWCxvQkFBQyx1Q0FBa0IsSUFBQyxFQUFFLEVBQUUsRUFBRSxHQUVMLEVBRXJCLGVBQWUsQ0FFbEIsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQTBCLEVBQUUsVUFBc0I7UUFFcEUsNENBQWUsQ0FBQztZQUNaLEVBQUUsRUFBRSxxQkFBcUI7WUFFekIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQW5DRCxrREFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtzaG93Q29udGV4dE1lbnV9IGZyb20gJ0BidXJ0b25hdG9yL3JlYWN0LWNvbnRleHQtbWVudS13cmFwcGVyJztcbmltcG9ydCB7VHJpZ2dlckV2ZW50fSBmcm9tICcuLi9UcmlnZ2VyRXZlbnQnO1xuaW1wb3J0IHtCcm93c2VyQ29udGV4dE1lbnV9IGZyb20gJy4vQnJvd3NlckNvbnRleHRNZW51JztcblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJDb250ZXh0TWVudXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKSB7XG5cbiAgICAgICAgY29uc3QgY29udGV4dE1lbnVSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGV4dE1lbnVSb290LmlkID0gJ2NvbnRleHQtbWVudS1yb290JztcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRleHRNZW51Um9vdCk7XG5cbiAgICAgICAgY29uc3QgaWQgPSAndmlld2VyLWNvbnRleHQtbWVudSc7XG5cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICAgICAgICA8QnJvd3NlckNvbnRleHRNZW51IGlkPXtpZH0+XG5cbiAgICAgICAgICAgIDwvQnJvd3NlckNvbnRleHRNZW51PixcblxuICAgICAgICAgICAgY29udGV4dE1lbnVSb290XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdHJpZ2dlcih0cmlnZ2VyRXZlbnQ6IFRyaWdnZXJFdmVudCwgbW91c2VFdmVudDogTW91c2VFdmVudCkge1xuXG4gICAgICAgIHNob3dDb250ZXh0TWVudSh7XG4gICAgICAgICAgICBpZDogXCJ2aWV3ZXItY29udGV4dC1tZW51XCIsXG4gICAgICAgICAgICAvLyBldmVudDogbW91c2VFdmVudCxcbiAgICAgICAgICAgIGRhdGE6IHRyaWdnZXJFdmVudCxcbiAgICAgICAgICAgIHg6IHRyaWdnZXJFdmVudC5wb2ludC54LFxuICAgICAgICAgICAgeTogdHJpZ2dlckV2ZW50LnBvaW50LnlcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==