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
class ScrollIntoView extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.ref = React.createRef();
    }
    render() {
        return (React.createElement("div", { ref: this.ref }, this.props.children));
    }
    componentDidMount() {
        if (this.ref) {
            if (this.ref.current) {
                this.ref.current.scrollIntoView();
            }
            else {
                console.warn("No current");
            }
        }
        else {
            console.warn("No ref");
        }
    }
}
exports.ScrollIntoView = ScrollIntoView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nyb2xsSW50b1ZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTY3JvbGxJbnRvVmlldy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBSy9CLE1BQWEsY0FBZSxTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUluRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2xCLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFFTSxpQkFBaUI7UUFFcEIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBRVYsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDckM7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM5QjtTQUNKO2FBQU07WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztDQUVKO0FBbENELHdDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDM0NDE4NTYvcmVhY3Rqcy1ob3ctdG8tc2Nyb2xsLXRvLWFuLWVsZW1lbnRcbi8vIGh0dHA6Ly93d3cuYWxiZXJ0Z2FvLnh5ei8yMDE4LzA2LzA3L3Njcm9sbC1hLW5vdC1pbi12aWV3LWNvbXBvbmVudC1pbnRvLXRoZS12aWV3LXVzaW5nLXJlYWN0L1xuXG5leHBvcnQgY2xhc3MgU2Nyb2xsSW50b1ZpZXcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIHJlZjogUmVhY3QuUmVmT2JqZWN0PGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMucmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5yZWZ9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICAgIGlmICh0aGlzLnJlZikge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gY3VycmVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHJlZlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuXG5cbiJdfQ==