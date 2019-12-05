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
class Styles {
}
Styles.icon = {
    fontSize: '120px',
    margin: '20px',
};
Styles.overview = {
    fontSize: '18px',
    textAlign: 'justify',
    margin: '25px'
};
Styles.content = {
    maxWidth: '800px'
};
class CloudSyncConfiguredContent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { style: Styles.content },
            React.createElement("div", { className: "text-center" },
                React.createElement("i", { className: "fas fa-check-circle text-success", style: Styles.icon }),
                React.createElement("h1", null, "Cloud Sync Configured")),
            React.createElement("h2", { className: "intro", style: Styles.overview }, "Polar Cloud Sync is now setup!  Your documents will now be copied to the cloud in the background in realtime."),
            React.createElement("p", { className: "intro", style: Styles.overview }, "Any new documents you add (or annotate) will also be updated and synchronized in the background."),
            React.createElement("p", { className: "intro", style: Styles.overview },
                "Please remember that Polar Sync is ",
                React.createElement("b", null, "not"),
                " a replacement for a good backup strategy!  If you delete your files in Polar Sync they're gone forever - just as though you deleted them locally.")));
    }
}
exports.CloudSyncConfiguredContent = CloudSyncConfiguredContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRTeW5jQ29uZmlndXJlZENvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDbG91ZFN5bmNDb25maWd1cmVkQ29udGVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRy9CLE1BQU0sTUFBTTs7QUFFTSxXQUFJLEdBQXdCO0lBQ3RDLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLE1BQU0sRUFBRSxNQUFNO0NBSWpCLENBQUM7QUFFWSxlQUFRLEdBQXdCO0lBQzFDLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUM7QUFFWSxjQUFPLEdBQXdCO0lBQ3pDLFFBQVEsRUFBRSxPQUFPO0NBQ3BCLENBQUM7QUFJTixNQUFhLDBCQUEyQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUUzRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBRXRCLDZCQUFLLFNBQVMsRUFBQyxhQUFhO2dCQUV4QiwyQkFBRyxTQUFTLEVBQUMsa0NBQWtDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQU07Z0JBRXhFLHdEQUE4QixDQUU1QjtZQUVOLDRCQUFJLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLG9IQUd2QztZQUVMLDJCQUFHLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLHVHQUd2QztZQUVKLDJCQUFHLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFROztnQkFDSixxQ0FBVTtxS0FJN0MsQ0FFRixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUEzQ0QsZ0VBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIFN0eWxlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGljb246IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGZvbnRTaXplOiAnMTIwcHgnLFxuICAgICAgICBtYXJnaW46ICcyMHB4JyxcbiAgICAgICAgLy8gY29sb3I6ICcwMDdiZmYnXG4gICAgICAgIC8vIG1pbldpZHRoOiAnMzUwcHgnLFxuICAgICAgICAvLyB3aWR0aDogJzM1MHB4J1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIG92ZXJ2aWV3OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgICAgICAgbWFyZ2luOiAnMjVweCdcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBjb250ZW50OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBtYXhXaWR0aDogJzgwMHB4J1xuICAgIH07XG5cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkU3luY0NvbmZpZ3VyZWRDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuY29udGVudH0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LXN1Y2Nlc3NcIiBzdHlsZT17U3R5bGVzLmljb259PjwvaT5cblxuICAgICAgICAgICAgICAgICAgICA8aDE+Q2xvdWQgU3luYyBDb25maWd1cmVkPC9oMT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImludHJvXCIgc3R5bGU9e1N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgICAgICAgIFBvbGFyIENsb3VkIFN5bmMgaXMgbm93IHNldHVwISAgWW91ciBkb2N1bWVudHMgd2lsbCBub3cgYmVcbiAgICAgICAgICAgICAgICAgICAgY29waWVkIHRvIHRoZSBjbG91ZCBpbiB0aGUgYmFja2dyb3VuZCBpbiByZWFsdGltZS5cbiAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW50cm9cIiBzdHlsZT17U3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgQW55IG5ldyBkb2N1bWVudHMgeW91IGFkZCAob3IgYW5ub3RhdGUpIHdpbGwgYWxzbyBiZSB1cGRhdGVkXG4gICAgICAgICAgICAgICAgICAgIGFuZCBzeW5jaHJvbml6ZWQgaW4gdGhlIGJhY2tncm91bmQuXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW50cm9cIiBzdHlsZT17U3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHJlbWVtYmVyIHRoYXQgUG9sYXIgU3luYyBpcyA8Yj5ub3Q8L2I+IGEgcmVwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgZm9yIGEgZ29vZCBiYWNrdXAgc3RyYXRlZ3khICBJZiB5b3UgZGVsZXRlIHlvdXIgZmlsZXMgaW5cbiAgICAgICAgICAgICAgICAgICAgUG9sYXIgU3luYyB0aGV5J3JlIGdvbmUgZm9yZXZlciAtIGp1c3QgYXMgdGhvdWdoIHlvdSBkZWxldGVkXG4gICAgICAgICAgICAgICAgICAgIHRoZW0gbG9jYWxseS5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuXG5cbiJdfQ==