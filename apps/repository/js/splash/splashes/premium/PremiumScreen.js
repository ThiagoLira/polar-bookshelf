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
const FixedNav_1 = require("../../../FixedNav");
const RepoHeader_1 = require("../../../repo_header/RepoHeader");
const PremiumContent2_1 = require("./PremiumContent2");
const RepoFooter_1 = require("../../../repo_footer/RepoFooter");
class PremiumScreen extends React.Component {
    render() {
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(FixedNav_1.FixedNavBody, { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-12 w-100 pt-4" },
                        React.createElement(PremiumContent2_1.PremiumContent2, { userInfo: this.props.userInfo, plan: this.props.plan })))),
            React.createElement(RepoFooter_1.RepoFooter, null)));
    }
}
exports.PremiumScreen = PremiumScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlbWl1bVNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByZW1pdW1TY3JlZW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixnREFBeUQ7QUFDekQsZ0VBQTJEO0FBRTNELHVEQUFrRDtBQUdsRCxnRUFBMkQ7QUFFM0QsTUFBYSxhQUFjLFNBQVEsS0FBSyxDQUFDLFNBQWlCO0lBRS9DLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsbUJBQVEsSUFBQyxFQUFFLEVBQUMsZ0JBQWdCO1lBRXpCO2dCQUVJLG9CQUFDLHVCQUFVLElBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxDQUVyRTtZQUVULG9CQUFDLHVCQUFZLElBQUMsU0FBUyxFQUFDLGlCQUFpQjtnQkFFckMsNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBRWhCLDZCQUFLLFNBQVMsRUFBQyxzQkFBc0I7d0JBQ2pDLG9CQUFDLGlDQUFlLElBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUN0RSxDQUNKLENBRUs7WUFFZixvQkFBQyx1QkFBVSxPQUFFLENBRU4sQ0FFZCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBaENELHNDQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rml4ZWROYXYsIEZpeGVkTmF2Qm9keX0gZnJvbSAnLi4vLi4vLi4vRml4ZWROYXYnO1xuaW1wb3J0IHtSZXBvSGVhZGVyfSBmcm9tICcuLi8uLi8uLi9yZXBvX2hlYWRlci9SZXBvSGVhZGVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtQcmVtaXVtQ29udGVudDJ9IGZyb20gJy4vUHJlbWl1bUNvbnRlbnQyJztcbmltcG9ydCB7VXNlckluZm99IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9hcHBzL3JlcG9zaXRvcnkvYXV0aF9oYW5kbGVyL0F1dGhIYW5kbGVyJztcbmltcG9ydCB7QWNjb3VudFBsYW59IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9hY2NvdW50cy9BY2NvdW50JztcbmltcG9ydCB7UmVwb0Zvb3Rlcn0gZnJvbSBcIi4uLy4uLy4uL3JlcG9fZm9vdGVyL1JlcG9Gb290ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFByZW1pdW1TY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxGaXhlZE5hdiBpZD1cImRvYy1yZXBvc2l0b3J5XCI+XG5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSZXBvSGVhZGVyIHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyPXt0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfS8+XG5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxGaXhlZE5hdkJvZHkgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgdy0xMDAgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVtaXVtQ29udGVudDIgdXNlckluZm89e3RoaXMucHJvcHMudXNlckluZm99IHBsYW49e3RoaXMucHJvcHMucGxhbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9GaXhlZE5hdkJvZHk+XG5cbiAgICAgICAgICAgICAgICA8UmVwb0Zvb3Rlci8+XG5cbiAgICAgICAgICAgIDwvRml4ZWROYXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbiAgICByZWFkb25seSBwbGFuOiBBY2NvdW50UGxhbjtcbiAgICByZWFkb25seSB1c2VySW5mbz86IFVzZXJJbmZvO1xufVxuXG4iXX0=