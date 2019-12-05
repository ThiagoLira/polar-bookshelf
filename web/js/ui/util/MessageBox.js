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
class MessageBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const width = this.props.width || 600;
        const position = this.props.position || 'bottom';
        const style = {
            position: 'fixed',
            zIndex: 999999999999999,
            width: '100%'
        };
        switch (position) {
            case "bottom":
                style.bottom = '25px';
                break;
            case "top":
                style.top = '25px';
                break;
        }
        return React.createElement("div", { style: style },
            React.createElement("div", { style: {
                    width: width + 'px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: 'var(--white)'
                }, className: "border rounded shadow bg-white p-3" }, this.props.children));
    }
}
exports.MessageBox = MessageBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZUJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lc3NhZ2VCb3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQU8vQixNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFM0QsWUFBWSxLQUFVLEVBQUUsT0FBWTtRQUNoQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7UUFFdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO1FBRWpELE1BQU0sS0FBSyxHQUF3QjtZQUMvQixRQUFRLEVBQUUsT0FBTztZQUNqQixNQUFNLEVBQUUsZUFBZTtZQUN2QixLQUFLLEVBQUUsTUFBTTtTQUNoQixDQUFDO1FBRUYsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLFFBQVE7Z0JBQ1QsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ25CLE1BQU07U0FDYjtRQUVELE9BQU8sNkJBQUssS0FBSyxFQUFFLEtBQUs7WUFFcEIsNkJBQUssS0FBSyxFQUFFO29CQUNILEtBQUssRUFBRyxLQUFLLEdBQUcsSUFBSTtvQkFDcEIsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFdBQVcsRUFBRSxNQUFNO29CQUNuQixlQUFlLEVBQUUsY0FBYztpQkFDbEMsRUFDRCxTQUFTLEVBQUMsb0NBQW9DLElBRTlDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUVsQixDQUVKLENBQUM7SUFFWCxDQUFDO0NBRUo7QUFqREQsZ0NBaURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtMZWZ0UmlnaHRTcGxpdH0gZnJvbSAnLi4vbGVmdF9yaWdodF9zcGxpdC9MZWZ0UmlnaHRTcGxpdCc7XG5pbXBvcnQge05hdn0gZnJvbSAnLi9OYXYnO1xuaW1wb3J0IHtTVVJWRVlfTElOS30gZnJvbSAnLi4vLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL3NwbGFzaC9zcGxhc2hlcy9zdXJ2ZXkvU3VydmV5JztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoIHx8IDYwMDtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucHJvcHMucG9zaXRpb24gfHwgJ2JvdHRvbSc7XG5cbiAgICAgICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHpJbmRleDogOTk5OTk5OTk5OTk5OTk5LFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5ib3R0b20gPSAnMjVweCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUudG9wID0gJzI1cHgnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlfT5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICB3aWR0aCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0td2hpdGUpJ1xuICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBzaGFkb3cgYmctd2hpdGUgcC0zXCI+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+O1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHdpZHRoPzogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHBvc2l0aW9uPzogJ2JvdHRvbScgfCAndG9wJztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==