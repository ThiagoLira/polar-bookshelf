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
const TreeView_1 = require("./TreeView");
const TagFilter_1 = require("./TagFilter");
const NullCollapse_1 = require("../null_collapse/NullCollapse");
const TagNodes_1 = require("../../tags/TagNodes");
class Styles {
}
Styles.PARENT = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--white)',
};
Styles.BAR = {
    display: 'flex',
    marginBottom: '7px'
};
Styles.FILTER_INPUT = {
    height: 'auto',
    fontFamily: 'sans-serif',
    fontSize: '14px'
};
class TagTree extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onSelectedTags = this.onSelectedTags.bind(this);
        this.onFiltered = this.onFiltered.bind(this);
        this.onCreated = this.onCreated.bind(this);
        this.state = {
            filter: "",
        };
    }
    render() {
        const tags = filterTags(this.props.tags, this.state.filter);
        const createRoot = () => {
            switch (this.props.tagType) {
                case "folder":
                    const root = Object.assign(Object.assign({}, TagNodes_1.TagNodes.createFoldersRoot({ tags, type: 'folder' })), { title: this.props.rootTitle });
                    return root;
                case "regular":
                    return TagNodes_1.TagNodes.createTagsRoot(tags);
            }
        };
        const root = createRoot();
        return (React.createElement("div", { style: Styles.PARENT },
            React.createElement("div", { style: Styles.BAR },
                React.createElement("div", { style: { flexGrow: 1 } },
                    React.createElement(TagFilter_1.TagFilter, { tags: tags, onChange: tags => this.onSelectedTags(tags), disabled: this.props.filterDisabled })),
                React.createElement(NullCollapse_1.NullCollapse, { open: !this.props.noCreate })),
            React.createElement(TreeView_1.TreeView, { roots: [root], treeState: this.props.treeState })));
    }
    onCreated(path) {
        const tags = [...this.props.tags];
        tags.push({
            label: path,
            id: path,
            members: [],
            count: 0
        });
        this.setState(Object.assign({}, this.state));
    }
    onSelectedTags(selected) {
        this.props.treeState.tags = selected;
        this.props.treeState.dispatchSelected();
    }
    onFiltered(filter) {
        this.setState({ filter });
    }
}
exports.TagTree = TagTree;
function filterTags(tags, filter) {
    if (filter.trim() === '') {
        return tags;
    }
    filter = filter.toLocaleLowerCase();
    return tags.filter(tag => {
        const label = tag.label.toLocaleLowerCase();
        return label.indexOf(filter) !== -1;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRhZ1RyZWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQix5Q0FBMkM7QUFHM0MsMkNBQXNDO0FBQ3RDLGdFQUEyRDtBQUMzRCxrREFBc0Q7QUFHdEQsTUFBTSxNQUFNOztBQUVNLGFBQU0sR0FBd0I7SUFDeEMsT0FBTyxFQUFFLE1BQU07SUFDZixhQUFhLEVBQUUsUUFBUTtJQUN2QixlQUFlLEVBQUUsY0FBYztDQUNsQyxDQUFDO0FBRVksVUFBRyxHQUF3QjtJQUNyQyxPQUFPLEVBQUUsTUFBTTtJQUNmLFlBQVksRUFBRSxLQUFLO0NBQ3RCLENBQUM7QUFFWSxtQkFBWSxHQUF3QjtJQUM5QyxNQUFNLEVBQUUsTUFBTTtJQUNkLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFFBQVEsRUFBRSxNQUFNO0NBQ25CLENBQUM7QUFJTixNQUFhLE9BQVEsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFeEQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVELE1BQU0sVUFBVSxHQUFHLEdBQXlCLEVBQUU7WUFFMUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsS0FBSyxRQUFRO29CQUNULE1BQU0sSUFBSSxtQ0FDSCxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQyxLQUNyRCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQzlCLENBQUM7b0JBRUYsT0FBTyxJQUFJLENBQUM7Z0JBRWhCLEtBQUssU0FBUztvQkFDVixPQUFPLG1CQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBRTVDO1FBRUwsQ0FBQyxDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFFMUIsT0FBTyxDQUVILDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTTtZQUVyQiw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUc7Z0JBRWxCLDZCQUFLLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUM7b0JBQ3JCLG9CQUFDLHFCQUFTLElBQUMsSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUMzQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsQ0FDL0M7Z0JBRU4sb0JBQUMsMkJBQVksSUFBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FLekIsQ0FFYjtZQUVOLG9CQUFDLG1CQUFRLElBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBRTFDLENBRVQsQ0FBQztJQUVOLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBWTtRQUUxQixNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ04sS0FBSyxFQUFFLElBQUk7WUFDWCxFQUFFLEVBQUUsSUFBSTtZQUNSLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxtQkFBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbkMsQ0FBQztJQUVPLGNBQWMsQ0FBQyxRQUE0QjtRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxNQUFjO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FFSjtBQTdGRCwwQkE2RkM7QUFlRCxTQUFTLFVBQVUsQ0FBQyxJQUFrQyxFQUFFLE1BQWM7SUFFbEUsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM1QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUcmVlVmlldywgVFJvb3R9IGZyb20gJy4vVHJlZVZpZXcnO1xuaW1wb3J0IHtUYWdEZXNjcmlwdG9yfSBmcm9tICcuLi8uLi90YWdzL1RhZ05vZGUnO1xuaW1wb3J0IHtUYWd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzJztcbmltcG9ydCB7VGFnRmlsdGVyfSBmcm9tICcuL1RhZ0ZpbHRlcic7XG5pbXBvcnQge051bGxDb2xsYXBzZX0gZnJvbSAnLi4vbnVsbF9jb2xsYXBzZS9OdWxsQ29sbGFwc2UnO1xuaW1wb3J0IHtUYWdOb2RlcywgVGFnVHlwZX0gZnJvbSBcIi4uLy4uL3RhZ3MvVGFnTm9kZXNcIjtcbmltcG9ydCB7VHJlZVN0YXRlfSBmcm9tIFwiLi9UcmVlU3RhdGVcIjtcblxuY2xhc3MgU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgUEFSRU5UOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS13aGl0ZSknLFxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIEJBUjogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICc3cHgnXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgRklMVEVSX0lOUFVUOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxuICAgICAgICBmb250U2l6ZTogJzE0cHgnXG4gICAgfTtcblxufVxuXG5leHBvcnQgY2xhc3MgVGFnVHJlZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uU2VsZWN0ZWRUYWdzID0gdGhpcy5vblNlbGVjdGVkVGFncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmlsdGVyZWQgPSB0aGlzLm9uRmlsdGVyZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNyZWF0ZWQgPSB0aGlzLm9uQ3JlYXRlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHRhZ3MgPSBmaWx0ZXJUYWdzKHRoaXMucHJvcHMudGFncywgdGhpcy5zdGF0ZS5maWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVJvb3QgPSAoKTogVFJvb3Q8VGFnRGVzY3JpcHRvcj4gPT4ge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMudGFnVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmb2xkZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vdDogVFJvb3Q8VGFnRGVzY3JpcHRvcj4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5UYWdOb2Rlcy5jcmVhdGVGb2xkZXJzUm9vdCh7dGFncywgdHlwZTogJ2ZvbGRlcid9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnJvb3RUaXRsZVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290O1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlZ3VsYXJcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRhZ05vZGVzLmNyZWF0ZVRhZ3NSb290KHRhZ3MpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdCgpO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5QQVJFTlR9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLkJBUn0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhHcm93OiAxfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnRmlsdGVyIHRhZ3M9e3RhZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0YWdzID0+IHRoaXMub25TZWxlY3RlZFRhZ3ModGFncyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmZpbHRlckRpc2FibGVkfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxOdWxsQ29sbGFwc2Ugb3Blbj17IXRoaXMucHJvcHMubm9DcmVhdGV9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VGFnQ3JlYXRlQnV0dG9uIHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkfSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICBvbkNyZWF0ZWQ9e3BhdGggPT4gdGhpcy5vbkNyZWF0ZWQocGF0aCl9Lz4qL31cblxuICAgICAgICAgICAgICAgICAgICA8L051bGxDb2xsYXBzZT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPFRyZWVWaWV3IHJvb3RzPXtbcm9vdF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVTdGF0ZT17dGhpcy5wcm9wcy50cmVlU3RhdGV9Lz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DcmVhdGVkKHBhdGg6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IHRhZ3MgPSBbLi4udGhpcy5wcm9wcy50YWdzXTtcblxuICAgICAgICB0YWdzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IHBhdGgsXG4gICAgICAgICAgICBpZDogcGF0aCxcbiAgICAgICAgICAgIG1lbWJlcnM6IFtdLFxuICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZX0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNlbGVjdGVkVGFncyhzZWxlY3RlZDogUmVhZG9ubHlBcnJheTxUYWc+KSB7XG4gICAgICAgIHRoaXMucHJvcHMudHJlZVN0YXRlLnRhZ3MgPSBzZWxlY3RlZDtcbiAgICAgICAgdGhpcy5wcm9wcy50cmVlU3RhdGUuZGlzcGF0Y2hTZWxlY3RlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25GaWx0ZXJlZChmaWx0ZXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJ9KTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgdHJlZVN0YXRlOiBUcmVlU3RhdGU8VGFnRGVzY3JpcHRvcj47XG4gICAgcmVhZG9ubHkgdGFnczogUmVhZG9ubHlBcnJheTxUYWdEZXNjcmlwdG9yPjtcbiAgICByZWFkb25seSB0YWdUeXBlOiBUYWdUeXBlO1xuICAgIHJlYWRvbmx5IG5vQ3JlYXRlPzogYm9vbGVhbjtcbiAgICByZWFkb25seSByb290VGl0bGU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZmlsdGVyRGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBmaWx0ZXI6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZmlsdGVyVGFncyh0YWdzOiBSZWFkb25seUFycmF5PFRhZ0Rlc2NyaXB0b3I+LCBmaWx0ZXI6IHN0cmluZyk6IFJlYWRvbmx5QXJyYXk8VGFnRGVzY3JpcHRvcj4ge1xuXG4gICAgaWYgKGZpbHRlci50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cblxuICAgIGZpbHRlciA9IGZpbHRlci50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRhZ3MuZmlsdGVyKHRhZyA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGFnLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsYWJlbC5pbmRleE9mKGZpbHRlcikgIT09IC0xO1xuICAgIH0pO1xuXG59XG4iXX0=