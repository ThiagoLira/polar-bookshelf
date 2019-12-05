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
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const PropertyTable_1 = require("./PropertyTable");
const Texts_1 = require("polar-shared/src/metadata/Texts");
class DocSidebar extends React.Component {
    render() {
        const { meta } = this.props;
        if (!meta) {
            return React.createElement("div", null);
        }
        return (React.createElement("div", { className: "p-1" },
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", { className: "ml-auto mr-auto" })),
            React.createElement("div", { className: "text-xl p-1" }, meta.title || 'Untitled'),
            React.createElement(DocSidebar.Subtitle, Object.assign({}, meta)),
            React.createElement(PropertyTable_1.PropertyTable, null,
                React.createElement(PropertyTable_1.PropertyTable.Text, { name: "Summary", value: Texts_1.Texts.toText(meta.summary) }),
                React.createElement(PropertyTable_1.PropertyTable.Text, { name: "Description", value: Texts_1.Texts.toText(meta.description) }),
                React.createElement(PropertyTable_1.PropertyTable.Row, { name: "Added", value: meta.added }),
                React.createElement(PropertyTable_1.PropertyTable.Row, { name: "Updated", value: meta.lastUpdated }),
                React.createElement(PropertyTable_1.PropertyTable.Row, { name: "URL", value: meta.url }),
                React.createElement(PropertyTable_1.PropertyTable.Row, { name: "DOI", value: meta.doi }),
                React.createElement(PropertyTable_1.PropertyTable.Row, { name: "PMID", value: meta.pmid }),
                React.createElement(PropertyTable_1.PropertyTable.Row, { name: "Year", value: meta.published ? ISODateTimeStrings_1.ISODateTimeStrings.toISOYear(meta.published) : undefined }),
                React.createElement(PropertyTable_1.PropertyTable.Row, { name: "Publisher", value: meta.publisher }),
                React.createElement(PropertyTable_1.PropertyTable.Row, { name: "Authors", value: (meta.authors || []).map(current => current.displayName) }))));
    }
}
exports.DocSidebar = DocSidebar;
DocSidebar.Subtitle = class extends React.Component {
    render() {
        if (!this.props.subtitle) {
            return React.createElement("div", null);
        }
        return (React.createElement("div", { className: "p-1 text-lg text-grey700" }, this.props.subtitle));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jU2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY1NpZGViYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQixxRkFBbUc7QUFDbkcsbURBQThDO0FBSzlDLDJEQUFzRDtBQWtCdEQsTUFBYSxVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQWlCO0lBRTVDLE1BQU07UUFFVCxNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUUsSUFBSSxFQUFFO1lBQ1IsT0FBTyxnQ0FBTSxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxDQUVILDZCQUFLLFNBQVMsRUFBQyxLQUFLO1lBRWhCLDZCQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUM7Z0JBQ3pCLDZCQUFLLFNBQVMsRUFBQyxpQkFBaUIsR0FLMUIsQ0FDSjtZQUVOLDZCQUFLLFNBQVMsRUFBQyxhQUFhLElBQ3ZCLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxDQUN2QjtZQUVOLG9CQUFDLFVBQVUsQ0FBQyxRQUFRLG9CQUFLLElBQUksRUFBRztZQUVoQyxvQkFBQyw2QkFBYTtnQkFFVixvQkFBQyw2QkFBYSxDQUFDLElBQUksSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBRSxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDdkUsb0JBQUMsNkJBQWEsQ0FBQyxJQUFJLElBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUUsYUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUc7Z0JBRS9FLG9CQUFDLDZCQUFhLENBQUMsR0FBRyxJQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ3BELG9CQUFDLDZCQUFhLENBQUMsR0FBRyxJQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUc7Z0JBQzVELG9CQUFDLDZCQUFhLENBQUMsR0FBRyxJQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUc7Z0JBQ2hELG9CQUFDLDZCQUFhLENBQUMsR0FBRyxJQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUc7Z0JBQ2hELG9CQUFDLDZCQUFhLENBQUMsR0FBRyxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ2xELG9CQUFDLDZCQUFhLENBQUMsR0FBRyxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVDQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRztnQkFDbEgsb0JBQUMsNkJBQWEsQ0FBQyxHQUFHLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDNUQsb0JBQUMsNkJBQWEsQ0FBQyxHQUFHLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUV4RixDQUVkLENBRVQsQ0FBQztJQUVOLENBQUM7O0FBakRMLGdDQXdFQztBQXBCaUIsbUJBQVEsR0FBRyxLQUFNLFNBQVEsS0FBSyxDQUFDLFNBQXVCO0lBRXpELE1BQU07UUFFVCxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDdkIsT0FBTyxnQ0FBTSxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxDQUVILDZCQUFLLFNBQVMsRUFBQywwQkFBMEIsSUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2xCLENBRVQsQ0FBQztJQUVOLENBQUM7Q0FFSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEb2NEZXRhaWx9IGZyb20gXCIuLi8uLi9qcy9tZXRhZGF0YS9Eb2NEZXRhaWxcIjtcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmcsIElTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzXCI7XG5pbXBvcnQge1Byb3BlcnR5VGFibGV9IGZyb20gXCIuL1Byb3BlcnR5VGFibGVcIjtcbmltcG9ydCB7VGFnfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3NcIjtcbmltcG9ydCB7RG9jVGh1bWJuYWlsfSBmcm9tIFwiLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL2Fubm90YXRpb25fcmVwby9tZXRhX3ZpZXcvRG9jVGh1bWJuYWlsXCI7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcn0gZnJvbSBcIi4uLy4uL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyXCI7XG5pbXBvcnQge0lUaHVtYm5haWx9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lUaHVtYm5haWxcIjtcbmltcG9ydCB7VGV4dHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1RleHRzXCI7XG5cbi8vIFRPRE86XG4vLyAgICAgLSBmb3JtYXQgdGhlIFVSTCB3aXRoIGFuIDxhPiBzbyB0aGF0IGl0J3MgY2xpY2thYmxlLi4uXG4vLyAtIG1ha2Ugc3VyZSBhbGwgbWV0YWRhdGEgZmllbGRzIGFyZSBjb3ZlcmVkXG4vLyAtIGFkZCBwbWlkIGFuZCBvdGhlciBpZGVudGlmaWVycyB0byBtb2RlbFxuLy8gLVxuLy8gLSBhZGQgZGVzY3JpcHRpb24gaGVyZS5cbi8vIC0gYWRkIGFic3RyYWN0XG4vLyAtIGFkZCBvcGVuIGJ1dHRvblxuLy8gLSB0YWdzIChpbXBvcnRhbnQgc28gSSBkb24ndCBoYXZlIHRvIHB1dCB0aGVzZSBpbiB0aGVcbi8vIC0gaXQgd291bGQgYmUgbmljZSB0byB0YWtlIGNvbXBvbmVudHMgYnV0IGhvdyBkbyBJIHVwZGF0ZSB0aGluZ3MgbGlrZSBhdXRob3JzLiAgSSB0aGluayBJIHdvdWxkIG5lZWQgYWRkLFxuLy8gICBkZWxldGUgbWV0aG9kcyBhdCB0aGUgdmVyeSBtaW5pbXVtLlxuXG5cbi8qKlxuICogVGhlIHNpZGViYXIgZm9yIHZpZXdpbmcgZG9jdW1lbnQgbWV0YWRhdGEuXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2NTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7bWV0YX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghIG1ldGEpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPERvY1RodW1ibmFpbCB0aHVtYm5haWxzPXttZXRhLnRodW1ibmFpbHN9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgIG1heFdpZHRoPXszMDB9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgIG1heEhlaWdodD17MzAwfSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI9e3RoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyfS8+Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICB7bWV0YS50aXRsZSB8fCAnVW50aXRsZWQnfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPERvY1NpZGViYXIuU3VidGl0bGUgey4uLm1ldGF9Lz5cblxuICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVRhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVRhYmxlLlRleHQgbmFtZT1cIlN1bW1hcnlcIiB2YWx1ZT17VGV4dHMudG9UZXh0KG1ldGEuc3VtbWFyeSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5VGFibGUuVGV4dCBuYW1lPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17VGV4dHMudG9UZXh0KG1ldGEuZGVzY3JpcHRpb24pfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5VGFibGUuUm93IG5hbWU9XCJBZGRlZFwiIHZhbHVlPXttZXRhLmFkZGVkfS8+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVRhYmxlLlJvdyBuYW1lPVwiVXBkYXRlZFwiIHZhbHVlPXttZXRhLmxhc3RVcGRhdGVkfS8+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVRhYmxlLlJvdyBuYW1lPVwiVVJMXCIgdmFsdWU9e21ldGEudXJsfS8+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVRhYmxlLlJvdyBuYW1lPVwiRE9JXCIgdmFsdWU9e21ldGEuZG9pfS8+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVRhYmxlLlJvdyBuYW1lPVwiUE1JRFwiIHZhbHVlPXttZXRhLnBtaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5VGFibGUuUm93IG5hbWU9XCJZZWFyXCIgdmFsdWU9e21ldGEucHVibGlzaGVkID8gSVNPRGF0ZVRpbWVTdHJpbmdzLnRvSVNPWWVhcihtZXRhLnB1Ymxpc2hlZCkgOiB1bmRlZmluZWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5VGFibGUuUm93IG5hbWU9XCJQdWJsaXNoZXJcIiB2YWx1ZT17bWV0YS5wdWJsaXNoZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5VGFibGUuUm93IG5hbWU9XCJBdXRob3JzXCIgdmFsdWU9eyhtZXRhLmF1dGhvcnMgfHwgW10pLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuZGlzcGxheU5hbWUpfS8+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxQcm9wZXJ0eVRhYmxlLlJvdyBuYW1lPVwiVGFnc1wiIHZhbHVlPXsobWV0YS50YWdzIHx8IFtdKS5tYXAoY3VycmVudCA9PiBjdXJyZW50LmxhYmVsKX0vPiovfVxuICAgICAgICAgICAgICAgIDwvUHJvcGVydHlUYWJsZT5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIHN0YXRpYyBTdWJ0aXRsZSA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERvY01ldGEsIGFueT4ge1xuXG4gICAgICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgICAgIGlmICghIHRoaXMucHJvcHMuc3VidGl0bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdi8+O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEgdGV4dC1sZyB0ZXh0LWdyZXk3MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvY01ldGEgZXh0ZW5kcyBEb2NEZXRhaWwge1xuICAgIHJlYWRvbmx5IGxhc3RVcGRhdGVkPzogSVNPRGF0ZVRpbWVTdHJpbmc7XG4gICAgcmVhZG9ubHkgdGh1bWJuYWlscz86IHsgW2lkOiBzdHJpbmddOiBJVGh1bWJuYWlsIH07XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgLy8gcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI7XG4gICAgcmVhZG9ubHkgbWV0YT86IERvY01ldGE7XG59XG4iXX0=