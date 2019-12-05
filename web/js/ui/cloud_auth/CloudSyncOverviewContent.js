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
const Styles = {
    button: {
        paddingTop: '4px',
        color: 'red !important',
        fontSize: '15px'
    },
    icon: {
        fontSize: '120px',
        margin: '20px',
        color: '#007bff'
    },
    overview: {
        fontSize: '18px',
        textAlign: 'justify',
        margin: '25px'
    },
    features: {
        marginLeft: '25px'
    },
    price: {
        textAlign: 'center',
    },
    price_value: {
        fontSize: '40px',
        fontWeight: 'bold',
        lineHeight: '1em',
    },
    price_overview: {
        fontSize: '14px',
    },
    content: {
        maxWidth: '800px'
    }
};
class CloudSyncOverviewContent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { style: Styles.content },
            React.createElement("div", { className: "text-center" },
                React.createElement("i", { className: "fas fa-cloud-upload-alt", style: Styles.icon }),
                React.createElement("h1", null, "Polar Cloud Sync")),
            React.createElement("p", { className: "intro", style: Styles.overview },
                React.createElement("b", null, "Polar Cloud Sync"),
                " enables synchronization between multiple devices transparently running Polar."),
            React.createElement("ul", { style: Styles.features },
                React.createElement("li", null,
                    "Full sync of your data in ",
                    React.createElement("b", null, "realtime"),
                    ". Your files are immediately distributed to your other devices (MacOS, Windows, and Linux)."),
                React.createElement("li", null,
                    "Up to ",
                    React.createElement("b", null, "10 GB"),
                    " of storage for all your documents and annotations."),
                React.createElement("li", null, "Private access control. Your data is private and only accessible to your account."),
                React.createElement("li", null,
                    React.createElement("b", null, "Full offline access"),
                    " with sync upon reconnect."),
                React.createElement("li", null, "Your full document repository is still kept local which enables you to stop using cloud sync at any time."))));
    }
}
exports.CloudSyncOverviewContent = CloudSyncOverviewContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRTeW5jT3ZlcnZpZXdDb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xvdWRTeW5jT3ZlcnZpZXdDb250ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFJL0IsTUFBTSxNQUFNLEdBQWM7SUFFdEIsTUFBTSxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixRQUFRLEVBQUUsTUFBTTtLQUluQjtJQUVELElBQUksRUFBRTtRQUNGLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLFNBQVM7S0FHbkI7SUFFRCxRQUFRLEVBQUU7UUFDTixRQUFRLEVBQUUsTUFBTTtRQUNoQixTQUFTLEVBQUUsU0FBUztRQUNwQixNQUFNLEVBQUUsTUFBTTtLQUNqQjtJQUVELFFBQVEsRUFBRTtRQUNOLFVBQVUsRUFBRSxNQUFNO0tBQ3JCO0lBRUQsS0FBSyxFQUFFO1FBQ0gsU0FBUyxFQUFFLFFBQVE7S0FDdEI7SUFFRCxXQUFXLEVBQUU7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixVQUFVLEVBQUUsTUFBTTtRQUNsQixVQUFVLEVBQUUsS0FBSztLQUNwQjtJQUdELGNBQWMsRUFBRTtRQUNaLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0lBRUQsT0FBTyxFQUFFO1FBQ0wsUUFBUSxFQUFFLE9BQU87S0FDcEI7Q0FFSixDQUFDO0FBRUYsTUFBYSx3QkFBeUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFekUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUNILDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTztZQUV0Qiw2QkFBSyxTQUFTLEVBQUMsYUFBYTtnQkFFeEIsMkJBQUcsU0FBUyxFQUFDLHlCQUF5QixFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFNO2dCQUUvRCxtREFBeUIsQ0FFdkI7WUFFTiwyQkFBRyxTQUFTLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDdkMsa0RBQXVCO2lHQUV2QjtZQUVKLDRCQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFFdEI7O29CQUM4QiwwQ0FBZTtrSEFHeEM7Z0JBRUw7O29CQUNVLHVDQUFZOzBFQUVqQjtnQkFFTCxvSEFHSztnQkFFTDtvQkFDSSxxREFBMEI7aURBQ3pCO2dCQUVMLDRJQUdLLENBRUosQ0FFSCxDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUEzREQsNERBMkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uLy4uL3JlYWN0L0lTdHlsZU1hcCc7XG5cblxuY29uc3QgU3R5bGVzOiBJU3R5bGVNYXAgPSB7XG5cbiAgICBidXR0b246IHtcbiAgICAgICAgcGFkZGluZ1RvcDogJzRweCcsXG4gICAgICAgIGNvbG9yOiAncmVkICFpbXBvcnRhbnQnLFxuICAgICAgICBmb250U2l6ZTogJzE1cHgnXG5cbiAgICAgICAgLy8gbWluV2lkdGg6ICczNTBweCcsXG4gICAgICAgIC8vIHdpZHRoOiAnMzUwcHgnXG4gICAgfSxcblxuICAgIGljb246IHtcbiAgICAgICAgZm9udFNpemU6ICcxMjBweCcsXG4gICAgICAgIG1hcmdpbjogJzIwcHgnLFxuICAgICAgICBjb2xvcjogJyMwMDdiZmYnXG4gICAgICAgIC8vIG1pbldpZHRoOiAnMzUwcHgnLFxuICAgICAgICAvLyB3aWR0aDogJzM1MHB4J1xuICAgIH0sXG5cbiAgICBvdmVydmlldzoge1xuICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcbiAgICAgICAgbWFyZ2luOiAnMjVweCdcbiAgICB9LFxuXG4gICAgZmVhdHVyZXM6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogJzI1cHgnXG4gICAgfSxcblxuICAgIHByaWNlOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgfSxcblxuICAgIHByaWNlX3ZhbHVlOiB7XG4gICAgICAgIGZvbnRTaXplOiAnNDBweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgbGluZUhlaWdodDogJzFlbScsXG4gICAgfSxcblxuXG4gICAgcHJpY2Vfb3ZlcnZpZXc6IHtcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuXG4gICAgY29udGVudDoge1xuICAgICAgICBtYXhXaWR0aDogJzgwMHB4J1xuICAgIH1cblxufTtcblxuZXhwb3J0IGNsYXNzIENsb3VkU3luY092ZXJ2aWV3Q29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5jb250ZW50fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvdWQtdXBsb2FkLWFsdFwiIHN0eWxlPXtTdHlsZXMuaWNvbn0+PC9pPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Qb2xhciBDbG91ZCBTeW5jPC9oMT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW50cm9cIiBzdHlsZT17U3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgPGI+UG9sYXIgQ2xvdWQgU3luYzwvYj4gZW5hYmxlcyBzeW5jaHJvbml6YXRpb24gYmV0d2VlblxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZSBkZXZpY2VzIHRyYW5zcGFyZW50bHkgcnVubmluZyBQb2xhci5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e1N0eWxlcy5mZWF0dXJlc30+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgRnVsbCBzeW5jIG9mIHlvdXIgZGF0YSBpbiA8Yj5yZWFsdGltZTwvYj4uIFlvdXIgZmlsZXMgYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbW1lZGlhdGVseSBkaXN0cmlidXRlZCB0byB5b3VyIG90aGVyIGRldmljZXMgKE1hY09TLFxuICAgICAgICAgICAgICAgICAgICAgICAgV2luZG93cywgYW5kIExpbnV4KS5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBVcCB0byA8Yj4xMCBHQjwvYj4gb2Ygc3RvcmFnZSBmb3IgYWxsIHlvdXIgZG9jdW1lbnRzIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJpdmF0ZSBhY2Nlc3MgY29udHJvbC4gWW91ciBkYXRhIGlzIHByaXZhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvbmx5IGFjY2Vzc2libGUgdG8geW91ciBhY2NvdW50LlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkZ1bGwgb2ZmbGluZSBhY2Nlc3M8L2I+IHdpdGggc3luYyB1cG9uIHJlY29ubmVjdC5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGZ1bGwgZG9jdW1lbnQgcmVwb3NpdG9yeSBpcyBzdGlsbCBrZXB0IGxvY2FsIHdoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVzIHlvdSB0byBzdG9wIHVzaW5nIGNsb3VkIHN5bmMgYXQgYW55IHRpbWUuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cblxuXG4iXX0=