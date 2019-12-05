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
const react_moment_1 = __importDefault(require("react-moment"));
const FormattedTags_1 = require("../../FormattedTags");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Styles = {
    metaTable: {
        display: 'table'
    },
    metaTableRow: {
        display: 'table-row'
    },
    metaField: {
        display: 'table-cell',
        color: 'var(--secondary)',
        marginRight: '10px',
        verticalAlign: 'top'
    },
    metaValue: {
        paddingLeft: '5px',
        display: 'table-cell',
        verticalAlign: 'top'
    },
    annotationText: {
        paddingTop: '5px'
    },
    relativeTime: {
        marginLeft: '5px',
        color: 'var(--secondary)',
        display: 'inline'
    }
};
class DocPropTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { repoAnnotation } = this.props;
        return (React.createElement("div", { style: Styles.metaTable },
            React.createElement("div", { style: Styles.metaTableRow },
                React.createElement("div", { style: Styles.metaField }, "Created"),
                React.createElement("div", { style: Styles.metaValue },
                    React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", format: "MMM DD YYYY HH:mm A", filter: (value) => value.replace(/^an? /g, '1 ') }, repoAnnotation.created),
                    React.createElement("div", { style: Styles.relativeTime },
                        "(",
                        React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", fromNow: true }, repoAnnotation.created),
                        ")"))),
            React.createElement("div", { style: Styles.metaTableRow },
                React.createElement("div", { style: Styles.metaField }, "Tags"),
                React.createElement("div", { style: Styles.metaValue },
                    React.createElement(FormattedTags_1.FormattedTags, { tags: repoAnnotation.tags || {} }))),
            React.createElement("div", { style: Styles.metaTableRow },
                React.createElement("div", { style: Styles.metaField }, "Type"),
                React.createElement("div", { style: Styles.metaValue }, repoAnnotation.annotationType)),
            React.createElement("div", { style: Styles.metaTableRow },
                React.createElement("div", { style: Styles.metaField }, "Doc"),
                React.createElement("div", { style: Styles.metaValue },
                    React.createElement(Button_1.default, { onClick: () => this.props.onDocumentLoadRequested(repoAnnotation.docInfo), style: { whiteSpace: 'normal', textAlign: 'left' }, className: "p-0", size: "sm", color: "link" }, repoAnnotation.docInfo.title)))));
    }
}
exports.DocPropTable = DocPropTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jUHJvcFRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jUHJvcFRhYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsZ0VBQWtDO0FBQ2xDLHVEQUFrRDtBQUNsRCxtRUFBMkM7QUFJM0MsTUFBTSxNQUFNLEdBQWM7SUFFdEIsU0FBUyxFQUFFO1FBQ1AsT0FBTyxFQUFFLE9BQU87S0FDbkI7SUFFRCxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUUsV0FBVztLQUN2QjtJQUVELFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSxZQUFZO1FBRXJCLEtBQUssRUFBRSxrQkFBa0I7UUFDekIsV0FBVyxFQUFFLE1BQU07UUFDbkIsYUFBYSxFQUFFLEtBQUs7S0FDdkI7SUFFRCxTQUFTLEVBQUU7UUFDUCxXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsWUFBWTtRQUNyQixhQUFhLEVBQUUsS0FBSztLQUN2QjtJQUVELGNBQWMsRUFBRTtRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ3BCO0lBRUQsWUFBWSxFQUFFO1FBQ1YsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixPQUFPLEVBQUUsUUFBUTtLQUNwQjtDQUVKLENBQUM7QUFFRixNQUFhLFlBQWEsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFN0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxFQUFDLGNBQWMsRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFcEMsT0FBTyxDQUVILDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUztZQUV4Qiw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVk7Z0JBQzNCLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxjQUFlO2dCQUUzQyw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7b0JBRXhCLG9CQUFDLHNCQUFNLElBQUMsU0FBUyxFQUFFLElBQUksRUFDZixXQUFXLEVBQUMsb0JBQW9CLEVBQ2hDLE1BQU0sRUFBQyxxQkFBcUIsRUFDNUIsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFDbkQsY0FBYyxDQUFDLE9BQU8sQ0FDbEI7b0JBRVQsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZOzt3QkFJM0Isb0JBQUMsc0JBQU0sSUFBQyxTQUFTLEVBQUUsSUFBSSxFQUNmLFdBQVcsRUFBQyxvQkFBb0IsRUFDaEMsT0FBTyxVQUNWLGNBQWMsQ0FBQyxPQUFPLENBQ2xCOzRCQUlQLENBRUosQ0FFSjtZQUVOLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWTtnQkFFM0IsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLFdBQVk7Z0JBRXhDLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUztvQkFFeEIsb0JBQUMsNkJBQWEsSUFBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsQ0FFL0MsQ0FFSjtZQUVOLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWTtnQkFFM0IsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLFdBQVk7Z0JBRXhDLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxJQUV2QixjQUFjLENBQUMsY0FBYyxDQUU1QixDQUVKO1lBRU4sNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZO2dCQUUzQiw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsVUFBVztnQkFFdkMsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTO29CQUl4QixvQkFBQyxnQkFBTSxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFDekUsS0FBSyxFQUFFLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLEVBQ2hELFNBQVMsRUFBQyxLQUFLLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUMsTUFBTSxJQUVmLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUV4QixDQUVQLENBRUosQ0FFSixDQUVULENBQUM7SUFFTixDQUFDO0NBR0o7QUFsR0Qsb0NBa0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHtGb3JtYXR0ZWRUYWdzfSBmcm9tICcuLi8uLi9Gb3JtYXR0ZWRUYWdzJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NJbmZvXCI7XG5pbXBvcnQge0lEb2NBbm5vdGF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2Fubm90YXRpb25fc2lkZWJhci9Eb2NBbm5vdGF0aW9uXCI7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgbWV0YVRhYmxlOiB7XG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZSdcbiAgICB9LFxuXG4gICAgbWV0YVRhYmxlUm93OiB7XG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1yb3cnXG4gICAgfSxcblxuICAgIG1ldGFGaWVsZDoge1xuICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICAgIC8vIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS1zZWNvbmRhcnkpJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcbiAgICB9LFxuXG4gICAgbWV0YVZhbHVlOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnNXB4JyxcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgIH0sXG5cbiAgICBhbm5vdGF0aW9uVGV4dDoge1xuICAgICAgICBwYWRkaW5nVG9wOiAnNXB4J1xuICAgIH0sXG5cbiAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogJzVweCcsXG4gICAgICAgIGNvbG9yOiAndmFyKC0tc2Vjb25kYXJ5KScsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnXG4gICAgfVxuXG59O1xuXG5leHBvcnQgY2xhc3MgRG9jUHJvcFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7cmVwb0Fubm90YXRpb259ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWV0YVRhYmxlfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tZXRhVGFibGVSb3d9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWV0YUZpZWxkfT5DcmVhdGVkPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1ldGFWYWx1ZX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnQgd2l0aFRpdGxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUZvcm1hdD1cIkQgTU1NIFlZWVkgaGg6TU0gQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIk1NTSBERCBZWVlZIEhIOm1tIEFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9eyh2YWx1ZSkgPT4gdmFsdWUucmVwbGFjZSgvXmFuPyAvZywgJzEgJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvQW5ub3RhdGlvbi5jcmVhdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5yZWxhdGl2ZVRpbWV9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbWVudCB3aXRoVGl0bGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUZvcm1hdD1cIkQgTU1NIFlZWVkgaGg6TU0gQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tTm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVwb0Fubm90YXRpb24uY3JlYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vbWVudD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tZXRhVGFibGVSb3d9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tZXRhRmllbGR9PlRhZ3M8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWV0YVZhbHVlfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFRhZ3MgdGFncz17cmVwb0Fubm90YXRpb24udGFncyB8fCB7fX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWV0YVRhYmxlUm93fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWV0YUZpZWxkfT5UeXBlPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1ldGFWYWx1ZX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvQW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZX1cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1ldGFUYWJsZVJvd30+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1ldGFGaWVsZH0+RG9jPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1ldGFWYWx1ZX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRPRE86IG1ha2UgdGhpcyBpbnRvIGEgVGV4dExpbmsgY29tcG9uZW50Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkRvY3VtZW50TG9hZFJlcXVlc3RlZChyZXBvQW5ub3RhdGlvbi5kb2NJbmZvKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aGl0ZVNwYWNlOiAnbm9ybWFsJywgdGV4dEFsaWduOiAnbGVmdCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvQW5ub3RhdGlvbi5kb2NJbmZvLnRpdGxlfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHJlcG9Bbm5vdGF0aW9uOiBJRG9jQW5ub3RhdGlvbjtcbiAgICByZWFkb25seSBvbkRvY3VtZW50TG9hZFJlcXVlc3RlZDogKGRvY0luZm86IElEb2NJbmZvKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cblxuIl19