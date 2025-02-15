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
const HighlightCard_1 = require("./HighlightCard");
const LoadingProgress_1 = require("../../../../../web/js/ui/LoadingProgress");
const Pagination_1 = require("../../../../../web/js/ui/Pagination");
class HighlightsTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { groupHighlightsData } = this.props;
        if (!groupHighlightsData) {
            return React.createElement(LoadingProgress_1.LoadingProgress, null);
        }
        return (React.createElement(Pagination_1.Pagination, { results: groupHighlightsData.docAnnotationProfileRecords },
            React.createElement("div", { className: "border-bottom" }, groupHighlightsData.docAnnotationProfileRecords.map(docAnnotationProfileRecord => React.createElement(HighlightCard_1.HighlightCard, { persistenceLayerProvider: () => this.props.persistenceLayerManager.get(), key: docAnnotationProfileRecord.value.id, groupID: groupHighlightsData.group.id, groupName: groupHighlightsData.group.name, docAnnotationProfileRecord: docAnnotationProfileRecord })))));
    }
}
exports.HighlightsTable = HighlightsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlnaGxpZ2h0c1RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGlnaGxpZ2h0c1RhYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsbURBQThDO0FBRTlDLDhFQUF5RTtBQUN6RSxvRUFBK0Q7QUFFL0QsTUFBYSxlQUFnQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVoRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUMsbUJBQW1CLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpDLElBQUksQ0FBRSxtQkFBbUIsRUFBRTtZQUN2QixPQUFPLG9CQUFDLGlDQUFlLE9BQUUsQ0FBQztTQUM3QjtRQUNELE9BQU8sQ0FDSCxvQkFBQyx1QkFBVSxJQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQywyQkFBMkI7WUFDaEUsNkJBQUssU0FBUyxFQUFDLGVBQWUsSUFDekIsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FDOUUsb0JBQUMsNkJBQWEsSUFBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxFQUN4RSxHQUFHLEVBQUUsMEJBQTBCLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFDeEMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ3JDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSyxFQUMxQywwQkFBMEIsRUFBRSwwQkFBMEIsR0FBRyxDQUFDLENBQzNFLENBQ0csQ0FFaEIsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQTVCRCwwQ0E0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0dyb3VwSGlnaGxpZ2h0c0RhdGF9IGZyb20gXCIuL0dyb3VwSGlnaGxpZ2h0c0RhdGFcIjtcbmltcG9ydCB7SGlnaGxpZ2h0Q2FyZH0gZnJvbSBcIi4vSGlnaGxpZ2h0Q2FyZFwiO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXJcIjtcbmltcG9ydCB7TG9hZGluZ1Byb2dyZXNzfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL0xvYWRpbmdQcm9ncmVzc1wiO1xuaW1wb3J0IHtQYWdpbmF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL1BhZ2luYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHtncm91cEhpZ2hsaWdodHNEYXRhfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCEgZ3JvdXBIaWdobGlnaHRzRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nUHJvZ3Jlc3MvPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2luYXRpb24gcmVzdWx0cz17Z3JvdXBIaWdobGlnaHRzRGF0YS5kb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICB7Z3JvdXBIaWdobGlnaHRzRGF0YS5kb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZHMubWFwKGRvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0Q2FyZCBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI9eygpID0+IHRoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuZ2V0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkLnZhbHVlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJRD17Z3JvdXBIaWdobGlnaHRzRGF0YS5ncm91cC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZT17Z3JvdXBIaWdobGlnaHRzRGF0YS5ncm91cC5uYW1lIX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkPXtkb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZH0vPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhZ2luYXRpb24+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbiAgICByZWFkb25seSBncm91cEhpZ2hsaWdodHNEYXRhPzogR3JvdXBIaWdobGlnaHRzRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xufVxuIl19