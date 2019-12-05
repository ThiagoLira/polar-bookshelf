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
class TagListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { style: { display: 'flex' } },
            React.createElement("div", null, this.props.tag.label),
            React.createElement("div", { className: "ml-auto" }, this.props.tag.count)));
    }
    onSelectedTags(selected) {
    }
}
exports.TagListItem = TagListItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnTGlzdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYWdMaXN0SXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBSS9CLE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU1RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztZQUV6QixpQ0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQU87WUFFakMsNkJBQUssU0FBUyxFQUFDLFNBQVMsSUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUNuQixDQUVKLENBRVQsQ0FBQztJQUVOLENBQUM7SUFFTyxjQUFjLENBQUMsUUFBNEI7SUFFbkQsQ0FBQztDQUVKO0FBNUJELGtDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VGFnRGVzY3JpcHRvcn0gZnJvbSAnLi4vLi4vdGFncy9UYWdOb2RlJztcbmltcG9ydCB7VGFnfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFRhZ0xpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuXG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5wcm9wcy50YWcubGFiZWx9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGFnLmNvdW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNlbGVjdGVkVGFncyhzZWxlY3RlZDogUmVhZG9ubHlBcnJheTxUYWc+KSB7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgdGFnOiBUYWdEZXNjcmlwdG9yO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19