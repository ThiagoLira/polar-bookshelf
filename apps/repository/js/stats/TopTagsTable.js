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
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocInfoStatistics_1 = require("../../../../web/js/metadata/DocInfoStatistics");
const StatTitle_1 = __importDefault(require("./StatTitle"));
const Table_1 = __importDefault(require("reactstrap/lib/Table"));
const log = Logger_1.Logger.create();
class TopTagsTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const topTags = DocInfoStatistics_1.DocInfoStatistics.computeTopTags(this.props.docInfos, 20);
        return React.createElement("div", { id: "top-tags-table" },
            React.createElement(StatTitle_1.default, null, "Top Tags"),
            React.createElement(Table_1.default, null,
                React.createElement("tbody", null, topTags.map(topTag => React.createElement("tr", { key: topTag.key },
                    React.createElement("td", { className: "pt-1 pb-1" }, topTag.key),
                    React.createElement("td", { className: "pt-1 pb-1" }, topTag.value))))));
    }
}
exports.default = TopTagsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wVGFnc1RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9wVGFnc1RhYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkRBQXNEO0FBQ3RELHFGQUFnRjtBQUdoRiw0REFBb0M7QUFDcEMsaUVBQXlDO0FBRXpDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFxQixZQUFhLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXJFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxPQUFPLEdBQUcscUNBQWlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFFLE9BQU8sNkJBQUssRUFBRSxFQUFDLGdCQUFnQjtZQUMzQixvQkFBQyxtQkFBUyxtQkFBcUI7WUFDL0Isb0JBQUMsZUFBSztnQkFDRixtQ0FDSyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQ2pCLDRCQUFJLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztvQkFDZiw0QkFBSSxTQUFTLEVBQUMsV0FBVyxJQUFFLE1BQU0sQ0FBQyxHQUFHLENBQU07b0JBQzNDLDRCQUFJLFNBQVMsRUFBQyxXQUFXLElBQUUsTUFBTSxDQUFDLEtBQUssQ0FBTSxDQUM1QyxDQUFDLENBRVAsQ0FDSixDQUNOLENBQUM7SUFDWCxDQUFDO0NBRUo7QUE3QkQsK0JBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY0luZm9TdGF0aXN0aWNzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbWV0YWRhdGEvRG9jSW5mb1N0YXRpc3RpY3MnO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mbyc7XG5pbXBvcnQge1Jlc3BvbnNpdmVQaWV9IGZyb20gJ0BuaXZvL3BpZSc7XG5pbXBvcnQgU3RhdFRpdGxlIGZyb20gJy4vU3RhdFRpdGxlJztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdHN0cmFwL2xpYi9UYWJsZSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVGFnc1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHRvcFRhZ3MgPSBEb2NJbmZvU3RhdGlzdGljcy5jb21wdXRlVG9wVGFncyh0aGlzLnByb3BzLmRvY0luZm9zLCAyMCk7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9XCJ0b3AtdGFncy10YWJsZVwiPlxuICAgICAgICAgICAgPFN0YXRUaXRsZT5Ub3AgVGFnczwvU3RhdFRpdGxlPlxuICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge3RvcFRhZ3MubWFwKHRvcFRhZyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3RvcFRhZy5rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHQtMSBwYi0xXCI+e3RvcFRhZy5rZXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB0LTEgcGItMVwiPnt0b3BUYWcudmFsdWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPil9XG5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgZG9jSW5mb3M6IFJlYWRvbmx5QXJyYXk8SURvY0luZm8+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==