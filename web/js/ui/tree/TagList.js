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
const TagListItem_1 = require("./TagListItem");
class Styles {
}
Styles.PARENT = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--white)',
};
class TagList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filter: "",
        };
    }
    render() {
        const tags = [...this.props.tags]
            .sort((a, b) => a.count - b.count)
            .reverse();
        return (React.createElement("div", { style: Styles.PARENT }, tags.map(tag => React.createElement(TagListItem_1.TagListItem, { key: tag.id, tag: tag }))));
    }
}
exports.TagList = TagList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRhZ0xpc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQiwrQ0FBMEM7QUFFMUMsTUFBTSxNQUFNOztBQUVNLGFBQU0sR0FBd0I7SUFDeEMsT0FBTyxFQUFFLE1BQU07SUFDZixhQUFhLEVBQUUsUUFBUTtJQUN2QixlQUFlLEVBQUUsY0FBYztDQUNsQyxDQUFDO0FBSU4sTUFBYSxPQUFRLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXhELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ2pDLE9BQU8sRUFBRSxDQUFDO1FBRWYsT0FBTyxDQUVILDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxJQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ1Ysb0JBQUMseUJBQVcsSUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FFMUMsQ0FFVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBOUJELDBCQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VGFnRGVzY3JpcHRvcn0gZnJvbSAnLi4vLi4vdGFncy9UYWdOb2RlJztcbmltcG9ydCB7VGFnTGlzdEl0ZW19IGZyb20gJy4vVGFnTGlzdEl0ZW0nO1xuXG5jbGFzcyBTdHlsZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBQQVJFTlQ6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXdoaXRlKScsXG4gICAgfTtcblxufVxuXG5leHBvcnQgY2xhc3MgVGFnTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZmlsdGVyOiBcIlwiLFxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB0YWdzID0gWy4uLnRoaXMucHJvcHMudGFnc11cbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmNvdW50IC0gYi5jb3VudClcbiAgICAgICAgICAgIC5yZXZlcnNlKCk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLlBBUkVOVH0+XG5cbiAgICAgICAgICAgICAgICB7dGFncy5tYXAodGFnID0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhZ0xpc3RJdGVtIGtleT17dGFnLmlkfSB0YWc9e3RhZ30vPil9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgdGFnczogUmVhZG9ubHlBcnJheTxUYWdEZXNjcmlwdG9yPjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==