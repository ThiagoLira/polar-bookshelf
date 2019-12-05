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
const TabContent_1 = __importDefault(require("reactstrap/lib/TabContent"));
const TabPane_1 = __importDefault(require("reactstrap/lib/TabPane"));
const TabBody_1 = require("./TabBody");
class TabPanes extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return React.createElement(TabContent_1.default, { activeTab: this.props.activeTab }, this.props.tabs.map(tab => {
            return React.createElement(TabPane_1.default, { tabId: tab.id, key: tab.id },
                React.createElement(TabBody_1.TabBody, { tab: tab }));
        }));
    }
}
exports.TabPanes = TabPanes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiUGFuZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYWJQYW5lcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLDJFQUFtRDtBQUNuRCxxRUFBNkM7QUFDN0MsdUNBQWtDO0FBR2xDLE1BQWEsUUFBUyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUV6RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLG9CQUFDLG9CQUFVLElBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFFbkIsT0FBTyxvQkFBQyxpQkFBTyxJQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDdEMsb0JBQUMsaUJBQU8sSUFBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQ2QsQ0FBQztRQUVmLENBQUMsQ0FBQyxDQUlHLENBQUM7SUFFbEIsQ0FBQztDQUVKO0FBeEJELDRCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VGFifSBmcm9tICcuL1RhYk5hdic7XG5pbXBvcnQgVGFiQ29udGVudCBmcm9tICdyZWFjdHN0cmFwL2xpYi9UYWJDb250ZW50JztcbmltcG9ydCBUYWJQYW5lIGZyb20gJ3JlYWN0c3RyYXAvbGliL1RhYlBhbmUnO1xuaW1wb3J0IHtUYWJCb2R5fSBmcm9tICcuL1RhYkJvZHknO1xuaW1wb3J0IHtUYWJTdHlsZXN9IGZyb20gJy4vVGFiU3R5bGVzJztcblxuZXhwb3J0IGNsYXNzIFRhYlBhbmVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17dGhpcy5wcm9wcy5hY3RpdmVUYWJ9PlxuXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50YWJzLm1hcCh0YWIgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFiUGFuZSB0YWJJZD17dGFiLmlkfSBrZXk9e3RhYi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQm9keSB0YWI9e3RhYn0vPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+O1xuXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvVGFiQ29udGVudD47XG5cbiAgICB9XG5cbn1cblxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBhY3RpdmVUYWI6IG51bWJlcjtcbiAgICByZWFkb25seSB0YWJzOiBSZWFkb25seUFycmF5PFRhYj47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5cbiJdfQ==