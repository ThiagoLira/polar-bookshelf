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
const bar_1 = require("@nivo/bar");
const Arrays_1 = require("polar-shared/src/util/Arrays");
const StatBox_1 = require("./StatBox");
const log = Logger_1.Logger.create();
class NewDocumentRateChart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const dateStats = DocInfoStatistics_1.DocInfoStatistics.computeDocumentsAddedRate(this.props.docInfos);
        const labels = dateStats.map(current => current.date);
        const ticks = Arrays_1.Arrays.sample(labels, 10);
        const data = dateStats.map(current => {
            return {
                date: current.date,
                value: current.value
            };
        });
        return (React.createElement("div", { id: "new-documents-per-day-chart", className: "p-1" },
            React.createElement(StatBox_1.StatBox, { style: { height: '325px', width: '100%' } },
                React.createElement(StatTitle_1.default, null, "New Documents Per Day"),
                React.createElement(bar_1.ResponsiveBar, { data: data, keys: [
                        "value",
                    ], indexBy: "date", margin: {
                        top: 10,
                        right: 10,
                        bottom: 50,
                        left: 40
                    }, padding: 0.3, colors: "category10", colorBy: "id", defs: [
                        {
                            "id": "dots",
                            "type": "patternDots",
                            "background": "inherit",
                            "color": "#38bcb2",
                            "size": 4,
                            "padding": 1,
                            "stagger": true
                        },
                        {
                            "id": "lines",
                            "type": "patternLines",
                            "background": "inherit",
                            "color": "#eed312",
                            "rotation": -45,
                            "lineWidth": 6,
                            "spacing": 10
                        }
                    ], fill: [
                        {
                            "match": {
                                "id": "fries"
                            },
                            "id": "dots"
                        },
                        {
                            "match": {
                                "id": "sandwich"
                            },
                            "id": "lines"
                        }
                    ], axisBottom: {
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legendOffset: 32,
                        tickValues: ticks,
                    }, labelSkipWidth: 12, labelSkipHeight: 12, labelTextColor: "inherit:darker(1.6)", animate: true, motionStiffness: 90, motionDamping: 15 }))));
    }
}
exports.default = NewDocumentRateChart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3RG9jdW1lbnRSYXRlQ2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOZXdEb2N1bWVudFJhdGVDaGFydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJEQUFzRDtBQUN0RCxxRkFBZ0Y7QUFFaEYsNERBQW9DO0FBQ3BDLG1DQUF3QztBQUN4Qyx5REFBb0Q7QUFDcEQsdUNBQWtDO0FBRWxDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFxQixvQkFBcUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFN0UsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLFNBQVMsR0FBRyxxQ0FBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsTUFBTSxLQUFLLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEMsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxPQUFPO2dCQUNILElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtnQkFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2FBQ3ZCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FFSCw2QkFBSyxFQUFFLEVBQUMsNkJBQTZCLEVBQUMsU0FBUyxFQUFDLEtBQUs7WUFFakQsb0JBQUMsaUJBQU8sSUFBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7Z0JBRTVDLG9CQUFDLG1CQUFTLGdDQUFrQztnQkFFNUMsb0JBQUMsbUJBQWEsSUFDVixJQUFJLEVBQUUsSUFBSSxFQUNWLElBQUksRUFBRTt3QkFDRixPQUFPO3FCQUNWLEVBQ0QsT0FBTyxFQUFDLE1BQU0sRUFDZCxNQUFNLEVBQUU7d0JBQ0osR0FBRyxFQUFFLEVBQUU7d0JBQ1AsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsTUFBTSxFQUFFLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLEVBQUU7cUJBQ1gsRUFDRCxPQUFPLEVBQUUsR0FBRyxFQUNaLE1BQU0sRUFBQyxZQUFZLEVBQ25CLE9BQU8sRUFBQyxJQUFJLEVBQ1osSUFBSSxFQUFFO3dCQUNGOzRCQUNJLElBQUksRUFBRSxNQUFNOzRCQUNaLE1BQU0sRUFBRSxhQUFhOzRCQUNyQixZQUFZLEVBQUUsU0FBUzs0QkFDdkIsT0FBTyxFQUFFLFNBQVM7NEJBQ2xCLE1BQU0sRUFBRSxDQUFDOzRCQUNULFNBQVMsRUFBRSxDQUFDOzRCQUNaLFNBQVMsRUFBRSxJQUFJO3lCQUNsQjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsT0FBTzs0QkFDYixNQUFNLEVBQUUsY0FBYzs0QkFDdEIsWUFBWSxFQUFFLFNBQVM7NEJBQ3ZCLE9BQU8sRUFBRSxTQUFTOzRCQUNsQixVQUFVLEVBQUUsQ0FBQyxFQUFFOzRCQUNmLFdBQVcsRUFBRSxDQUFDOzRCQUNkLFNBQVMsRUFBRSxFQUFFO3lCQUNoQjtxQkFDSixFQUNELElBQUksRUFBRTt3QkFDRjs0QkFDSSxPQUFPLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLE9BQU87NkJBQ2hCOzRCQUNELElBQUksRUFBRSxNQUFNO3lCQUNmO3dCQUNEOzRCQUNJLE9BQU8sRUFBRTtnQ0FDTCxJQUFJLEVBQUUsVUFBVTs2QkFDbkI7NEJBQ0QsSUFBSSxFQUFFLE9BQU87eUJBQ2hCO3FCQUNKLEVBSUQsVUFBVSxFQUFFO3dCQUNSLFFBQVEsRUFBRSxDQUFDO3dCQUNYLFdBQVcsRUFBRSxDQUFDO3dCQUNkLFlBQVksRUFBRSxDQUFDO3dCQUNmLFlBQVksRUFBRSxFQUFFO3dCQUNoQixVQUFVLEVBQUUsS0FBSztxQkFDYixFQVNSLGNBQWMsRUFBRSxFQUFFLEVBQ2xCLGVBQWUsRUFBRSxFQUFFLEVBQ25CLGNBQWMsRUFBQyxxQkFBcUIsRUFDcEMsT0FBTyxFQUFFLElBQUksRUFDYixlQUFlLEVBQUUsRUFBRSxFQUNuQixhQUFhLEVBQUUsRUFBRSxHQUVuQixDQUVJLENBRVIsQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBbkhELHVDQW1IQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEb2NJbmZvU3RhdGlzdGljc30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL21ldGFkYXRhL0RvY0luZm9TdGF0aXN0aWNzJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IFN0YXRUaXRsZSBmcm9tICcuL1N0YXRUaXRsZSc7XG5pbXBvcnQge1Jlc3BvbnNpdmVCYXJ9IGZyb20gJ0BuaXZvL2Jhcic7XG5pbXBvcnQge0FycmF5c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9BcnJheXNcIjtcbmltcG9ydCB7U3RhdEJveH0gZnJvbSBcIi4vU3RhdEJveFwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0RvY3VtZW50UmF0ZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGRhdGVTdGF0cyA9IERvY0luZm9TdGF0aXN0aWNzLmNvbXB1dGVEb2N1bWVudHNBZGRlZFJhdGUodGhpcy5wcm9wcy5kb2NJbmZvcyk7XG5cbiAgICAgICAgY29uc3QgbGFiZWxzID0gZGF0ZVN0YXRzLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuZGF0ZSk7XG4gICAgICAgIGNvbnN0IHRpY2tzID0gQXJyYXlzLnNhbXBsZShsYWJlbHMsIDEwKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gZGF0ZVN0YXRzLm1hcChjdXJyZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogY3VycmVudC5kYXRlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBjdXJyZW50LnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwibmV3LWRvY3VtZW50cy1wZXItZGF5LWNoYXJ0XCIgY2xhc3NOYW1lPVwicC0xXCI+XG5cbiAgICAgICAgICAgICAgICA8U3RhdEJveCBzdHlsZT17e2hlaWdodDogJzMyNXB4Jywgd2lkdGg6ICcxMDAlJ319PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0VGl0bGU+TmV3IERvY3VtZW50cyBQZXIgRGF5PC9TdGF0VGl0bGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Qnk9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXswLjN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM9XCJjYXRlZ29yeTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yQnk9XCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiZG90c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwYXR0ZXJuRG90c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmRcIjogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMzhiY2IyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFnZ2VyXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImxpbmVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInBhdHRlcm5MaW5lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmRcIjogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZWVkMzEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRpb25cIjogLTQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmVXaWR0aFwiOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYWNpbmdcIjogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRjaFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiZnJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiZG90c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF0Y2hcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcInNhbmR3aWNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImxpbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyQ29sb3I9XCJpbmhlcml0OmRhcmtlcigxLjYpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF4aXNUb3A9bnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXhpc1JpZ2h0PW51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNCb3R0b209e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrU2l6ZTogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrUGFkZGluZzogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrUm90YXRpb246IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kT2Zmc2V0OiAzMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrVmFsdWVzOiB0aWNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgYW55fVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXhpc0xlZnQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInRpY2tTaXplXCI6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ0aWNrUGFkZGluZ1wiOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwidGlja1JvdGF0aW9uXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJsZWdlbmRcIjogXCJmb29kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJsZWdlbmRQb3NpdGlvblwiOiBcIm1pZGRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwibGVnZW5kT2Zmc2V0XCI6IC00MFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU2tpcFdpZHRoPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU2tpcEhlaWdodD17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHRDb2xvcj1cImluaGVyaXQ6ZGFya2VyKDEuNilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdGlvblN0aWZmbmVzcz17OTB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3Rpb25EYW1waW5nPXsxNX1cblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPC9TdGF0Qm94PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgZG9jSW5mb3M6IFJlYWRvbmx5QXJyYXk8SURvY0luZm8+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cblxuXG4iXX0=