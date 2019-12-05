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
class SplitLayoutRight extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let margins = {
            bottom: 'auto',
            top: undefined
        };
        if (this.props.verticalAlign === 'middle') {
            margins = {
                bottom: 'auto',
                top: 'auto'
            };
        }
        return (React.createElement("div", { className: "split-layout-right", style: {
                marginBottom: margins.bottom,
                marginTop: margins.top,
                marginLeft: 'auto',
                display: 'flex',
                justifyContent: 'flex-end',
                verticalAlign: this.props.verticalAlign || 'top'
            } }, this.props.children));
    }
}
exports.SplitLayoutRight = SplitLayoutRight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXRMYXlvdXRSaWdodC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwbGl0TGF5b3V0UmlnaHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQixNQUFhLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxhQUEwQjtJQUVsRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLE9BQU8sR0FBWTtZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxTQUFTO1NBQ2pCLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUN2QyxPQUFPLEdBQUc7Z0JBQ04sTUFBTSxFQUFFLE1BQU07Z0JBQ2QsR0FBRyxFQUFFLE1BQU07YUFDZCxDQUFDO1NBQ0w7UUFFRCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLG9CQUFvQixFQUM5QixLQUFLLEVBQUU7Z0JBRUgsWUFBWSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUM1QixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUc7Z0JBQ3RCLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixPQUFPLEVBQUUsTUFBTTtnQkFDZixjQUFjLEVBQUUsVUFBVTtnQkFFMUIsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUs7YUFDbkQsSUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFbEIsQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBekNELDRDQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIFNwbGl0TGF5b3V0UmlnaHQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IG1hcmdpbnM6IE1hcmdpbnMgPSB7XG4gICAgICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgICAgIHRvcDogdW5kZWZpbmVkXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmVydGljYWxBbGlnbiA9PT0gJ21pZGRsZScpIHtcbiAgICAgICAgICAgIG1hcmdpbnMgPSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgdG9wOiAnYXV0bydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LWxheW91dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogbWFyZ2lucy5ib3R0b20sXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1hcmdpbnMudG9wLFxuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogdGhpcy5wcm9wcy52ZXJ0aWNhbEFsaWduIHx8ICd0b3AnXG4gICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHZlcnRpY2FsQWxpZ24/OiAndG9wJyB8ICdtaWRkbGUnO1xufVxuXG5pbnRlcmZhY2UgTWFyZ2lucyB7XG4gICAgYm90dG9tOiAnYXV0bycgfCB1bmRlZmluZWQ7XG4gICAgdG9wOiAnYXV0bycgfCB1bmRlZmluZWQ7XG59XG4iXX0=