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
const RelativeMoment_1 = require("../../../../../web/js/ui/util/RelativeMoment");
const react_router_dom_1 = require("react-router-dom");
class ProfileHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { props } = this;
        const { docAnnotationProfileRecord } = props;
        const { profile } = this.props.docAnnotationProfileRecord;
        const docAnnotation = docAnnotationProfileRecord.value;
        if (profile) {
            return (React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", null, profile.name || profile.handle),
                React.createElement("div", { className: "text-grey200 ml-1" },
                    React.createElement(react_router_dom_1.Link, { to: { pathname: `/group/${this.props.groupName}/highlight/${docAnnotation.id}` } },
                        React.createElement(RelativeMoment_1.RelativeMoment, { datetime: docAnnotation.lastUpdated || docAnnotation.created })))));
        }
        else {
            return (React.createElement("div", null));
        }
    }
}
exports.ProfileHeader = ProfileHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZUhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb2ZpbGVIZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUcvQixpRkFBNEU7QUFDNUUsdURBQXNDO0FBR3RDLE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU5RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUMsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sRUFBQywwQkFBMEIsRUFBQyxHQUFHLEtBQUssQ0FBQztRQUMzQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztRQUN4RCxNQUFNLGFBQWEsR0FBRywwQkFBMEIsQ0FBQyxLQUFLLENBQUM7UUFFdkQsSUFBSSxPQUFPLEVBQUU7WUFFVCxPQUFPLENBRUgsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztnQkFFekIsaUNBQU0sT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFPO2dCQUUzQyw2QkFBSyxTQUFTLEVBQUMsbUJBQW1CO29CQUM5QixvQkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBRSxFQUFDLFFBQVEsRUFBRSxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxjQUFjLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBQzt3QkFDaEYsb0JBQUMsK0JBQWMsSUFBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLFdBQVcsSUFBSSxhQUFhLENBQUMsT0FBTyxHQUFHLENBQzVFLENBQ0wsQ0FFSixDQUVULENBQUM7U0FFTDthQUFNO1lBRUgsT0FBTyxDQUNILGdDQUFNLENBQ1QsQ0FBQztTQUVMO0lBRUwsQ0FBQztDQUVKO0FBekNELHNDQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UHJvZmlsZVJlY29yZH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Qcm9maWxlSm9pbnNcIjtcbmltcG9ydCB7QmFzZURvY0Fubm90YXRpb259IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvZG9jX2Fubm90YXRpb25zL0Jhc2VEb2NBbm5vdGF0aW9uXCI7XG5pbXBvcnQge1JlbGF0aXZlTW9tZW50fSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3V0aWwvUmVsYXRpdmVNb21lbnRcIjtcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge0dyb3VwTmFtZVN0cn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cHNcIjtcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7cHJvcHN9ID0gdGhpcztcbiAgICAgICAgY29uc3Qge2RvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkfSA9IHByb3BzO1xuICAgICAgICBjb25zdCB7cHJvZmlsZX0gPSB0aGlzLnByb3BzLmRvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkO1xuICAgICAgICBjb25zdCBkb2NBbm5vdGF0aW9uID0gZG9jQW5ub3RhdGlvblByb2ZpbGVSZWNvcmQudmFsdWU7XG5cbiAgICAgICAgaWYgKHByb2ZpbGUpIHtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9maWxlLm5hbWUgfHwgcHJvZmlsZS5oYW5kbGV9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyZXkyMDAgbWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e3twYXRobmFtZTogYC9ncm91cC8ke3RoaXMucHJvcHMuZ3JvdXBOYW1lfS9oaWdobGlnaHQvJHtkb2NBbm5vdGF0aW9uLmlkfWB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVsYXRpdmVNb21lbnQgZGF0ZXRpbWU9e2RvY0Fubm90YXRpb24ubGFzdFVwZGF0ZWQgfHwgZG9jQW5ub3RhdGlvbi5jcmVhdGVkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2Lz5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBncm91cE5hbWU6IEdyb3VwTmFtZVN0cjtcbiAgICByZWFkb25seSBkb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZDogUHJvZmlsZVJlY29yZDxCYXNlRG9jQW5ub3RhdGlvbj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==