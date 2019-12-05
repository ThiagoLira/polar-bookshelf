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
const WhatsNewContent_1 = require("../splash2/whats_new/WhatsNewContent");
const FixedNav_1 = require("../FixedNav");
const RepoHeader_1 = require("../repo_header/RepoHeader");
class WhatsNewScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(FixedNav_1.FixedNavBody, { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-12 w-100 pt-2" },
                        React.createElement(WhatsNewContent_1.WhatsNewContent, null))))));
    }
}
exports.default = WhatsNewScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNOZXdTY3JlZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXaGF0c05ld1NjcmVlbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDBFQUFxRTtBQUNyRSwwQ0FBbUQ7QUFDbkQsMERBQXFEO0FBR3JELE1BQXFCLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFdkUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsbUJBQVEsSUFBQyxFQUFFLEVBQUMsZ0JBQWdCO1lBRXpCO2dCQUVJLG9CQUFDLHVCQUFVLElBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxDQUVyRTtZQUVULG9CQUFDLHVCQUFZLElBQUMsU0FBUyxFQUFDLGlCQUFpQjtnQkFFckMsNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBRWhCLDZCQUFLLFNBQVMsRUFBQyxzQkFBc0I7d0JBQ2pDLG9CQUFDLGlDQUFlLE9BQUUsQ0FDaEIsQ0FDSixDQUVLLENBRVIsQ0FFZCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBdENELGlDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7V2hhdHNOZXdDb250ZW50fSBmcm9tICcuLi9zcGxhc2gyL3doYXRzX25ldy9XaGF0c05ld0NvbnRlbnQnO1xuaW1wb3J0IHtGaXhlZE5hdiwgRml4ZWROYXZCb2R5fSBmcm9tICcuLi9GaXhlZE5hdic7XG5pbXBvcnQge1JlcG9IZWFkZXJ9IGZyb20gJy4uL3JlcG9faGVhZGVyL1JlcG9IZWFkZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdoYXRzTmV3U2NyZWVuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxGaXhlZE5hdiBpZD1cImRvYy1yZXBvc2l0b3J5XCI+XG5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSZXBvSGVhZGVyIHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyPXt0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfS8+XG5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxGaXhlZE5hdkJvZHkgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgdy0xMDAgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c05ld0NvbnRlbnQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9GaXhlZE5hdkJvZHk+XG5cbiAgICAgICAgICAgIDwvRml4ZWROYXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=