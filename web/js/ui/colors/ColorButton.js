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
const Functions_1 = require("polar-shared/src/util/Functions");
const reactstrap_1 = require("reactstrap");
class ColorButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { props } = this;
        const createBackgroundColor = () => {
            switch (props.color) {
                case 'yellow':
                    return 'rgba(255,255,0)';
                case 'red':
                    return 'rgba(255,0,0)';
                case 'green':
                    return 'rgba(0,255,0)';
                default:
                    return props.color;
            }
        };
        const backgroundColor = createBackgroundColor();
        const onSelected = props.onSelected || Functions_1.NULL_FUNCTION;
        const size = props.size || '30px';
        const border = this.props.selected ?
            '1pt solid var(--primary)' :
            '1pt solid rgba(0, 0, 0, 0.1)';
        return React.createElement("div", { className: "ml-1 mr-1", style: {
                display: 'flex',
            } },
            React.createElement(reactstrap_1.Button, { size: "lg", id: props.id, type: "button", className: "p-0", title: "", "aria-label": "", color: "light", onClick: () => onSelected(props.color), style: {
                    backgroundColor,
                    border: border,
                    width: size,
                    height: size
                } }));
    }
}
exports.ColorButton = ColorButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb2xvckJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLCtEQUE4RDtBQUM5RCwyQ0FBa0M7QUFFbEMsTUFBYSxXQUFZLFNBQVEsS0FBSyxDQUFDLGFBQTZCO0lBRWhFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUM7UUFFckIsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLEVBQUU7WUFFL0IsUUFBUSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUVqQixLQUFLLFFBQVE7b0JBQ1QsT0FBTyxpQkFBaUIsQ0FBQztnQkFDN0IsS0FBSyxLQUFLO29CQUNOLE9BQU8sZUFBZSxDQUFDO2dCQUMzQixLQUFLLE9BQU87b0JBQ1IsT0FBTyxlQUFlLENBQUM7Z0JBQzNCO29CQUNJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQzthQUMxQjtRQUVMLENBQUMsQ0FBQztRQUVGLE1BQU0sZUFBZSxHQUFHLHFCQUFxQixFQUFFLENBQUM7UUFFaEQsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSx5QkFBYSxDQUFDO1FBRXJELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO1FBRWxDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEMsMEJBQTBCLENBQUMsQ0FBQztZQUM1Qiw4QkFBOEIsQ0FBQztRQUVuQyxPQUFPLDZCQUFLLFNBQVMsRUFBQyxXQUFXLEVBQ3JCLEtBQUssRUFBRTtnQkFDSCxPQUFPLEVBQUUsTUFBTTthQUNsQjtZQUNULG9CQUFDLG1CQUFNLElBQUMsSUFBSSxFQUFDLElBQUksRUFDTixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFDWixJQUFJLEVBQUMsUUFBUSxFQUNiLFNBQVMsRUFBRSxLQUFLLEVBQ2hCLEtBQUssRUFBQyxFQUFFLGdCQUNHLEVBQUUsRUFDYixLQUFLLEVBQUMsT0FBTyxFQUNiLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUN0QyxLQUFLLEVBQUU7b0JBQ0gsZUFBZTtvQkFDZixNQUFNLEVBQUUsTUFBTTtvQkFDZCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxNQUFNLEVBQUUsSUFBSTtpQkFDZixHQUVILENBQ1AsQ0FBQztJQUVYLENBQUM7Q0FFSjtBQTdERCxrQ0E2REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5leHBvcnQgY2xhc3MgQ29sb3JCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7cHJvcHN9ID0gdGhpcztcblxuICAgICAgICBjb25zdCBjcmVhdGVCYWNrZ3JvdW5kQ29sb3IgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocHJvcHMuY29sb3IpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3llbGxvdyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAncmdiYSgyNTUsMjU1LDApJztcbiAgICAgICAgICAgICAgICBjYXNlICdyZWQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3JnYmEoMjU1LDAsMCknO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdyZ2JhKDAsMjU1LDApJztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuY29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBjcmVhdGVCYWNrZ3JvdW5kQ29sb3IoKTtcblxuICAgICAgICBjb25zdCBvblNlbGVjdGVkID0gcHJvcHMub25TZWxlY3RlZCB8fCBOVUxMX0ZVTkNUSU9OO1xuXG4gICAgICAgIGNvbnN0IHNpemUgPSBwcm9wcy5zaXplIHx8ICczMHB4JztcblxuICAgICAgICBjb25zdCBib3JkZXIgPSB0aGlzLnByb3BzLnNlbGVjdGVkID9cbiAgICAgICAgICAgICcxcHQgc29saWQgdmFyKC0tcHJpbWFyeSknIDpcbiAgICAgICAgICAgICcxcHQgc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpJztcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtbC0xIG1yLTFcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInAtMFwifVxuICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3RlZChwcm9wcy5jb2xvcil9XG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGJvcmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplXG4gICAgICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+O1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGNvbG9yOiBSR0JDb2xvcjtcbiAgICByZWFkb25seSBzaXplPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICByZWFkb25seSBvblNlbGVjdGVkPzogKGNvbG9yOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG4vKipcbiAqIFJHQiBjb2xvciBpbiB0aGUgYSBDU1MgY29sb3IuXG4gKi9cbmV4cG9ydCB0eXBlIFJHQkNvbG9yID0gc3RyaW5nO1xuIl19